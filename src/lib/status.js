// Lógica pura de "aberto agora" — testada em scripts/status.test.mjs
const toMin = (hhmm) => { const [h, m] = hhmm.split(':').map(Number); return h * 60 + m; };
const fmt = (hhmm) => { const [h, m] = hhmm.split(':'); return m === '00' ? `${Number(h)}h` : `${Number(h)}h${m}`; };
const DIAS = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];

/** @param {{dia:number,abre:string|null,fecha:string|null}[]} horarios @param {number} dia 0=dom @param {number} minutos */
export function calcularStatus(horarios, dia, minutos) {
  const hoje = horarios.find((h) => h.dia === dia);
  if (hoje?.abre) {
    const a = toMin(hoje.abre), f = toMin(hoje.fecha);
    if (minutos >= a && minutos < f) return { aberto: true, titulo: 'Aberto agora', detalhe: `até ${fmt(hoje.fecha)}` };
    if (minutos < a) return { aberto: false, titulo: 'Abre hoje', detalhe: `às ${fmt(hoje.abre)}` };
  }
  for (let i = 1; i <= 7; i++) {
    const d = (dia + i) % 7;
    const h = horarios.find((x) => x.dia === d);
    if (h?.abre) {
      const quando = i === 1 ? 'amanhã' : DIAS[d];
      return { aberto: false, titulo: hoje?.abre ? 'Fechado agora' : 'Fechado hoje', detalhe: `abre ${quando}, ${fmt(h.abre)}` };
    }
  }
  return { aberto: false, titulo: 'Fechado', detalhe: '' };
}

export function agoraSaoPaulo(date = new Date()) {
  const p = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Sao_Paulo', weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(date);
  const g = (t) => p.find((x) => x.type === t).value;
  const dia = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(g('weekday'));
  return { dia, minutos: Number(g('hour')) * 60 + Number(g('minute')) };
}
export { fmt };
