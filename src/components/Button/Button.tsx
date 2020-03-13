import React from 'react';
import { getText } from './helper';
import './Button.scss';


export const Button = () => <button className="button-new">{getText()}</button>;
