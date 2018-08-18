import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to Design + Code React Apps</h1>
        <p>It's as simple as Bagel Bites</p>
         <p>Pizza in the morning, Pizza in the evenin', Pizza at suppertime! When pizza's on a bagel, You can eat pizza anytime!</p>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
