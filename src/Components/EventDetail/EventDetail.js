import EventDetailHeader from './EventDetailHeader';
import AttendeeInstructions from './AttendeeInstructions';
const EventDetail = () => {
  return (
    <div className="event-detail-wrapper">
      <EventDetailHeader />
      <AttendeeInstructions />
    </div>
  );
};

export default EventDetail;
