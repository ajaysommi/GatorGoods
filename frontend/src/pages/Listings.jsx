import '../Listings.css';
import hoodieImage from '../images/hoodie.png';
import crocs from '../images/crocs.png';
import alternator from '../images/alternator.png';
import laptop from '../images/laptop.png';

function Listings() {
  const listings = [
    {
      id: 1,
      title: "Gator Hoodie",
      description: "Hoodie for our proud Gators!",
      price: "$219",
      image: hoodieImage,
    },
    {
      id: 2,
      title: "Laptop",
      description: "Hard working Gators need a hard working laptop",
      price: "$899",
      image: laptop,
    },
    {
      id: 3,
      title: "Gator Crocs",
      description: "You need these",
      price: "$150",
      image: crocs,
    },
    {
      id: 4,
      title: "Heavy duty alternator",
      description: "Show your Gator pride with this heavy duty alternator! Perfect for late-night study sessions.",
      price: "$344",
      image: alternator,
    },
  ];

  return (
    <div className="listings-page">
      <h1 className="gator-title">Welcome to GatorGoods!</h1>
      <p>You've successfully verified your account. Here are some items UF students love:</p>

      <div className="listings-container">
        {listings.map((listing) => (
          <div className="listing-item" key={listing.id}>
            <img src={listing.image} alt={listing.title} className="listing-image" />
            <div className="listing-info">
              <h2>{listing.title}</h2>
              <p>{listing.description}</p>
              <p className="price">{listing.price}</p>
              <div className="button-group">
                <button className="view-btn">View</button>
                <button className="report-btn">Report</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer style={{ marginTop: '40px', fontSize: '0.8rem', color: '#777' }}>
        <p>© 2025 GatorGoods, Inc. All rights reserved. This is a student-built demo for the UF SWE team 4. No actual goods are being sold.</p>
      </footer>
    </div>
  );
}

export default Listings;
