import type React from 'react';
import type { RenderResult } from '@testing-library/react';
import { render, act } from '@testing-library/react';

export async function renderWithAct(element: React.ReactElement) {
  let result: RenderResult;
  await act(async () => {
    result = render(element);
  });
  return result;
}

export async function actAsync(callback: () => void) {
  await act(async () => callback());
}
