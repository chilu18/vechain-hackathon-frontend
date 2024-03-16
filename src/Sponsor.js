import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import logo from './logo512.png';

const initialPastEvents = [
  {
    eventName: "Sustainable EV Battery Challenge",
    description: "Find the most sustainable battery technology for electric vehicles.",
    award: "10,000 USD"
  },
  {
    eventName: "Renewable Energy Innovation Contest",
    description: "Develop innovative solutions for renewable energy generation and storage.",
    award: "25,000 USD"
  },
  {
    eventName: "Zero Waste Manufacturing Challenge",
    description: "Design and implement zero waste manufacturing processes.",
    award: "15,000 USD"
  }
];

function Sponsor() {
  const [pastEvents] = useState(initialPastEvents);
  const [campaign, setCampaign] = useState({ name: '', description: '', availableAward: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCampaign(prevCampaign => ({ ...prevCampaign, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Publishing campaign:', campaign);
    // TODO: Send the campaign data to your server
    alert('Campaign published! Check the console for details.');
  };

  return (
    <div>
      <nav className="navbar is-black" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src={logo} alt="Logo" width="42" height="42" />
          </Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link to="/" className="button is-light">Back</Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="section">
        <div className="container">
          <h1 className="title has-text-centered">Sponsor Dashboard</h1>
          <div className="columns is-centered">
            <div className="column is-half">
              <h2 className="subtitle">Past Sustainability Campaigns</h2>
              {pastEvents.map((event, index) => (
                <div key={index} className="box">
                  <h3 className="title is-4">{event.eventName}</h3>
                  <p>{event.description}</p>
                  <p><strong>Award:</strong> {event.award}</p>
                </div>
              ))}
            </div>
            <div className="column is-half">
              <h2 className="subtitle">New Campaign</h2>
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input className="input" type="text" name="name" value={campaign.name} onChange={handleChange} />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Description</label>
                  <div className="control">
                    <textarea className="textarea" name="description" value={campaign.description} onChange={handleChange}></textarea>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Available Award</label>
                  <div className="control">
                    <input className="input" type="text" name="availableAward" value={campaign.availableAward} onChange={handleChange} />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <button type="submit" className="button is-primary">Publish Campaign</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sponsor;