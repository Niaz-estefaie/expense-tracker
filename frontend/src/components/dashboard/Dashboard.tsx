import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import Chart from "../chart/Chart";
import { dollar } from "../../utils/Icons";
import { useGlobalContext } from "../../context/globalContext";
import { useEffect } from "react";
import History from "../history/History";
import Incomes from "../incomes/Incomes";

function Dashboard() {
    const { totalEsxpense, totalIncome, totalBalance, getIncomes, getExpenses, incomes, expenses } = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])

    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>All Transactions</h1>
                <div className="stats-container">
                    <div className="chart-container tainer">
                        <Chart />
                        <div className="amount-container">
                            <div className="income">
                                <h2>Total Income</h2>
                                <p>{dollar()}</p> {totalIncome()}
                            </div>
                            <div className="expense">
                                <h2>Total Expense</h2>
                                <p>{dollar()}</p> {totalEsxpense()}
                            </div>
                            <div className="balance">
                                <h2>Balance</h2>
                                <p>{dollar()}</p> {totalBalance()}
                            </div>
                        </div>
                    </div>
                    <div className="history-container">
                        <History />
                        <h2 className="salary-title">Min <span>Salary</span> Max</h2>
                        <div className="salary-item">
                            <p>{Math.min(...incomes.map(item => parseFloat(item.amount)))}</p>
                            <p>{Math.max(...incomes.map(item => parseFloat(item.amount)))}</p>
                        </div>
                        <h2 className="salary-title">Min <span>Expense</span> Max</h2>
                        <div className="salary-item">
                            <p>{Math.min(...incomes.map(item => parseFloat(item.amount)))}</p>
                            <p>{Math.max(...incomes.map(item => parseFloat(item.amount)))}</p>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`
.stats-container{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
        .chart-container {
            grid-column: 1 / 4;
            height: 400px;
            .amount-container {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 2rem;
                margin-top: 2rem;
                .income, .expense{
                    grid-column: span 2;
                }
                .income, .expense, .balance{
                    background: #FCF6F9;
                    border: 2px solid #FFFFFF;
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    border-radius: 20px;
                    padding: 1rem;
                    p{
                        font-size: 3.5rem;
                        font-weight: 700;
                    }
                }

                .balance{
                    grid-column: 2 / 4;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    p{
                        color: var(--color-green);
                        opacity: 0.6;
                        font-size: 4.5rem;
                    }
                }
            }
        }

        .history-container {
            grid-column: 4 / -1;
            h2{
                margin: 1rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .salary-title{
                font-size: 1.2rem;
                span{
                    font-size: 1.8rem;
                }
            }
            .salary-item{
                background: #FCF6F9;
                border: 2px solid #FFFFFF;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                padding: 1rem;
                border-radius: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                p{
                    font-weight: 600;
                    font-size: 1.6rem;
                }
            }
        }
    }
`;

export default Dashboard;