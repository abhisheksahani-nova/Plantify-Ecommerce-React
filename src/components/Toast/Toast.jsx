import React from "react";
import "./toast.css";
import { useToast } from "../../context/toast-context";

function Toast() {
  const { toastData, setToastData } = useToast();

  return (
    <div
      className={`alert alert-custom-style ${
        toastData.toastType == "success" ? "alert-success" : "alert-error"
      }`}
    >
      <div className="alert-content">
        <i
          className={`${
            toastData.toastType == "success"
              ? "fa-solid fa-circle-check alert-icon"
              : "fa-solid fa-circle-exclamation"
          }`}
        />
        <h3 className="bold-normal"> {toastData.toastMesaage} </h3>
      </div>
    </div>
  );
}

export default Toast;
