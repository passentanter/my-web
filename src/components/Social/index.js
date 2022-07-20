import React , {Component} from 'react';
import axios from 'axios';
import {Soccial , SocialMedia , Icon , Phara , Span , SpanInfo } from './indexx.js';

class Social extends Component {

  state = {
    social:[]
  }

  componentDidMount ()  {
    axios.get ('js/data.json').then( res => { this.setState({social : res.data.social})})
  }

  render(){
    const {social} = this.state;
    const SocialList = social.map ((items) => {
      return (
        <Soccial  item ={items.id} key={items.id}>
            <Icon className={items.icon}></Icon>
            <Phara>
               <Span>{items.title}</Span>
               <SpanInfo>{items.body}</SpanInfo>
            </Phara>
        </Soccial>
      )

    })  

    return (
      <SocialMedia>
      {SocialList}
     </SocialMedia>
    )

  }
}

export default Social;