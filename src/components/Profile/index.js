import React from 'react';
import {ProfileSection , Parent  , ProfileItem , ProfileList , Proffile , ProfileTitle ,ParentSpan ,
Span , SpanWeb , Skills , SkillsDesc , Bar , BarPerc , BarTitle  , SkillsTitle } from './indexx.js'

const Profile =() => {
    return (
      <ProfileSection>
      <div className="container">
          <Proffile>
              <ProfileTitle><SkillsTitle>My </SkillsTitle>Profile</ProfileTitle>
              <ProfileList>
                  <ProfileItem>
                      <Span>Name</Span>
                      passent anter
                  </ProfileItem>
                  <ProfileItem>
                      <Span>Birthday</Span>
                      21/1/1996
                  </ProfileItem>
                  <ProfileItem>
                      <Span>Address</Span>
                      Ain shams
                  </ProfileItem>
                  <ProfileItem>
                      <Span>Phone</Span>
                      4444 5555 6666
                  </ProfileItem>
                  <ProfileItem>
                      <Span>Email</Span>
                      passent@passent.com
                  </ProfileItem>
                  <ProfileItem>
                      <Span>Website</Span>
                      <SpanWeb>www.google.com</SpanWeb>
                  </ProfileItem>
              </ProfileList>
          </Proffile>
          
          <Skills>
              <ProfileTitle>Some <SkillsTitle>skills</SkillsTitle></ProfileTitle>
              <SkillsDesc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
              </SkillsDesc>
              <Bar>
                  <BarTitle>Bootstrap</BarTitle>
                  <BarPerc>100%</BarPerc>
                  <Parent>
                      <ParentSpan sp1></ParentSpan>
                  </Parent>
              </Bar>
              <Bar>
                  <BarTitle>CSS3</BarTitle>
                  <BarPerc >90%</BarPerc>
                  <Parent>
                      <ParentSpan sp2 ></ParentSpan>
                  </Parent>
              </Bar>
              <Bar>
                  <BarTitle>Photoshop</BarTitle>
                  <BarPerc>80%</BarPerc>
                  <Parent>
                      <ParentSpan sp3></ParentSpan>
                  </Parent>
              </Bar>
          </Skills>
          
      </div>
  </ProfileSection>
    )
}

export default Profile;