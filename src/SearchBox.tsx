import React, { useState } from 'react';

type SearchInputProps = {
  onSearch: (searchTerm: string) => void;
};
  function SearchInput({ onSearch }: SearchInputProps) {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div>
      <input
      className='rounded-1 border border-dark-subtle'
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchInput;
