import React from "react";
import '../css/CardViewer.css';

function CardViewer ( {id} ) {
    return (
        <div className="CardViewer">
            <img src={`https://yugi-card-bucket.s3.us-east-2.amazonaws.com/pics/${id}.jpg`} alt={id} width={528} height={770} />
        </div>
    );
}

export default CardViewer;