import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postSignUp } from "../../services/mywallet";
import Loading from "../commons/Loading";

function SignUpPage() {
    const navigate = useNavigate();
    const [sending, setSending] = useState(false);
    const [registration, setRegistration] = useState({
        email: "",
        name: "",
        image: "",
        password: "",
        passwordConfirmation: ""
    });

    function updateInput(e) {
        setRegistration({ ...registration, [e.target.name]: e.target.value });
    };

    function resetForm() {
        setRegistration({
            name: "",
            email: "",
            password: "",
            passwordConfirmation: ""
        });
        setSending(false);
    }

    function checkPassword(e) {
        e.preventDefault();
        setSending(true);

        if (registration.password !== registration.passwordConfirmation) {
            alert('Por favor, confirme novamente a sua senha');
            resetForm();
        } else {
            signUp();
        }
      }

    function signUp() {
        postSignUp(registration)
            .then(() => {
                setSending(false);
                navigate('/');
            })
            .catch(erro => {
                alert('Não foi possível finalizar seu cadastro, tente novamente');
                console.log(erro);
                resetForm();
            });
    };

    return (
        <Main>
            <h1>MyWallet</h1>

            <Box onSubmit={checkPassword}>
                <Input
                    disabled={sending}
                    required
                    type='text'
                    name='name'
                    value={registration.name}
                    onChange={updateInput}
                    placeholder='Nome'
                />
                <Input 
                    disabled={sending}
                    required
                    type='email'
                    name='email'
                    value={registration.email}
                    onChange={updateInput}
                    placeholder='E-mail'
                />
                <Input 
                    disabled={sending}
                    required
                    type='password'
                    name='password'
                    value={registration.password}
                    onChange={updateInput}
                    placeholder='Senha'
                    onkeyup={checkPassword}
                />
                <Input 
                    disabled={sending}
                    required
                    type='password'
                    name='passwordConfirmation'
                    value={registration.passwordConfirmation}
                    onChange={updateInput}
                    placeholder='Confirme a senha'
                    onkeyup={checkPassword}
                />
                <Button type='submit' disabled={sending}> {sending ? <Loading /> : 'Entrar'} </Button>                    
            </Box>

            <Link to="/">
                <h3>
                    Já tem uma conta? Entre agora
                </h3>
            </Link>
        </Main>
    );
}

export default SignUpPage;

const Main = styled.div`
    background-color: purple;
    min-height: 100vh;
    margin: auto;
    padding: 5%;
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

    h3 {
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