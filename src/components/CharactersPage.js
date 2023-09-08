import React from "react"; 
import CharacterCard from "./CharacterCard"
import Pagination from "./Pagination"
import Navbar from "./Navbar";

const NUMBER_OF_PAGES = 42; 

export default function CharactersPage( {charactersData, pageNumber, setPageNumber}) {

    const characterElements = charactersData.map( item => {
        return (
            <CharacterCard 
                key = {item.id}
                id = {item.id}
                imageSrc = {item.image}
                name = {item.name}
                species = {item.species}
                status = {item.status}
                origin = {item.origin.name}
                location = {item.location.name} 
            />
        )});

        return (
            <div>
                <Navbar /> 
                <div className="character-page"> 
                    <div className="character-heading">
                        Overview
                    </div>

                    <div className="character-container">
                        {characterElements}
                    </div>    

                    <Pagination 
                        pageNumber={pageNumber}
                        setPageNumber={setPageNumber}
                        numberOfPages={NUMBER_OF_PAGES}
                    /> 
                </div>
            </div>
        );
}