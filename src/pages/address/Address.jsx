import React, { useEffect, useState } from "react";
import { Navbar } from "../../components";
import "./address.css";
import { useTheme } from "../../context/theme-context";
import { useNavigate } from "react-router-dom";

const userProfileLinks = ["Profile", "Address", "Orders"];

const addressInitialState = {
  country: "",
  name: "",
  mobileNo: "",
  pincode: "",
  address1: "",
  address2: "",
  landmark: "",
  city: "",
  state: "",
};

const addressDefaultState = {
  country: "India",
  name: "Abhishek Sahani",
  mobileNo: "9000000000",
  pincode: "567890",
  address1: "Near Ramsen hotel, Mall Rd",
  address2: "Siyal chowk, Manali, Himachal Pradesh",
  landmark: "Old manali mall road",
  city: "Manali",
  state: "Himachal Pradesh",
};

function Address() {
  const { addressInfo, setAddressInfo, guestAddress } = useTheme();
  const [isDisabled, setIsDisabled] = useState(true);
  const [addressData, setAddressData] = useState({ ...addressInfo });

  const navigate = useNavigate();
  const isGuest = localStorage.getItem("isGuest");

  useEffect(() => {
    if (isGuest == "abhi") {
      guestAddress();
    }
  }, []);

  useEffect(() => {
    setAddressData({ ...addressInfo });
  }, [addressInfo]);

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

    const isPlaceOrder = localStorage.getItem("isPlaceOrder");

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
      setAddressInfo({ ...addressData, isAddress: true });
      setIsDisabled(true);

      if (isPlaceOrder) {
        navigate("/checkout");
      }
    } else if (
      addressInfo.country &&
      addressInfo.name &&
      addressInfo.mobileNo &&
      addressInfo.pincode &&
      addressInfo.address1 &&
      addressInfo.address2 &&
      addressInfo.landmark &&
      addressInfo.city &&
      addressInfo.state
    ) {
      if (isPlaceOrder) {
        navigate("/checkout");
      }
    }
  }

  function handleDeleteAddress() {
    setAddressData(addressInitialState);

    setAddressInfo({ ...addressInitialState, isAddress: false });
    setIsDisabled(true);
  }

  function handleTabClick(link) {
    if (link == "Profile") {
      navigate("/profile");
    } else if (link == "Address") {
      navigate("/address");
    } else if (link == "Orders") {
      navigate("/orders");
    }
  }

  return (
    <div>
      <Navbar />

      <ul className="categories_navTabs_list mb-1 mt-1">
        {userProfileLinks.map((link, index) => {
          return (
            <li
              className="categories_navLink categories_navLink1 cursor-pointer"
              key={index}
              onClick={() => handleTabClick(link)}
            >
              {link}
            </li>
          );
        })}
      </ul>

      <section className="d-flex justify-cont-center address-form-container">
        <div className="address-form-child-container">
          <div className="d-flex justify-content-between align-items-top">
            <h2 className="address-title">
              Add address{" "}
              <i className="fa-solid fa-location-dot location-icon"></i>
            </h2>

            <div>
              {addressInfo.isAddress && (
                <button
                  className="btn cta-btn btn-small"
                  onClick={() => handleDeleteAddress()}
                >
                  <i className="fa-solid fa-trash pencil-icon"></i> Delete
                </button>
              )}

              <button
                className="btn cta-btn btn-small ml-1"
                onClick={() => setIsDisabled(false)}
              >
                <i className="fa-solid fa-pencil pencil-icon"></i> Edit
              </button>
            </div>
          </div>

          <div className="address-input-container">
            <label className="address-label">Country/Region</label>
            <input
              className={`address-input ${
                isDisabled ? "address-input-disabled" : "address-input-enabled"
              }`}
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
              className={`address-input ${
                isDisabled ? "address-input-disabled" : "address-input-enabled"
              }`}
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
              className={`address-input ${
                isDisabled ? "address-input-disabled" : "address-input-enabled"
              }`}
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
              className={`address-input ${
                isDisabled ? "address-input-disabled" : "address-input-enabled"
              }`}
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
              className={`address-input ${
                isDisabled ? "address-input-disabled" : "address-input-enabled"
              }`}
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
              className={`address-input ${
                isDisabled ? "address-input-disabled" : "address-input-enabled"
              }`}
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
              className={`address-input ${
                isDisabled ? "address-input-disabled" : "address-input-enabled"
              }`}
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
                className={`address-input ${
                  isDisabled
                    ? "address-input-disabled"
                    : "address-input-enabled"
                }`}
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
                className={`address-input ${
                  isDisabled
                    ? "address-input-disabled"
                    : "address-input-enabled"
                }`}
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
