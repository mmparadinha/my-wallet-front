import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { postTransaction } from "../../services/mywallet";
import Loading from "../commons/Loading";

function NewIncome() {
    const navigate = useNavigate();
    const [sending, setSending] = useState(false);
    const [transaction, setTransaction] = useState({
        value: "",
        description: "",
        type: 'income'
    });

    function updateInput(e) {
        setTransaction({ ...transaction, [e.target.name]: e.target.value });
    };

    function resetForm() {
        setTransaction({
            value: "",
            description: ""
        });
        setSending(false);
    }

    function sendTransaction(e) {
        e.preventDefault();
        setSending(true);
        postTransaction(transaction)
            .then(() => navigate('/home'))
            .catch(erro => {
                alert('Não foi possível registrar a nova entrada');
                console.log(erro);
                resetForm();
            });
    };

    return (
        <Main>
            <Header>
                <h2>Nova entrada</h2>
            </Header>

            <Box onSubmit={sendTransaction}>
                <Input
                    disabled={sending}
                    required
                    type='text'
                    name='value'
                    value={transaction.value}
                    onChange={updateInput}
                    placeholder='Valor'
                />
                <Input
                    disabled={sending}
                    required
                    type='text'
                    name='description'
                    value={transaction.description}
                    onChange={updateInput}
                    placeholder='Descrição'
                />
                <Button type='submit' disabled={sending}> {sending ? <Loading /> : 'Salvar entrada'} </Button>
            </Box>
        </Main>
    );
}

export default NewIncome;

const Main = styled.div`
    background-color: purple;
    min-height: 100vh;
    margin: auto;
    padding: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Raleway', sans-serif;
`;

const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
    color: #FFFFFF;

    h2 {
        font-weight: 700;
        font-size: 26px;
    }
`;

const Box = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
`;

const Input = styled.input`
    width: 100%;
    height: 58px;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: #000000;
    padding: 10px;
    border-radius: 5px;

    &::placeholder {
        color: #000000;
        opacity: 0.8;
    }

    &:disabled {
        background-color: #F2F2F2;
        color: #D4D4D4;
    }
`;

const Button = styled.button`
    background-color: #A328D6;
    width: 100%;
    height: 46px;
    border: none;
    border-radius: 5px;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 20px;
    color: #FFFFFF;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        filter: brightness(1.2);
        cursor: pointer;
    }
    
    &:disabled {
        filter: brightness(0.7);
        cursor: default;
    }
`;