import React from 'react';

import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBenar from '../AppointmentBenar/AppointmentBenar';
import Services from '../Services/Services';
import Banner from './../Banner/Banner';
import Footer from './../../Footer/Footer';
import Contact from '../Contact/Contact';

import AvailableAppointmentHome from './../Appointment/ailableAppointmentHome/ailableAppointmentHome';
import Doctors from '../Doctors/Doctors';


const Home = () => {
    return (
        <div> 
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <AvailableAppointmentHome></AvailableAppointmentHome>
            <AppointmentBenar></AppointmentBenar>
            <Doctors></Doctors>
      
            <Contact></Contact>
            {/* <Footers></Footers> */}
            <Footer></Footer>
           
        </div>
    );
};

export default Home;