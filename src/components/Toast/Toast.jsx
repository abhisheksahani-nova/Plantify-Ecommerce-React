import React from "react";
import "./toast.css";
import { useToast } from "../../context/toast-context";

function Toast() {
  const { toastData } = useToast();

  let color, icon;

  switch (toastData.type) {
    case "success":
      color = "alert-success";
      icon = "fa-solid fa-circle-check alert-icon";
      break;

    case "error":
      color = "alert-error";
      icon = "fa-solid fa-circle-exclamation";
      break;

    default:
      break;
  }

  return (
    <div className={`alert alert-custom-style ${color}`}>
      <div className="alert-content">
        <i className={icon} />
        <h4 className="bold-normal"> {toastData.message} </h4>
      </div>
    </div>
  );
}

export default Toast;
