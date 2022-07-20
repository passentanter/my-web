import React , {Component} from 'react';


import Home from './../Home/index.js'
import About from './../About/index.js'
import Footer from './../Footer/index.js'
import Portfolio from './../Portfolio/index.js'
import Profile from './../Profile/index.js'
import Social from './../Social/index.js'
import Work from './../Work/index.js'

class Index extends Component {
  render() {
    return (
      <div>
        <Home />
        <Work />
        <Portfolio />
        <Profile />
        <About />
        <Social />
        <Footer />
        
      </div>
    )
  }
}

export default Index;
