import { useState } from "react";

const SearchBar = () => {
    let focused = false;

    const onFocusChange = () => {
        focused = !focused
    }

    const [focused, setFocused] = useState(false)

    return (
        <div className="searchbar_container">
            <input type="text" placeholder="Search here for people or groups" />
            <div className="searchbar_icon-container">
                <i className="bi bi-search"></i>
            </div>
        </div>
    )
}

export default SearchBar