/* global describe, test, expect */

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import PayslipForm from '../screens/payment-slip/PayslipInputForm';

describe('PayslipForm component', () => {
  // Test case 1: Check if all form fields render and form submits when valid
  test('renders all form fields and submits when valid', () => {
    render(<PayslipForm />);

    // Fill in form fields
    fireEvent.change(screen.getByLabelText(/month/i), { target: { value: 'January' } });
    fireEvent.change(screen.getByLabelText(/year/i), { target: { value: '2024' } });
    fireEvent.change(screen.getByLabelText(/Personal No/i), { target: { value: '123456' } });
    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Bank/i), { target: { value: 'ABC Bank' } });
    fireEvent.change(screen.getByLabelText(/DOJ/i), { target: { value: '2023-01-01' } });
    fireEvent.change(screen.getByLabelText(/LOP Days/i), { target: { value: '2' } });
    fireEvent.change(screen.getByLabelText(/PF No./i), { target: { value: 'PF1234' } });
    fireEvent.change(screen.getByLabelText(/STD Days/i), { target: { value: '20' } });
    fireEvent.change(screen.getByLabelText(/Location/i), { target: { value: 'City' } });
    fireEvent.change(screen.getByLabelText(/Worked Days/i), { target: { value: '25' } });
    fireEvent.change(screen.getByLabelText(/Department/i), { target: { value: 'IT' } });
    fireEvent.change(screen.getByLabelText(/Designation/i), { target: { value: 'Software Engineer' } });
    fireEvent.change(screen.getByLabelText(/Basic/i), { target: { value: '5000' } });
    fireEvent.change(screen.getByLabelText(/House Rent Allowance/i), { target: { value: '2000' } });
    fireEvent.change(screen.getByLabelText(/Professional Tax/i), { target: { value: '100' } });
    fireEvent.change(screen.getByLabelText(/Special Allowance/i), { target: { value: '1500' } });
    fireEvent.change(screen.getByLabelText(/Income Tax/i), { target: { value: '300' } });
    fireEvent.change(screen.getByLabelText(/Conveyance/i), { target: { value: '500' } });
    fireEvent.change(screen.getByLabelText(/Additional Special Allowance/i), { target: { value: '1000' } });
    fireEvent.change(screen.getByLabelText(/On-call\/Shift Allowance/i), { target: { value: '300' } });
    fireEvent.change(screen.getByLabelText(/Stat Bonus/i), { target: { value: '200' } });
    fireEvent.change(screen.getByLabelText(/Gross Earning/i), { target: { value: '7000' } });
    fireEvent.change(screen.getByLabelText(/Gross Deduction/i), { target: { value: '500' } });
    fireEvent.change(screen.getByLabelText(/Net Pay/i), { target: { value: '6500' } });

    // Submit button should be enabled now
    expect(screen.getByText('Generate Payslip')).toBeEnabled();
  });

  // Test case 2: Check if submit button is disabled when form is invalid
  test('disables submit button when form is invalid', () => {
    // Render the PayslipForm component
    render(<PayslipForm onSubmit={() => { }} />);

    // Submit button should initially be disabled
    expect(screen.getByText('Generate Payslip')).toBeDisabled();

    // Fill in all required fields
    fireEvent.change(screen.getByLabelText(/month/i), { target: { value: 'January' } });
    fireEvent.change(screen.getByLabelText(/year/i), { target: { value: '2024' } });
    fireEvent.change(screen.getByLabelText(/Personal No/i), { target: { value: '123456' } });
    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Bank/i), { target: { value: 'ABC Bank' } });
    fireEvent.change(screen.getByLabelText(/DOJ/i), { target: { value: '2022-01-01' } });
    fireEvent.change(screen.getByLabelText(/LOP Days/i), { target: { value: '2' } });
    fireEvent.change(screen.getByLabelText(/PF No./i), { target: { value: 'PF123456' } });
    fireEvent.change(screen.getByLabelText(/STD Days/i), { target: { value: '20' } });
    fireEvent.change(screen.getByLabelText(/Location/i), { target: { value: 'New York' } });
    fireEvent.change(screen.getByLabelText(/Worked Days/i), { target: { value: '22' } });
    fireEvent.change(screen.getByLabelText(/Department/i), { target: { value: 'Engineering' } });
    fireEvent.change(screen.getByLabelText(/Designation/i), { target: { value: 'Software Engineer' } });
    fireEvent.change(screen.getByLabelText(/Basic/i), { target: { value: '5000' } });
    fireEvent.change(screen.getByLabelText(/House Rent Allowance/i), { target: { value: '2000' } });
    fireEvent.change(screen.getByLabelText(/Professional Tax/i), { target: { value: '100' } });
    fireEvent.change(screen.getByLabelText(/Special Allowance/i), { target: { value: '1500' } });
    fireEvent.change(screen.getByLabelText(/Income Tax/i), { target: { value: '500' } });
    fireEvent.change(screen.getByLabelText(/Conveyance/i), { target: { value: '300' } });
    fireEvent.change(screen.getByLabelText(/Additional Special Allowance/i), { target: { value: '1000' } });
    fireEvent.change(screen.getByLabelText(/On-call\/Shift Allowance/i), { target: { value: '200' } });
    fireEvent.change(screen.getByLabelText(/Stat Bonus/i), { target: { value: '2000' } });
    fireEvent.change(screen.getByLabelText(/Gross Earning/i), { target: { value: '10000' } });
    fireEvent.change(screen.getByLabelText(/Gross Deduction/i), { target: { value: '1000' } });
    fireEvent.change(screen.getByLabelText(/Net Pay/i), { target: { value: '9000' } });

    // Submit button should be enabled now
    expect(screen.getByText('Generate Payslip')).toBeEnabled();
  });
});
