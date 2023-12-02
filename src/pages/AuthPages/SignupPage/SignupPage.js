import TopNavbar from '../../../components/TopNavbar.js';
import VerticalSpace from '../../../components/VerticalSpace.js';
import SignupSection from './components/SignupSection.js';

function Home() {
  return <>
    <TopNavbar />
    <VerticalSpace margin={30} />
    <SignupSection />
    <VerticalSpace margin={20} />
  </>;
}

export default Home;

