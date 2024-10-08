'use client';

import React from 'react';
import Head from 'next/head';

import Navbar from './NavBar';
import Footer from './Footer';

const LayOut = ({ children }) => {
  return (
      <div className="layout">
        <Head>
          <title>Cake Store</title>
        </Head>
        <header>
          <Navbar />
        </header>
        <main className="main-container">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
  )
}

export default LayOut