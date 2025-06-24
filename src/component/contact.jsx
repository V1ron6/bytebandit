import './styles/contact.css';

function makebelieve() {
  const l1 = document.getElementById('name');
  const l2 = document.getElementById('email');
  const l3 = document.getElementById('subject');
  const l4 = document.getElementById('mess');
  const dial = document.getElementById('loader');

  // Show dialog
  dial.showModal();

  // Clear inputs
  l1.value = "";
  l2.value = "";
  l3.value = "";
  l4.value = "";

  // Close after 3 seconds
  setTimeout(() => {
    dial.close();
  }, 3000);
}

const Contact = () => {
  return (
 <>
      <dialog id="loader">
        <p id='loadeText'>
          sending<span id='dot'>...</span>
        </p>
      </dialog>
<div className='big'>
      <h1>Contact</h1>
   <div className='form'>
      <div className="form-field">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" required />
      </div>

      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="e.g. viron@gmail.com"
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" required />
      </div>

      <div className="form-field">
        <label htmlFor="message">Message</label>
        <textarea
          id="mess"
          name="message"
          rows="4"
          placeholder="Write your message here..."
          required
        ></textarea>
      </div>

      <div className="form-sub">
        <input type="submit" onClick={makebelieve} value="Send" />
      </div>
    </div>
    </div>
    </>
  );
};

export default Contact;
