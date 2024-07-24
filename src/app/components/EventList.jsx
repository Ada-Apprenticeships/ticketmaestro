import EventCard from './EventCard.jsx';


async function fetchEvents() {
   const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${process.env.TICKETMASTER_API_KEY}&keyword=jazz&city=Manchester`);
   const data = await response.json();
   return data._embedded.events;
}

export default async function EventList() {

  // fetch data from ticketmaster API -> API key!
  const events = await fetchEvents();
  console.log(events[0],'<----- first event back')

  return (
    <div className="event-list">
      {events.map((event) => (
        <EventCard key={event.key} {...event} />
      ))}
    </div>
  );
}
