import s from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
const SearchBox = () => {

  const request = useSelector((state) => state.filters.name)
  
  const handleSearchChange = (e) => {
    const inputValue = e.target.value
    useDispatch(changeFilter(inputValue))
  }

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