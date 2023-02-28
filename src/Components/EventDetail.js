import Icon from '../images/Icon.png';
// import '../scss/EventDetail.css';
const EventDetail = () => {
  return (
    <div className="event-detail-wrapper">
      <div className="event-header">
        <div>
          <img src={Icon} alt="RainFocus Icon" />
          <div>
            <h1>RainFocus Summit</h1>
            <p>December 15th</p>
            <p>Lehi, Utah</p>
          </div>
        </div>

        <button>Edit Event</button>
      </div>
    </div>
  );
};

export default EventDetail;
