import s from "./SearchBox.module.css";
const SearchBox = ({ request, handleSearchChange }) => {
    return (
      <div className={s.searchBox}>
            <label> Find contacts by name
                <input
              type="text"
              name="searchInput"
              onChange={handleSearchChange}
            value={request}
            className={s.searchBar}
                />
            </label>
      </div>
    )
}

export default SearchBox