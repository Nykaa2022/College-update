import React from "react";
import "./Style.css";

const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
        </label>
        <input
            className="searchBar"
            type="text"
            id="header-search"
            placeholder=" Search Nykaa"
            name="s" 
        />
    </form>
);

export default SearchBar;