import { useState } from 'react';
import "./Search.scss"

interface FilterAndSearchProps {
  onSearch: (query: string) => void;
  onFilterByLike: (filter: 'all' | 'liked') => void;
}

const FilterAndSearch = (props: FilterAndSearchProps) => {

  const {
    onSearch, 
    onFilterByLike
  } = props;

  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'liked'>('all');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  // задержка при вводе не добавлена тк в контексте задания нет смысла

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as 'all' | 'liked';
    setFilter(value);
    onFilterByLike(value);
  };

  return (
    <div className="filter-search">
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={handleSearchChange}
        className='searchbar'
      />
      <select value={filter} onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="liked">Liked</option>
      </select>
    </div>
  );
};

export default FilterAndSearch;
