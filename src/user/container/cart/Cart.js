import React from 'react';
import Heading from '../Ul/Heading/Heading';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Ul/Button/Button';
import { decrementCart, incrementCart } from '../../../redux/action/cart.action';

function Cart(props) {

    const dispatch = useDispatch();
    let medData = useSelector((state) => state.medicine);
    let cartData = useSelector((state) => state.cart);

    let cartItem = cartData.item.map((v) => {
        let medicine = medData.medicine.
            find((m) => m.id === v.pid)

        let fData = { ...medicine, ...v }

        return fData
    })

    const hendaldicment = (id) => {
        dispatch(decrementCart(id))
    }

    const hendalincment = (id) => {
        dispatch(incrementCart(id))
    }


    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-title">
                    <Heading type='h2'>Cart</Heading>
                </div>
                {
                    cartItem.map((c, i) => {
                        return (
                            < div className="card mb-3" >
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex flex-row align-items-center">

                                            <div className="ms-3">
                                                <h5>{c.name}</h5>
                                                <p className="small mb-0"></p>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center">
                                            <div style={{ width: 200 }}>
                                                <button onClick={() => hendaldicment(c.pid)}>-</button>
                                                <h5 className="fw-normal mb-0">{c.qty}</h5>
                                                <button onClick={() => hendalincment(c.pid)}>+</button>
                                            </div>
                                            <div style={{ width: 80 }}>
                                                <h5 className="mb-0">{c.price}</h5>
                                            </div>
                                            <a href="#!" style={{ color: '#cecece' }}><i className="fas fa-trash-alt" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }


            </div>
        </section >
    );
}

export default Cart;