
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Transaction from "./Transaction";
import { getTransactions } from "../../services/mywallet";

export default function TransactionsBoxFull() {
    const [ balance, setBalance ] = useState(0);
    const [ transactions, setTransactions ] = useState([
        {
            date: '30/11',
            value: 30.22,
            description: "almoço mãe",
            type: 'expense',
            // PUXAR DO CONTEXT userId: _id
        },
        {
            date: '03/12',
            value: 632.00,
            description: "salário",
            type: 'income',
            // PUXAR DO CONTEXT userId: _id
        }
    ]);

    useEffect(() => {
        getTransactions()
            .then(resposta => {
                setTransactions(resposta.data)
            }
            )
            .catch(erro => console.log(erro));
    },
    []);

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
            <div>
                <Balance>Saldo</Balance>
                <BalanceValue>{balance.toFixed(2)}</BalanceValue>
            </div>
        </TransactionsBox>
    )
}

const TransactionsBox = styled.div`
    width: 100%;
    min-height: 300px;
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 5px;
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

const Balance = styled.span`
    font-size: 17px;
    font-weight: 700;
    color: #000000;
`;

const BalanceValue = styled.span`
    font-size: 17px;
    font-weight: 400;
    color: #03AC00;
`;