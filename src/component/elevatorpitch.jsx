import './styles/elevatorpitch.css';

const elevatorPitchUrl = 'https://drive.google.com/file/d/REPLACE_WITH_ELEVATOR_PITCH_ID/view';

const ElevatorPitch = () => {
  return (
    <section className="section elevator-pitch" id="pitch">
      <p className="eyebrow">Section C</p>
      <h2>Elevator Pitch</h2>
      <p>
        Upload your elevator pitch video to YouTube or Google Drive, then replace the link below
        to publish it here.
      </p>
      <a href={elevatorPitchUrl} target="_blank" rel="noreferrer">
        Watch Elevator Pitch
      </a>
    </section>
  );
};

export default ElevatorPitch;
