import { memo } from "react";

const SearchBox = memo(function SearchBox({ search, onSearchChange }) {
  console.log("Search box rendered..");

  console.log(search);
  console.log(typeof search);
  return <input type="text" value={search} onChange={onSearchChange} />;
});

export default SearchBox;
