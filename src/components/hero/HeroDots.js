import React from 'react';
import styled from 'styled-components';

const HeroDots = (props) => {

    const DotItem = styled.li`
        height: 1.3rem;
        width: 1.3rem;
        border-radius: 50%;
        background: gray;
        margin: 0 1.5rem;
    `

    const slideNumber = props.slideNumber

    return (
        <ul className="heroDots">
        {props.hero.map((slideN, index) =>
            <DotItem key={index} onClick={() => props.goToSlide(index)} slide={index} className= {
                index == slideNumber
                  ? "heroDots--active"
                  : "heroDots--inactive"
              }>
            </DotItem>
          )}
        </ul>
    )
}

export default HeroDots;