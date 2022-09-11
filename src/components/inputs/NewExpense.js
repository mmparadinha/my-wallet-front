import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { postTransaction } from "../../services/mywallet";
import Loading from "../commons/Loading";
import { GiCancel } from 'react-icons/gi';

function NewExpense() {
    const navigate = useNavigate();
    const [sending, setSending] = useState(false);
    const [transaction, setTransaction] = useState({
        //date: dayjs(DD/MM),
        value: '',
        description: "",
        type: 'expense',
        // PUXAR DO CONTEXT userId: _id
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
        postTransaction({
            ...transaction, value: Number(transaction.value)
            })
            .then(() => navigate('/home'))
            .catch(erro => {
                alert('Não foi possível registrar a nova saída');
                console.log(erro);
                resetForm();
            });
    };

    return (
        <Main>
            <Header>
                <h2>Nova saída</h2>
                <CancelIcon onClick={() => navigate('/home')}/>
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
                <Button type='submit' disabled={sending}> {sending ? <Loading /> : 'Salvar saída'} </Button>
            </Box>
        </Main>
    );
}

export default NewExpense;

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

const CancelIcon = styled(GiCancel)`
    font-size: 24px;
    color: #FFFFFF;

    &:hover {
        cursor: pointer;
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