import React from 'react';
import GitHubItem from '../GitHubItem'; // Assurez-vous que le chemin d'importation est correct

const GitHub = ({ github }) => {
  return (
    <section className='github section'>
      <h2 className="section__title">Mon <span>Github</span></h2>
      <div className="github__container container grid">
        {github.map((item) => (
          <GitHubItem key={item.id} title={item.title} details={item.details} />
        ))}
      </div>
    </section>
  );
};

export default GitHub;
