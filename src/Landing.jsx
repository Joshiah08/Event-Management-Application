export default function Landing({ onGetStarted }) {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <div className="landing-nav">
          <div className="landing-logo">
            <span className="logo-accent">Event</span> Manager
          </div>
          <button className="nav-login-btn" onClick={onGetStarted}>
            Sign In
          </button>
        </div>
      </header>

      <main className="landing-main">
        <section className="hero-section">
          <div className="hero-content">
            <h1>Manage Your Events Effortlessly</h1>
            <p>
              Create, organize, and manage all your events in one powerful
              platform. From conferences to festivals, we've got you covered.
            </p>
            <button className="cta-button" onClick={onGetStarted}>
              Get Started Free
            </button>
          </div>
          <div className="hero-illustration">
            <div className="illustration-placeholder">
              <svg
                viewBox="0 0 300 300"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="150"
                  cy="150"
                  r="120"
                  fill="rgba(170, 59, 255, 0.1)"
                  stroke="rgba(170, 59, 255, 0.3)"
                  strokeWidth="2"
                />
                <circle
                  cx="150"
                  cy="150"
                  r="80"
                  fill="rgba(170, 59, 255, 0.15)"
                  stroke="rgba(170, 59, 255, 0.4)"
                  strokeWidth="2"
                />
                <circle
                  cx="150"
                  cy="150"
                  r="40"
                  fill="var(--accent)"
                  opacity="0.3"
                />
                <text
                  x="150"
                  y="160"
                  textAnchor="middle"
                  fontSize="24"
                  fill="var(--accent)"
                  fontWeight="bold"
                >
                  📅
                </text>
              </svg>
            </div>
          </div>
        </section>

        <section className="features-section">
          <h2>Why Choose Event Manager?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Event Dashboard</h3>
              <p>
                Get a complete overview of all your events with detailed
                analytics and real-time updates.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Attendee Management</h3>
              <p>
                Track registrations, manage tickets, and communicate with
                attendees all in one place.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📧</div>
              <h3>Smart Notifications</h3>
              <p>
                Send automated reminders and updates to keep your attendees
                informed every step of the way.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Ticket Sales</h3>
              <p>
                Sell tickets directly through the platform with secure payment
                processing and instant confirmations.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Mobile Friendly</h3>
              <p>
                Manage your events on the go with our fully responsive mobile
                interface.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure & Reliable</h3>
              <p>
                Enterprise-grade security ensures your event data and attendee
                information are always protected.
              </p>
            </div>
          </div>
        </section>

        <section className="stats-section">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Events Created</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">500K+</div>
              <div className="stat-label">Attendees Managed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Customer Support</div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Ready to streamline your events?</h2>
          <p>Join thousands of event organizers using Event Manager today.</p>
          <button className="cta-button primary" onClick={onGetStarted}>
            Start Your Free Trial
          </button>
        </section>
      </main>

      <footer className="landing-footer">
        <div className="footer-content">
          <p>&copy; 2024 Event Manager. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#contact">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  )
}