import { useState } from 'react'

export default function Home({ userEmail, onLogout }) {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Annual Tech Conference',
      date: '2024-06-15',
      location: 'San Francisco, CA',
      attendees: 342,
      status: 'upcoming',
    },
    {
      id: 2,
      title: 'Summer Music Festival',
      date: '2024-07-20',
      location: 'Austin, TX',
      attendees: 1250,
      status: 'upcoming',
    },
    {
      id: 3,
      title: 'Web Development Workshop',
      date: '2024-05-10',
      location: 'New York, NY',
      attendees: 85,
      status: 'completed',
    },
  ])

  const [newEventForm, setNewEventForm] = useState({
    title: '',
    date: '',
    location: '',
  })

  const [showForm, setShowForm] = useState(false)

  const handleAddEvent = (e) => {
    e.preventDefault()
    if (!newEventForm.title.trim() || !newEventForm.date || !newEventForm.location.trim()) {
      return
    }

    const newEvent = {
      id: events.length + 1,
      title: newEventForm.title,
      date: newEventForm.date,
      location: newEventForm.location,
      attendees: 0,
      status: 'upcoming',
    }

    setEvents([...events, newEvent])
    setNewEventForm({ title: '', date: '', location: '' })
    setShowForm(false)
  }

  const upcomingEvents = events.filter((e) => e.status === 'upcoming')
  const completedEvents = events.filter((e) => e.status === 'completed')

  return (
    <div className="home-page">
      <header className="home-header">
        <div className="header-content">
          <div className="header-title">
            <h1>Event Manager</h1>
            <p>Manage all your events in one place</p>
          </div>
          <div className="header-user">
            <span className="user-email">{userEmail}</span>
            <button className="logout-btn" onClick={onLogout}>
              Log out
            </button>
          </div>
        </div>
      </header>

      <main className="home-content">
        <section className="events-section">
          <div className="section-header">
            <h2>Upcoming Events</h2>
            <button
              className="add-event-btn"
              onClick={() => setShowForm(!showForm)}
            >
              {showForm ? '✕ Cancel' : '+ New Event'}
            </button>
          </div>

          {showForm && (
            <form className="add-event-form" onSubmit={handleAddEvent}>
              <input
                type="text"
                placeholder="Event title"
                value={newEventForm.title}
                onChange={(e) =>
                  setNewEventForm({ ...newEventForm, title: e.target.value })
                }
                required
              />
              <input
                type="date"
                value={newEventForm.date}
                onChange={(e) =>
                  setNewEventForm({ ...newEventForm, date: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Location"
                value={newEventForm.location}
                onChange={(e) =>
                  setNewEventForm({ ...newEventForm, location: e.target.value })
                }
                required
              />
              <button type="submit">Create Event</button>
            </form>
          )}

          {upcomingEvents.length > 0 ? (
            <div className="events-grid">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="event-card">
                  <div className="event-header">
                    <h3>{event.title}</h3>
                    <span className="event-status upcoming">Upcoming</span>
                  </div>
                  <div className="event-details">
                    <p>
                      <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
                    </p>
                    <p>
                      <strong>Location:</strong> {event.location}
                    </p>
                    <p>
                      <strong>Attendees:</strong> {event.attendees}
                    </p>
                  </div>
                  <div className="event-actions">
                    <button className="btn-edit">Edit</button>
                    <button className="btn-delete">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-events">
              No upcoming events. Create one to get started!
            </p>
          )}
        </section>

        {completedEvents.length > 0 && (
          <section className="events-section completed">
            <h2>Completed Events</h2>
            <div className="events-grid">
              {completedEvents.map((event) => (
                <div key={event.id} className="event-card completed">
                  <div className="event-header">
                    <h3>{event.title}</h3>
                    <span className="event-status completed">Completed</span>
                  </div>
                  <div className="event-details">
                    <p>
                      <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
                    </p>
                    <p>
                      <strong>Location:</strong> {event.location}
                    </p>
                    <p>
                      <strong>Attendees:</strong> {event.attendees}
                    </p>
                  </div>
                  <div className="event-actions">
                    <button className="btn-view">View Details</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  )
}
