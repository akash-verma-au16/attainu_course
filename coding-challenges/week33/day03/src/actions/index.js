import { counterTypes } from '../actionTypes';

export const incrementCounter = () => ({ type: counterTypes.increment });

export const decrementCounter = () => ({ type: counterTypes.decrement });
