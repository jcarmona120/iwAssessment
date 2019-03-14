import React, {Fragment} from 'react';
import styled from 'styled-components';

const Caption = styled.div`
    position: absolute;
    color: white;
    top: 45%;
    left: 10%;
    z-index: 2;
    text-align: left;
    transform: translate(0%, -15%);
    animation: 2s enter;

    @media (min-width: 85em) {
        width: 85%;
    }
`
const ListItem = styled.li`
   height: 50rem;
   width: 100%;

   @keyframes enter {
       0% {
           opacity: 0;
       }

       100% {
           opacity: 1;
       }
   }

   &::before {
    content: '';
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    animation: .3s enter;
  }

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
    animation: .6s enter;
    transition: background-image .3s ease-in;


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