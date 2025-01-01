import EventItem from '../components/EventItem.js';
import { redirect, useRouteLoaderData } from "react-router-dom";

export default function EventDetailPage() {
    const data = useRouteLoaderData('event-detail');

    return (
        <EventItem event={data.event}/>
    );
}

export async function loader({request, params}) {
    const id = params['some-id'];

    const response = await fetch('http://localhost:8080/events/' + id);

    if (!response.ok) {
        throw new Response(JSON.stringify({ message: 'Could not fetch details for selected event.' }), {
            status: 500,
          });
    } else {
        return response;
    }    
}

export async function action({params, request}) {
    const eventId = params['some-id'];

    console.log('action in event Detail ', request.method);

    const response = await fetch('http://localhost:8080/events/' + eventId, {
        method: request.method,
    });
    if (!response.ok) {
        throw new Response(JSON.stringify({ message: 'Could not delete event.' }), {
            status: 500,
          });
    }
    return redirect('/events');
}