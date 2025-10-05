import React, { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import '../css/Card.css';

const Card = React.memo(function Card ({ id, name, desc, setCurrentCardId } ){

    const cardPic = `https://yugi-card-bucket.s3.us-east-2.amazonaws.com/pics_small/${id}.jpg`;

    const handleClick = () => {
        console.log(`${name} added to deck!`)
     };

    const handleHover = () => {
        console.log(`${name} is now selected`)
        setCurrentCardId(id)
     };

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <div 
            className="card-container" 
            onClick={handleClick} 
            onMouseEnter={handleHover} 
            ref={ref}
        >
            {inView ? (
                <div>
                    <img 
                        src={cardPic} 
                        alt={id} 
                        height={98} 
                        width={67} 
                        className="card-image"
                    />
                    {console.log(`${name} is rendered`)}
                </div>
            ) : (
                <div className="card-loading" />
            )}
        </div>
    );
})

export default Card;

