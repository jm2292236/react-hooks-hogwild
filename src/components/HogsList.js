import React, { useState } from "react";
import Hog from "./Hog";
import { v4 as uuid } from "uuid";
import Checkbox from "./CheckBox";

function HogsList({ hogs }) {
    const [showOnlyGreased, setShowOnlyGreased] = useState(false);
    const [visible, setVisible] = useState(true);

    const hogsFiltered = hogs.filter((hog) => {
        console.log("filter running...", hog.visible);
        if (!visible) return false;

        if (!showOnlyGreased) return true;

        return hog.greased ? true : false;
    });
    
    
    function handleVisibleBtnClick() {
        setVisible(visible => !visible);
    }    

    const hogsList = hogsFiltered.map(hog => {
        console.log("map running...");
        return (
            <div key={uuid()}>
                <button onClick={() => handleVisibleBtnClick(hog.name)}>
                    {visible ? "Hide" : "Show"}
                </button>
            
                <Hog 
                    name={hog.name} 
                    image={hog.image} 
                    specialty={hog.specialty} 
                    greased={hog.greased}
                    weight={hog.weight}
                    medal={hog["highest medal achieved"]}
                    visible={visible}
                />
            </div>
        )
    });

    function handleShowOnlyGreased() {
        setShowOnlyGreased(!showOnlyGreased);
    }
    
 
	return (
        <div>
            <label>
                <Checkbox label= {"Show only greased hogs"} checked={showOnlyGreased} onChange={handleShowOnlyGreased} />
            </label>
            <hr/>
    
            <div className="ui grid container">
                
                {hogsList}
            </div>
        </div>
	);
};

export default HogsList;
