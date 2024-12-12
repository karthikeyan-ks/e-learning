import { useEffect, useState } from 'react';
import './form.css';
const Form = () => {
  const [csrfToken, setCsrfToken] = useState('');
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const [date, setDate] = useState('')
  const [phone, setPhone] = useState('')
  const [sem, setSem] = useState('')
  const [dept, setDept] = useState('')
  const [college, setCollege] = useState('')

  useEffect(() => {
    fetch('https://karthikeyanks.pythonanywhere.com/api/csrf/', {
      method: 'GET',
      credentials: 'include',  // Ensure cookies are sent
    })
      .then(response => response.json())
      .then(data => {
        setCsrfToken(data.csrfToken);  // Store CSRF token in state
      })
      .catch(error => console.error('Error fetching CSRF token:', error));
  }, []);

  const handleButton = async (e:any) => {
    e.preventDefault();

    const data = {
      first,last,age,email,phone,date,sem,dept,college
    };

    try {
      const response = await fetch('https://karthikeyanks.pythonanywhere.com/api/registration/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken,  // Make sure to use the fetched CSRF token
        },
        body: JSON.stringify(data),
        credentials: 'include',  // Include credentials like CSRF token if needed
      });

      const result = await response.json();
      console.log(result);  // Handle the response
    } catch (error) {
      console.error('Error:', error);  // Handle any errors
    }
  };

  return (
    <form onSubmit={handleButton}>
      <div className="form-row">
        <input type="text" placeholder="First name" className="half-width" onChange={(e) => {
          setFirst(e.currentTarget.value)
        }} />
        <input type="text" placeholder="Last name" className="half-width" onChange={(e) => {
          setLast(e.currentTarget.value)
        }} />
      </div>
      <div className="form-row">
        <input type="email" placeholder="Your email" className="large-width"onChange={(e) => {
          setEmail(e.currentTarget.value)
        }} />
        <input type="number" placeholder="Age" className="small-width" onChange={(e) => {
          setAge(e.currentTarget.value)
        }}/>
      </div>
      <div className="form-row">
        <input type="date" placeholder="Date Of Birth" className="half-width" onChange={(e) => {
          setDate(e.currentTarget.value)
        }}/>
        <input type="tel" placeholder="Phone number" className="half-width" onChange={(e) => {
          setPhone(e.currentTarget.value)
        }}/>
      </div>
      <div className="form-row">
        <input type="text" placeholder="Semester" className="small-width" onChange={(e) => {
          setSem(e.currentTarget.value)
        }}/>
        <input type="text" placeholder="Department" className="large-width" onChange={(e) => {
          setDept(e.currentTarget.value)
        }}/>
      </div>
      <div className="form-row full width">
        <input type="text" placeholder="College Name" className="large-width" onChange={(e) => {
          setCollege(e.currentTarget.value)
        }}/>
      </div>
      <button type="submit">Submit</button>
      <p className="terms">
        By contacting us, you agree to our <a href="#">Terms of service</a> and <a href="#">Privacy Policy</a>
      </p>
    </form>
  );
};

export default Form;
