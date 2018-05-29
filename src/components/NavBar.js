import React from 'react';
import Artist from './ArtistPage';
import Recommended from './RecommendedPage';
import NewReleases from './NewReleasesPage';
import TextHeader from './Text';
import TopCharts from './TopChartPage';
import Home from './Main';
import { BrowserRouter as Router, Link, Switch, Route, NavLink, Redirect, withRouter } from 'react-router-dom';

const NavBar = () => (
  <Router>
    <div>
      <header className="bg-img">
        <nav className="container navbar navbar-expand-lg">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon bg-light"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item d-inline">
              <Link to='/Home' className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/Recommended' className="nav-link">Recommended</Link>
            </li>
            <li className="nav-item">
              <Link to='/NewReleases' className="nav-link">New Releases</Link>
            </li>
            <li className="nav-item">
              <Link to='/TopCharts' className="nav-link">Top Charts</Link>
            </li>
            <li className="nav-item">
              <Link to='/Artist' className="nav-link">Artist List</Link>
            </li>
          </ul>
        </div>
        </nav>
        <TextHeader />
      </header>
      <Switch>
          <Route path='/Home' component={Home} />
          <Route path='/Recommended' component={Recommended} />
          <Route path='/TopCharts' component={TopCharts} />
          <Route path='/NewReleases' component={NewReleases} /> 
          <Route path='/Artist' component={Artist} />
          <Redirect from='/' to='/Home' />
      </Switch>
    </div>
  </Router>
);

export default NavBar;