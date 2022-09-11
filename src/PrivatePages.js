import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import React from "react";

function PrivatePages({children}) {
    const navigate = useNavigate();
    const authenticator = JSON.parse(localStorage.getItem('mywallet'));

    useEffect(() => {
        if (authenticator.token === null) {
            alert('Não autorizado, favor refazer o login');
            localStorage.clear('mywallet');
            navigate('/');
        }},
    []);

    if (authenticator.token !== null) {
        return (
            <>
                {children}
            </>
        );
    } else {
        localStorage.clear('mywallet');
    };
};

export default PrivatePages;