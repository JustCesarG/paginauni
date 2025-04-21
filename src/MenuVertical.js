import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MenuVertical.css';

const MenuVertical = ({ items, onItemClick }) => {
    const [openSubMenu, setOpenSubMenu] = useState(null);

    const handleToggleSubMenu = (itemId) => {
        setOpenSubMenu((prevOpen) => (prevOpen === itemId ? null : itemId));
    };

    return (
        <div className="menu-vertical">
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.submenu ? (
                            <>
                                <div
                                    className="menu-item"
                                    onClick={() => handleToggleSubMenu(item.id)}
                                >
                                    {item.label}
                                    <span className={`arrow ${openSubMenu === item.id ? 'open' : ''}`}>
                                        ▼
                                    </span>
                                </div>
                                <ul className={`submenu ${openSubMenu === item.id ? 'open' : ''}`}>
                                    {item.submenu.map((subItem) => (
                                        <li key={subItem.id}>
                                            <Link
                                                to={subItem.path}
                                                onClick={onItemClick}
                                            >
                                                {subItem.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        ) : (
                            <Link
                                to={item.path}
                                className="menu-item-link"
                                onClick={onItemClick}
                            >
                                {item.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MenuVertical;