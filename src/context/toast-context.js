import { useState, createContext, useContext, useEffect } from "react";

const ToastContext = createContext();

const ToastProvider = ({ children }) => {
  const [toastData, setToastData] = useState({
    showToast: false,
    toastType: "",
    toastMesaage: "",
  });

  return (
    <ToastContext.Provider value={{ toastData, setToastData }}>
      {children}
    </ToastContext.Provider>
  );
};

const useToast = () => useContext(ToastContext);

export { useToast, ToastProvider };
