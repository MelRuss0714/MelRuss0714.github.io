import React from 'react';
import './Portfolio.css';
import { Grid, Col, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
//import SmallPic from '../ProfilePics/SmallPic';
import Bubblink from './Bubblink';
import SmartRock from './SmartRock';
import Poppy from './Poppy';
import CrystalClick from './CrystalClick';
import Trivia from './Trivia';
import GifTastic from './GifTastic';




export default class Portfolio extends React.Component {


    render() {
        return (
            <div className='Portfolio'>
                <Navbar />
                <Grid>
                    <Row className='Row'>
                        <Col xsHidden md={1}>
                        </Col>
                        <Col className='TopProject' xs={12} md={4}>
                            <Bubblink />
                        </Col>
                        <Col className='TopDescr' xs={12} md={6}>
                            <h3>Bubblink</h3>
                            <p>Bubblink provides an opportunity for those who do not feel safe leaving their personal bubble a chance to link with others. The user can create a profile and log in to the site then chat in a community chat or join a private chat with another user. The front-end was built using HTML, CSS, and React.js and the back-end uses Node, MongoDB, Express, and Socket.io as well as other node modules. Created the idea of the app, responsible for debugging, creating the logo and CSS for the chats. <a href='https://github.com/MelRuss0714/Bubblink.git'>GitHub</a></p>
                        </Col>
                        <Col xsHidden md={1}>
                        </Col>
                    </Row>
                    <Row className='Row'>
                        <Col xsHidden md={1}>
                        </Col>
                        <Col className='SecDescr' xs={12} md={6}>
                            <h3>SmartRock</h3>
                            <p>SmartRock serves as a one-stop shop to find out information about your favorite artists from the music world. The Ticketmaster API generates tour name, time, date, city, and venue to next 5 events, the Last FM API generates 10 ten tracks by band searched, and the YouTube API plays the top song from band or artist that is searched and plays video of song from top tracks when the song is clicked on. The front-end was built using, HTML, CSS, and bootstrap. Built the back-end and functionality using jQuery and Javascript. <a href='https://github.com/MelRuss0714/SmartRock.git'>GitHub</a></p>
                        </Col>
                        <Col className='SecProject' xs={12} md={4}>
                            <SmartRock />
                        </Col>
                        <Col xsHidden md={1}>
                        </Col>
                    </Row>
                    <Row className='Row'>
                        <Col xsHidden md={1}>
                        </Col>
                        <Col className='TopProject' xs={12} md={4}>
                            <Poppy />
                        </Col>
                        <Col className='TopDescr' xs={12} md={6}>
                            <h3>The Poppy Project</h3>
                            <p>The Poppy Project is a simple website but has a personal meaning. This was written in one evening for my father for Father’s Day to celebrate our technology connection and to thank him for all his support. The site functions as a basic hangman game with all the clues having personal connections to his interests thereby prompting a family picture to be displayed. The front-end was built using, HTML, CSS, and bootstrap. Built the back-end and functionality using jQuery and Javascript. <a href='https://github.com/MelRuss0714/PoppyProject'>GitHub</a></p>
                        </Col>
                        <Col xsHidden md={1}>
                        </Col>
                    </Row>
                    <Row className='Row'>
                        <Col xsHidden md={1}>
                        </Col>
                        <Col className='SecDescr' xs={12} md={6}>
                            <h3>Crystal Click</h3>
                            <p>This is a game where the player clicks on a gem to increase their score by a random unknown amount until they reach but do not go over their goal number.  If they go over they loose, but if they meet it exactly, they win and the game restarts. This game was created using HTML, an external CSS style sheet, a Bootstrap style sheet and grid structure, and an external Javascript The font was sourced from Google Fonts and the images were found from various Google image searches. <a href='https://github.com/MelRuss0714/CrystalClick.git'>GitHub</a></p>
                        </Col>
                        <Col className='SecProject' xs={12} md={4}>
                            <CrystalClick />
                        </Col>
                        <Col xsHidden md={1}>
                        </Col>
                    </Row>
                    <Row className='Row'>
                        <Col xsHidden md={1}>
                        </Col>
                        <Col className='TopProject' xs={12} md={4}>
                            <Trivia />
                        </Col>
                        <Col className='TopDescr' xs={12} md={6}>
                            <h3>Pub Trivia</h3>
                            <p>Pub Tivia is your typical trivia game with a pub trivia theme. The player has 30 seconds to answer each question. Once the question is answered they are given the correct answer and more information for 10 seconds. This game was created using HTML, an external CSS style sheet, a Bootstrap style sheet and grid structure, and an external Javascript page.<a href='https://github.com/MelRuss0714/TriviaGame'>GitHub</a></p>
                        </Col>
                        <Col xsHidden md={1}>
                        </Col>
                    </Row>
                    <Row className='Row'>
                        <Col xsHidden md={1}>
                        </Col>
                        <Col className='SecDescr' xs={12} md={6}>
                            <h3>Amy's GifTastic</h3>
                            <p>GifTastic is a site that uses Ajax to call the Giphy API to return gifs based on the viewer's search. This site was inspired by my best friend, Amy's celebrity crushes.  It was built using HTML, Bootstrap, CSS, and Javascript which incorporates the API calls. <a href='https://github.com/MelRuss0714/GifTastic.git'>GitHub</a></p>
                        </Col>
                        <Col className='SecProject' xs={12} md={4}>
                            <GifTastic />
                        </Col>
                        <Col xsHidden md={1}>
                        </Col>
                    </Row>
                </Grid>
                <Footer />

            </div>
        );
    }
}