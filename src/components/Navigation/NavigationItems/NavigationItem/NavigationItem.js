import React from 'react';

import classes from './navigationItem.css';

const navigationItem = (props) => (
    <li className={classes.navigationItem}>
        <a href={props.link}>{props.caption}</a>
    </li>
);

export default navigationItem;