import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div style={{ marginTop: 32 }}>
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;