import TopNavbar from '../../components/TopNavbar.js';
import VerticalSpace from '../../components/VerticalSpace.js';
import DashboardAdmin from './components/DashboardAdmin.js';

function DashboardPage() {
  return <>
    <TopNavbar />
    <VerticalSpace margin={30} />
    <DashboardAdmin/>
    <VerticalSpace margin={20} />
  </>;
}

export default DashboardPage;