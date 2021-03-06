import React, { Component } from "react";
import "./Courses.css";

class Courses extends Component {
  render() {
    return (
      <section className="white-body" id="courses">
        <header>Courses</header>
        <blockquote>
          Some of the courses helped me to develop my skills.
        </blockquote>
        {this.props.courses.map(el => (
          <div key={el.id} className="container">
            <div className="boxes-row">
              <figure className="logotype">
                <img src={el.img} alt="course" />
                <p>{el.period}</p>
              </figure>
              <div className="information">
                <h3>{el.title}</h3>
                <p>{el.listTitle}</p>
                <ul>
                  {el.li != null ? el.li.map(li => (
                    <li key={li}>{li}</li>
                  )) : <div></div>}
                </ul>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </section>
    );
  }
}

export default Courses;
