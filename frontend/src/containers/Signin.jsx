import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../reducks/users/operations';
import Home from '../containers/Home';
import CrossX from '../assets/img /cross.svg';
import { push } from 'connected-react-router';

const Signin = () => {
    const dispatch = useDispatch();

    const closeButton = () => {
        dispatch(push('/'));
    };

    const [email, setEmail] = useState(''),
        [password, setPassword] = useState('');

    const inputEmail = event => {
        setEmail(event.target.value);
    };

    const inputPassword = event => {
        setPassword(event.target.value);
    };

    const signInButton = () => {
        dispatch(signIn(email, password));
        setEmail('');
        setPassword('');
    };
    return (
        <>
            <Home />
            <section className="gradient"></section>
            <section class="popup">
                <div class="popup-inner">
                    <span onClick={closeButton}>
                        <a href="/">
                            {' '}
                            <img src={CrossX} class="close" />{' '}
                        </a>
                    </span>
                </div>
                <div class="popup-preview">
                    <div class="input">
                        <div className="heading-sign-in">
                            <h2>Log In</h2>
                            <p> Login to Refresh Cool Drinks</p>
                        </div>
                        <div className="input-feilds">
                            <input
                                type="email"
                                onChange={inputEmail}
                                required
                                placeholder="Email address"
                                value={email}
                            />{' '}
                            <br />
                            <br />
                            <input
                                type="password"
                                onChange={inputPassword}
                                required
                                placeholder="Password"
                                vlaue={password}
                            />
                            <br />
                            <button class="button" onClick={signInButton}>
                                SIGN IN
                            </button>
                            <p class="bottom">
                                Not a Member?{' '}
                                <a href="/signup">
                                    <u>Join Us.</u>
                                </a>{' '}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Signin;
