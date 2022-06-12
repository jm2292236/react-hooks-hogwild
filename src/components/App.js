import React, { useState } from "react";
import Nav from "./Nav";
// import FilterBar from "./FilterBar";
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
        hogsFiltered.sort((firstHog, secondHog) => {
            if (sortHogs === "weight") {
                return firstHog.weight - secondHog.weight;
            } else {
                return firstHog.name.localeCompare(secondHog.name);
            }
        });
    
    

    function handleShowOnlyGreased() {
        setShowOnlyGreased(showOnlyGreased => !showOnlyGreased);
    }

    function handleSortHogs() {
        setSortHogs(sortHogs => sortHogs === "name" ? "weight" : "name");
    }
        
    
    return (
        <div  className="ui grid container">
            {/* <div className="sixteen wide column centered"> */}
            {/* <div> */}
                <Nav 
                    showOnlyGreased={showOnlyGreased} onChangeShowOnlyGreased={handleShowOnlyGreased} 
                    sortHogs={sortHogs} onChangeSortHogs={handleSortHogs}
                />
            {/* </div> */}

            {/* <div className="sixteen wide column centered"> */}
            {/* <div className="ui eight wide column">
                <FilterBar showOnlyGreased={showOnlyGreased} onChangeShowOnlyGreased={handleShowOnlyGreased} />
            </div> */}

            <div className="ui eight wide column">
                <HogList hogs={hogsFiltered}/>
            </div>
        </div>
	);
}

export default App;
