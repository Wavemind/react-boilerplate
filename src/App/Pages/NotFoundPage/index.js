/**
 * The external imports
 */
import * as React from 'react'

/**
 * The internal imports
 */
import { Link } from '../../../App/Components/index'
import useStyles from '../../../Theme/Pages/NotFoundPage/index.style'

export default function NotFoundPage() {
  const classes = useStyles()

  return (
    <>
      <header>
        <title>404 Page Not Found</title>
        <meta name="description" content="Page not found" />
      </header>
      <div className={classes.wrapper}>
        <div className={classes.title}>
          4
          <span role="img" aria-label="Crying Face">
            😢
          </span>
          4
        </div>
        <p className={classes.subtitle}>Page not found.</p>
        <Link to={process.env.PUBLIC_URL + '/'} className={classes.subtitle}>
          Return to Home Page
        </Link>
      </div>
    </>
  )
}
