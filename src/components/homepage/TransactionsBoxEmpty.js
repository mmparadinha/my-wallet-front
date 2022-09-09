
import React from "react"
import styled from "styled-components";

export default function TransactionsBoxEmpty() {
    return(
        <TransactionsBox>
            <h3>
                Não há registros de entrada ou saída
            </h3>
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
    justify-content: center;
    align-items: center;

    h3 {
        font-weight: 400;
        font-size: 20px;
        color: #868686;
    }
`;