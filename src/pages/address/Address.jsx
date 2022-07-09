import React from "react";
import { Navbar } from "../../components";
import "./address.css";
import { useNavigate, NavLink } from "react-router-dom";

const userProfileLinks = ["Profile", " Addresses", "Orders", "Setting"];

function Address() {
  return (
    <div>
      <Navbar />

      <ul className="categories_navTabs_list mb-2">
        {userProfileLinks.map((link, index) => {
          return (
            <li key={index}>
              <NavLink
                to="/profile"
                className="categories_navLink categories_navLink1"
              >
                {link}
              </NavLink>
            </li>
          );
        })}
      </ul>

      <section className="d-flex justify-cont-center address-form-container">
        <div className="address-form-child-container">
          <h2 className="address-title">Add a new address</h2>

          <div className="address-input-container">
            <label className="address-label">Country/Region</label>
            <input className="address-input" type="text" />
          </div>

          <div className="address-input-container">
            <label className="address-label">Full name</label>
            <input className="address-input" type="text" />
          </div>

          <div className="address-input-container">
            <label className="address-label">Mobile number</label>
            <input className="address-input" type="text" />
          </div>

          <div className="address-input-container">
            <label className="address-label">Pincode</label>
            <input className="address-input" type="text" />
          </div>

          <div className="address-input-container">
            <label className="address-label">
              Flat, House no., Building, Company, Apartment
            </label>
            <input className="address-input" type="text" />
          </div>

          <div className="address-input-container">
            <label className="address-label">
              Area, Street, Sector, Village
            </label>
            <input className="address-input" type="text" />
          </div>

          <div className="address-input-container">
            <label className="address-label">Landmark</label>
            <input className="address-input" type="text" />
          </div>

          <div className="d-flex gap-3">
            <div className="d-flex f-direction-col">
              <label className="address-label">Town/City</label>
              <input className="address-input" type="text" />
            </div>

            <div className="d-flex f-direction-col">
              <label className="address-label">State</label>
              <input className="address-input" type="text" />
            </div>
          </div>

          <div className="d-flex address-input-row-container">
            <input type="checkbox" />
            <label className="address-label">
              Make this my default address
            </label>
          </div>

          <button className="btn cta-btn mb-2">Save address</button>
        </div>
      </section>
    </div>
  );
}

export default Address;
