import React from 'react';
import LocationCard from './LocationCard';
import Pagination from './Pagination';
import Navbar from './Navbar';
import './LocationsPage.css';

const NUMBER_OF_PAGES = 7; 

const LocationsPage = ({result, pageNumber, setPageNumber }) => { 

    const renderCards = result.map(item => {
        return (
            <LocationCard 
                key={item.id} 
                id={item.id}  
                name={item.name} 
                type={item.type} 
                dimension={item.dimension} 
            />
        )});
        
    return(
        <div>
            <Navbar />
            <div className="location-page"> 
                <div className="location-heading">
                    Locations
                </div>
                <div className="location-container">   
                    {renderCards}         
                </div>
                <Pagination 
                    pageNumber={pageNumber}
                    setPageNumber={setPageNumber}
                    numberOfPages={NUMBER_OF_PAGES}
                />
            </div>   
        </div>
    )
}

export default LocationsPage;
