import "./products.css";
import React from 'react'
import Subscribe from './Subscribe';
const Products=() => {
    return (
        <>
        <div className="heading">
            <h1>Get access to these technologies and learn with us!</h1>
        </div>
        <Subscribe/>
        <section id="boxes">
    <div class="container">
        <div class="box">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/130px-HTML5_logo_and_wordmark.svg.png" alt=""/>
            <h3>HTML 5</h3>
            <p>Get the courses of Html </p>
        </div>
        <div class="box">
            <img src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/css3-512.png" alt="" width="130px"/>
            <h3>CSS 3</h3>
            <p>Style your website with us!</p>
        </div>
        <div class="box">
            <img src="https://static.javatpoint.com/bootstrappages/images/bootstrap-tutorial.png" alt="" height="130px"/>
            <h3>Bootstrap</h3>
            <p>And make it super easy with Bootstrap!</p>
        </div>
        <div class="box">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="" height="130px"/>
            <h3>ReactJS</h3>
            <p>And value to your project using ReactJS</p>
        </div>
        <div class="box">
            <img src="https://splendornet.com/wp-content/uploads/2019/01/django.png" alt="" height="130px"/>
            <h3>Django</h3>
            <p>In demand backend framework</p>
        </div>
        <div class="box">
            <img src="https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png" alt="" height="130px"/>
            <h3>MySQL</h3>
            <p>Best suited database manager for your project</p>
        </div>
    </div>
</section>
</>

    )
};

export default Products;

