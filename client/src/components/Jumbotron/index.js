import React from 'react';
import './jumbotron.css';

function Jumbotron(props) {
  return (
    <div className="container mt-4">
      <div className="jumbotron text-center">
        <p className="display-4 title">{props.title}</p>
        <p className="lead">{props.lead}</p>
      </div>
    </div>
  )
}

export default Jumbotron;