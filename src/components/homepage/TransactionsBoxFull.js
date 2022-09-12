
import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import Transaction from "./Transaction";
import TransactionsContext from "../contexts/TransactionsContext";

export default function TransactionsBoxFull() {
    const [ balance, setBalance ] = useState(0);
    const { transactions } = useContext(TransactionsContext);

    useEffect(() => {
        let temp = 0;

        transactions.forEach((data) => {
        if (data.type === 'income') {
            temp = temp + data.value;
        } else {
            temp = temp - data.value;
        }
        });

        setBalance(temp);
    },
    [transactions]);

    return(
        <TransactionsBox>
            <TransactionsContainer>
                {transactions.map((data, index) => <Transaction key={index} data={data}/>)}
            </TransactionsContainer>
            <BalanceContainer>
                <Balance>Saldo</Balance>
                <BalanceValue balance={balance}>{Math.abs(balance).toFixed(2)}</BalanceValue>
            </BalanceContainer>
        </TransactionsBox>
    )
}

const TransactionsBox = styled.div`
    width: 100%;
    min-height: 300px;
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 5px;
    gap: 15px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div {
        display: flex;
        justify-content: space-between;
    }
`;

const TransactionsContainer = styled.div`
    flex-direction: column;
    gap: 10px;
`;

const BalanceContainer = styled.div`
    border-top: 1px solid #000000;
    font-size: 17px;
    align-items: center;
    min-height: 30px;
`;

const Balance = styled.span`
    font-weight: 700;
    color: #000000;
`;

const BalanceValue = styled.span`
    font-weight: 400;
    color: ${props => props.balance >= 0 ? '#03AC00' : '#C70000'};
`;