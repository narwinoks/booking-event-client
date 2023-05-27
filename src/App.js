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
  TestingPage,
  UserProfilePage,
  UserOrderDetailPage,
} from "./Routes/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import Store from "./Redux/store";
import { loadUser } from "./Redux/actions/userAction";
import { useSelector } from "react-redux";
import Protected from "./utils/PrivateRoute";

function App() {
  const { user, isAuthenticated } = useSelector((state) => state.user);
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

        {/* private route */}
        <Route
          path="/profile"
          element={
            <Protected isSignedIn={isAuthenticated}>
              <UserProfilePage />
            </Protected>
          }
        />
        <Route
          path="/user-order/:id"
          element={
            <Protected isSignedIn={isAuthenticated}>
              <UserOrderDetailPage />
            </Protected>
          }
        />
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
