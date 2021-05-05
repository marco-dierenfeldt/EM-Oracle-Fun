import { render, screen } from '@testing-library/react';
import CrudeOracleComponent from './crude-oracle.component';

test('renders learn react link', () => {
  render(<CrudeOracleComponent />);
  const hewadlineElement = screen.getByTestId("matchHeadline");
  expect(hewadlineElement).toBeInTheDocument();
});
