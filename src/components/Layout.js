import React, { Fragment } from 'react'
import { Sidebar } from './Sidebar'
import { Link } from 'react-router-dom'

export const Layout = ({ children }) => (
  <Fragment>
    <header id="top">
      <div className="row">
        <div className="header-content twelve columns">
          <h1 id="logo-text">
            <Link to='/' >Keep It Simple.</Link>
          </h1>
          <p id="intro">Put your awesome slogan here...</p>
        </div>
      </div>
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show Menu</a>
        <a className="mobile-btn" href="" title="Hide navigation">Hide Menu</a>
        <div className="row">
          <ul id="nav" className="nav">
            <li className="current">
              <Link to='/'>Home</Link>
            </li>
            <li className="current">
              <a target='blank' href='https://airtable.com/tblmCH2k5wBtZhls8/viwDYXWUoc7vpemxh'>Sign in</a>
            </li>
          </ul>
          {/* end nav */}
        </div>
      </nav>
      {/* end nav-wrap */}
    </header>
    {/* Header End */}
    <div id="content-wrap">
      <div className="row">
        {children}
        <Sidebar />
        {/* end sidebar */}
      </div>
      {/* end row */}
    </div>
    {/* end content-wrap */}
    {/* Footer
   ================================================== */}
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            <li>
              <a href="">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-google-plus" />
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-github-square" />
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-instagram" />
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-flickr" />
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-skype" />
              </a>
            </li>
          </ul>
        </div>
        <div className="six columns info">
          <h3>About Keep It Simple</h3>
          <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis
            bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
        </p>
          <p>Lorem ipsum Sed nulla deserunt voluptate elit occaecat culpa cupidatat sit irure sint sint incididunt cupidatat esse
          in Ut sed commodo tempor consequat culpa fugiat incididunt.</p>
        </div>
        <div className="four columns">
          <h3>Photostream</h3>
          <ul className="photostream group">
            <li>
              <a href="">
                <img alt="thumbnail" src="images/thumb.jpg" />
              </a>
            </li>
            <li>
              <a href="">
                <img alt="thumbnail" src="images/thumb.jpg" />
              </a>
            </li>
            <li>
              <a href="">
                <img alt="thumbnail" src="images/thumb.jpg" />
              </a>
            </li>
            <li>
              <a href="">
                <img alt="thumbnail" src="images/thumb.jpg" />
              </a>
            </li>
            <li>
              <a href="">
                <img alt="thumbnail" src="images/thumb.jpg" />
              </a>
            </li>
            <li>
              <a href="">
                <img alt="thumbnail" src="images/thumb.jpg" />
              </a>
            </li>
            <li>
              <a href="">
                <img alt="thumbnail" src="images/thumb.jpg" />
              </a>
            </li>
            <li>
              <a href="">
                <img alt="thumbnail" src="images/thumb.jpg" />
              </a>
            </li>
          </ul>
        </div>
        <div className="two columns">
          <h3 className="social">Navigate</h3>
          <ul className="navigate group">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Demo</a>
            </li>
            <li>
              <a href="">Archives</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
          </ul>
        </div>
        <p className="copyright">© Copyright 2014 Keep It Simple. &nbsp; Design by
        <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a>.</p>
      </div>
      {/* End row */}
      <div id="go-top">
        <a className="smoothscroll" title="Back to Top" href="#top">
          <i className="fa fa-chevron-up" />
        </a>
      </div>
    </footer>
  </Fragment>
)