import React from 'react';
import {HomeSection,HomeBtn,HomeInformation,HomeInfo,HomeDesc,HomeTitle,Span} from './indexx.js' 
const Home =() => {
    return (
      <HomeSection>
      <div className="container">
          <HomeInformation>
              <HomeTitle>The Gallery Wall</HomeTitle>
              <HomeInfo>Creative Director</HomeInfo>
              <HomeDesc>
                  Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
              </HomeDesc>
              <HomeBtn>Let's Begin</HomeBtn>
          </HomeInformation>
      </div>
  </HomeSection>
    )
}

export default Home;