import React, { useEffect, useState } from 'react';
import { signOut } from '../../reducks/users/operations';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import cart from '../../assets/img /cart.svg';
import logo from '../../assets/img /logo.svg';
import user from '../../assets/img /man.png';
import search from '../../assets/img /search-icon.svg';
import dropdown from '../../assets/img /down-arrow.png';

export default function Header() {
    const dispatch = useDispatch();
    const key = localStorage.getItem('LOGIN_USER_KEY');
    const [checkUser, setCheckUser] = useState(false);

    const signOutButton = () => {
        dispatch(signOut());
        setCheckUser(false);
        dispatch(push('/signin'));
    };

    useEffect(() => {
        if (key !== null) {
            setCheckUser(true);
        }
    }, [key]);

    return (
        <>
            <header>
                <div class="logo">
                    <a href="/">
                        {' '}
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <div class="center-nav">
                    <button>
                        All Category <input type="text" placeholder="search here" />
                        <img src={search} alt="search" />
                    </button>
                </div>
                <nav>
                    {checkUser ? (
                        <span className="signin" onClick={signOutButton}>
                            Logout
                        </span>
                    ) : (
                        <a class="signin" href="Signin">
                            <img src={user} alt="user" />
                        </a>
                    )}
                    {checkUser && (
                        <a href="Cart">
                            {' '}
                            <img src={cart} alt="" />
                        </a>
                    )}
                </nav>
            </header>
            <menu>
                <div class="category">
                    <p>
                        Shop by Category <img src={dropdown} alt="dropdown" />
                    </p>
                </div>
                <div class="sub-menu">
                    <div className="menu-links">
                        <a href="/">Users A2Z.in</a>
                    </div>
                    <div className="menu-links">
                        <a href="/">Today's Deals</a>
                    </div>
                    <div className="menu-links">
                        <a href="/">A2Z pay</a>
                    </div>
                    <div className="links">
                        <a href="/">Sell</a>
                    </div>
                    <div className="customer">
                        <a href="/">Customer Service</a>
                    </div>
                </div>
            </menu>
        </>
    );
}
