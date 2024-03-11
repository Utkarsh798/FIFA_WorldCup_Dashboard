import React, {useState} from "react";
import './DropDownYearSelection.css'
import { Dropdown } from 'primereact/dropdown';
import {items} from "./YearSelectionArray";

export const DropDownYearSelection = ({onSelect }) => {

    const [selectedYear, setSelectedYear] = useState(null);

    const handleYearSelection = (selectedItem) => {
        setSelectedYear(selectedItem);
        const selectedId = items.find(item => item.value === selectedItem).id;
        onSelect(selectedId); // Pass the selected item's id to the parent component
        console.log("Selected item iddddd:", selectedId);
    };


    return (
        <div className="drop-down-section">
            <span className="p-float-label w-full md:w-14rem">
                <Dropdown
                    value={selectedYear}
                    onChange={(e) => handleYearSelection(e.value)}
                    options={items}
                    optionLabel="value"
                />
                <label htmlFor="dd-city">Select a Year</label>
            </span>

        </div>
    );

}
