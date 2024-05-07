import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
import { PayslipOptionBtn } from '../payment-slip/PaymentSlip.style';

export default function EmployeeOptions() {
    const navigate = useNavigate()

    return (
        <Stack spacing={3} width="100vw" direction="row" display="flex" justifyContent="center" alignItems="center">
            <PayslipOptionBtn>
                <Button variant="contained" onClick={() => { navigate("/employee/create") }}>Create Employee</Button>
                <Button variant="contained" onClick={() => { navigate("/employee/list") }}>View Employees</Button>
            </PayslipOptionBtn>
        </Stack>
    );
}