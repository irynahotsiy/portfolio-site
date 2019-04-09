import React, { Component } from "react";
import "./Portfolio.css";

class Portfolio extends Component {
 
  render() {
    return (
      <section className="blue-body" id="portfolio">
        <header>Portfolio</header>
        <blockquote>Here are a few examples of my work.</blockquote>
        <div className="container">
          <div className="row">
            {this.props.projects.map(el => (
              <div className="box-project" key={el.id}>
                <div className="project-icon">
                  <img src={el.img} alt="project"/>
                </div>
                <div className="project-background">
                  <article>{el.title}</article>
                  <p>{el.description}</p>
                  <div>
                    <button className="gradiented-btn">
                      <a href={el.github}>GitHub</a>
                    </button>
                    <button className="gradiented-btn">
                      <a href={el.demo}>Demo</a>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;