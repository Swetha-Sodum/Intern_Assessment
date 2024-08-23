import React, { useState } from "react";
import './Styles.css'

const DropDownComponent = ({ buttonLabel, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputs, setInputs] = useState({});

  const handleInputChange = (index, value) => {
    setInputs((prevInputs) => ({
        ...prevInputs,
        [index]: value,

    }));
  };


  return (
    <div>
      <button className="filter-button" onClick={() => setIsOpen(!isOpen)}>{buttonLabel}</button>
      {isOpen && (
        <div className="drop-down-div">
            {
                items.map((item, index) =>(
                    <div key={index}>
                        <label>{item.label}</label>
                        {item.type === 'text' && (
                            <>
                            <input type="text" value={inputs[index] || ''}
                            onChange={(e) => handleInputChange(index, e.target.value)}
                            />
                            </>
                        )}
                        
                    </div>
                ))
            }
            <div className="refine-by-div">
                <h4>Refine By</h4>
                <p className="clear-text">Clear</p>
            </div>
            <hr />
          <p>Rating</p>
          <p>Status</p>
          <p>Type of business</p>
          <p>Location</p>
          <p>Assign to</p>
        </div>
      )}
    </div>
  );
};

export default DropDownComponent;
