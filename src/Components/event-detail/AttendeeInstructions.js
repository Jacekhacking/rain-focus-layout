import NewRegistration from './NewRegistration';
import AttendeeRegistrationWorkflow from './AttendeeRegistrationWorkflow';
import SVG from '../../images/Shape.svg';
import personalPortalSVG from '../../images/PersonPortal.svg';

function AttendeeInstructions() {
  return (
    <section className="attendee-wrapper">
      <div className="flex">
        <img src={personalPortalSVG} alt="" />
        <h2>Attendee</h2>
      </div>

      <div className="mb-24">
        <h3>
          <span className="bolded"> Step 1</span>: Base Settings
        </h3>
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
        <h3>
          <span className="bolded"> Step 2</span>: Build registration workflows.
        </h3>
        <div className="workflow-component">
          <AttendeeRegistrationWorkflow />
          <AttendeeRegistrationWorkflow />
          <AttendeeRegistrationWorkflow />

          <NewRegistration />
        </div>
      </div>
      <div>
        <h3>
          <span className="bolded"> Step 3</span>: Build registration workflows.
        </h3>

        <div className="workflow-component">
          <div className="instruction-wrapper-small">
            <div className="instruction-title">
              <img src={SVG} alt="" />
              <h4> General </h4>
            </div>
            <p> Define Attendee types & attributes </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AttendeeInstructions;
