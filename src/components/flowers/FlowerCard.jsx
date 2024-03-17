function FlowerCard({ flower }) {
    return (
        <div className="flower-card">
            <div className="flower-img">
                <img src={flower.imageUrl} alt={flower.name} />
            </div>
            <h3 className="flower-name">{flower.name}</h3>
            <h4 className="flower-size">{flower.size}</h4>
            <h4 className="flower-price">{flower.price}</h4>
        </div>
    );
}

export default FlowerCard;