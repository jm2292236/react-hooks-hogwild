import React, { useState } from "react";

function Hog({ name, image, specialty, greased, weight, medal, visible }) {
    const [showDetails, setShowDetails] = useState(false);

    function handleHogClick() {
        setShowDetails(showDetails => !showDetails);
    }



    function renderDetails() {
        return (
            // Show-Hide the details when user clicks the tile
            <div className="extra content">
                <p>Specialty - {specialty}</p> 
                <p>Greased - {greased ? "Yes" : "No"}</p>
                <p>Weight - {weight}</p>
                <p>Highest medal achieved - {medal.toUpperCase()}</p>
            </div>
        )
    }


    return (
        <div className="ui card four wide column" onClick={handleHogClick}>
            <div>
                <img src={image} alt="Showing hog"/>
            </div>

            <div className="content">
                <h1>{name}</h1>
            </div>

            {showDetails ? renderDetails() :  null}
        </div>                    
    )
}

export default Hog;
