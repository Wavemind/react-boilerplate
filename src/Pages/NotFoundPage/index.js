/**
 * The external imports
 */
import * as React from 'react'

/**
 * The internal imports
 */
import { Link } from '../../Components'

const NotFoundPage = () => {
  return (
    <>
      <header>
        <title>404 Page Not Found</title>
        <meta name="description" content="Page not found" />
      </header>
      <div
        style={{
          height: 200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          minHeight: 320,
        }}
      >
        <div>
          4
          <span role="img" aria-label="Crying Face">
            😢
          </span>
          4
        </div>
        <p>Page not found.</p>
        <Link to={process.env.PUBLIC_URL + '/'}>Return to Home Page</Link>
      </div>
    </>
  )
}

export default NotFoundPage
