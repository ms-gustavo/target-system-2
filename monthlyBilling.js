const montlhyBilling = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};
function calcPercentage(bill) {
  const total = Object.values(bill).reduce((acc, value) => acc + value, 0);
  const percentages = Object.keys(bill).map((state) => ({
    state,
    percentage: ((bill[state] / total) * 100).toFixed(2),
  }));
  return percentages;
}
const percentages = calcPercentage(montlhyBilling);
percentages.forEach(({ state, percentage }) => {
  console.log(`${state}: ${percentage}%`);
});
