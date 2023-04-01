import utils from "../../utils";

export const ProfitManagementPage = () => {
  const isUserAdmin = utils.isAdmin();

  console.log(isUserAdmin);
  if (isUserAdmin) {
    return <h1>Profit Management Page</h1>;
  } else {
    return <Navigate to="/room-management" />;
  }
};
