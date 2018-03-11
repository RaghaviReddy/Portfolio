import React, { Component } from 'react';
import '../App.css';

class Resume extends Component {
    render() {
        return(
            <div className="contianer">
              <div className="row">
                <div className="col-lg-12">
                <div className="Box">
                  <div className="Resume">Resume</div>
                  <div className="Ps">Professional Summary</div>
                  <div className="row">
                    <div className="col-lg-12">
                    <div className="Summary">
                    <ul><li>Web Development experience in designing, developing and deploying web applications.</li>
                    <li>Acquired knowledge over the years by working on all aspects of web development, from front-end to back-end.</li> 
                    <li>Highly Proficient at building a single page application(SPA) and responsive website using Angular and ReactJS.</li>
                    <li>Excellent knowledge in implementing AJAX method to communicate with a server.</li>
                    <li>Experience with project management tool, source/version control such as: Team Foundation Server, JIRA ,Bitbucket and GIT.</li>
                    <li>Extensive knowledge in designing and creating database and tables in SQL and MySql Server.</li>
                    <li>Proven track record working with different software development cycle processes: Waterfall and  Agile-Scrum.</li>
                    <li>Experience implementing REST API with Jersey.</li>
                    <li>NPM package manager tools (Node JS). </li>
                    <li>Strong exposure understanding and implementing with J2EE design patterns like MVC, Front Controller, and Factory Design pattern, Value Object, Singleton.</li>
                    <li>Proficiency in developing Model View Controller (MVC) Architecture based applications.</li>
                    <li>Good Knowledge with Multithreading, Collections and Exceptions.</li>
                    <li>Valuable team player with excellent communication skills, troubleshooting skills with ability to learn and adapt to new technologies quickly.</li></ul>
                    </div>
                    </div> 
                  </div>
                  <div className="Ed">Education</div>
                  <div className="row">
                    <div className="col-lg-12">
                  <div className="Education"><ul><li> <b>NorthWestern Polytechnic University</b>: Masters in Computer Science</li>
                    <li><b>Gudlavalleru Engineering College</b>:Bachelors in Civil Engineering</li></ul></div>
                    </div> 
                  </div>
                  <div className="Sk">Skills</div>
                  <div className="row">
                    <div className="col-lg-12">
                    <div className="Skills"><ul><li><b>Web Development</b>: HTML5, SASS, CSS, CSS3, JavaScript,JSON, JDBC, AJAX, XML, MVC, DOM, Java.</li>
                    <li><b>JavaScript Libraries</b>: JQuery, React.js, Angular2, Node.js, Bootstrap.</li>
                    <li><b>Database</b>: MySQL, SQL, MongoDB.</li>
                    <li><b>Operating System</b>: Windows,Mac OS X.</li>
                    <li><b>Methodologies</b>: Agile, Scrum, Waterfall</li>
                    <li><b>IDEs</b>: Notepad++, Eclipse, Visual Studio Code, SharePoint, Visual Studio.</li></ul></div>
                    </div> 
                  </div>
                  <div className="Cw">Companies Worked</div>
                  <div className="row">
                    <div className="col-lg-12">
                    <div className="Company"><ul>
                    <li><b>State Of California</b> ~ UI Developer</li>
                    <li><b>Meeami Technologies</b> ~ ReactJS Developer</li>
                    <li><b>Huddl</b> ~ Angular 2 Developer</li></ul></div>
                    </div> 
                  </div>
                 </div>
                </div>
              </div>
            </div>
        )
    }
}

export default Resume;