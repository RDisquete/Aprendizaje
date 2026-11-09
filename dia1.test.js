import { test, expect } from 'vitest';
import { sumar } from './dia1.js';

test('suma', () => {
  expect(sumar(1, 2)).toBe(3);
});