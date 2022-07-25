import { useState, createContext, useContext } from "react";

const ToastContext = createContext();

const ToastProvider = ({ children }) => {
  const [toastData, setToastData] = useState({
    show: false,
    type: "",
    message: "",
  });

  return (
    <ToastContext.Provider value={{ toastData, setToastData }}>
      {children}
    </ToastContext.Provider>
  );
};

const useToast = () => useContext(ToastContext);

export { useToast, ToastProvider };
