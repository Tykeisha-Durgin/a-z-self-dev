import React, { useEffect, useState } from 'react';
import Item from '../components/Common/Item';
import { fetchItems } from '../reducks/items/operations';
import { getItems } from '../reducks/items/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarts } from '../reducks/carts/operations';
import banner from '../assets/img /banner.jpg';
import headphone from '../assets/img /headphone.png';
import watch from '../assets/img /watch.png';
import shoes from '../assets/img /shoes.png';
import leftarrow from '../assets/img /left-arrow-scroll.svg';
import bags from '../assets/img /bags.png';
import jacket from '../assets/img /jacket.png';
import rightarrow from '../assets/img /left-arrow.svg';

const Home = () => {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    const items = getItems(selector);

    useEffect(() => {
        dispatch(fetchItems());
        if (localStorage.getItem('LOGIN_USER_KEY')) {
            dispatch(fetchCarts());
            console.log(items);
        }
    }, []);

    return (
        <>
            <section class="main-image">
                <img src={banner} alt="main-image" />
            </section>
            <section class="section-1">
                <div class="recently-viewed">
                    <h4>Your recently viewed Items & featured recommendations</h4>
                </div>
                <div class="item">
                    <img src={leftarrow} alt="" />
                    <div class="item-flex">
                        <img src={headphone} alt="headphone" />
                        <div class="item-details">
                            <p>Headphones</p>
                            <p>BEATS BY DR.DRE</p>
                            <p class="price">&#8377 3500</p>
                        </div>
                    </div>
                    <div class="item-flex">
                        <img src={watch} alt="watch" />
                        <div class="item-details">
                            <p>Men Wrist Watch</p>
                            <p>TAUHGER</p>
                            <p class="price">&#8377 7150</p>
                        </div>
                    </div>
                    <div class="item-flex">
                        <img src={shoes} alt="shoes" />
                        <div class="item-details">
                            <p>Canvas Shoes</p>
                            <p>NIKE</p>
                            <p class="price">&#8377 3500</p>
                        </div>
                    </div>
                    <div class="item-flex">
                        <img src={bags} alt="bags" />
                        <div class="item-details">
                            <p>Luggage Bag</p>
                            <p>AMERICAN TOURISTER</p>
                            <p class="price">&#8377 1500</p>
                        </div>
                    </div>
                    <div class="item-flex">
                        <img src={jacket} alt="jacket" />
                        <div class="item-details">
                            <p>Long Jacket</p>
                            <p>FORT COLLINS</p>
                            <p class="price">&#8377 8999</p>
                        </div>
                    </div>
                    <img src={rightarrow} alt="" />
                </div>
            </section>
            <div className="product-heading">
                <h2>Product-List</h2>
            </div>
            <section className="item-container">
                <div className="item-grid">
                    {items &&
                        items.map(item => (
                            <div className="item">
                                <Item key={item.id} item={item} />
                            </div>
                        ))}
                </div>
            </section>
        </>
    );
};

export default Home;
