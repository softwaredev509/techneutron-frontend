export interface PaymentSlip {
  id: string;
  amount: number;
  recipient: string;
  date: string;
  createdAt: string;
}

export interface CreatePaymentSlipRequest {
  amount: number;
  recipient: string;
  date: string;
}

export interface UpdatePaymentSlipRequest {
  amount: number;
  recipient: string;
  date: string;
}

export interface DeletePaymentSlipResponse {
  message: string;
}

export interface CreatePayslipResponse {
  createdUserData?: {
    employee_id: number;
    total_working_days: number;
    present_working_days: number;
    period: string;
    basic_salary: number;
    house_rent_allowance: number;
    special_allowance: number;
    conveyance: number;
    additional_special_allowance: number;
    on_call_shift_allowance: number;
    stat_bonus: number;
    provident_fund: number;
    professional_tax: number;
    income_tax: number;
    gross_earning: number;
    gross_deduction: number;
    net_pay: number;
    overtime_hours: number;
    overtime_pay: number;
    bonus: number;
    commission: number;
    reimbursement: number;
    other_allowances: number;
    deduction_details: string;
    remarks: string;
    employee_rating: number;
    performance_bonus: number;
    shift_allowance: number;
    medical_allowance: number;
    leave_balance: number;
    loan_deduction: number;
    insurance_premium: number;
    attendance_bonus: number;
    travel_allowance: number;
    uniform_allowance: number;
    training_allowance: number;
    other_deductions: number;
    bonus_details: string;
    incentive: number;
    tax_deduction_at_source: number;
    salary_advance: number;
    loan_balance: number;
    payment_mode: string;
    payment_date: string;
  };
  message?: string;
  Status?: string;
  code?: string | number;
  status?: string;
}
