import { Search as SearchIcon } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="md:grid md:grid-cols-2 md:gap-6">
      <div className="flex w-full items-center gap-4 p-2 transition-all duration-300 focus-within:bg-dark/5">
        <SearchIcon className="text-brand" />
        <input
          type="text"
          placeholder="Search guides"
          className="bg-transparent text-sm font-light outline-none placeholder:text-sm placeholder:text-dark placeholder:opacity-60"
        />
      </div>
    </div>
  );
};

export default SearchBar;
