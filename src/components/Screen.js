import React, { useState, useEffect } from "react";

const getCurrentTime = () => {
    const date = new Date();
    return `${date.getHours() < 10 ? '0' : ''}${date.getHours()}:${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`;
}

const Screen = ({ time, message }) => {
    const [expirationTime, setExpirationTime] = useState(getCurrentTime());
    const [price, setPrice] = useState('$0.00');

    const formatTime = (time) => {
        const hours = Math.floor(time / 60);
        const minutes = time % 60;
        
        return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    };

    const calculateExpiration = (minutes) => {
        const currentTime = new Date();
        const expirationTime = new Date(currentTime.getTime() + minutes * 60000);
        const timeString = `${expirationTime.getHours() < 10 ? '0' : ''}${expirationTime.getHours()}:${expirationTime.getMinutes() < 10 ? '0' : ''}${expirationTime.getMinutes()}`
        setExpirationTime(timeString);
    }

    const calculatePrice = (time) => {
        const priceInCents = 50 * (time / 15);
        const dollars = Math.floor(priceInCents / 100);
        const cents = priceInCents % 100;
        setPrice(`$${dollars}.${cents < 10 ? '0' : ''}${cents}`);
    }

    useEffect(() => {
        calculateExpiration(time);
        calculatePrice(time);
    }, [time]);

    return (
        <div className="screen">
            <div className="description">
                {message}
            </div>
            <div>Total time: <b>{formatTime(time)}</b></div>
            <div className="bottom-wrapper">
                <div>Expires:{expirationTime}</div>
                <div>Price:{price}</div>
            </div>
        </div>
    );
};

export default Screen;