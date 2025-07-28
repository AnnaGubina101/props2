type Items = {
    listing_id?: number,
    url?: string,
    MainImage?:  string,
    title?: string,
    currency_code?: string,
    price?: string,
    quantity?: number
}

type ListingProps = {
    items?: Items[];
}

export const Listing = ({ items = [] }: ListingProps) => {
    return (
        <div className="item-list"> {items.map((item) => (
            <div className="item-list" key={item.listing_id}>
            <div className="item">
                <div className="item-image">
                <a href={item.url}>
                    <img src={item.MainImage} alt={item.title}/>
                </a>
                </div>
                <div className="item-details">
                <p className="item-title">{titleLength(item.title)}</p>
                <p className="item-price">{currencyCode(item.currency_code)+item.price}</p>
                <p className={`item.quantity ${quantityLevel(item.quantity)}`}>{item.quantity}left</p>
                </div>
            </div>
            </div>
        ))}
        </div>
    )
}

function titleLength(title: string) {
    if(title.length > 50) return title.length > 50 ? title.slice(0, 50) + '...' : title;
}

function currencyCode(currency_code: string) {
    if(currency_code === 'USD') return '$'
    else if(currency_code === 'EUR') return '€'
    else return currency_code + ' ';
}

function quantityLevel(quantity: number) {
    if(quantity <= 10) return 'level-low'
    else if(quantity <= 20) return 'level-medium'
    else if(quantity > 20) return 'level-high'
}