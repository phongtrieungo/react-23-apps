import React, { useState } from 'react';
import './food-menu.style.css';
import items from './data';
import { Categories } from './Categories';
import { Menu } from './Menu';

const allCategories = ['all', ...new Set(items.map(item => item.category))];

export const FoodMenuModule = () => {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState(allCategories);
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filterItems = (category) => {
        setSelectedCategory(category);
        if (category === 'all') {
            setMenuItems(items);
            return;
        }
        setMenuItems(items.filter(item => item.category === category));
    };

    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>Our menu</h2>
                    <div className="underline"></div>
                </div>

                <Categories categories={categories} filterItems={filterItems} selectedCategory={selectedCategory} />
                <Menu items={menuItems}/>
            </section>
        </main>
    )
}
