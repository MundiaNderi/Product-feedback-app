import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Suggestions from './src/Suggestions';

test('renders prompt to add feedback when there is no feedback', () => {
  // Arrange: Render the component with empty feedbackData
  const { getByText } = render(<Suggestions />);

  // Act: Check if the prompt message is rendered
  const promptMessage = getByText(/There is no feedback yet./i);

  // Assert: Expect the prompt message to be in the document
  expect(promptMessage).toBeInTheDocument();
});
