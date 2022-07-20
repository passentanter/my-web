import React from 'react';
import {ContactSection , ContactTitle , Span , Form , FormInput , InpuS , InpuSupmit , InputEmail , InputText , TextArea} from './indexx.js'
import Footer  from './../Footer'

const contact =() => {
    return (
     <React.Fragment>
        <ContactSection>
      <div className="container">
          <ContactTitle><Span>Drop </Span>Me A line</ContactTitle>
          <Form action="">
              <FormInput>
                  <InputText type="text" placeholder="Your Name" />
                  <InputEmail type="email" placeholder="Your Email"/>
              </FormInput>
              <InpuS type="text" placeholder="Your Subject"/>
              <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
              <InpuSupmit type="submit" value="Send Message"/>
          </Form>
      </div>
  </ContactSection>
  <Footer />
     </React.Fragment>
    )
}

export default contact;