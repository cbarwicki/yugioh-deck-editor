import React from "react";
import { useState } from 'react';
import CardSearch from "./CardSearch.js";
import CardViewer from "./CardViewer.js";
import Background from "../img/bls.jpg";
import DeckViewer from "./DeckViewer.js";

function YugiApp () {

    const [currentCardId, setCurrentCardId] = useState("78872731");
    const [mainDeck, setMainDeck] = useState([]);
    const [sideDeck, setSideDeck] = useState([]);
    const [extraDeck, setExtraDeck] = useState([]);
    const [addToSide, setAddToSide] = useState(false);
    const [count, setCount] = useState(0);

    const addToDeck = (card) => {
        const quanityOfCardInMain = mainDeck.filter((cardInDeck) => {
                return (
                    cardInDeck == card.id
                );
            }).length;
        const quanityOfCardInSide = sideDeck.filter((cardInDeck) => {
                return (
                    cardInDeck == card.id
                );
            }).length;
        const quanityOfCardInExtra = extraDeck.filter((cardInDeck) => {
                return (
                    cardInDeck == card.id
                );
            }).length;
        const totalQuantityOfCard = quanityOfCardInMain + quanityOfCardInSide + quanityOfCardInExtra;
        if (totalQuantityOfCard < 3) {
            if (addToSide) {
                if (sideDeck.length < 15){
                    sideDeck.push(card.id);
                }
            }
            else if (card.frameType == "fusion" 
                || card.frameType == "synchro" 
                || card.frameType == "xyz" 
                || card.frameType == "link") {
                if (extraDeck.length < 15){
                    extraDeck.push(card.id);
                    console.log(card);
                }
            }
            else {
                if (mainDeck.length < 60) {
                    mainDeck.push(card.id);
                    console.log(card);
                }
            }
        }
        setCount(count+1);
    };

    const updateAddToSide = (newAddToSide) => {
        setAddToSide(newAddToSide);
    };

    const removeFromDeck = (card) => {
        mainDeck.splice(mainDeck.indexOf(card), 1);
        setCount(count+1);
    };

    const removeFromSideDeck = (card) => {
        sideDeck.splice(sideDeck.indexOf(card), 1);
        setCount(count+1);
    };

    const removeFromExtraDeck = (card) => {
        extraDeck.splice(extraDeck.indexOf(card), 1);
        setCount(count+1);
    };

    return (
        <div style={
        {backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${Background})`,
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        }}>
            Yugioh Deck Editor
            <CardViewer id={currentCardId} />
            <DeckViewer 
                setCurrentCardId={setCurrentCardId} 
                mainDeck={mainDeck} sideDeck={sideDeck} 
                extraDeck={extraDeck} 
                removeFromDeck={removeFromDeck} 
                removeFromSideDeck={removeFromSideDeck} 
                removeFromExtraDeck={removeFromExtraDeck}
            />
            <CardSearch 
                setCurrentCardId={setCurrentCardId} 
                addToDeck={addToDeck} 
                updateAddToSide={updateAddToSide} 
            />
        </div>
    );
}

export default YugiApp;