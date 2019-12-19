import React from 'react';
// import { Link } from 'gatsby'

import Layout from '../components/layout';
import Footer from '../components/Footer';

import pic4 from '../images/pic06.jpg';
import Header from '../components/Header';

const SecondPage = () => (
  <Layout>
    <Header />

    <div id="wrapper">
      <section id="main" className="wrapper">
        <div className="inner">
          <h1 className="major">Dates of Ceremonies 2020</h1>
          <span className="image fit">
            <img src={pic4} alt="" />
          </span>
          <h4>
            17 Jan - 19 Jan 2020 Gauteng
          </h4>
          <p>
          The main ceremony will be held on Saturday 18 January 2020. It will be an all-night, open-air ceremony around Tatewari the grandfather fire.
On Friday the 17th of January there will be a cultural exchange evening, everyone attending ceremony is welcome. Saturday morning early there will be opportunity to see traditional soap cooking on an open fire. In preparation for Saturday night there will be a sweat lodge. On Sunday we will close with a Cacao ceremony led by Cacao Kuchina Matthew Bloemetje, healings, prayers and offerings.
          </p>
          <h4></h4>
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default SecondPage;
