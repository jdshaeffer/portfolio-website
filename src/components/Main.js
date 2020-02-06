import React from 'react'
import PropTypes from 'prop-types'

import profile from '../images/profile.jpg'
import resume from '../images/resume.pdf'

class Main extends React.Component {
  render() {
    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>
    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Personal Projects</h2>
          
          <h3><a href="https://github.com/jdshaeffer/dunnet-solver">Dunnet Solver</a></h3>
          <p>
            Python script for the beloved Emacs text adventure, Dunnet, by Ron Schnell.
            Solves Dunnet in style.
          </p>
          
          <h3>Gear Calculator</h3>
          <p>
            -- In Development -- 
            Better, more efficient gear research for improved trips in the backcountry - the one-stop-shop for gear research
          </p>

          <h3>RNG Geographically-Accurate Graphs</h3>
          <p>
            -- In Development -- Algorithm experimenting with certain principles of graph theory.
            Builds random paths via <i>n</i> number of rooms and cardinal directions (n/s/e/w/ne/nw/se/sw).
            {/* future github link here with number of stars thing */}
          </p>

          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Resume</h2>
          <span className="image main"><img src={profile} alt="" /></span>
          <p>I'm a full-stack developer and stuff. My Resume explains it pretty well.</p>
          <ul>
            <li><a href={resume}>Resume</a></li>
          </ul>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <p className="major">Thanks for getting in touch. Reach out however you'd like.</p>
          <p><b>shaefferjd@gmail.com</b></p>
          <ul className="icons">
            <li><a href="https://www.linkedin.com/in/j-d-s-0b5751132/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            <li><a href="https://github.com/jdshaeffer" className="icon fa-github"><span className="label">GitHub</span></a></li>
            <li><a href="https://twitter.com/jdshaeff" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
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