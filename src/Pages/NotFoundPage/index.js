/**
 * The external imports
 */
import * as React from 'react'
import { useTranslation } from 'react-i18next'

/**
 * The internal imports
 */
import { Link } from '../../Components/index'
import useStyles from '../../Theme/Pages/NotFoundPage/index.style'

const NotFoundPage = () => {
  const classes = useStyles()
  const { t } = useTranslation()

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
        <p className={classes.subtitle}>{t('notFoundPage.notFound')}</p>
        <Link to={process.env.PUBLIC_URL + '/'} className={classes.subtitle}>
          {t('notFoundPage.return')}
        </Link>
      </div>
    </>
  )
}

export default NotFoundPage
