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
          <h1 className="major">The Marakame of Wixárika</h1>
          <span className="image fit">
            <img src={pic4} alt="" />
          </span>
          <p>
          The Wixáritari are an indigenous people of Mexico living in the Sierra Madre Occidental range in the states
          of Nayarit, Jalisco, Zacatecas and Durango.
          In the Wixarika society, Marakame are the Medicine Women and Men,
          and the Leaders as well. There are different types of Marakame, those who simply sing and communicate with the spirits,
          those who do treatment with energy extracting disease and materializing it as it is sucked out by the mouth,
          and those who sing and heal.
          </p>
          <p>
          <em>Once a year, they journey back to Wirikuta to gather their most sacred plant the Hikuri,
          it is one of the oldest pilgrimages dating back more than 5,000 years.</em>
          </p>
          <p>
          The Wixáritari (Huichol) people, are one of the few people that have remained pure and connected to their traditions since the Spanish conquest. They have survived with greater vitality thanks to the rough topography of their territories, to decentralize political organization and their ability to adapt to the historical surroundings reflected by the active participation in the history of West Mexico. Nevertheless, the main strength of their cultural reproduction is the collective resolve to keep their ancestral traditions.
          </p>
          <p>
          They are not only a pure nation down to their roots but also in their spirituality and their cosmology. The Wixáritari like to make decorations, offerings, shields and arrows in order to narrate the story of the world and creation of the world and the universe. They also use them to stop the wind, to call the rain or the sun and to conduct rituals.
          </p>
          <br/>
          <h4>BELIEFS & COSMOLOGY</h4>
          <p>
          Some anthropologists have stubbornly called all the natural elements mentioned ​Gods​; utilizing their own interpretation of the divine world. However; Wixáritari and ancient Mexicans have a more precise connotation of God: It is something that is a part of the cosmos and not just its creator. The Wixáritari are reverent towards the forces that govern life. They don’t call these forces “Gods” but brothers: Grandfather Fire Tatewari, Water Mother Tatiei Matinieri and Great Grandfather Deer Tail Tamatz Kayaumari. These are incarnations of nature’s forces, the energy that flows in the universe, and their relation to this magical world.
          </p>
          <p>
          The Marakame also known as <em>“​the one who knows”​</em>, is a caste that prepares new shamans or Matewame, <em>“T​he one who will know​”</em> in order to maintain the lineage and its knowledge. Powerful Huichol shamans have interwoven uncountable tales of power, where they successfully fight formidable battles within the field of perception. This is the place where they rescue and resolve matters that are at the level of mundane life. In this way they confirm their leadership of their knowledge, their government and their spirituality.
We invite you to sit in prayer, share their medicine and learn about their culture to receive the great honor of a glimpse and an imprint of that magical and mysterious world.
          </p>
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default SecondPage;
