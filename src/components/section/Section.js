import React, { Component } from 'react';

class Section extends Component {
  render() {
    return (
      <section className="section" id="about-me">
      <div className="section__block">
            <div className="section__header">
              <span>About</span>
              <h2>About</h2>
            </div>
            <div className="section__text">
              <p>
                Everything started with passion to Web, In 2014 I begin to study Vocational education in Web applications 
                development. Before finishing the course In 2015 got my first job in the developing world in Creacom
                agency located in Terrassa like a Full Stack with a custom CRM. 
                Then I found my vocation in web design, being what I enjoyed the most.
              </p>
              <p>
          In 2016 I joined to Inbenta an startup,  in Barcelona in which I continue to work on it.
          My part is code the web design for support webpages like  e-commerce, chatbots. 
          And intern tools to configure the applications  with our own framework.
          </p>
          </div>
        </div>
      </section>
  );
  }
}

export default Section;
