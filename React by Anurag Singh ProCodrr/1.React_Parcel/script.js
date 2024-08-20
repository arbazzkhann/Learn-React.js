import { createRoot } from 'react-dom/client'

import './style.css';

const card = <div className='card'>
                <img src="https://cdsassets.apple.com/live/7WUAS350/images/iphone/fall-2023-iphone-colors-iphone-15-pro-max.png" />
                <h1 className="phone">IPhone 15 Pro</h1>
                <h2 className="brand">APPLE</h2>
                <h2 className="price">$1299</h2>
             </div>

const root = createRoot(document.querySelector('#root'));

root.render(card)