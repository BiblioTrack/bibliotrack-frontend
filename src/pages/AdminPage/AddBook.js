import TopNavbar from '../../components/TopNavbar.js';
import VerticalSpace from '../../components/VerticalSpace.js';
import AddBookSection from './components/AddBookSection.js';

function AddBook() {
  return <>
    <TopNavbar />
    <VerticalSpace margin={30} />
    <AddBookSection />
    <VerticalSpace margin={20} />
  </>;
}

export default AddBook;