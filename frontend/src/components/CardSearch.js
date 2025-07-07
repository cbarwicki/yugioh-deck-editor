import React, { useState, useEffect } from "react";
import cardinfo from "../cardinfo.json";
import Card from "./Card.js";
import Grid from '@mui/material/Grid';
import '../css/CardSearch.css';

function CardSearch ( { setCurrentCardId, addToDeck, updateAddToSide } ) {

    const [input, setInput] = useState("");
    const [debouncedInput, setDebouncedInput] = useState("");
    const [results, setResults] = useState([]);

    const [cardTypeFilter, setCardTypeFilter] = useState("");
    const [attributeFilter, setAttributeFilter] = useState("");
    const [typeFilter, setTypeFilter] = useState("");
    const [levelFilter, setLevelFilter] = useState("");
    const [linkFilter, setLinkFilter] = useState("");

    const delay = 1000;

    // Update debounced input after delay
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedInput(input);
        }, delay);

        return () => clearTimeout(handler); // Clear timeout on input change
    }, [input, delay]);

    // Trigger search when debounced input changes or if filters change
    useEffect(() => {
        if (debouncedInput == "") {
            return;
        }
        var searchResults = cardinfo.data.filter((card) => {
          return (
            card &&
            card.name &&
            card.name.toLowerCase().includes(debouncedInput.toLowerCase()) &&
            card.type.includes(cardTypeFilter)
          );
        });
        // Applies filters for monster cards
        if (cardTypeFilter == "Monster") {
            searchResults = searchResults.filter((card) => {
                return (
                    card.attribute.includes(attributeFilter) &&
                    card.race.includes(typeFilter) &&
                    (card.level == levelFilter || levelFilter == "") &&
                    ((card.frameType == "link" && card.linkval == linkFilter) || linkFilter == "")
                );
            });
        }
        else if (cardTypeFilter == "Spell") {
            searchResults = searchResults.filter((card) => {
                return (
                    card.race.includes(typeFilter)
                );
            });
        }
        else if (cardTypeFilter == "Trap") {
            searchResults = searchResults.filter((card) => {
                return (
                    card.race.includes(typeFilter)
                );
            });
        }
        setResults(searchResults);
    }, [debouncedInput, cardTypeFilter, attributeFilter, typeFilter, levelFilter, linkFilter]);

    const handleChange = (value) => {
        setInput(value);
        console.log(value);
    };

    const handleCardTypeChange = (value) => {
        setCardTypeFilter(value);
        // Whenever card type filter changes, all secondary filters should reset
        setAttributeFilter("");
        setTypeFilter("");
        setLevelFilter("");
        setLinkFilter("");
    };

    return (
        <div className="CardSearch">
            <input
                className="Search"
                placeholder="Type to search..."
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
            <div>
                Card Type:
                <select className="Dropdown" onChange={(e) => handleCardTypeChange(e.target.value)}>
                    <option value=""></option>
                    <option value="Monster">Monster Card</option>
                    <option value="Spell">Spell Card</option>
                    <option value="Trap">Trap Card</option>
                </select>
            </div>
            {cardTypeFilter == "Monster" ? (
                <div>
                    Attribute:
                    <select className="AttributeDropdown" onChange={(e) => setAttributeFilter(e.target.value)}>
                        <option value=""></option>
                        <option value="DARK">DARK</option>
                        <option value="LIGHT">LIGHT</option>
                        <option value="FIRE">FIRE</option>
                        <option value="WATER">WATER</option>
                        <option value="WIND">WIND</option>
                        <option value="EARTH">EARTH</option>
                        <option value="DIVINE">DIVINE</option>
                    </select>
                    Type:
                    <select className="TypeDropdown" onChange={(e) => setTypeFilter(e.target.value)}>
                        <option value=""></option>
                        <option value="Aqua">Aqua</option>
                        <option value="Beast">Beast</option>
                        <option value="Beast-Warrior">Beast-Warrior</option>
                        <option value="Cyberse">Cyberse</option>
                        <option value="Dinosaur">Dinosaur</option>
                        <option value="Divine-Beast">Divine-Beast</option>
                        <option value="Dragon">Dragon</option>
                        <option value="Fairy">Fairy</option>
                        <option value="Fiend">Fiend</option>
                        <option value="Fish">Fish</option>
                        <option value="Illusion">Illusion</option>
                        <option value="Machine">Machine</option>
                        <option value="Plant">Plant</option>
                        <option value="Psychic">Psychic</option>
                        <option value="Pyro">Pyro</option>
                        <option value="Reptile">Reptile</option>
                        <option value="Rock">Rock</option>
                        <option value="Sea Serpent">Sea Serpent</option>
                        <option value="Spellcaster">Spellcaster</option>
                        <option value="Thunder">Thunder</option>
                        <option value="Warrior">Warrior</option>
                        <option value="Winged Beast">Winged Beast</option>
                        <option value="Wyrm">Wyrm</option>
                        <option value="Zombie">Zombie</option>
                    </select>
                    Level/Rank:
                    <input className="LevelInput" type="number" min={1} max={12} onChange={(e) => setLevelFilter(e.target.value)} />
                    Link Rating:
                    <input className="LinkInput" type="number" onChange={(e) => setLinkFilter(e.target.value)} />
                </div>
            ) : (
                null
            )}
            {cardTypeFilter == "Spell" ? (
                <div>
                    Type:
                    <select className="TypeDropdown" onChange={(e) => setTypeFilter(e.target.value)}>
                        <option value=""></option>
                        <option value="Continuous">Continuous</option>
                        <option value="Equip">Equip</option>
                        <option value="Field">Field</option>
                        <option value="Ritual">Ritual</option>
                        <option value="Quick-Play">Quick-Play</option>
                    </select>
                </div>
            ) : (
                null
            )}
            {cardTypeFilter == "Trap" ? (
                <div>
                    Type:
                    <select className="TypeDropdown" onChange={(e) => setTypeFilter(e.target.value)}>
                        <option value=""></option>
                        <option value="Continuous">Continuous</option>
                        <option value="Counter">Counter</option>
                    </select>
                </div>
            ) : (
                null
            )}
            <div className="AddToSide" >
                <input 
                    type="checkbox" 
                    name="addToSide"
                    defaultChecked={false}
                    onChange={(e) => updateAddToSide(e.target.checked)}
                /> Add To Side Deck
            </div>
            <Grid container spacing={1.5} className="CardList">
                {results.map((card) => (
                <Grid key={card.id} onClick={() => addToDeck(card)} >
                    <Card id={card.id} name={card.name} desc={card.desc} setCurrentCardId={setCurrentCardId} />
                </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default CardSearch;