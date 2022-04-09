import React from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

export const Shop = () => {
    const dispatch = useDispatch();
    const {removeFromCart, addToCart} = bindActionCreators(actionCreators, dispatch);
    return (
        <div>
            <div className="container">
                <div className="row my-3">
                    <div className="card col-md-4">
                        <img src="https://i0.wp.com/ladystations.com/wp-content/uploads/2022/03/0014-2_5_e0f59130-5205-455b-acb0-0da4eea9036e.jpg?fit=864%2C1080&ssl=1" className="card-img-top my-3" style={{height: '300px'}} alt="Nike" />
                        <div className="card-body">
                            <h5 className="card-title">Buy Nike Shoes 1000 Rs.</h5>
                            <p className="card-text">Your Wardrobe With The Must Haves. Limited Stock Available! Cash On Delivery. Shop for casual shoes & sports shoes for men, women & kids from Nike online.</p>
                            
                            <button className="btn btn-outline-danger mx-2" onClick={ () => {removeFromCart(1)}}>-</button>
                            <button type="button" class="btn btn-warning">Add to cart</button>
                            <button className="btn btn-outline-success mx-2" onClick={ () => {addToCart(1)}}>+</button>
                        </div>
                    </div>
                    <div className="card col-md-4">
                        <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/84128f07a3714e968c7cadcd00b8abe3_9366/Runstunner_M_Blue_EY3166_01_standard.jpg" className="card-img-top my-3" style={{height: '300px'}} alt="Addidas" />
                        <div className="card-body">
                            <h5 className="card-title">Buy Addidas Shoes 2000 Rs.</h5>
                            <p className="card-text">Boost your savings. Grab your adidas favourites. Reboot your wardrobe with adidas. You'll be feeling fresh in no time. Cash on Delivery. Free Shipping. adidas® Official Shop.</p>
                            
                            <button className="btn btn-outline-danger mx-2" onClick={ () => {removeFromCart(1)}}>-</button>
                            <button type="button" class="btn btn-warning">Add to cart</button>
                            <button className="btn btn-outline-success mx-2" onClick={ () => {addToCart(1)}}>+</button>
                        </div>
                    </div>
                    <div className="card col-md-4">
                        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/388892/03/sv01/fnd/IND/fmt/png/Duke-Men's-Shoes" className="card-img-top my-3" style={{height: '300px'}} alt="Puma" />
                        <div className="card-body">
                            <h5 className="card-title">Buy Puma Shoes 3000 Rs.</h5>
                            <p className="card-text">PUMA Men's Shoes - Shop from the latest new season collection of casual shoes, sports & running shoes for men at lowest prices on PUMA India Official online.</p>
                            
                            <button className="btn btn-outline-danger mx-2" onClick={ () => {removeFromCart(1)}}>-</button>
                            <button type="button" class="btn btn-warning">Add to cart</button>
                            <button className="btn btn-outline-success mx-2" onClick={ () => {addToCart(1)}}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
