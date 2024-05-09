import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardRedirect from "./components/DashboardRedirect/DashboardRedirect";
import SignUp from "./screens/sing-up/SignUpForm";
import SignInForm from "./screens/sign-in/SignInForm";
import Dashboard from "./screens/dashboard";
import CreatePayslip from "./screens/payment-slip/CreatePayslip";
import PayslipForm from "./screens/payment-slip/PayslipGenerate";
import PayslipOptions from "./screens/payment-slip/PayslipOptions";
import CreateEmployee from "./screens/employee/CreateEmployee";
import EmployeeOptions from "./screens/employee/EmployeeOptions";
import EmployeeList from "./screens/employee/EmployeeList";
import EditEmployee from "./screens/employee/EditEmployee";

function App() {
  return (
    <>
      <Router>
        <DashboardRedirect />
        {/* <Dashboard/> */}
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/payslip/generate" element={<PayslipForm />} />
          <Route path="/payslip/create" element={<CreatePayslip />} />
          <Route path="/payslip/create/:id" element={<CreatePayslip />} />
          <Route path="/payslip/options" element={<PayslipOptions />} />
          <Route path="/employee/create" element={<CreateEmployee />} />
          <Route path="/employee/options" element={<EmployeeOptions />} />
          <Route path="/employee/list" element={<EmployeeList />} />
          <Route path="/employee/update/:id" element={<EditEmployee />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
