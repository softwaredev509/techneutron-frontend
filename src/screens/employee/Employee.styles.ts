import styled from "styled-components";

export const EmployeeTableContainer = styled.div`
  height: 80vh;
  max-width: 80rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-top: 4rem;
`;

export const EmployeeListHeading = styled.h1`
  height: 10%;
  align-self: center;
  font-size: 2.5rem; 
  color: #333;
  font-family: 'Roboto', sans-serif; 
`;

export const EmployeeTable = styled.table`
  border: 1px solid #ddd;
  border-collapse: collapse;
  width: 100%;
  margin-top: 1rem;
`;

export const TableHeader = styled.thead`
  background-color: #f5f5f5;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const TableCell = styled.td`
  padding: 1.5rem; 
  font-family: 'Roboto', sans-serif; 
  text-align: center; 
`;

export const TableBody = styled.tbody`
  background-color: #fff;
`;

export const ActionButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  margin: 0 1rem;
  cursor: pointer;
  border-radius: 0.25rem;
  transition: background-color 0.3s ease;
  font-family: 'Roboto', sans-serif; 

  &:hover {
    background-color: #0056b3;
  }
`;
