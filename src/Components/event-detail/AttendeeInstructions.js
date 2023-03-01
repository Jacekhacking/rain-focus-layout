import NewRegistration from './NewRegistration';

function AttendeeInstructions() {
  return (
    <section className="attendee-wrapper">
      <h2>Attendee</h2>

      <div className="mb-24">
        <h3>Step 1: Base Settings</h3>
        <div className="instruction-wrapper">
          <div>
            <h4> General </h4>
            <p> Define Attendee types & attributes </p>
          </div>
          <div>
            <h4> Title </h4>
            <p>
              Description that explains the value goes here. Description that
              explains the value goes here.
            </p>
          </div>
          <div>
            <h4> Title </h4>
            <p>
              Description that explains the value goes here. Description that
              explains the value goes here.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-24">
        <h3> Step 2: Build registration workflows.</h3>

        <div className="workflow-component">
          <div className="instruction-wrapper-small">
            <div className="flex pb-8">
              <div className="arrow-img"></div>
              <h4> Attendee Registration </h4>
            </div>
            <p> Start by creating a general registration workflow </p>
          </div>
          <div className="instruction-wrapper-small">
            <div className="flex pb-8">
              <div className="arrow-img"></div>
              <h4> Attendee Registration </h4>
            </div>
            <p> Start by creating a general registration workflow </p>
          </div>
          <div className="instruction-wrapper-small">
            <div className="flex pb-8">
              <div className="arrow-img"></div>
              <h4> Attendee Registration </h4>
            </div>
            <p> Start by creating a general registration workflow </p>
          </div>

          <NewRegistration />
        </div>
      </div>
      <div>
        <h3> Step 3: Build registration workflows.</h3>

        <div className="workflow-component">
          <div className="instruction-wrapper-small">
            <h4> General </h4>
            <p> Define Attendee types & attributes </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AttendeeInstructions;
