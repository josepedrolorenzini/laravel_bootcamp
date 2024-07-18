import React from 'react'
import PropTypes from 'prop-types'
import { InertiaLink } from '@inertiajs/inertia-react';


function Bank(props) {
  return (
    <div>
            <h1>Bank Page</h1>
            <p>This is the Bank page {props.name}.</p>
            <p>react page </p>
            <InertiaLink href="/web/users">Go to Users</InertiaLink>
        </div>
  )
}

Bank.propTypes = {
    name: PropTypes.string
};

export default Bank

