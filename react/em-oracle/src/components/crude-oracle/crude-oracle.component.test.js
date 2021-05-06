import { render, screen } from '@testing-library/react';
import CrudeOracleComponent from './crude-oracle.component';

test('renders headline', () => {
  render(<CrudeOracleComponent />);
  const hewadlineElement = screen.getByTestId("matchHeadline");
  expect(hewadlineElement).toBeInTheDocument();
});

test('renders game result', () => {
  render(<CrudeOracleComponent />);
  const resultElement = screen.getByTestId("gameResult");
  expect(resultElement).toBeInTheDocument();
});

test('renders winner', () => {
  render(<CrudeOracleComponent />);
  const winnerProclamation = screen.getByTestId("winnerProclamation");
  expect(winnerProclamation).toBeInTheDocument();
});
