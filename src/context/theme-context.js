import { useState, createContext, useContext, useEffect } from "react";

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

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [addressInfo, setAddressInfo] = useState({ isAddress: false });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    setAddressInfo({ ...addressInfo, ...addressDefaultState });
  }, []);

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, addressInfo, setAddressInfo }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
