import React, { useEffect, useContext} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { BiPlusCircle, BiMinusCircle } from 'react-icons/bi';
import TransactionsBoxFull from "./TransactionsBoxFull";
import TransactionsBoxEmpty from "./TransactionsBoxEmpty";
import TransactionsContext from "../contexts/TransactionsContext";
import { getTransactions } from "../../services/mywallet";

function Home() {
    const navigate = useNavigate();
    const { transactions, setTransactions } = useContext(TransactionsContext);

    useEffect(() => {
        getTransactions()
            .then(resposta => {
                setTransactions(resposta.data);
            }
            )
            .catch(erro => console.log(erro));
    },
    []);

    return (
        <Main>
            <Header>
                <h2>Olá, ${'fulano'}</h2>
                <LogoutIcon onClick={() => {
                    localStorage.clear();
                    navigate('/')
                }}/>
            </Header>

            {transactions.length !== 0 ? <TransactionsBoxFull/> : <TransactionsBoxEmpty/>}

            <ButtonsBox>
                <button onClick={() => navigate('/newincome')}>
                    <PlusIcon/>
                    <h3>Nova <br/> entrada</h3>
                </button>
                <button onClick={() => navigate('/newexpense')}>
                    <MinusIcon/>
                    <h3>Nova <br/> saída</h3>
                </button>
            </ButtonsBox>
        </Main>
    );
}

export default Home;

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

const LogoutIcon = styled(RiLogoutCircleRLine)`
    font-size: 24px;
    color: #FFFFFF;

    &:hover {
        cursor: pointer;
    }
`;

const ButtonsBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    button {
        background-color: #A328D6;
        color: #FFFFFF;
        width: 45%;
        height: 115px;
        border: none;
        border-radius: 5px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: left;
        font-size: 17px;
        font-weight: 700;

        &:hover {
            filter: brightness(1.2);
            cursor: pointer;
        }
    }
`;

const PlusIcon = styled(BiPlusCircle)`
    font-size: 24px;
    color: #FFFFFF;
`;

const MinusIcon = styled(BiMinusCircle)`
    font-size: 24px;
    color: #FFFFFF;
`;