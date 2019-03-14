import React from 'react';

const FeedCard = (props) => {

    const postData = {props}

    return (
        <div className="feedCard">
            <div className="feedCard__imageContainer">
                <img src={`https://salty-ridge-25970.herokuapp.com${props.thumbnail}`} alt="{props.title}" className="feedCard__image" />
            </div>
            <div class="feedCard__caption">
                <p className="feedCard__published">{props.published}</p>
                <h2 className="feedCard__title">{props.title}</h2>
                <p className="feedCard__presented">Presented by <a href="" className="feedCard__link">{props.presentedBy}</a></p>
            </div>
            
        </div>
        
    )
}

export default FeedCard;