import './styles/elevatorpitch.css';

const elevatorPitchUrl = 'https://drive.google.com/drive/folders/1CpP9hI6CYAW1c7Z1ebFZgEn50Ks4EARa ';

const ElevatorPitch = () => {
  return (
    <section className="section elevator-pitch" id="pitch">
      <p className="eyebrow">Section C</p>
      <h2>Elevator Pitch</h2>
      <p>
        Below is the link to a pitch video about myself
      </p>
      {elevatorPitchUrl ? (
        <a href={elevatorPitchUrl} target="_blank" rel="noreferrer">
          Watch Elevator Pitch
        </a>
      ) : (
        <p className="pitch-placeholder">Elevator pitch link pending upload.</p>
      )}
    </section>
  );
};

export default ElevatorPitch;
