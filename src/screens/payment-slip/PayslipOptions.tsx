import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
import { PayslipOptionBtn } from './PaymentSlip.style';
import EmployeeList from '../employee/EmployeeList';

export default function PayslipOptions() {
    const navigate = useNavigate()
    const paySlipAction= true;

    return (
        <Stack direction="column" justifyContent="center" alignItems="center" paddingTop={4}>
            <PayslipOptionBtn>
                {/* <Button variant="contained" onClick={() => { navigate("/payslip/create") }}>Create Payslip</Button> */}
                <Button variant="contained" onClick={() => { navigate("/payslip/generate") }}>Download Payslip</Button>
            </PayslipOptionBtn>
            <EmployeeList paySlipAction={paySlipAction}/>
        </Stack>
    );
}