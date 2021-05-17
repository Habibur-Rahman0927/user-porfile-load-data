import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faUserTimes } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = (props) => {
    const {name, image} = props.cart;
    return (
        <div>
            <div className="card-add-friend">
                <div className="card-img">
                    <img className="image" src={image} alt="" />
                </div>
                <div className="card-content">
                    <div className="card-title">
                        <h4>{name}</h4>
                        <p style={{color:"#65676B"}}>4 mutual friend</p>
                    </div>
                    <div className="btn">
                        <button className="button-desgin-cart"><FontAwesomeIcon className="icon" icon={faUserTimes} />Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;