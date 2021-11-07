// import React, { Component } from 'react'
import React from 'react'
import { useState } from "react";
import "./services.css";
const Services=() => {
    const [email, setName] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        // alert('The name you entered was: ${email}')
        console.log(email);
      }
    return (
        <div>

<section id="newsletter">
    <div class="container">
        <h1>Subscribe to AmeWeb</h1>
        <form onSubmit={handleSubmit} >
            <input type="email"  value={email}
          onChange={(e) => setName(e.target.value)} placeholder="Type your email....">
              </input >
            <button  type="submit" class="homebutton"> Subscribe</button>
        </form>
    </div>
</section>



<section id="services">
    <div className="container">
        <article id="servicelist">

            <h1 id="heading">Services</h1>
            <ul>
                <li id="webd">
                    <h1>Website Design</h1>
                    <p> We are software professionals.We are also here to construct websites from scratch for you. Helping our clients implement,design,deploy and sustain websites. </p>

                </li>
                <li id="webh">
                    <h1>Web Hosting</h1>
                    <p>We provide the global exposure to your websites and softwares by hosting it through our client based server.</p>
                </li>
                <li id="webm">
                    <h1>Web Maintainance</h1>
                    <p>We not only Design Websites for you, we manages the databse and ensures the proper working of the website. Our software professionals have helped many organizations to achieve their goals.</p>
                </li>
            </ul>
        </article>
        

    </div>
</section>

        </div>
        
    )
};

export default Services;

