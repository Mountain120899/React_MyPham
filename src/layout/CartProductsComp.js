import {React, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import '../style/CartProducts.css';
import {deleteItem} from '../redux/cartProducts';

export default function CartProducts() {
    const [totalPrice, setTotalPrice] = useState(0);
    const [caculateTotalPrice, setCaculateTotalPrice] = useState(true);
    const dispatch = useDispatch();

    const cartProducts = useSelector(state => state.cartProducts);

    const DeleteProduct = (product) => {
        dispatch(deleteItem(product));
        setCaculateTotalPrice(pre => !pre);
    }

    useEffect(() => {
            var categoryArray = document.getElementsByClassName("nav-link");
            for (let i = 0; i < categoryArray.length - 1; i++) {
                categoryArray[i].style.color = "rgba(255,255,255,.55)";
            }
            var temp = cartProducts.reduce((total, product) => total + product.price, 0);
            setTotalPrice(temp);
    }, [caculateTotalPrice])

    return (
        <div className="checkout-box">
            <ul className="checkout-list">
              {
                cartProducts.map(product => (
                    <li  className="checkout-product" key = {product.id}>
                        <img src={product.image} alt="" className="product-image" />
                        <h3 className="product-name">{product.name}</h3>
                        <span className="product-price"> {product.price} VND </span>
                        <button className="product-remove" onClick = {() => DeleteProduct(product)}>X</button>
                    </li>
                ))
              }
            </ul>
            <h3 className="total">
                Tổng tiền: {totalPrice} VND
            </h3>
        </div>
    )
}


