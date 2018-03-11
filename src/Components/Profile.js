import React, { Component } from 'react';
import '../App.css';
import Rag from '../Raghalf.PNG';
import facebook from '../facebook.png'
import insta from '../insta.jpg';
import twitter from '../twitter.jpg'

class Profile extends Component {
   render() {
    return(
      <div className="contianer">
        <div className="row">
          <div className="col-lg-12">
              <div className="bg-image"><img src={Rag} className="rag-pic" alt="logo"/></div>
              <p>Web Developer</p>
              <div className="col-lg-10 ">
              Trying to build Experience with project management tool, source/version control such as: Team Foundation Server, JIRA ,Bitbucket, GIT and Mecurial. 
Extensive knowledge in designing and creating database and tables in SQL and MySql Server. 
Proven track record working with different software development cycle processes: Waterfall, Agile-Scrum and Extreme Programming. 
Experience with multiple web servers including IIS and Apache. 
Excellent experience in implementing UI components using ReactJS along with Redux Framework and JS ES 7 with Strong experience in developing Redux forms with react life cycle. 
Good working knowledge in Flux.
            </div>
            <div className="social">
             <a href="https://www.facebook.com/raghavi.reddy.37"><img src={facebook} class="facebook" alt="logo"/></a>
             <a href="https://www.instagram.com/raga_poreddy"><img src={insta} class="insta" alt="logo"/></a>
             <a href="https://twitter.com/RaghaviReddy9?p=s"><img src={twitter} class="twitter" alt="logo"/></a>
            </div>
          </div>
        </div>
      </div>
    )
 }
}

export default Profile;