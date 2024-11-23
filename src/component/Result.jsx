import { calculateInvestmentResults ,formatter} from "../util/investment"

export default function Result({input}){
  
  const resultdata=  calculateInvestmentResults(input)
  const intialinvestment=resultdata[0].valueEndOfYear-resultdata[0].interest-resultdata[0].annualInvestment;
  console.log(resultdata)
    return(
        
<table id="result">
    <thead>
        <tr>
            <th>Year</th>
            <th>Investment value</th>
            <th>Interest (Year)</th>
            <th>total interest</th>
            <th>Invested capital</th>

        </tr>
    </thead>
    <tbody>
        {resultdata.map(yearData=>{
            const totalinterst=yearData.valueEndOfYear-yearData.annualInvestment *yearData.year-intialinvestment;
            const totalamountinvested=yearData.valueEndOfYear-totalinterst;
            return <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(totalinterst)}</td>
                <td>{formatter.format(totalamountinvested)}</td>
            </tr>
        })}
    </tbody>
</table>
    );
}