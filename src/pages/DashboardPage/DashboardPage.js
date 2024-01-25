import TopNavbar from '../../components/TopNavbar.js';
import VerticalSpace from '../../components/VerticalSpace.js';
import DashboardAdmin from './components/DashboardAdmin.js';
import DashboardUser from './components/DashboardUser.js';
import { useAuth } from '../../pages/AuthPages/AuthContext.js';
import {Navigate } from 'react-router-dom';


const DashboardPage = () => {
    const {user, isAdmin } = useAuth();
    if (!user) {
        return <Navigate to="/login" replace />;
      }

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