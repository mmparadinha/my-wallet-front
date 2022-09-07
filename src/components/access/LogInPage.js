import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { postLogin } from "../../services/mywallet";
import Loading from "../commons/Loading";


function LogInPage() {
    const [loggingIn, setLoggingIn] = useState(false);
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        email: "",
        password: "",
    });

    function updateInput(e) {
        setLogin({ ...login, [e.target.name]: e.target.value });
    };

    function LogIn(e) {
        e.preventDefault();
        setLoggingIn(true);
        postLogin(login)
            .then(resposta => {
                localStorage.setItem('trackit', JSON.stringify({
                    email: resposta.data.email,
                    id: resposta.data.id,
                    image: resposta.data.image,
                    name: resposta.data.name,
                    token: resposta.data.token,
                    horario: +new Date()
                }));
                navigate('/hoje');
                })
            .catch(erro => {
                alert('Não foi possível logar, tente novamente');
                console.log(erro);
                setLogin({
                    email: "",
                    password: "",
                });
                setLoggingIn(false);
            });
    };

    return (
        <Main>
            <h1>MyWallet</h1>

            <Box onSubmit={LogIn}>
                <Input
                    disabled={loggingIn}
                    required
                    type='email'
                    name='email'
                    value={login.email}
                    onChange={updateInput}
                    placeholder='E-mail'
                />
                <Input
                    disabled={loggingIn}
                    required
                    type='password'
                    name='password'
                    value={login.password}
                    onChange={updateInput}
                    placeholder='Senha'
                />
                <Button type='submit' disabled={loggingIn}> {loggingIn ? <Loading /> : 'Entrar'} </Button>
            </Box>

            <Link to="/sign-up"><h2>Primeira vez? Cadastre-se</h2></Link>
        </Main>
    );
}

export default LogInPage;

const Main = styled.div`
    background-color: purple;
    min-height: 100vh;
    margin: auto;
    padding: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-family: 'Saira Stencil One', cursive;
        font-weight: 400;
        font-size: 32px;
        color: #FFFFFF;
        margin-bottom: 24px;
    }

    h2 {
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        font-size: 15px;
        color: #FFFFFF;
        margin-top: 36px;
        text-align: center;

        &:hover {
            text-decoration: underline;
            cursor: pointer;
        }

        &:disabled {
            opacity: 0.8;
            cursor: default;
        }
    }
`;

const Box = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
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

    &:hover {
        filter: brightness(1.2);
        cursor: pointer;
    }
    
    &:disabled {
        filter: brightness(0.7);
        cursor: default;
    }
`;