import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DashboardRedirect from "./components/DashboardRedirect/DashboardRedirect";
import SignUp from "./screens/sing-up/SignUpForm";
import SignInForm from "./screens/sign-in/SignInForm";
import PayslipForm from "./screens/payment-slip/PayslipInputForm";
import Dashboard from "./screens/dashboard";

function App() {
  return (
    <>
      <Router>
        <DashboardRedirect />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/payslip" element={<PayslipForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
