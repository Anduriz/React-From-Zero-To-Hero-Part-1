import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { PrivateRoute } from "./PrivateRoute.";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <>
    <Routes>
      {/* Rutas publicas */}
      <Route path="/login" element={
        <PublicRoute>
          <LoginPage />
          {/* <LoginPage /> is not the same as = <Route path="/login" element={<LoginPage />} /> */}
        </PublicRoute>
      }/>
      {/* Rutas privadas */}
      <Route path="/*" element={
        <PrivateRoute>
          <HeroesRoutes />
        </PrivateRoute>
      }/>
    </Routes>
    </>
  );
};

// Before the public and private routes
// import { Routes, Route } from "react-router-dom";
// import { LoginPage } from "../auth/pages/LoginPage";
// import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";

// export const AppRouter = () => {
//   return (
//     <>
//     <Routes>
//      <Route path="/login" element={<LoginPage />} />
//      <Route path="/*" element={<HeroesRoutes />} />
//     </Routes>
//     </>
//   );
// };