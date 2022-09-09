
import React from "react";
import styled from "styled-components";
import Transaction from "./Transaction";

export default function TransactionsBoxFull() {

    return(
        <TransactionsBox>
            <TransactionsContainer>
                {/* transaction map */}
                <Transaction/>
            </TransactionsContainer>
            <div>
                <Balance>Saldo</Balance>
                <BalanceValue>500</BalanceValue>
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