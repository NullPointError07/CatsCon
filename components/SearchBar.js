"use client";

import { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeDropDown, setTypeDropDown] = useState("");

  const handleInputChange = () => {};

  return (
    <div>
      <input
        type="text"
        placeholder="Search By Name ..."
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
