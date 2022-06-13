import React, { useState } from "react";

function Hog({ name, image, specialty, greased, weight, medal }) {
    const [showDetails, setShowDetails] = useState(false);
    const [visible, setVisible] = useState(true);

    function handleHogClick() {
        setShowDetails(showDetails => !showDetails);
    }



    function hogDetails() {
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
            <button className="ui button" onClick={() => setVisible(visible => !visible)}>
                {visible ? "Hide" : "Show"} this Hog
            </button>

            {visible ? 
                <React.Fragment>
                    <div>
                        <img src={image} alt="hog"/>
                    </div>

                    <div className="content">
                        <h1>{name}</h1>
                    </div>

                    {showDetails ? hogDetails() :  null}
                </React.Fragment>
            :
            null
            }
        </div>                    
    )
}

export default Hog;
