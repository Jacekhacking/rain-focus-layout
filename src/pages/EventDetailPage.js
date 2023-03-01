import EventDetailHeader from '../components/event-detail/EventDetailHeader';
import AttendeeInstructions from '../components/event-detail/AttendeeInstructions';
const EventDetail = () => {
  return (
    <div className="event-detail-wrapper">
      <EventDetailHeader />
      <AttendeeInstructions />
    </div>
  );
};

export default EventDetail;
