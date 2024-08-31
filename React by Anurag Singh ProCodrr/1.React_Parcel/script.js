import { createRoot } from 'react-dom/client'
import Card from './Components/Card.js'

import './style.css';

Card({title: "title", sub_title: "subTitle", price: 10000})

const root = createRoot(document.querySelector('#root'));

root.render(Card)