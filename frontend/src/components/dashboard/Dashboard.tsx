import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import Chart from "../chart/Chart";
import { dollar } from "../../utils/Icons";
import { useGlobalContext } from "../../context/globalContext";
import { useEffect } from "react";
import History from "../history/History";

function Dashboard() {
    const { totalEsxpense, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])

    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>All Transactions</h1>
                <div className="stats-container">
                    <div className="chart-container">
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
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`

`;

export default Dashboard;