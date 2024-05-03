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
