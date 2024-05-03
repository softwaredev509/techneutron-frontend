import DashboardWithPersistentDrawer from "./TechNeutronDashboard";
import { Helmet } from "react-helmet-async";
import PageHeader from "./PageHeader";
import PageTitleWrapper from "./PageTitleWrapper";

function Dashboard() {
  return (
    <>
      <Helmet>
        <title>Techneutron360 Dashboard</title>
      </Helmet>
      <DashboardWithPersistentDrawer />
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
    </>
  );
}

export default Dashboard;
