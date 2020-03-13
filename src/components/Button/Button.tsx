import React from 'react';
import { getText } from './helper';
import './Button.scss';


const Button = () => <button className="button-new">{getText()}</button>;

export default Button;