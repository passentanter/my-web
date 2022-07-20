import React , {useState , useEffect} from 'react';
import axios from 'axios'
import {PortfolioSection , PortfolioList , PortfolioTitle , Span , Box , Image , OverLay , OverLaySpan , Items} from './indexx.js'

const Portfolio =() => {

  const [images , setImages ] = useState ([])

  useEffect ( () => {

    axios.get ('js/data.json').then( res => { setImages(res.data.portfolio)})

  } , [] )

  const PortfolioImages = images.map ( (imageItems) => {
    return (
      <Box key = {imageItems.id}>
           <Image src={imageItems.image} alt=""/>
               <OverLay>
                  <OverLaySpan>
                       Show Image
                   </OverLaySpan>
               </OverLay>
       </Box>
    )
  })

    return (
      <PortfolioSection>
            <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
            <PortfolioList>
                <Items active>All</Items>
                <Items>HTML</Items>
                <Items>Photoshop</Items>
                <Items>Wordpress</Items>
                <Items>Mobile</Items>
            </PortfolioList>
            
            <div className="box">
                {PortfolioImages}
            </div>
            
        </PortfolioSection>
    )
}

export default Portfolio;