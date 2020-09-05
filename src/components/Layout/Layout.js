import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        } );
    }

    render () {
        return(
            <Aux>
            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}></Toolbar>
            <SideDrawer closed={this.sideDrawerClosedHandler} open={this.state.showSideDrawer}/>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main className={classes.Content}>
                {this.props.children}
            </main>
            </Aux>
        )
    }
} 

export default Layout;