import { calculateInvestmentResults, formatter } from '../../util/investment';

const headerInvst = [
  'Year',
  'Invesment Value',
  'Interest (Year)',
  'Total Interest',
  'Invested Capital',
];

export default function ResultInvesment({ userInput, style }) {
  const result = calculateInvestmentResults(userInput);
  const initialInvestment =
    result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;
  return (
    <table id={style.result}>
      <thead>
        <tr>
          {headerInvst.map((header, i) => (
            <td key={i}>{header}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {result.map((dataYear) => {
          const totalInvestment =
            dataYear.valueEndOfYear -
            dataYear.annualInvestment * dataYear.year -
            initialInvestment;
          const totalAmountInvested = dataYear.valueEndOfYear - totalInvestment;
          return (
            <tr key={dataYear.year}>
              <td>{dataYear.year}</td>
              <td>{formatter.format(dataYear.valueEndOfYear)}</td>
              <td>{formatter.format(dataYear.interest)}</td>
              <td>{formatter.format(totalInvestment)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
