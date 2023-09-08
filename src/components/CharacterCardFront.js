import React from "react"; 

export default function CharacterCardFront( {handleCardClick, imageSrc, name, species} ) {

    return (
        <div className="character-card" onClick={handleCardClick} data-testid="frontside">
            <div className="character-image-div">
                <img src={imageSrc} alt="" className="character-image"/>
            </div>
            <div className="character-card-info"> 
                <div className="character-name">
                    Name: {name}
                </div>
                <div className="character-species">
                    Species: {species}
                </div>
            </div>
        </div>
    );
}