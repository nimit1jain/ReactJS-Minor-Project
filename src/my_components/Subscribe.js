import React from 'react'
import { useState } from 'react';
import "./services.css";
export default function Subscribe() {
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
        </div>
    )
}
