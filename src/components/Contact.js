import React from 'react';
import { Link } from 'gatsby';
import emailjs from 'emailjs-com';

class Contact extends React.Component {

constructor(props) {
  super(props)

  this.state = {
          submitDisabled: false,
          message: ''
      };

      this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit(event) {
    event.preventDefault();
    if (!this.state.submitDisabled) {
        this.setState({
            submitDisabled: true
        });

        let name = encodeURI(this.dataName.value),
            email = encodeURI(this.dataEmail.value),
            message = encodeURI(this.dataMessage.value),
            body = `name=${name}&email=${email}&message=${message}`;
            console.log(body)

            var template_params = {
               "reply_to": email,
               "from_name": name,
               "to_name": "Matthew Gabriel",
               "message_html": message
            }

            var service_id = "default_service";
            var template_id = "template_m9OkeQLI";
            var user_id = "user_wLPGPl2w2ETFdTUDNZQP2";
            emailjs.send(service_id, template_id, template_params, user_id);
            this.setState({ message: 'Thank you! Your email is sent!' });
            setTimeout(() => {
              this.setState({ message: '' });
            }, 3000);
            }
  }

  render() {
    const { message } = this.state;
    return (
      <section id="three" className="wrapper style1 fade-up">
        <div className="inner">
          <h2>Get in touch</h2>
          <p>
            If you feel called to stand in your power and support the prayers for our great Land, then contact Gabriel here for your booking. We will send you more details and confirm your spot. Just let us know which ceremony you are interested in for January 2020.
          </p>
          <div className="split style1">
            <section>
              <form method="post" action="#">
                <div className="fields">
                  <div className="field half">
                    <label for="name">Name</label>
                    <input
                type="text"
                ref={c => (this.dataName = c)}
                className="field-box"
                name="name"
                id="name"
                required
            />
                  </div>
                  <div className="field half">
                    <label for="email">Email</label>
                    <input
                type="email"
                ref={c => (this.dataEmail = c)}
                className="field-box"
                name="email"
                id="email"
                required
            />
                  </div>
                  <div className="field">
                    <label for="message">Message</label>
                    <textarea
                style={{ overflowY: "hidden" }}
                ref={c =>
                    (this.dataMessage = c)
                }
                className="field-box"
                onChange={this.textAreaInput}
                name="message"
                id="message"
                required
            />
                  </div>
                </div>
                <ul className="actions">
                  <li>
                  <button
            className="button icon fa-envelope-o"
            onClick={this.handleSubmit}
            id="submit"
            ref={c => (this.btn = c)}
        > Send Message</button>
                  </li>
                </ul>
                <span className={`${message ? 'visible success' : ''} message`}>
          {message}
        </span>
              </form>
            </section>
            <section>
              <ul className="contact">
                <li>
                  <h3>Email</h3>
                  <a href="/#">butterflycacao@gmail.com</a>
                </li>
                <li>
                  <h3>Phone</h3>
                  <span>(083) 293-5904</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    )
  }

}

export default Contact
