import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/homePage.scss';
import Button from '../../components/styledComponent/Button';
import createOrderPic from '../../images/create-order.jpg';
import editOrderPic from '../../images/maarten-van-den-heuvel-246398-unsplash.jpg';
import trackOrderPic from '../../images/rhys-moult-328651-unsplash.jpg';
import receiveOrderPic from '../../images/receive-parcel.jpg';

const Homepage = () => (
  <div className="hm">
    <main id="slide-container">
      <div id="hero-bg">
        <div className="container">
          <div className="hero-text">
            <h1>Welcome to SendIt</h1>
            <div className="hero-description">
              <p>
                SendIT is a courier service that helps users deliver parcels to
                different destinations.
                <span className="hide-on-small">
                  SendIT provides courier quotes based on weight categories.
                </span>
              </p>
            </div>
            <Button type="button" className="py-3" primary inlineButton>
              <Link to="/create-parcel">Get started</Link>
            </Button>
            <Button type="button" className="py-3" primary inlineButton>
              <Link to="/track-parcels">Track deliveries</Link>
            </Button>
          </div>
        </div>
      </div>
      <div id="hero-bg-2">
        <div className="container">
          <div className="hero-text">
            <h1>Welcome to SendIt</h1>
            <div className="hero-description">
              <p>
                SendIT is a courier service that helps users deliver parcels to
                different destinations.{' '}
                <span className="hide-on-small">
                  SendIT provides courier quotes based on weight categories.
                </span>
              </p>
            </div>
            <Button type="button" className="py-3" primary inlineButton>
              <Link to="/create-parcel">Get started</Link>
            </Button>
            <Button type="button" className="py-3" primary inlineButton>
              <Link to="/track-parcels">Track deliveries</Link>
            </Button>
          </div>
        </div>
      </div>
      <div id="hero-bg-3">
        <div className="container">
          <div className="hero-text">
            <h1>Welcome to SendIt</h1>
            <div className="hero-description">
              <p>
                SendIT is a courier service that helps users deliver parcels to
                different destinations.{' '}
                <span className="hide-on-small">
                  SendIT provides courier quotes based on weight categories.
                </span>
              </p>
            </div>
            <Button type="button" className="py-3" primary inlineButton>
              <Link to="/create-parcel">Get started</Link>
            </Button>
            <Button type="button" className="py-3" primary inlineButton>
              <Link to="/track-parcels">Track deliveries</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
    {/* this is the about us section */}
    <main className="services">
      <div className="container">
        <h3 className="services-title">WHO WE ARE</h3>
        <h2 className="services-header">
          <span className="highlight">Fast and accurate delivery</span> to your
          door steps
        </h2>
        <p>
          Your parcels orders are our number one priority here at SendIt,With
          branches all over the world, SendIt has become a popularly reputable
          courier service that makes its customers/clients their priority
        </p>
      </div>
      <div className="container">
        <div className="how-to-use">
          <div>
            <h2>Create a new delivery</h2>
            <div className="description-cards">
              <img src={createOrderPic} alt="card" />
              <p>
                Generate your parcel delivery, weighing from 100kg - 1000000kg.
              </p>
            </div>
          </div>
          <div>
            <h2>Edit a delivery</h2>
            <div className="description-cards">
              <img src={editOrderPic} alt="edit" />
              <p>
                Edit your parsel delivery, and arrange them according to your
                choice.
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="how-to-use">
          <div>
            <h2>Track a delivery</h2>
            <div className="description-cards">
              <img src={trackOrderPic} alt="track-card" />
              <p>
                Be aware of your package location at every given point in time
              </p>
            </div>
          </div>
          <div>
            <h2>Recieve delivery on time</h2>
            <div className="description-cards">
              <img src={receiveOrderPic} alt="receive-order-pic" />
              <p>Expect your package at the given time</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default Homepage;
