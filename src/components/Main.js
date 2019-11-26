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
          
          <h3><i>non-school/non-work, purely personal projects</i></h3>
          <p>...</p>

          <h3>RNG Geographically-Accurate Graphs</h3>
          <p>
            *In Development* Algorithm experimenting with certain principles of graph theory.
            Builds random paths via <i>n</i> number of rooms and cardinal directions (n/s/e/w/ne/nw/se/sw).
            {/* future github link here with number of stars thing */}
          </p>

          <h3>TBAGenerator</h3>
          <p>
            *In Ideation* Build your own text adventure without any code.
          </p>

          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Resume</h2>
          <span className="image main"><img src={profile} alt="" /></span>
          <p>I'm finishing up my BS in Computer Science at Arizona State University. Once I get HW out of the way, I love to dive into my full stack projects, either my tasks at The Luminosity Lab, or my personal projects. My Resume explains it pretty well.</p>
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
              <input className="special" type="submit" value="Send Email"></input>
            </form>
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