import React from 'react';

import Header from './header.js'
import Footer from './footer.js'

import '../styles/index.css';

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout;