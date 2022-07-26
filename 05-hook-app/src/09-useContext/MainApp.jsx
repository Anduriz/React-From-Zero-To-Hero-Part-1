import { Routes, Route, Link, Navigate } from "react-router-dom";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { AboutPage } from "./AboutPage";
import { Navbar } from "./Navbar";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
  return (
    <UserProvider>
        <h1>Main App</h1>
        <hr />
        <Navbar />
        <hr />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Si se ingresa una ruta que no esta definida: */}
          {/* <Route path="/*" element={<LoginPage />} /> */}
          <Route path="/*" element={<Navigate to="/about"/>} />

        </Routes>
    </UserProvider>
  )
}
