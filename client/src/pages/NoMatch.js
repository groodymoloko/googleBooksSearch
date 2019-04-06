import React from 'react'
import Jumbotron from '../components/Jumbotron';

function NoMatch() {
  return (
    <div className="container">
      <Jumbotron
        title="404"
        lead="Oops!  Page Not Found."
      />
    </div>
  )
}

export default NoMatch;