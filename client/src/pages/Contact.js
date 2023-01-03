import React, {useState, useEffect} from 'react'
import '../Styles.css/Contact.css';


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
 

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thank you for your message, ${name}! We will get back to you via email or phone provided!`);
  };

  return (
    <section className="contact" id="contact">
      <div className="image">
        <img src="images/contact_img.png" alt="" />
      </div>
      <form action="" onSubmit={handleSubmit}>
        <h3>contact us</h3>
        <input type="text" placeholder="your name" className="box"  value={name} onChange={(event) => setName(event.target.value)} required />
        <input type="email" placeholder="your email" className="box" value={email} onChange={(event) => setEmail(event.target.value)} required  />
        <input type="tumber" placeholder="your number" className="box" value={number} onChange={(event) => setNumber(event.target.value)} />
        <textarea name="" placeholder="your message" id="" cols="30" rows="10" value={message} onChange={(event) => setMessage(event.target.value)}/>
        <input type="submit" value="send message" className="btn" />
      </form>
    </section>
  );
};

export default Contact;



