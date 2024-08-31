
function Card({title, sub_title, price}) {
    <div className='card'>
                <img src="https://cdsassets.apple.com/live/7WUAS350/images/iphone/fall-2023-iphone-colors-iphone-15-pro-max.png" />
                <h1 className="phone">{title}</h1>
                <h2 className="brand">{sub_title}</h2>
                <h2 className="price">${price}</h2>
             </div>
}

export default Card;