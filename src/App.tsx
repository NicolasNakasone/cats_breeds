import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box, Link } from "@mui/material";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route
        path={"/"}
        element={
          <div className="App">
            <div>
              <a href="https://vitejs.dev" target="_blank">
                <img src="/vite.svg" className="logo" alt="Vite logo" />
              </a>
              <a href="https://reactjs.org" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </div>
            <a href="/test">to test</a>
            <h1>Vite + React</h1>
            <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button>
              <p>
                Edit <code>src/App.tsx</code> and save to test HMR
              </p>
            </div>
            <p className="read-the-docs">
              Click on the Vite and React logos to learn more
            </p>
          </div>
        }
      />
      <Route
        path="test"
        element={
          <div>
            <Box>a</Box>
            <Link href={"/"}>to home</Link>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
