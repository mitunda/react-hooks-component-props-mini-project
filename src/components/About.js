
import React from 'react';

const About = ({ image, about }) => {
  return (
    <div>
      {/* Other content */}
      <aside data-testid="aside-element">
        {/* Aside content */}
        {image && <img src={image} alt="blog logo" />}
      </aside>
      <p>{about}</p>
    </div>
  );
};

export default About;
