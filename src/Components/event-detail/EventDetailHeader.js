import Icon from '../../images/Icon.png';

function EventDetailHeader() {
  return (
    <section className="event-header">
      <div className="event-header-content">
        <div>
          <img src={Icon} alt="RainFocus Icon" />

          <div className="flex flex-col">
            <h1>RainFocus Summit</h1>
            <div className="flex flex-col">
              <p>December 15th</p>
              <p>Lehi, Utah</p>
            </div>
          </div>
        </div>

        <button>Edit Event</button>
      </div>

      <h2>Event setup guide</h2>
      <p>
        See the available list of modules below. We suggest that you start with
        the attendee module.
      </p>
    </section>
  );
}

export default EventDetailHeader;
