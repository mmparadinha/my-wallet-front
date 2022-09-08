import { Puff } from  'react-loader-spinner';
import React from 'react';

export default function Loading() {
    return (
        <Puff
        height="35"
        width="35"
        radius={1}
        color="#FFFFFF"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
    />
    );
};