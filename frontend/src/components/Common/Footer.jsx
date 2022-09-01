import React, { useEffect, useState } from 'react';
import logo from '../../assets/img /logo.svg';

export default function Footer({ price }) {
    let pageUrl = window.location.toString();
    const [showCheckoutButton, setShowCheckoutButton] = useState(true);
    const key = localStorage.getItem('LOGIN_USER_KEY');

    useEffect(() => {
        if (pageUrl.includes('cart')) {
            setShowCheckoutButton(false);
        }
    }, []);

    return (
        <footer>
            {key !== null && (
                <div class="foot">
                    <h2>Subtotal: ${price}</h2>
                    {showCheckoutButton ? (
                        <a href="/cart">
                            <button class="btn">Check Your Cart</button>
                        </a>
                    ) : (
                        <a href="/Shipping">
                            <button class="btn">Checkout</button>
                        </a>
                    )}
                </div>
            )}
            <div class="refresh">
                <img src={logo} alt="logo" />
                <p>
                    Premium Quality soft drinks, hot drinks, soda & energy drinks at the best and most affordable price.
                </p>
                <p>we have a new offer every day for 365 days</p>
                <span>Contact</span>
                <p>E-maildrink@refresh.com | Hotline: +1 131 138 138</p>
            </div>
            <div className="copyright">
                <p>DESIGN BY REFRESH - © 2022. ALL RIGHTS RESERVED.</p>
            </div>
        </footer>
    );
}
