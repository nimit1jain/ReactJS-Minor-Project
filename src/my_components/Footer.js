import React from 'react'
import "./footer.css";
function Footer() {
    return (
        <div className="footer">
            <div className="footer__feedback">
                <h2 className="footer__heading">Feedback</h2>
                <p>Please give us your suggestions and feedback</p>
                <p>Constructive criticism is well apreciated</p>
                <div className="footer__heading__links">
                    <a className="footer__header__link" href="#">Click here for feedback form</a>
                    <a className="footer__header__link" href="#">Privacy Policy</a>
                    <a className="footer__header__link" href="#">Copyright Policy</a>
                </div>
            </div>
            <div className="footer__logo">
                <div>
                    <img className="footer__image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz8rVV0eF1tQjJ8YxPrB8FFF48I9FGMCrc7w&usqp=CAU" alt="logo"/>
                </div>
                <div className="footer__title">AmeWeb</div>
            </div>
            <div className="footer__connect">
                <p>Contact Us</p>
                <p>Follow Us</p>
                <p className="footer__social">
                    
                </p>
                <p>&#169; AmeWeb</p>
                <p>All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer
