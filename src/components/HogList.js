import React, { useState } from "react";
import Hog from "./Hog";
import { v4 as uuid } from "uuid";

function HogsList({ hogs }) {
    const [visible, setVisible] = useState(true);

    function handleVisibleBtnClick() {
        setVisible(visible => !visible);
    }    

    const hogsList = 
        hogs.map(hog => {
            console.log("map running...");
            return (
                <Hog 
                    key={uuid()}
                    name={hog.name} 
                    image={hog.image} 
                    specialty={hog.specialty} 
                    greased={hog.greased}
                    weight={hog.weight}
                    medal={hog["highest medal achieved"]}
                />
            )
        });


 
	return (
        <>
            {hogsList}
        </>
	);
};

export default HogsList;
