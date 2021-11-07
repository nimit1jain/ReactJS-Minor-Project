import React from 'react'
import "./contact.css";
export default function Contact() {
    return (
        <div className="cont">
            <div className="chotu">

           <h1 className="heading1"> Please give us your suggestions and feedback.</h1>
           <h1 className="heading1"> Feel free to contact us.</h1>
            </div>
        <div id="submit">
            <h1>Submit your queries</h1>
            <form>
                <label>Name</label> <br/>
                <input type="text" placeholder="Enter name...."/> <br/>
                <label>email </label> <br/>
                <input type="text" placeholder="Enter email id...."/><br/>
                <label>Submit your querry</label> <br/>
                <textarea  placeholder="querry...."></textarea> <br/>
                <button class="homebutton" type="submit">Send</button>

            </form>

        </div>
        </div>
    )
}
