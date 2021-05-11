import React from "react";
import "./App.css";
import { Route, Switch} from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./Redux/actions/index";
//Custom Components import
import Login from "./Containers/Authentication/Login/Login";
import Signup from "./Containers/Authentication/Signup/Signup";
import AdminSignup from "./Containers/Authentication/AdminSignup/AdminSignup";
import UserLayout from "./HOC/UserLayout/UserLayout";
import Logout from "./Containers/Authentication/Logout/Logout";
import Profile from "./Containers/Profile/Profile";
import AdminLogin from "./Containers/Authentication/AdminLogin/AdminLogin";
import AdminLayout from "./HOC/AdminLayout/AdminLayout";
import JobProfileForm from "./Containers/Adminfunctionalities/JobProfileForm/JobProfileForm";
import StudentUpdates from "./Containers/StudentUpdates/StudentUpdates";
import AdminUpdates from './Containers/AdminUpdates/AdminUpdates';
import JobProfilesFeed from "./Containers/JobProfilesFeed/JobProfilesFeed";
import PracticeContainer from "./Containers/PracticeContainer/PracticeContainer";
import UserAccountInfoPage from "./Containers/UserAccountInfoPage/UserAccountInfoPage";
import UpdatesForm from "./Containers/Adminfunctionalities/UpdatesForm/UpdatesForm";
import StudentJobViewContainer from "./Containers/StudentJobViewContainer/StudentJobViewContainer";
import AdminJobViewContainer from "./Containers/AdminJobViewContainer/AdminJobViewContainer";
import QuizUploadForm from "./Containers/Adminfunctionalities/QuizUploadForm/QuizUploadForm";
import QuizListFeed from "./Containers/QuizContainers/QuizListFeed/QuizListFeed";
import StudentQuizView from "./Containers/QuizContainers/StudentQuizView/StudentQuizView";

class App extends React.Component {
  componentDidMount() {
    this.props.onAuthCheckState();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/Login" exact component={Login} />
        <Route path="/AdminLogin" exact component={AdminLogin} />
        <Route path="/Signup" exact component={Signup} />
        <Route path="/AdminSignup" exact component={AdminSignup} />
        <Route path="/PracticeContainer" exact component={PracticeContainer} />
      </Switch>
    );

    //des user is admin
    if (this.props.isAuthenticated && this.props.isAdmin) {
      routes = (
        <AdminLayout>
          <Switch>
            <Route path="/Updates" exact component={UpdatesForm}/>
            <Route path="/AdminUpdatesFeed" exact component={AdminUpdates}/>
            <Route path="/JobProfileForm" exact component={JobProfileForm}/>
            <Route path="/JobProfilesFeed" exact component={JobProfilesFeed} />
            <Route path="/Logout" exact component={Logout} />
            <Route path="/QuizUpload" exact component={QuizUploadForm} />
            <Route path="/AdminJobView/:id" exact component={AdminJobViewContainer} />
          </Switch>
        </AdminLayout>
      );
    }

    //des user is student
    if (this.props.isAuthenticated && !this.props.isAdmin) {
      routes = (
        <UserLayout>
          <Switch>
            <Route path="/Profile" exact component={Profile} />
            <Route path="/UpdatesFeed" exact component={StudentUpdates} />
            <Route path="/JobProfilesFeed" exact component={JobProfilesFeed} />
            <Route path="/Logout" exact component={Logout} />
            <Route path="/UserAccountInfoPage" exact component={UserAccountInfoPage} />
            <Route path="/StudentJobView/:id" exact component={StudentJobViewContainer} />
            <Route path="/QuizListFeed" exact component={QuizListFeed} />
            <Route path="/StudentQuizView" exact component={StudentQuizView} />

          </Switch>
        </UserLayout>
      );
    }

    return <div>{routes}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.userAuth.isAuthenticated,
    isAdmin: state.userAuth.isAdmin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthCheckState: () => dispatch(actions.authCheckState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
