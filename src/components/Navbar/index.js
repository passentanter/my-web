import React from 'react';
import { Link } from 'react-router-dom';
import {NavbarSection , Logo , LogoText , UlList , ListItem , Acuor , StyledLink} from './indexx.js'

const Navbar =() => {
    return (
        <NavbarSection>     
            <div className="container">
                
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                
                <UlList>
                    <ListItem><StyledLink to="/">Home</StyledLink></ListItem>
                    <ListItem><Acuor href="#">Work</Acuor></ListItem>
                    <ListItem><Acuor href="#">Portfolio</Acuor></ListItem>
                    <ListItem><Acuor href="#">Resume</Acuor></ListItem>
                    <ListItem><Acuor href="#">About</Acuor></ListItem>
                    <ListItem><StyledLink to="/contact">Contact</StyledLink></ListItem>
                </UlList>
                
            </div>
         </NavbarSection>
    )
}

export default Navbar;