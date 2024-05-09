import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';


describe('App Routing', () => {
  it('renders sign-up page when navigating to /', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
  });

  it('renders sign-in form when navigating to /signin', () => {
    render(
      <MemoryRouter initialEntries={['/signin']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Sign In')).toBeInTheDocument();
  });

  it('renders payslip generation form when navigating to /payslip/generate', () => {
    render(
      <MemoryRouter initialEntries={['/payslip/generate']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Payslip Generation')).toBeInTheDocument();
  });

  // Add more tests for other routes as needed
});
