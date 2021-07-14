/**
 * The external imports
 */
import React from 'react'
import { Link as MaterialLink } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'

function Link(props) {
  return (
    <MaterialLink component={RouterLink} color="textPrimary" {...props}>
      {props.children}
    </MaterialLink>
  )
}
export default Link
