import EventCard from './EventCard.jsx';


async function fetchEvents() {
   const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${process.env.TICKETMASTER_API_KEY}&keyword=jazz&city=Manchester`);
   const data = await response.json();
   return data._embedded.events;
}

export default async function EventList() {

  const events_ = await fetchEvents()

  let events = events_.map((item) => {
    let venue = item._embedded.venues.pop();
    return {
      id: item.id,
      name: item.name,
      month: new Date(item.dates.start.localDate).toLocaleString('default', { month: 'short' }),
      day: new Date(item.dates.start.localDate).getDate(),
      time: item.dates.start.localTime,
      location: venue && venue.city.name,
      venue: venue && venue.name,
      url: item.url
    }
  })
  return (
      <div className="event-list">
          {events.map(event => <EventCard key={event.id} {...event} />)}
      </div>
  )
}