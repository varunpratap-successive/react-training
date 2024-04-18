import React from 'react'
import withAuth from './withAuth'
function About() {
  return (
    <div>
      This is About Page
    </div>
  )
}

export default withAuth(About)
