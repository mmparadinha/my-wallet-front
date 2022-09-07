import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


function SignUpPage() {
    return (
        <Main>
            <h1>MyWallet</h1>

            <Box /* onSubmit={entrar} */>
                <Input
                    // disabled={entrando}
                    // required
                    type='text'
                    // name='email'
                    // value={login.password}
                    // onChange={atualizarInput}
                    placeholder='Nome'
                />
                <Input 
                    // disabled={entrando}
                    // required
                    type='email'
                    // name='password'
                    // value={login.password}
                    // onChange={atualizarInput}
                    placeholder='E-mail'
                />
                <Input 
                    // disabled={entrando}
                    // required
                    type='password'
                    // name='password'
                    // value={login.password}
                    // onChange={atualizarInput}
                    placeholder='Senha'
                />
                <Input 
                    // disabled={entrando}
                    // required
                    type='password'
                    // name='password'
                    // value={login.password}
                    // onChange={atualizarInput}
                    placeholder='Confirme a senha'
                />
                <Button type='submit' /* disabled={entrando}>{entrando ? <Loading /> : 'Entrar'} */>Cadastrar</Button>                    
            </Box>

            <Link to="/">
                <h2>
                    Já tem uma conta? Entre agora
                </h2>
            </Link>
        </Main>
    );
}

export default SignUpPage;

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
            opacity: 0.7;
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