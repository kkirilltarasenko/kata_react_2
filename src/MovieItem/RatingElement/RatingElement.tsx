import React, { FC } from 'react';

import './RatingElement.css';

interface RatingElementProps {
    rating: number
}

const RatingElement : FC<RatingElementProps> = ({ rating }) => {
    const ratingClasses : string[] = ["rating__element"];

    if (rating < 3) {
        ratingClasses.push("low");
    } else if (rating < 5) {
        ratingClasses.push("middle");
    } else if (rating < 7) {
        ratingClasses.push("high");
    } else {
        ratingClasses.push("highest");
    }

    return (
        <div className={ratingClasses.join(' ')}>{rating}</div>
    )
}

export default RatingElement;