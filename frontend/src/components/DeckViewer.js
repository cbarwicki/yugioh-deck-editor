import React, { useState } from "react";
import '../css/DeckViewer.css';
import Card from "./Card.js";
import Grid from '@mui/material/Grid';

function DeckViewer ( { id, setCurrentCardId, mainDeck, sideDeck, extraDeck, removeFromDeck, removeFromSideDeck, removeFromExtraDeck } ) {

    return (
        <div className="DeckViewer">
            <div className="textDiv">
                Main Deck:
            </div>
            <div className="MainDeck">
                <Grid container spacing={1.5} className="CardList">
                    {mainDeck.map((cardId) => (
                    <Grid onClick={() => removeFromDeck(cardId)} >
                        <Card id={cardId} setCurrentCardId={setCurrentCardId} />
                    </Grid>
                    ))}
                </Grid>
            </div>
            <div className="textDiv">
                Side Deck:
            </div>
            <div className="SideDeck">
                <Grid container spacing={1.5} className="CardList">
                    {sideDeck.map((cardId) => (
                    <Grid onClick={() => removeFromSideDeck(cardId)}>
                        <Card id={cardId} setCurrentCardId={setCurrentCardId} />
                    </Grid>
                    ))}
                </Grid>
            </div>
            <div className="textDiv">
                Extra Deck:
            </div>
            <div className="ExtraDeck">
                <Grid container spacing={1.5} className="CardList">
                    {extraDeck.map((cardId) => (
                    <Grid onClick={() => removeFromExtraDeck(cardId)}>
                        <Card id={cardId} setCurrentCardId={setCurrentCardId} />
                    </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
}

export default DeckViewer;