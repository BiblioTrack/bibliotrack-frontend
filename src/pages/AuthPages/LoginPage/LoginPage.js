import TopNavbar from '../../../components/TopNavbar.js';
import LoginSection from './components/LoginSection.js';
import VerticalSpace from '../../../components/VerticalSpace.js';

function LoginPage() {
  return <>
    <TopNavbar />
    <VerticalSpace margin={30} />
    <LoginSection />
    <VerticalSpace margin={20} />
  </>;
}

export default LoginPage;

