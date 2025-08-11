import React from "react";
import "./Pricing.css";

export default function Pricing() {
  return (
    <section className="pricing-section">
      <h1 className="title">Simple and Honest Pricing!</h1>
      <p className="subtitle">
        7-day free trial. No credit card required
      </p>

      <div className="pricing-cards">
        {/* Pro Plan */}
        <div className="pricing-card dark-card">
          <div className="card-header">
            <span className="plan-name">Pro</span>
            <span className="badge">Most Popular</span>
          </div>
          <div className="price">
            <span className="currency">Rs.</span> 999
            <span className="period">/monthly</span>
          </div>
          <ul className="features">
            <li>Unlimited backup to PC</li>
            <li>1 TB Cloud storage</li>
            <li>Email Support</li>
            <li>Integrations*</li>
          </ul>
          <button className="btn light-btn">Sign up now</button>
        </div>

        {/* Team Plan */}
        <div className="pricing-card light-card">
          <div className="card-header">
            <span className="plan-name">Team</span>
          </div>
          <div className="price">
            <span className="currency">Rs.</span> 899
            <span className="period">/monthly/seat</span>
          </div>
          <ul className="features">
            <li>Everything in Pro</li>
            <li>Team Collab</li>
            <li>Shared Storage</li>
            <li>Lightroom plugin</li>
            <li>Advanced Analytics</li>
            <li>Dedicated Account Manager</li>
          </ul>
          <button className="btn dark-btn">Sign up now</button>
        </div>
      </div>
    </section>
  );
}
