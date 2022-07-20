import React from 'react';
import {AboutSection , AboutInfo , InfoDesc , InfoTitle , InforDir , Span , Linkk} from './indexx.js'

const About =() => {
    return (
      <AboutSection>
      <div className="container">
          <AboutInfo>
              <InfoTitle><Span>This is</Span> Me</InfoTitle>
              <InforDir>Creative Director</InforDir>
              <InfoDesc>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Linkk href="#">explicabo</Linkk> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
              </InfoDesc>
              <InfoDesc>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
              </InfoDesc>
          </AboutInfo>
      </div>
  </AboutSection>
    )
}

export default About;
