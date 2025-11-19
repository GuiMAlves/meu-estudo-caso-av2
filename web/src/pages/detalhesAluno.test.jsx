import { expect, test } from 'vitest';
import DetalhesAluno from './DetalhesAluno';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

test('Deve exibir detalhes do aluno', () => {
  render(<DetalhesAluno />);
  expect(screen.getByText('Detalhes do Aluno')).toBeInTheDocument();
})