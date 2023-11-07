import "./App.css";
import AppRoutes from "./Routes/router";
import { AuthProvider } from "./context/userLogin";

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
