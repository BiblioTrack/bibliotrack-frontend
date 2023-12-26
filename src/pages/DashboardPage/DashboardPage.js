import TopNavbar from '../../components/TopNavbar.js';
import VerticalSpace from '../../components/VerticalSpace.js';
import Dashboard from './components/Dashboard.js';

function DashboardPage() {
  return <>
    <TopNavbar />
    <VerticalSpace margin={30} />
    <Dashboard/>
    <VerticalSpace margin={20} />
  </>;
}

export default DashboardPage;