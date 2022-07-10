import React, { useState } from "react";
import { Navbar } from "../../components";
import "./address.css";
import { useTheme } from "../../context/theme-context";
import { useNavigate } from "react-router-dom";

function Address() {
  const { addressInfo, setAddressInfo } = useTheme();
  const [isDisabled, setIsDisabled] = useState(true);
  const [addressData, setAddressData] = useState({
    country: "",
    name: "",
    mobileNo: "",
    pincode: "",
    address1: "",
    address2: "",
    landmark: "",
    city: "",
    state: "",
  });

  const navigate = useNavigate();

  function handleSaveAddress() {
    const {
      country,
      name,
      mobileNo,
      pincode,
      address1,
      address2,
      landmark,
      city,
      state,
    } = addressData;

    if (
      country &&
      name &&
      mobileNo &&
      pincode &&
      address1 &&
      address2 &&
      landmark &&
      city &&
      state
    ) {
      setAddressInfo({ ...addressData });
      setIsDisabled(true);
      const isPlaceOrder = localStorage.getItem("isPlaceOrder");

      if (isPlaceOrder) {
        navigate("/checkout");
      }
    }
  }

  return (
    <div>
      <Navbar />

      <section className="d-flex justify-cont-center address-form-container">
        <div className="address-form-child-container">
          <div className="d-flex justify-content-between align-items-top">
            <h2 className="address-title">
              Add address <i class="fa-solid fa-location-dot location-icon"></i>
            </h2>

            <button
              className="btn cta-btn btn-small"
              onClick={() => setIsDisabled(false)}
            >
              <i class="fa-solid fa-pencil pencil-icon"></i> Edit
            </button>
          </div>

          <div className="address-input-container">
            <label className="address-label">Country/Region</label>
            <input
              className="address-input"
              type="text"
              disabled={isDisabled}
              value={isDisabled ? addressInfo.country : addressData.country}
              onChange={(e) =>
                setAddressData({ ...addressData, country: e.target.value })
              }
            />
          </div>

          <div className="address-input-container">
            <label className="address-label">Full name</label>
            <input
              className="address-input"
              type="text"
              disabled={isDisabled}
              value={isDisabled ? addressInfo.name : addressData.name}
              onChange={(e) =>
                setAddressData({ ...addressData, name: e.target.value })
              }
            />
          </div>

          <div className="address-input-container">
            <label className="address-label">Mobile number</label>
            <input
              className="address-input"
              type="text"
              disabled={isDisabled}
              value={isDisabled ? addressInfo.mobileNo : addressData.mobileNo}
              onChange={(e) =>
                setAddressData({ ...addressData, mobileNo: e.target.value })
              }
            />
          </div>

          <div className="address-input-container">
            <label className="address-label">Pincode</label>
            <input
              className="address-input"
              type="text"
              disabled={isDisabled}
              value={isDisabled ? addressInfo.pincode : addressData.pincode}
              onChange={(e) =>
                setAddressData({ ...addressData, pincode: e.target.value })
              }
            />
          </div>

          <div className="address-input-container">
            <label className="address-label">
              Flat, House no., Building, Company, Apartment
            </label>
            <input
              className="address-input"
              type="text"
              disabled={isDisabled}
              value={isDisabled ? addressInfo.address1 : addressData.address1}
              onChange={(e) =>
                setAddressData({ ...addressData, address1: e.target.value })
              }
            />
          </div>

          <div className="address-input-container">
            <label className="address-label">
              Area, Street, Sector, Village
            </label>
            <input
              className="address-input"
              type="text"
              disabled={isDisabled}
              value={isDisabled ? addressInfo.address2 : addressData.address2}
              onChange={(e) =>
                setAddressData({ ...addressData, address2: e.target.value })
              }
            />
          </div>

          <div className="address-input-container">
            <label className="address-label">Landmark</label>
            <input
              className="address-input"
              type="text"
              disabled={isDisabled}
              value={isDisabled ? addressInfo.landmark : addressData.landmark}
              onChange={(e) =>
                setAddressData({ ...addressData, landmark: e.target.value })
              }
            />
          </div>

          <div className="d-flex gap-3 mb-2">
            <div className="d-flex f-direction-col">
              <label className="address-label">Town/City</label>
              <input
                className="address-input"
                type="text"
                disabled={isDisabled}
                value={isDisabled ? addressInfo.city : addressData.city}
                onChange={(e) =>
                  setAddressData({ ...addressData, city: e.target.value })
                }
              />
            </div>

            <div className="d-flex f-direction-col">
              <label className="address-label">State</label>
              <input
                className="address-input"
                type="text"
                disabled={isDisabled}
                value={isDisabled ? addressInfo.state : addressData.state}
                onChange={(e) =>
                  setAddressData({ ...addressData, state: e.target.value })
                }
              />
            </div>
          </div>

          <button
            className="btn cta-btn mb-2"
            onClick={() => handleSaveAddress()}
          >
            Use this address
          </button>
        </div>
      </section>
    </div>
  );
}

export default Address;
