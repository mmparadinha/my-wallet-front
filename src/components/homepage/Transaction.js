import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { deleteTransaction } from '../../services/mywallet.js';

export default function Transaction({ data }) {
    const navigate = useNavigate();

    function editTransaction() {
        if (data.type === 'income') {
            navigate('/editincome/', {state: data._id });
        } else {
            navigate('/editexpense/', {state: data._id });
        }
    }

    function removeTransaction() {
        if (window.confirm('Você realmente deseja excluir essa transação?')) {
            deleteTransaction(data._id)
                .then(() => document.location.reload())
                .catch(erro => {
                    alert('Não foi possível apagar a transação');
                    console.log(erro);
            });
        }
    }

    return(
        <>
            <Container>
                    <div>
                        <TransactionDate>{data.date}</TransactionDate>
                        <TransactionDescription onClick={() => editTransaction()}>{data.description}</TransactionDescription>
                    </div>
                    <div>
                        <TransactionValue type={data.type} onClick={() => editTransaction()}>{data.value.toFixed(2)}</TransactionValue>
                        <TransactionDate onClick={() => removeTransaction()}>x</TransactionDate>
                    </div>
            </Container>
        </>
    )
}

const Container = styled.div`
    font-weight: 400;
    font-size: 16px;
    gap: 8px;

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