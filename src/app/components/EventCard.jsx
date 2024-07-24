export default function EventCard(props) {
    return (
        <div key={props.id} className="event-card">
            <div className="event-date">
                {props.month}
                <span>{props.day}</span>
            </div>
            <ul className="event-details">
                <li className="event-name">{props.name}</li>
                <li className="event-location">{props.location}</li>
                <li className="event-venue">{props.venue}</li>
            </ul>
            <a href={props.url} className="event-link" target="_blank">
                Find tickets
            </a>
        </div>
    )
}