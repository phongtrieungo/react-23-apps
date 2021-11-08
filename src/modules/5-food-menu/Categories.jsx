import React from 'react';

export const Categories = ({ categories, filterItems, selectedCategory }) => {
    return (
        <div className="btn-container">
            {categories.map((category, index) => <button key={index} className={`filter-btn ${category === selectedCategory ? 'selected-filter-btn' : ''}`} onClick={() => filterItems(category)}>{category}</button>)}
        </div>  
    )
}
