import React from 'react';

export default function SearchBar({ searchTerm, onSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search expenses..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
