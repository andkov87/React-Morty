import React, {useState} from 'react';
import ReactCardFlip from 'react-card-flip';
import './LocationCard.css';

const LocationCard = ({name, type, dimension}) => {
  
    const [isFlipped, setIsFlipped] = useState(false);

    function handleCardClick() {
        setIsFlipped( prev => !prev); 
    }

    return (
        <>
            <ReactCardFlip 
                isFlipped={isFlipped} 
                flipDirection="horizontal" 
                infinite="false"
                flipSpeedBackToFront="0.5"
                flipSpeedFrontToBack="0.5"
            >

                <div className="locations-card" onClick={handleCardClick}>
                    <div className="locations-name">
                        Name: {name}
                    </div>
                    <div className="locations-species">
                        Type: {type}
                    </div>
                </div>

                <div className="locations-card backside" onClick={handleCardClick}>
                    <div className="locations-card-heading">
                        Additional infos 
                    </div>
                    <div className="locations-info-container">
                        <div className='locations-dimtext'>
                            Dimension: {dimension}
                        </div>
                    </div>
                </div>
            </ReactCardFlip>
        </>
  )
}

export default LocationCard;
