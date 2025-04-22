import '../Listings.css';
import Logo from '../images/logo.png';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


// images
import hoodieImage from '../images/hoodie.png';
import crocs from '../images/crocs.png';
import alternator from '../images/alternator.png';
import laptop from '../images/laptop.png';
import placeholderlogo from '../images/placeholder1.png'

const Listings = () => {
  const navigate = useNavigate();
  const [listings, setListings] = useState([]);
  const [reportedListings, setReportedListings] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    cost: '',
  });

  const [searchTerm, setSearch] =useState('');
  
  const filteredListings = listings.filter(listing =>listing.name.toLowerCase().includes(searchTerm.toLowerCase()) || listing.description.toLowerCase().includes(searchTerm.toLowerCase()));

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/listings");
        const data = await res.json();
        console.log("Fetched listings data:", data);
        setListings(data);
      } catch (err) {
        console.error("Error fetching listings:", err);
      }
    };
  
    fetchListings();
  }, []);

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/listings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      const contentType = response.headers.get("content-type");
  
      if (!response.ok) {
        const errorData = contentType && contentType.includes("application/json")
          ? await response.json()
          : await response.text();
  
        console.error('Server returned error:', errorData);
        return;
      }
  
      const newItem = await response.json();
      setListings([...listings, newItem]);
      setFormData({ name: '', description: '', cost: '' });
    } catch (err) {
      console.error('Error submitting data:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/listings/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const contentType = response.headers.get("content-type");
        const errorData = contentType && contentType.includes("application/json")
        ? await response.json()
        : await response.text();
        console.error("Failed to delete the listing");
        return;
      }

      setListings(listings.filter(listing => listing._id !== id));
    } catch (err) {
      console.error('Error deleting listing:', err);
    }
  };

  const handleReport = (id) => {
    setReportedListings(prev => ({
      ...prev,
      [id]: true
    }));
  };

  return (
    <div className="listings-page">
      <div className="logout-container">
      <button className="logout-btn" onClick={() => navigate('/logout')}>
        Logout
      </button>
      </div>

      <img src={Logo} alt="GatorGoods Logo" className="gator-logo" />
      <p>You've successfully verified your account. Here are some items UF students love:</p>

      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search by item name"
          value={searchTerm}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <form onSubmit={handleSubmit} className="listing-form">
        <h2>Add a New Listing</h2>
        <input 
          type="text" 
          name="name" 
          placeholder="Item name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="description" 
          placeholder="Description/contact info" 
          value={formData.description} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="cost" 
          placeholder="Cost" 
          value={formData.cost} 
          onChange={handleChange} 
          required 
        />
        <button type="submit">Submit</button>
      </form>

      <div className="listings-container">
        {filteredListings.map((listing) => (
          <div className="listing-item" key={listing._id}>
            <img 
              src={placeholderlogo} 
              alt={listing.name} 
              className="listing-image" 
            />
            <div className="listing-info">
              <h2>{listing.name}</h2>
              <p>{listing.description}</p>
              <p className="price">${listing.cost}</p>
              <div className="button-group">
                <button
                  className="buy-btn"
                  onClick={() => handleDelete(listing._id)}>
                  Buy
                </button>
                {reportedListings[listing._id] ? (
                    <p style={{ color: '#ff4d4f', marginTop: '10px' }}>Reported. Thanks for the feedback!</p>
                  ) : (
                    <button
                      className="report-btn"
                      onClick={() => handleReport(listing._id)}
                    >
                      Report
                    </button>
                  )}
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
};

export default Listings;
