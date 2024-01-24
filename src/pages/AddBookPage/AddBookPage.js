import TopNavbar from '../../components/TopNavbar.js';
import VerticalSpace from '../../components/VerticalSpace.js';
import AddBookSection from './components/AddBookSection.js';
import { useAuth } from '../AuthPages/AuthContext.js'; 

function AddBookPage() {
  const {isAdmin } = useAuth();

  return <>
  {isAdmin && 
    <>
    <TopNavbar />
    <VerticalSpace margin={30} />
    <AddBookSection />
    <VerticalSpace margin={20} />
    </>
  }
  {!isAdmin && 
    <span>You need admin privilages</span>
  }
  </>;
}

export default AddBookPage;