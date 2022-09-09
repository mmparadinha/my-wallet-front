
import React from "react";
import styled from "styled-components";

export default function Transaction() {
    return(
        <>
            <Container onClick={() => console.log('editar')}>
                    <div>
                        <TransactionDate>30/11</TransactionDate>
                        <TransactionDescription>Almoço mãe</TransactionDescription>
                    </div>
                    <TransactionValue>39,90</TransactionValue>
            </Container>
            <Container>
                <div>
                    <TransactionDate>01/12</TransactionDate>
                    <TransactionDescription>Salário</TransactionDescription>
                </div>
                <TransactionValue>1863,21</TransactionValue>
            </Container>
        </>
    )
}

const Container = styled.div`
    font-weight: 400;
    font-size: 16px;

    div {
        gap: 10px;
    }

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

const TransactionDate = styled.span`
    color: #C6C6C6;
`;

const TransactionDescription = styled.span`
    color: #000000;
`;

const TransactionValue = styled.span`
    color: #C70000;
`;