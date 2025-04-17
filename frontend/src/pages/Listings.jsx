import '../Listings.css';
import {useEffect, useState} from 'react';

//images
import hoodieImage from '../images/hoodie.png';
import crocs from '../images/crocs.png';
import alternator from '../images/alternator.png';
import laptop from '../images/laptop.png';

const Listings = () => {
  //useState adds a functional component consisting of two values [var, func]
  //var is the component itself while func is the setter function used to change it
  const [listings, setListings] = useState([]); //initializes listings as an empty array
  
  useEffect(() => {
    const fetchListings = async () => {
      const response = await fetch('http://localhost:3000/api/listings');
      const data = await response.json();

      setListings(data);
    }

    fetchListings();
  }, []); //useEffect(effect,dependencies)

  return (
    <div className="listings-page">
      <h1 className="gator-title">Welcome to GatorGoods!</h1>
      <p>You've successfully verified your account. Here are some items UF students love:</p>

      <div className="listings-container">
        {listings.map((listing) => (
          <div className="listing-item" key={listing._id}>
            <img src={`http://localhost:3000/api/listings/${listing._id}`} alt={listing.name} className="listing-image" />
            <div className="listing-info">
              <h2>{listing.name}</h2>
              <p>{listing.description}</p>
              <p className="price">{listing.cost}</p>
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
