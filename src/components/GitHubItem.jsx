import React from 'react';
import '../components/github/github.css'

const GitHubItem = ({ title, details }) => {
  return (
    <div className="portfolio__item">
      <h2>{title}</h2>
      <ul className="github-list">
        {details.map((item, index) => (
          <li key={index} className="github-list__item">
            <strong>{item.title}</strong> --{'>'} {item.desc}
            {item.view && (
              <div className="github-link">
                {item.view}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubItem;
