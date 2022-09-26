import React from 'react'
import "./footer.css";


const Footer = () => {

    const year = new Date().getFullYear();
    console.log(year);

    return (
        <footer>
            <div className="footer_container">
                <div className="footr_details_one">
                    <h3>Get to Know US</h3>
                    <p>About us</p>
                    <p>Careers</p>
                    <p>Press Releases</p>
                    <p>Amazon Cares</p>
                </div>
                <div className="footr_details_one">
                    <h3>Let Us Help You</h3>
                    <p>Customer Service</p>
                    <p>Shipping Rates & Policies</p>
                    <p>Business FAQ</p>
                </div>
                <div className="footr_details_one forres">
                    <h3>Work with Amazon</h3>
                    <p>Sell</p>
                    <p>Fulfillment By Amazon</p>
                    <p>Advertise on Amazon</p>
                </div>
                <div className="footr_details_one forres">
                    <h3>Business Settings</h3>
                    <p>Add team members</p>
                    <p>Buying Policies & Approvals</p>
                    <p>Billing and Shipping</p>
                </div>
            </div>
            <div className="lastdetails">
                <img src="./amazon_PNG25.png" alt="logo" />
                <p>Conditions of Use & Sale &nbsp; &nbsp;&nbsp;  Privacy Notice  &nbsp; &nbsp;&nbsp; Interest-Based Ads  &nbsp; &nbsp;&nbsp;  © 1996-{year}, Amazon.com, Inc. or its affiliates</p>
            </div>
        </footer>
    )
}

export default Footer
