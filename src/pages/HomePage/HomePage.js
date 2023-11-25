import TopNavbar from '../../components/TopNavbar.js';
import SearchSection from './components/SearchSection.js';
import VerticalSpace from '../../components/VerticalSpace.js';

function Home() {
    return <>
      <TopNavbar/>
      <VerticalSpace margin={30} /> 
      <SearchSection/>
    </>;
  }
  
export default Home;