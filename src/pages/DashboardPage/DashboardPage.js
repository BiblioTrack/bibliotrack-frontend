import TopNavbar from '../../components/TopNavbar.js';
import VerticalSpace from '../../components/VerticalSpace.js';
import DashboardAdmin from './components/DashboardAdmin.js';
import DashboardUser from './components/DashboardUser.js';
import { useAuth } from '../../pages/AuthPages/AuthContext.js';


const DashboardPage = () => {
    const { isAdmin } = useAuth();

    return(
        <>
            <TopNavbar />
            <VerticalSpace margin={30} />
            {isAdmin && <DashboardAdmin/>}
            {!isAdmin && <DashboardUser/>}
            <VerticalSpace margin={20} />
        </>
    );
}

export default DashboardPage;