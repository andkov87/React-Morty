import React, {useState} from "react";
import { useCharacters} from "../api/useData";
import CharactersPage from "./CharactersPage";

export default function Characters() {

    const [pageNumber, setPageNumber] = useState(1); 
    const characters = useCharacters(pageNumber); 
  
    return (
      <div>
        { characters === "Loading..." ? 
          <div className="loading"> Loading ... </div> : 
          <CharactersPage 
            charactersData={characters.results} 
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
          /> } 
      </div>
    )
}