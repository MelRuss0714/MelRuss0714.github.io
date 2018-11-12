import React from 'react';
import './About.css';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import LargePic from '../ProfilePics/LargePic';
import AboutMe from './AboutMe';




export default class About extends React.Component {


    render() {
        return (
            <div className='About'>
                <Navbar />
               <LargePic />
               <AboutMe />
                <Footer />

            </div>
        );
    }
}