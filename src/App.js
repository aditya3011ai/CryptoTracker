import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Coin from "./pages/coin/Coin";
import { useState , createContext } from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
export const AppContext = createContext();

function App() {
  const [currency ,setCurrency] = useState("usd");
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <AppContext.Provider value={{currency,setCurrency}}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/coin/:id" element={<Coin />} />
            </Routes>
          </Router>
        </AppContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
