import React from 'react';
import HeroImage from './herolanding.png';
import HeroCard from '../hero/HeroCard';
import HeroDots from './HeroDots';

const Hero = (props) => {
    var slideNumber = props.slideNumber

    const heroItems = props.hero.map(item => {
        return (
            <HeroCard 
                title={item.event_name}
                image={`https://salty-ridge-25970.herokuapp.com${item.event_image.url}`}
                date={item.event_date}
                type={item.event_type}
                desc={item.event_description}
            />
        )
    })

    return (
        <div className="hero" 
            
        >

            <ul className="hero-slides" onTouchStart={props.movingFinger} 
            onTouchEnd={props.endFinger} 
            onTouchMove={props.touchedFinger}>
                {heroItems[slideNumber]}  
            </ul>
          
        </div>
    )

}

export default Hero;