function SearchBar({onSearch}){

    function handleChange(event){
        const searchKey = event.target.value;
        // console.log(searchKey);
        onSearch(searchKey);
    }

    return <input type="search" onChange={handleChange} />;
}

export default SearchBar;