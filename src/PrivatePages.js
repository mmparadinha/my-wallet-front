import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import React from "react";

function PrivatePages({children}) {
    const navigate = useNavigate();
    const usuario = JSON.parse(localStorage.getItem('mywallet'));

    useEffect(() => {
        if (usuario === null) {
            alert('Não autorizado, favor refazer o login');
            localStorage.clear('mywallet');
            navigate('/');
        }}
    );

    if (usuario !== null) {
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