import React, {Fragment} from 'react';
import styled from 'styled-components'
import HeroImage from './herolanding.png';

const Caption = styled.div`
    position: absolute;
    color: white;
    top: 45%;
    left: 10%;
    z-index: 2;
    text-align: left;
    transform: translate(0%, -15%);

    @media (min-width: 85em) {
        width: 85%;
    }
`
const ListItem = styled.li`
   height: 50rem;
   width: 100%;

   &::after {
    content: "";
    background: url(${props => props.image});
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1; 
    background-position: top;
    background-size: cover;  

    @media (max-width: 90em) {
        background-position: top;
    }
  }

   @media (max-width: 37.5em) {
    height: 40rem;
  }
`

const HeroCard = (props) => {
    return (
            <ListItem image={props.image.toString()} className="slideshow__container">
                <Caption class="hero__caption">
                    <h1 className="hero__type">{props.type}</h1>
                    <h1 className="hero__title">{props.title}</h1>
                    <p className="hero__date">{props.date}</p>
                    <p className="hero__desc">{props.desc}</p>
                </Caption>
            </ListItem>
    )
}

export default HeroCard;