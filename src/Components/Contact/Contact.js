import React from 'react';
import './Contact.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Contact() {
  return (
    <div className="contact">
      <Container>
        <Row>
          <Col className="title">
            <h1>CONTACT</h1>
            <div className="line">

            </div>
          </Col>
        </Row>
        <Row>
          <Col className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021674.578012545!2d41.11404309696011!3d42.302978925704934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd7e64f626b%3A0x4f907964122d4ac2!2z4YOh4YOQ4YOl4YOQ4YOg4YOX4YOV4YOU4YOa4YOd!5e0!3m2!1ska!2sge!4v1581241665926!5m2!1ska!2sge" width="100%" height="465" frameborder="0" allowfullscreen=""></iframe>
          </Col>
        </Row>
        <Row>
          <Col className="form">
            <div className="maxWidth">
              <h2>Inquiries</h2>
              <p>For any inquiries, questions or commendations, please call: 123-456-7890 or fill out the following form</p>
              <form>
                <h2>Contact Us</h2>
                <div>
                  <p>Enter Your Name</p>
                  <input type="text" placeholder="Name" required></input>
                </div>
                <div>
                  <p>Enter Your Email</p>
                  <input type="email" placeholder="Email" required></input>
                </div>
                <div>
                  <p>Enter Your Subject</p>
                  <input type="text" placeholder="Subject" required></input>
                </div>
                <div>
                  <p>Enter Your Message</p>
                  <textarea placeholder="Message" required></textarea>
                </div>
                <div className="submit">
                  <button>Submit</button>
                </div>
              </form>
            </div>
          </Col>
          <Col>
            <div className="maxWidth info">
              <h2>Head Office</h2>
              <div className="box1">
                <p>500 Terry Francois Street</p>
                <p>San Francisco, CA 94158</p>
              </div>
              <div className="box2">
                <p><a href="#">info@mysite.com</a></p>
                <p>Tel: 123-456-7890</p>
                <p>Fax: 123-456-7890</p>
              </div>
              <h2>Employment</h2>
              <p>To apply for a job with Sphere Constuctions, please send a cover letter together with your C.V. to: <a href="#">info@mysite.com</a></p>
              <div className="line">

              </div>
              <h2>Get a quote: 123-456-7890</h2>
            </div>
          </Col>
        </Row>
        <Row className="cprs">
          <div className="copyright">
            <p>© 2023 by Sphere Construction. Proudly created with <a href="wix.com">Wix.com</a></p>
          </div>
          <div className="socials">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
