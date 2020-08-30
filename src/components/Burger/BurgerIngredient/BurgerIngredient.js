import React from 'react';

const BurgerIngredient = (props) => {
    let ingredient = null;

    switch (props.type) {
        case ('bread-bottom')
            ingredient = <div className={classes.Bread}></div>
    }
};

export default BurgerIngredient;

