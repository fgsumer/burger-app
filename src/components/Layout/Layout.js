import React, { Component } from 'react';
import ToolBar from '../Navigation/ToolBar';
import SideDrawer from '../Navigation/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <>
        <ToolBar clicked={this.sideDrawerToggleHandler} />
        <SideDrawer open={this.state.showSideDrawer} modalclosed={this.sideDrawerCloseHandler} />
        <main style={{ marginTop: '72px' }}>{this.props.children}</main>
      </>
    );
  }
}

export default Layout;
