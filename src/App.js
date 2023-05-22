import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  LoginPage,
  RegisterPage,
  HomePage,
  ExplorePage,
  ActivationPage,
  EventDetailPage,
  OrderPage,
  OrderDetailPage,
} from "./Routes/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import Store from "./Redux/store";
import { loadUser } from "./Redux/actions/userAction";

function App() {
  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);
  return (
    <>
      <Routes>
        <Route element={<RegisterPage></RegisterPage>} path="/register"></Route>
        <Route element={<LoginPage></LoginPage>} path="/login"></Route>
        <Route element={<HomePage></HomePage>} path="/"></Route>
        <Route element={<ExplorePage></ExplorePage>} path="/explore"></Route>
        <Route
          element={<EventDetailPage></EventDetailPage>}
          path="/event/:slug"
        ></Route>
        <Route
          element={<ActivationPage></ActivationPage>}
          path="/activation/:activation_token"
        ></Route>
        <Route
          element={<OrderPage></OrderPage>}
          path="/order/:slug/package"
        ></Route>
        <Route
          element={<OrderDetailPage></OrderDetailPage>}
          path="/order-detail"
        ></Route>
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
