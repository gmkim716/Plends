import LogInPage from "pages/LogInPage/LogInPage";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage/AboutPage";
import MainPage from "./pages/MainPage/MainPage";
import ManagePlanPage from "./pages/ManagePlanPage/ManagePlanPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import MyPage from "./pages/MyPage/MyPage";
import UserInfoUpdatePage from "./pages/UserInfoUpdatePage/UserInfoUpdatePage";
import GoPlanPage from "pages/GoPlanPage/GoPlanPage";
import PasswordChangePage from "pages/PasswordChangePage/PasswordChangePage";
import UserWithdrawPage from "pages/UserWithdrawPage/UserWithdrawPage";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<MainPage />} />
        <Route
          path="/plans"
          exact
          element={<ManagePlanPage />}
        />
        <Route
          path="/about"
          exact
          element={<AboutPage />}
        />
        <Route
          path="/regist"
          exact
          element={<RegisterPage />}
        />
        <Route
          path="/login"
          exact
          element={<LogInPage />}
        />
        <Route path="/mypage" exact element={<MyPage />} />
        <Route
          path="/userinfo/update"
          exact
          element={<UserInfoUpdatePage />}
        />
        <Route
          path="/password/change"
          exact
          element={<PasswordChangePage />}
        />
        <Route
          path="/user/withdraw"
          exact
          element={<UserWithdrawPage />}
        />
        <Route
          // path 를 따로 정의하지 않으면 모든 상황에 렌더링됨
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
        <Route
          path="/goplan"
          exact
          element={<GoPlanPage />}
        />
      </Routes>
    </div>
  );
};

export default App;
