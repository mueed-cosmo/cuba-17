import React, { Fragment } from "react";
import Loader from "../layout/loader";
import Taptop from "../layout/tap-top";
import Header from "../layout/header";
import Sidebar from "../layout/sidebar";
import Footer from "../layout/footer";
import ThemeCustomize from "../layout/theme-customizer";
import { ToastContainer } from "react-toastify";
import { Route, withRouter } from "react-router-dom";
import { TransitionGroup } from "react-transition-group";
import defaultDashboard from "./../app-components/dashboard/defaultDashboard";

const App = () => {
  return (
    <Fragment>
      <TransitionGroup>
        <Loader />
        <Taptop />
        <div className="page-wrapper compact-wrapper" id="pageWrapper">
          <Header />
          <div className="page-body-wrapper sidebar-icon">
            <Sidebar />
            <div className="page-body">
              <Route path="/panel/dashboard" component={defaultDashboard} />
            </div>
            <Footer />
          </div>
        </div>
        <ThemeCustomize />
        <ToastContainer />
      </TransitionGroup>
    </Fragment>
  );
};
export default withRouter(App);
