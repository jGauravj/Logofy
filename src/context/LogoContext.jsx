// "use client";

// import { createContext, useContext, useState } from "react";

// const LogoContext = createContext();

// export const LogoProvider = ({ children }) => {
//   const [formData, setFormData] = useState({});

//   const onHandleInputChange = (field, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//     console.log(formData);
//   };

//   return (
//     <LogoContext.Provider
//       value={{ formData, setFormData, onHandleInputChange }}
//     >
//       {children}
//     </LogoContext.Provider>
//   );
// };

// export const useLogo = useContext(LogoContext);
