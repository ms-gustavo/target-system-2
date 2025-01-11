const dailyBilling = [
  { day: 1, value: 1500 },
  { day: 2, value: 1700 },
  { day: 3, value: 2000 },
  { day: 4, value: 1900 },
  { day: 5, value: 1800 },
  { day: 6, value: 2100 },
  { day: 7, value: 2200 },
  { day: 8, value: 2300 },
  { day: 9, value: 2400 },
  { day: 10, value: 2500 },
  { day: 11, value: 0 },
  { day: 12, value: 2700 },
  { day: 13, value: 2800 },
  { day: 14, value: 0 },
  { day: 15, value: 3000 },
  { day: 16, value: 3100 },
  { day: 17, value: 0 },
  { day: 18, value: 3300 },
  { day: 19, value: 0 },
  { day: 20, value: 3500 },
  { day: 21, value: 3600 },
  { day: 22, value: 0 },
  { day: 23, value: 3800 },
  { day: 24, value: 0 },
  { day: 25, value: 4000 },
  { day: 26, value: 0 },
  { day: 27, value: 0 },
  { day: 28, value: 4300 },
  { day: 29, value: 0 },
  { day: 30, value: 4500 },
];
function calcBill(dailyBilling) {
  const values = dailyBilling
    .map((item) => item.value)
    .filter((value) => value > 0);
  const lowerValue = Math.min(...values);
  const higherValue = Math.max(...values);
  const monthlyAverage =
    values.reduce((acc, value) => acc + value, 0) / values.length;
  const daysAboveAverage = values.filter(
    (value) => value > monthlyAverage
  ).length;
  return {
    lowerValue,
    higherValue,
    daysAboveAverage,
  };
}
const results = calcBill(dailyBilling);
console.group("Resultados");
console.log(`Menor valor: R$ ${results.lowerValue}`);
console.log(`Maior valor: R$ ${results.higherValue}`);
console.log(`Dias acima da média: ${results.daysAboveAverage}`);
console.groupEnd();
