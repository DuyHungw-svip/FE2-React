import { useEffect, useState } from 'react';

function useAuthen() {
  const [isLogin, setIsLogin] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !!localStorage.getItem('Token');
  });

  useEffect(() => {
    const token = localStorage.getItem('Token');
    setIsLogin(!!token);
  }, []);

  return isLogin;
}

export default useAuthen;
