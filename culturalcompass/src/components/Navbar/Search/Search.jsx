import React, { useState } from 'react';
import { Search } from 'lucide-react';

export function SearchBar({ placeholder = 'Search...', onSearch, className = '' }) {
  const [query, setQuery] = useState('');

  // Handle input changes
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleInputChange}
        className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border-2 rounded-full focus:outline-none focus:border-red-600"
      />
      <button
        type="submit"
        className="absolute inset-y-0 left-0 flex items-center pl-3"
      >
        <Search className="w-5 h-5 text-gray-400" />
      </button>
    </form>
  );
}
