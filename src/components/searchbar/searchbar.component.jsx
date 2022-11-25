const SearchBar = ({ onSearch }) => {
  return (
    <div>
      <input type="search" onChange={onSearch} />
    </div>
  );
};
export default SearchBar;
