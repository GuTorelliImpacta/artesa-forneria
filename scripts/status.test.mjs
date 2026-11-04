import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { calcularStatus, agoraSaoPaulo } from '../src/lib/status.js';
const { horarios } = JSON.parse(readFileSync(new URL('../src/data/site.json', import.meta.url)));
const m = (h, mi = 0) => h * 60 + mi;
test('quarta fechado, abre quinta', () => {
  const s = calcularStatus(horarios, 3, m(20));
  assert.equal(s.aberto, false); assert.equal(s.titulo, 'Fechado hoje'); assert.match(s.detalhe, /amanhã, 18h/);
});
test('quinta 17:59 abre às 18h, 18:00 aberto', () => {
  assert.equal(calcularStatus(horarios, 4, m(17, 59)).titulo, 'Abre hoje');
  const s = calcularStatus(horarios, 4, m(18)); assert.equal(s.aberto, true); assert.equal(s.detalhe, 'até 23h');
});
test('quinta 23:00 fecha', () => assert.equal(calcularStatus(horarios, 4, m(23)).aberto, false));
test('sexta 23:29 aberto, 23:30 fechado', () => {
  assert.equal(calcularStatus(horarios, 5, m(23, 29)).aberto, true);
  assert.equal(calcularStatus(horarios, 5, m(23, 30)).aberto, false);
});
test('domingo 16:59 aberto, 17:00 fechado e próxima abertura quinta', () => {
  assert.equal(calcularStatus(horarios, 0, m(16, 59)).aberto, true);
  const s = calcularStatus(horarios, 0, m(17)); assert.equal(s.aberto, false); assert.match(s.detalhe, /quinta, 18h/);
});
test('sábado 23:40 fechado, abre domingo 12h', () => {
  const s = calcularStatus(horarios, 6, m(23, 40)); assert.match(s.detalhe, /amanhã, 12h/);
});
test('fuso São Paulo: 2026-11-04 (quarta) 15:00 UTC = quarta 12:00 BRT', () => {
  assert.deepEqual(agoraSaoPaulo(new Date('2026-11-04T15:00:00Z')), { dia: 3, minutos: 720 });
});
