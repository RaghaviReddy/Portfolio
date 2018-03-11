import React, { Component } from 'react';
import mail from '../mail.png';
import phone from '../phone.png';
import Skype from '../Skype.png';

class Contact extends Component {
    render() {
        return(
            <div className="contianer">
              <div className="row">
                <div className="col-lg-12">
                  <div className="Contact">Contact</div>
                    <div className="mail"><img src={mail} class="mail" alt="logo"/>prrporeddy09@gmail.com</div>
                    <div className="phone"><img src={phone} class="phone" alt="logo"/>669-233-9566</div>
                    <div className="skype"><img src={Skype} class="phone" alt="logo"/>raghavireddy449</div>
                </div> 
              </div>
            </div>
        )
    }
}

export default Contact;