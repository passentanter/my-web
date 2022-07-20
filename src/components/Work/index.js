import React , {Component} from 'react';
import axios from 'axios'
import  {WorkeSection , WorkTitle , Span , WorkPart , Icon , PartTitle , Line , PartDesc } from './indexx.js'

class Work extends Component {
  state = {
    works : []
  }

  componentDidMount ()  {
    axios.get ('js/data.json').then( res => { this.setState({works : res.data.works})})
  }


  render (){

    const {works}= this.state;
    const WorkList = works.map ((items) => {
      return (
            <WorkPart first={items.id} key={items.id}>
                <Icon className={items.icon_name}></Icon>
                <PartTitle>{items.title}</PartTitle>
                <Line/>
                <PartDesc>
                    {items.body}
                </PartDesc>
            </WorkPart>
    )
    })

    return (
      <WorkeSection>
      <div className="container">
          <WorkTitle><Span>My</Span> Work</WorkTitle>
          {WorkList}
      </div>
  </WorkeSection>

    )
  }
  
  }

export default Work;