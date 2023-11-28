import TopNavbar from '../../components/TopNavbar.js';
import SearchSection from './components/SearchSection.js';
import VerticalSpace from '../../components/VerticalSpace.js';
import SearchResultsSection from './components/SearchResultsSection.js';

function Home() {
    return <>
      <TopNavbar/>
      <VerticalSpace margin={30} /> 
      <SearchSection/>
      <VerticalSpace margin={20} /> 
      <SearchResultsSection/>
    </>;
  }
  
export default Home;