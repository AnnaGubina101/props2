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
    <div className="item-list">
      {items.map((item) => {
        if (!item || typeof item !== 'object') return null;

        const {
          listing_id,
          url = '#',
          MainImage,
          title = 'Нет названия',
          currency_code = '',
          price = '—',
          quantity = 0,
        } = item;

        return (
          <div className="item" key={listing_id}>
            <div className="item-image">
              <a href={url}>
                {MainImage ? (
                  <img src={MainImage} alt={title} />
                ) : (
                  <div style={{ width: '120px', height: '90px', background: '#ccc' }}>
                    Нет изображения
                  </div>
                )}
              </a>
            </div>
            <div className="item-details">
              <p className="item-title">{titleLength(title)}</p>
              <p className="item-price">{currencyCode(currency_code) + price}</p>
              <p className={`item-quantity ${quantityLevel(quantity)}`}>
                {quantity} left
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

function titleLength(title: string) {
  if (!title) return 'Без названия';
  return title.length > 50 ? title.slice(0, 50) + '…' : title;
}


function currencyCode(currency_code: string) {
  if (currency_code === 'USD') return '$';
  else if (currency_code === 'EUR') return '€';
  else return currency_code + ' ';
}


function quantityLevel(quantity: number) {
  if (quantity <= 10) return 'level-low';
  else if (quantity <= 20) return 'level-medium';
  else return 'level-high';
}