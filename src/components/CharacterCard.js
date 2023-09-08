import React, {useState} from "react"; 
import ReactCardFlip from "react-card-flip"; 
import CharacterCardFront from "./CharacterCardFront"; 
import CharacterCardBack from "./CharacterCardBack"; 

export default function CharacterCard( {imageSrc, name, species, status, origin, location} ) {

    const [isFlipped, setIsFlipped] = useState(false); 

    function handleCardClick() {
        setIsFlipped( prev => !prev); 
    }

    return (
        <ReactCardFlip 
            isFlipped={isFlipped} 
            flipDirection="horizontal" 
            infinite="false"
            flipSpeedBackToFront="0.5"
            flipSpeedFrontToBack="0.5"
        >
            <CharacterCardFront 
                handleCardClick={handleCardClick}
                imageSrc={imageSrc}
                name={name} 
                species={species}
            /> 
            <CharacterCardBack 
                handleCardClick={handleCardClick}
                imageSrc={imageSrc}
                status={status} 
                origin={origin}
                location={location}
            /> 
        </ReactCardFlip>
    );
}

