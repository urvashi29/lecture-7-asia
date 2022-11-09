import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipe } from '../actions';
import Display from './Display';

const Recipe = () => {
    const recipes = useSelector(state => state.recipe);
    const [user, setUser] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecipe());
    }, []);


    useEffect(() => {
        console.log('component mounted');

        return () => {
            console.log('componentUnmount');
        }
    }, [user]);

    return (
        <>
            <Display recipes={recipes} />
        </>
    );
};



export default Recipe;


