import React from 'react';
import './Contact.css';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Contact extends React.Component {
    constructor() {
        super()

        this.state = {
            name: '',
            email: '',
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleValidSubmission = this.handleValidSubmission.bind(this)

    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleValidSubmission (e, fields) {
        this.form && this.form.reset();
      }
    
    async handleSubmit(e) {
        e.preventDefault()
        const { name, email, message } = this.state

        const form = await axios.post('/api/form', {
            name,
            email,
            message
        })
        this.clearFields();
        
    }
    
    render() {
        return (
            <div className='Contact'>
                <Navbar />
                <Form action="https://formspree.io/melindasuerussell@yahoo.com" method="POST" id='emailForm' onSubmit={this.handleSubmit && this.handleValidSubmission} ref={c => (this.form = c)}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleText">Message</Label>
                        <Input
                            type="textarea"
                            name="message"
                            id="message"
                            onChange={this.handleChange} />
                    </FormGroup>

                    <Button>Submit</Button>
                </Form>
                <Footer />
            </div>
        );
    }
}
