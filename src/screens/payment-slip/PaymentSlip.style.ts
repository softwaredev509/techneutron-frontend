import styled from "styled-components";

export const PayslipStyle = styled.div`
  margin: 4rem 0;
`;
export const PayslipTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;
export const PayslipMiddle = styled.div`
  margin: 1rem 0 0 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const PayslipLine = styled.div`
  width: 15rem;
  border-bottom: 2px solid gray;
`;
export const EarningsLine = styled.div`
  width: 80%;
  border-bottom: 2px solid gray;
`;

export const FormInput = styled.div`
  display: flex;
  flex-direction: row;
  height: 4rem;
  width: 40rem;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
`;

export const LableStyle = styled.label`
  width: 20rem;
  font-size: 1rem;
  font-weight: bold;
  @media (max-width: 800px) {
    display: none;
  }
`;
export const ButtonStyle = styled.div`
  margin-top: 4rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
