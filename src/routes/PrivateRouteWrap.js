import React, { Component } from 'react';
import { connect } from 'react-redux';

import { PrivateRoute } from './PrivateRoutes';

class PrivateRouteWrap extends Component {
  componentDidMount() {
    // console.log('==== Routes mounted!');
  }

  render() {
    return (
      <PrivateRoute path={this.props.path}
      key={this.props.key}
      auth={this.props.auth}
      component={this.props.component} />
    );
  }
}
const mapStateToProps = state => ({ auth: state.authReducer.authData });
export default connect(mapStateToProps)(PrivateRouteWrap);