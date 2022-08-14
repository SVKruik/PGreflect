const SearchBar = () => {
    return (
        <div className="searchbar_container">
            <input type="text" className="searchbar_input" placeholder="Search here for people or groups"/>
            <div className="searchbar_icon-container">
                <i className="bi bi-search"></i>
            </div>
        </div>
    )
}

export default SearchBar