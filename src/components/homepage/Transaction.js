import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Transaction({ data }) {
    const navigate = useNavigate();

    return(
        <>
            <Container onClick={() => {
                if (data.type === 'income') {
                    navigate('/editincome');
                } else {
                    navigate('/editexpense');
                }
            }}>
                    <div>
                        <TransactionDate>{data.date}</TransactionDate>
                        <TransactionDescription>{data.description}</TransactionDescription>
                    </div>
                    <TransactionValue type={data.type}>{data.value.toFixed(2)}</TransactionValue>
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
    color: ${props => props.type === 'income' ? '#03AC00' : '#C70000'};
`;