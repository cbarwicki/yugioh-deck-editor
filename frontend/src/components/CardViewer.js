import React, { useState, useEffect } from "react";
import '../css/CardViewer.css';

function CardViewer ( {id, mainDeck, sideDeck, extraDeck} ) {

    const [message, setMessage] = useState('');

    const API_BASE_URL = process.env.REACT_APP_API_URL;

    const handleSubmit = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/hello/`, { // Adjust URL as needed
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/pdf",
                    // Include CSRF token if necessary for non-GET requests
                    // 'X-CSRFToken': csrfToken, 
                },
                body: JSON.stringify({ mainDeck: mainDeck, sideDeck: sideDeck, extraDeck: extraDeck }),
            })

            const blob = await response.blob();
            const fileURL = URL.createObjectURL(blob);
            window.open(fileURL, "_blank"); // open the PDF in a new tab

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            console.log('Decklist Successfully exported!');
            
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="CardViewer">
            <img src={`https://yugi-card-bucket.s3.us-east-2.amazonaws.com/pics/${id}.jpg`} alt={id} width={528} height={770} />
            <button onClick={handleSubmit} >
                click me
            </button>
        </div>
    );
}

export default CardViewer;