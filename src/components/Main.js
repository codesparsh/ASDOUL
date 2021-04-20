import React, { Component } from 'react'
import Home from './Home';
import AppBlock from './AppBlock';
import { Switch, Route, Redirect} from 'react-router-dom';
import { fetchApp, fetchStat } from '../redux/actionCreators'
import {connect} from 'react-redux'

const mapStateToProps = state => {
    return {
        apps: state.allApps,
        stats: state.allStats,
        isAppsLoading:state.allApps.isLoading,
        isStatsLoading:state.allStats.isLoading
    }
};

const mapDispatchToProps = dispatch => ({
    fetchApps: () => { dispatch(fetchApp()) },
    fetchStats: () => { dispatch(fetchStat()) },
});


class Main extends Component {

    componentDidMount(){
        this.props.fetchApps();
        this.props.fetchStats();
    }

  render() {
    const appBlock = ({match}) => {
      return(
        <AppBlock 
        appId={match.params.appId}  
        apps = {this.props.apps.apps.filter((app) => {return app.id === match.params.appId})[0]}
        stats = {this.props.stats.stats[match.params.appId]}
        isAppsLoading = {this.props.isAppsLoading}
        isStatsLoading = {this.props.isStatsLoading}

        />

        );
    };

    const homePage = ()=>{
        return(
            <Home
            apps = {this.props.apps.apps}
            stats = {this.props.stats.stats}
            isAppsLoading = {this.props.isAppsLoading}
            isStatsLoading = {this.props.isStatsLoading}
        />
        );
    }

    return (
          <Switch>
            <Route path='/home' component={homePage} />
            <Route exact path='/apps/:appId' component={appBlock} />
            <Redirect to="/home" />
          </Switch>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
