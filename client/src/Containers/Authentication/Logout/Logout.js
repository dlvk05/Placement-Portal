import { Redirect } from 'react-router-dom';
import React,{Component} from 'react';
import {connect } from 'react-redux';
import * as actions from '../../../Redux/actions/index';

class Logout extends Component {
    componentDidMount () {
        console.log('logout loaded')
        this.props.onLogout();
    }

    render () {
        return <Redirect to="/login"/>;
    }
}


const mapDispatchToProps=dispatch=>{
    return{
      onLogout:()=>dispatch(actions.logout()),
    }
  }

  export default connect(null, mapDispatchToProps)(Logout);