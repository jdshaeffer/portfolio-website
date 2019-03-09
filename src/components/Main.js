import React from 'react'
import PropTypes from 'prop-types'
import pic03 from '../images/pic03.jpg'
import kipSite from '../images/kipSite.png'
import kipController from '../images/controller.jpg'
import gearCalc from '../images/GearCalc.png'

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
          
          <h3>The Gear Calculator - iOS App</h3>
          <span className="image main"><img src={gearCalc} alt="" /></span> {/* it's way too big */}
          <p>A huge stress for many thru-hikers is to keep their packs as light as possible. In order to alleviate the time-consuming activities of gear research and weighing, I built The Gear Calculator to let hikers see a huge selection of gear and its data all in one place. Think <a href="https://lighterpack.com">LighterPack</a>, only you don't have to manually input any weight or anything.</p>

          <h3>A New Approach to Data Collection</h3>
          <p>Researching the ways that fun text-based adventures can be used as a data collection tool. It's currently in the development stages, but in the meantime, try out some of the beta versions of the games that have been made available so far.</p>
          <ul>
            <li><a href="">A Dude In A Maze</a></li>
            <li><a href="">Escape</a></li>
          </ul>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
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