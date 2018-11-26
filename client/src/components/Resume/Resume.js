import React from 'react';
import './Resume.css';
import ResumePic1 from '../../assets/images/MelindaRussellResume1.png';
import ResumePic2 from '../../assets/images/MelindaRussellResume2.png';
import ResumeDOC from '../../assets/documents/MelindaRussellResume.docx';
import ResumePDF from '../../assets/documents/MelindaRussellResume.pdf';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';




export default class Resume extends React.Component {


    render() {
        return (
            <div className='Resume'>
                <Navbar />
                <p>Click Anywhere to Download Word Document</p>
                <a href={ResumePDF} download>Click Here to Downlad PDF</a>
                <a href={ResumeDOC} download><img className='ResumePic' src={ResumePic1} alt='Resume' /></a>
                <a href={ResumeDOC} download><img className='ResumePic' src={ResumePic2} alt='Resume' /></a>

                <Footer />

            </div>
        );
    }
}