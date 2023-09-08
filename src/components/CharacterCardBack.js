import React from "react"; 

export default function CharacterCardBack( {handleCardClick, imageSrc, status, origin, location} ) {

    return (

        <div className="character-card backside" onClick={handleCardClick} data-testid="card-backside">
            <div className="character-card-heading" >
                Additional infos 
            </div>

            <div className="character-image-div">
                <img src={imageSrc} alt="" className="character-image-backside"/>
            </div>
            <div className="character-info-container">
                <div >
                    Status: {status}
                </div>

                <div>
                    Origin: {origin}
                </div>

                <div>
                    Location: {location}
                </div>
            </div>
        </div>
    )
}