import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  addProductService,
  deleteCart,
  getCart,
  updateCart,
  editProductService,
} from '../service/cart';

const initialState = {
  carts: [],
  loading: false,
  error: null,
};

export const fetchCartById = createAsyncThunk(
  'cart/fetchCartById',
  async (userId, thunkAPI) => {
    try {
      const products = await getCart(userId);
      return products;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addProductById = createAsyncThunk(
  'cart/addProductById',
  async ({ userId, product }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const existingCart = state.cart.carts;

      if (existingCart && existingCart.length > 0) {
        // Giỏ hàng đã tồn tại, sử dụng updateCart để thêm/cập nhật sản phẩm
        const existingProduct = existingCart.find((p) => p.id === product.id);
        let updatedCart;

        if (existingProduct) {
          // Sản phẩm đã có trong giỏ hàng, cập nhật số lượng
          updatedCart = existingCart.map((p) =>
            p.id === product.id
              ? { ...p, quantity: p.quantity + (product.quantity || 1) }
              : p
          );
        } else {
          // Sản phẩm chưa có trong giỏ hàng, thêm vào
          updatedCart = [...existingCart, product];
        }

        await updateCart(userId, updatedCart);
        return updatedCart;
      } else {
        // Giỏ hàng chưa tồn tại, sử dụng addProductService để tạo mới
        // **Quan trọng: Thay đổi ở đây**
        await addProductService(userId, [product]); // Gửi một mảng chứa sản phẩm
        return [product]; // Trả về một mảng chứa sản phẩm
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editProductById = createAsyncThunk(
  'cart/editProductById',
  async ({ userId, product, replaceQuantity = false }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const existingCart = state.cart.carts;

      if (existingCart && existingCart.length > 0) {
        // Giỏ hàng đã tồn tại, tìm sản phẩm cần chỉnh sửa
        const updatedCart = existingCart.map((p) =>
          p.id === product.id
            ? {
                ...p,
                quantity: replaceQuantity
                  ? product.quantity
                  : p.quantity + (product.quantity || 1),
              }
            : p
        );

        await editProductService(userId, updatedCart);
        return updatedCart;
      } else {
        // Giỏ hàng chưa tồn tại (trường hợp này có thể không xảy ra), thêm sản phẩm
        // ** Quan trọng: Thay đổi ở đây **
        await addProductService(userId, [product]); // Gửi một mảng chứa sản phẩm
        return [product]; // Trả về một mảng chứa sản phẩm
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeProductById = createAsyncThunk(
  'cart/removeProductById',
  async ({ userId, productId }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const existingCart = state.cart.carts;

      if (existingCart && existingCart.length > 0) {
        const updatedCart = existingCart.filter((p) => p.id !== productId);

        if (updatedCart.length > 0) {
          await updateCart(userId, updatedCart);
          return updatedCart;
        } else {
          await deleteCart(userId);
          return [];
        }
      } else {
        return []; // Already empty
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const clearCartByUserId = createAsyncThunk(
  'cart/clearCartByUserId',
  async (userId, thunkAPI) => {
    try {
      // Gọi API để xóa giỏ hàng dựa trên userId
      await deleteCart(userId);

      // Trả về một mảng rỗng để cập nhật state giỏ hàng trong Redux
      return [];
    } catch (error) {
      // Nếu có lỗi, trả về thông báo lỗi
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCartById.fulfilled, (state, action) => {
        state.loading = false;
        state.carts = action.payload;
      })
      .addCase(fetchCartById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addProductById.fulfilled, (state, action) => {
        state.carts = action.payload;
      })
      .addCase(editProductById.fulfilled, (state, action) => {
        state.carts = action.payload;
      })
      .addCase(removeProductById.fulfilled, (state, action) => {
        state.carts = action.payload;
      });
    builder.addCase(clearCartByUserId.fulfilled, (state) => {
      state.carts = []; // Cập nhật state giỏ hàng thành rỗng
    });
  },
});

export default cartSlice.reducer;
