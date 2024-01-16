// Home.js
import React, { useState } from 'react';
import TopNavbar from '../../components/TopNavbar.js';
import SearchSection from './components/SearchSection.js';
import VerticalSpace from '../../components/VerticalSpace.js';
import SearchResultsSection from './components/SearchResultsSection.js';

function Home() {

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    console.log(`Searching for: ${query}`);
    setSearchQuery(query);
  };

  return (
    <>
      <TopNavbar />
      <VerticalSpace margin={30} />
      <SearchSection onSearch={handleSearch} />
      <VerticalSpace margin={20} />
      <SearchResultsSection searchQuery={searchQuery} />
    </>
  );

}

export default Home;
