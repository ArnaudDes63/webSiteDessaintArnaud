import React from 'react';
import { portfolio } from '../../data'
import { github } from '../../data'
import PortfolioItem from '../../components/PortfolioItem';
import "./portfolio.css"
import GitHub from '../../components/github/Github';

const Portfolio = () => {
  return ( 
    <section className='portfolio section'>
      <h2 className="section__title">Mon <span>Portfolio</span></h2>

      <div className="portfolio__container container grid">
        {portfolio.map((item) => {
          return <PortfolioItem key={item.id}  {...item} />
        })}

        <h2 className='centered-text'>A venir...</h2>
      </div>
      <br/>
      
<hr/>

    <GitHub github={github} />
    </section>
  );
}
 
export default Portfolio;