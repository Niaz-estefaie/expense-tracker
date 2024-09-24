import styled from "styled-components";
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from "chart.js";
import { Line } from "react-chartjs-2"
import { useGlobalContext } from "../../context/globalContext";
import { IncomesType } from "../../types/income.type";
import { formatDate } from "../../utils/dateFormat";

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
)

function Chart() {
    const { incomes, expenses } = useGlobalContext();

    const chartData: any = {
        labels: incomes.map((income: IncomesType) => {
            const { date } = income;
            return formatDate(date)
        }),
        datasets: [
            {
                label: "Income",
                data: [
                    ...incomes.map((income: IncomesType) => {
                        const { amount } = income;
                        return amount;
                    })
                ],
                backgroundColor: 'green',
                tension: .2
            },
            {
                label: "Expense",
                data: [
                    ...expenses.map((expense: IncomesType) => {
                        const { amount } = expense;
                        return amount;
                    })
                ],
                backgroundColor: 'red',
                tension: .2
            },
        ]
    }
    
    return (
        <ChartStyled>
            <Line data={chartData} />
        </ChartStyled>
    )
}

const ChartStyled = styled.div`
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 100%;
`;

export default Chart;