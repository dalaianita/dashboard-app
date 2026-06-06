import { memo } from "react";

const SearchBox = memo(function SearchBox({ search, onSearchChange }) {

  return <input type="text" value={search} onChange={onSearchChange} />;
});

export default SearchBox;
