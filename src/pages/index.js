import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Footer from '../components/Footer';
import pic1 from '../images/pic01.jpg';
import pic2 from '../images/pic02.jpg';
import pic4 from '../images/pic04.jpg';
import Sidebar from '../components/Sidebar';
import Scroll from '../components/Scroll';
import Contact from '../components/Contact'

const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div id="wrapper">
      <section id="intro" className="wrapper style1 fullscreen fade-up">
        <div className="inner">
          <h1>Sacred Fire Africa</h1>
          <p>
            Pilgrimage Ceremony With The Wixarrika Nation
            <br />
            for Healing the Land
          </p>
          <ul className="actions">
            <li>
              <Scroll type="id" element="one">
                <a href="#one" className="button">
                  Learn more
                </a>
              </Scroll>
            </li>
          </ul>
        </div>
      </section>

      <section id="one" className="wrapper style2 spotlights">
        <section>
          <a href="/#" className="image" alt="image">
            <img src={pic1} alt="" data-position="center center" />
          </a>
          <div className="content">
            <div className="inner">
              <h2>The Marakame of Wixárika</h2>
              <p>
                The Wixáritari are an indigenous people of Mexico living in the
                Sierra Madre Occidental range in the states of Nayarit, Jalisco, Zacatecas and Durango.
                In the Wixarika society, Marakame are the Medicine Women and Men, and the Leaders as well.
              </p>
              <ul className="actions">
                <li>
                  <Link className="button" to="/marakame">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <a href="/#" className="image">
            <img src={pic4} alt="" data-position="top center" />
          </a>
          <div className="content">
            <div className="inner">
              <h2>MARAKAME​ URU MUUILE DON EUGENIO LOPEZ CARILLOO</h2>
              <p>
                Marakame ​Uru Muuile (Don Eugenio Lopez Carilloo) lives in the north of the State of Jalisco in a community called 'La Laguna' between San Andres (Tateikie) and Santa Catarina (Tuapurie). Descendent of an ancestral lineage of Marakate (Medicine Men and Women, Don Eugenio has dedicated his life to preserve his cultural traditions.
              </p>
              <ul className="actions">
                <li>
                  <Link className="button" to="/facilitator">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <a href="/#" className="image">
            <img src={pic2} alt="" data-position="25% 25%" />
          </a>
          <div className="content">
            <div className="inner">
              <h2>Dates for South Africa Events 2020</h2>
              <p>
                These ceremonies will take place in 4 provinces within South Africa. Click here to find out the dates and places
              </p>
              <ul className="actions">
                <li>
                  <Link className="button" to="/generic">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>

  { /**   <section id="two" className="wrapper style3 fade-up">
        <div className="inner">
          <h2>What we do</h2>
          <p>
            Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
            turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus,
            lacus eget hendrerit bibendum, urna est aliquam sem, sit amet
            imperdiet est velit quis lorem.
          </p>
          <div className="features">
            <section>
              <span className="icon major fa-code" />
              <h3>Lorem ipsum amet</h3>
              <p>
                Phasellus convallis elit id ullam corper amet et pulvinar. Duis
                aliquam turpis mauris, sed ultricies erat dapibus.
              </p>
            </section>
            <section>
              <span className="icon major fa-lock" />
              <h3>Aliquam sed nullam</h3>
              <p>
                Phasellus convallis elit id ullam corper amet et pulvinar. Duis
                aliquam turpis mauris, sed ultricies erat dapibus.
              </p>
            </section>
            <section>
              <span className="icon major fa-cog" />
              <h3>Sed erat ullam corper</h3>
              <p>
                Phasellus convallis elit id ullam corper amet et pulvinar. Duis
                aliquam turpis mauris, sed ultricies erat dapibus.
              </p>
            </section>
            <section>
              <span className="icon major fa-desktop" />
              <h3>Veroeros quis lorem</h3>
              <p>
                Phasellus convallis elit id ullam corper amet et pulvinar. Duis
                aliquam turpis mauris, sed ultricies erat dapibus.
              </p>
            </section>
            <section>
              <span className="icon major fa-chain" />
              <h3>Urna quis bibendum</h3>
              <p>
                Phasellus convallis elit id ullam corper amet et pulvinar. Duis
                aliquam turpis mauris, sed ultricies erat dapibus.
              </p>
            </section>
            <section>
              <span className="icon major fa-diamond" />
              <h3>Aliquam urna dapibus</h3>
              <p>
                Phasellus convallis elit id ullam corper amet et pulvinar. Duis
                aliquam turpis mauris, sed ultricies erat dapibus.
              </p>
            </section>
          </div>
          <ul className="actions">
            <li>
              <Link className="button" to="/generic">
                Learn more
              </Link>
            </li>
          </ul>
        </div>
      </section> */}

      <Contact />
    </div>

    <Footer />
  </Layout>
);

export default IndexPage;
