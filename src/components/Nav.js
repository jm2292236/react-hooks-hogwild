import React from "react";
import piggy from "../assets/porco.png";
import Checkbox from "./CheckBox";

const Nav = ({ showOnlyGreased, onChangeShowOnlyGreased, sortHogs, onChangeSortHogs }) => {
	return (
		<div className="navWrapper">
            <div>
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
            </div>

            <div className="filterBar">
                <div className="filterChild">
                    <Checkbox label= {"Show only greased hogs"} checked={showOnlyGreased} onChange={onChangeShowOnlyGreased} />
                </div>

                <div className="filterChild">
                    <label>
                        Sort by -
                        <select
                            className="ui selection dropdown"
                            name="sort"
                            onChange={onChangeSortHogs}
                            value={sortHogs}
                        >
                            <option value="name">Name</option>
                            <option value="weight">Weight</option>
                        </select>
                    </label>
                </div>
            </div>
		</div>
	);
};

export default Nav;
