import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";

import hogs from "../porkers_data";


function App() {
    const [showOnlyGreased, setShowOnlyGreased] = useState(false);
    const [sortHogs, setSortHogs] = useState("name");

    const hogsFiltered = 
        hogs.filter((hog) => {
            if (!showOnlyGreased) return true;

            return hog.greased ? true : false;
        });


        const hogsSorted = 
        sortHogs === "name" ?
        hogsFiltered.sort((firstHog, secondHog) => 
            // return firstHog.name.localeCompare(secondHog.name);
            {
                    const f = firstHog.name.toLocaleLowerCase();
                    const s = secondHog.name.toLocaleLowerCase();
                    return f === s ? 0 : f > s ? 1 : -1;
                }
            )
            :
            hogsFiltered.sort((firstHog, secondHog) => {return firstHog.weight - secondHog.weight;})
        
    
    

    function handleShowOnlyGreased() {
        setShowOnlyGreased(showOnlyGreased => !showOnlyGreased);
    }

    function handleSortHogs() {
        setSortHogs(sortHogs => sortHogs === "name" ? "weight" : "name");
    }
        
    
    return (
        <div >
            <div>
                <Nav 
                    showOnlyGreased={showOnlyGreased} onChangeShowOnlyGreased={handleShowOnlyGreased} 
                    sortHogs={sortHogs} onChangeSortHogs={handleSortHogs}
                />
            </div>

            <div className="ui grid container App">
                <HogList hogs={hogsSorted}/>
            </div>
        </div>
	);
}

export default App;
