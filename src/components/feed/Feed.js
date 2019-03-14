import React, {Component} from 'react';


import FeedCard from './FeedCard';


const Feed = (props) => {
        const feedItems = props.feed.map(item => {
            return (
                <FeedCard
                    title={item.post_title}
                    presentedBy={item.presented_by}
                    published={item.published}
                    thumbnail={item.thumbnail.url}
                />
            )

        })

        return (
            <div className="feed">
             {feedItems}
            </div>
        )
}

export default Feed