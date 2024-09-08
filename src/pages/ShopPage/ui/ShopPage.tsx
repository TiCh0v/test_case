import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectPosts } from '@/features/posts/postselectors';
import Card from '@/wigdets/Card/Card';

import FilterAndSearch from '@/wigdets/Search/Search';
import "./ShopPage.scss";

const POSTS_PER_PAGE = 10;

const ShopPage = () => {


  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<'all' | 'liked'>('all');
  const posts = useSelector(selectPosts);
  

  
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === 'all' || (filter === 'liked' && post.like);

    return matchesSearch && matchesFilter;
  });

  
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

 
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1); 
  };

  
  const handleFilterByLike = (filter: 'all' | 'liked') => {
    setFilter(filter);
    setCurrentPage(1);
  };

  return (
    <div className='page_wrapper'>
      <FilterAndSearch onSearch={handleSearch} onFilterByLike={handleFilterByLike} />

      {currentPosts.map((post) => (
        <Card
          title={post.title}
          body={post.body}
          like={post.like}
          photoUrl={post.photoUrl}
          thumbnailUrl={post.thumbnailUrl}
          id={post.id}
          key={post.id}
        />
      ))}

      <div className='page_buttons'>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            disabled={page === currentPage}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
