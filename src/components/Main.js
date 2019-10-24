import React from 'react'
import PropTypes from 'prop-types'
import kipSite from '../images/kipSite.png'
import kipController from '../images/controller.jpg'
import profile from '../images/profile.jpg'
import resume from '../images/resume.pdf'

class Main extends React.Component {
  render() {
    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>
    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>

          <h3>KiP - Gatsby App</h3>
          <span className="image main"><img src={kipSite} alt="" /></span>
          <p>KiP is the robotics education platform that I'm working on as one of the developers at the Luminosity Lab at Arizona State University.</p>
          <p>Created a web app using Gatsby.js for KiP. Click <a href="https://kipkit.io">here</a> to check it out.</p>

          <h3>KiP - React Native App</h3>
          <span className="image main"><img src={kipController} alt="" /></span>
          <p>Spearheaded the creation of the mobile app that has become the working controller of the robot's movement and arm gestures. All done in React Native, along with the help of my supervisor, <a href="https://cadams.io/">Chase Adams</a>.</p>
          
          {/* <ul>
            <li><a href='../games/dudeinamaze.html'>A Dude In A Maze</a></li> 
            <li><a href='../games/escape.html'>Escape</a></li>
          </ul> */}
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About & Resume</h2>
          <span className="image main"><img src={profile} alt="" /></span>
          <p>I'm currently pursuing a Computer Science bachelor's degree at Arizona State University. When I'm not studying I'm probably either reading Harry Potter or coding at my job at the Luminosity Lab, where I'm a software developer specializing in front-end web technologies and mobile app development. </p>
          <p>If I'm not doing any of that I might be in the gym pumping wicked heavy iron, eating bricks, or hammering nails lololol</p>
          <ul>
            <li><a href={resume}>Resume</a></li>
          </ul>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
            <p className="major">Thanks for getting in touch. Reach out however you'd like.</p>
            <form action="mailto:shaefferjd@gmail.com">
            <input className = "special" type="submit" value="Send Email"></input></form>
          <ul className="icons">
            <li><a href="https://www.linkedin.com/in/j-d-s-0b5751132/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            <li><a href="https://github.com/jdshaeffer" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main