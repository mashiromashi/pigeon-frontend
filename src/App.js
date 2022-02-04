import { ThemeProvider } from "@mui/system";
import { useEffect } from "react";
import MainRoute from "router/MainRoute";
import { theme } from "theme/theme";
import { storage } from "util/storage";
import { useDispatch } from "react-redux";
import { logout } from "applications/slice/loginSlice";
import { useNavigate } from "react-router-dom";
import { axiosGloabl } from "axios-global";
import "./styles/styles.css"

const App = () => {
  const loginUser = storage.getUserEntity();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (loginUser?.accessToken) {
    axiosGloabl.defaults.headers.common["Authentication"] = "Bearer " + loginUser?.accessToken;
  }


  useEffect(() => {
    if (loginUser?.accessToken) {
      setTimeout(() => {
        dispatch(logout());
        navigate("/login");
      }, 72000 * 1000);
    }
  }, [loginUser?.accessToken, dispatch, navigate]);

  return (
    <ThemeProvider theme={theme}>
      <MainRoute />
    </ThemeProvider>
  );
};

export default App;
