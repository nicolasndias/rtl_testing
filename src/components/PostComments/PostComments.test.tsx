import { render, screen, fireEvent } from '@testing-library/react';
import PostComments from './index';

describe('PostComments', () => {
  it('inserir dois comentários', () => {
    render(<PostComments />);

    const input = screen.getByTestId('comment-input');
    const button = screen.getByTestId('comment-button');

    fireEvent.change(input, {
      target: { value: 'Primeiro comentário do teste' }
    });
    fireEvent.click(button);

    fireEvent.change(input, {
      target: { value: 'Segundo comentário do teste' }
    });
    fireEvent.click(button);

    const comments = screen.getAllByTestId('comment-item');

    expect(comments).toHaveLength(2);
    expect(comments[0]).toHaveTextContent('Primeiro comentário');
    expect(comments[1]).toHaveTextContent('Segundo comentário');
  });
});