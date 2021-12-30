import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders header', () => {
  render(<App />);
  const linkElement = screen.getByText(/projectCatwalk/i);
  expect(linkElement).toBeInTheDocument();
});