import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = () => {
    const [selectedPages, setSelectedPages] = useState([]);

    const handleAllSelection = () => {
        if (selectedPages.length === 4) {
            setSelectedPages([]);
        } else {
            setSelectedPages(['Page 1', 'Page 2', 'Page 3', 'Page 4']);
        }
    };

    const handlePageSelection = (page) => {
        setSelectedPages((prev) =>
            prev.includes(page)
                ? prev.filter((p) => p !== page)
                : [...prev, page]
        );
    };

    return (
        <div className="dropdown-container">
            <div className="dropdown-header">
                <span>All pages</span>
                <input
                    type="checkbox"
                    checked={selectedPages.length === 4}
                    onChange={handleAllSelection}
                />
            </div>
            <div className="dropdown-divider"></div>
            <div className="dropdown-content">
                {['Page 1', 'Page 2', 'Page 3', 'Page 4'].map((page) => (
                    <div key={page} className="dropdown-item">
                        <label>{page}</label>
                        <input
                            type="checkbox"
                            checked={selectedPages.includes(page)}
                            onChange={() => handlePageSelection(page)}
                        />
                    </div>
                ))}
            </div>
            <div className="dropdown-divider"></div>
            <button className="done-button">Done</button>
        </div>
    );
};

export default Dropdown;


