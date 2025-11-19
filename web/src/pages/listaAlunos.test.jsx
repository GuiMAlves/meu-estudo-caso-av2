import { expect, test } from 'vitest';
import ListaAlunos from './ListaAlunos';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

test('Deve exibir lista de alunos', () => {
  render(<ListaAlunos />);
  expect(screen.getByText('Lista de Alunos')).toBeInTheDocument();
})