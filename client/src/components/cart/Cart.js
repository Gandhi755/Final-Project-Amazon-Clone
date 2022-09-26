import { Divider } from '@mui/material';
import React from 'react';
import './cart.css'

const Cart = () => {
    return <div className='cart_section'>
        <div className='cart_container'>
            <div className='left_cart'>
                <img src="" alt='cart_img' />
                <div className='cart_btn'>
                    <button className='cart_btn1'>Add to Cart</button>
                    <button className='cart_btn2'>Buy Now</button>
                </div>
            </div>
            <div className='right_cart'>
                <h3>Fitness Gear</h3>
                <h4>Pigeon Favourite Electric Kettle (1.5 L, Silver, Black)</h4>
                <Divider />
                <p className='mrp'>M.R.P. : ₹</p>
                <p>Deal of the Day : <span style={{ color: "#B12704" }}>₹</span></p>
                <p>You Save : <span style={{ color: "#B12704" }}>₹ (%)</span></p>

                <div className='discount_box'>
                    <h5>Discount : <span style={{ color: "#111" }}>Extra 10% Off</span></h5>
                    <h4>Free Delivery : <span style={{ color: "#111", fontWeight: 600 }}>Oct 8 - 21</span> Details</h4>
                    <p>Fastest delivery : <span style={{ color: "#111", fontWeight: 600 }}>Tomorrow 12 PM</span></p>
                </div>
                <p className="description">About the Item : <span style={{ color: "#565959", fontSize: 14, fontWeight: 500, letterSpacing: "0.4px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor posuere dui, vitae eleifend ligula suscipit eget. Ut nec fermentum ipsum, vel aliquet ex. Curabitur eget magna eu tellus egestas interdum et quis leo. Nullam malesuada, metus sit amet accumsan dictum, lorem dui mattis ipsum, non pulvinar dolor nunc eu odio. Duis in ipsum quis tortor auctor ornare.</span></p>
            </div>
        </div>
    </div>;
};

export default Cart;