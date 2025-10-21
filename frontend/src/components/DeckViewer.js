import React, { useState } from "react";
import '../css/DeckViewer.css';
import Card from "./Card.js";
import Grid from '@mui/material/Grid';

function DeckViewer ( { id, setCurrentCardId, mainDeck, sideDeck, extraDeck, removeFromDeck, removeFromSideDeck, removeFromExtraDeck } ) {

    return (
        <div className="DeckViewer">
            <div className="deck-section">
                <div className="deck-header">
                    <h3 className="deck-title">Main Deck</h3>
                    <span className="deck-count">{mainDeck.length}/60</span>
                </div>
                <div className="MainDeck">
                    {mainDeck.length === 0 ? (
                        <div className="deck-empty">
                            <div className="deck-empty-text">No cards in main deck</div>
                        </div>
                    ) : (
                        <Grid container spacing={1.5} className="CardList">
                            {mainDeck.map((card, index) => (
                            <Grid key={`main-${card.id}-${index}`} onClick={() => removeFromDeck(card)} >
                                <Card id={card.id} name={card.name} setCurrentCardId={setCurrentCardId} />
                            </Grid>
                            ))}
                        </Grid>
                    )}
                </div>
            </div>

            <div className="deck-section">
                <div className="deck-header">
                    <h3 className="deck-title">Side Deck</h3>
                    <span className="deck-count">{sideDeck.length}/15</span>
                </div>
                <div className="SideDeck">
                    {sideDeck.length === 0 ? (
                        <div className="deck-empty">
                            <div className="deck-empty-text">No cards in side deck</div>
                        </div>
                    ) : (
                        <Grid container spacing={1.5} className="CardList">
                            {sideDeck.map((card, index) => (
                            <Grid key={`side-${card.id}-${index}`} onClick={() => removeFromSideDeck(card)}>
                                <Card id={card.id} name={card.name} setCurrentCardId={setCurrentCardId} />
                            </Grid>
                            ))}
                        </Grid>
                    )}
                </div>
            </div>

            <div className="deck-section">
                <div className="deck-header">
                    <h3 className="deck-title">Extra Deck</h3>
                    <span className="deck-count">{extraDeck.length}/15</span>
                </div>
                <div className="ExtraDeck">
                    {extraDeck.length === 0 ? (
                        <div className="deck-empty">
                            <div className="deck-empty-text">No cards in extra deck</div>
                        </div>
                    ) : (
                        <Grid container spacing={1.5} className="CardList">
                            {extraDeck.map((card, index) => (
                            <Grid key={`extra-${card.id}-${index}`} onClick={() => removeFromExtraDeck(card)}>
                                <Card id={card.id} name={card.name} setCurrentCardId={setCurrentCardId} />
                            </Grid>
                            ))}
                        </Grid>
                    )}
                </div>
            </div>
        </div>
    );
}

export default DeckViewer;