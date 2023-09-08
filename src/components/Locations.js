import {React, useState} from 'react'
import { useLocations } from "../api/useData";
import LocationsPage from './LocationsPage';

export default function Locations () {

    const [pageNumber, setPageNumber] = useState(1);
    const locations = useLocations(pageNumber);
    const result = locations.results;

    return (
        <div>
            {locations !== "Loading..." &&
            <LocationsPage
                result={result}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
            /> }
         </div>
    )
}