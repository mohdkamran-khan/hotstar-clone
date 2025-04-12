import './App.css';
import Header from './Components/Header';
import Slider from './Components/Slider';

import {col, Container, Row } from 'react-bootstrap';
import fauji from './Images/latestrelease/fauji.jpg'; 
import dopatti from './Images/latestrelease/dopatti.jpg';
import auronmaikahandumtha from './Images/latestrelease/auronmaikahandumtha.jpg';
import bloddydaddy from './Images/latestrelease/bloddydaddy.jpg';
import vedaa from './Images/latestrelease/vedaa.jpg';
import singham from './Images/latestrelease/singham.jpg'; 
import stree2 from './Images/latestrelease/stree2.jpg';
import indianpoliceforce from './Images/latestrelease/indianpoliceforce.jpg'; 
import fc25 from './Images/bestinsports/fc25.jpg';
import cricket from './Images/bestinsports/cricket.jpg';
import archery from './Images/bestinsports/archery.jpg';
import badminton from './Images/bestinsports/badminton.jpg';
import baseball from './Images/bestinsports/baseball.jpg';
import chess from './Images/bestinsports/chess.jpg';
import javelin from './Images/bestinsports/javelin.jpg';
import polevault from './Images/bestinsports/polevault.jpg'; 
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";
import armor from './Images/action/armor.jpg';
import bloddy from './Images/action/bloddy.jpg';
import fallguy from './Images/action/fallguy.jpg';
import fastx from './Images/action/fastx.jpg';
import galaxy from './Images/action/galaxy.jpg';
import gladiator from './Images/action/gladiator.jpg';
import ruslaan from './Images/action/ruslaan.jpg';
import war from './Images/action/war.jpg';
import airplane from './Images/comedy/airplane.jpg';
import coolie from './Images/comedy/coolie.jpg';
import daddydaycare from './Images/comedy/daddydaycare.jpg';
import dhamaal from './Images/comedy/dhamaal.jpg';
import hangover from './Images/comedy/hangover.jpg';
import millers from './Images/comedy/millers.jpg';
import rushhour from './Images/comedy/rushhour.jpg';
import thrdictator from './Images/comedy/thrdictator.jpg';
import daddyday from './Images/kids/daddyday.jpg';
import encanto from './Images/kids/encanto.jpg';
import home from './Images/kids/home.jpg';
import nemo from './Images/kids/nemo.jpg';
import nimsisland from './Images/kids/nimsisland.jpg';
import soul from './Images/kids/soul.jpg';
import spykids from './Images/kids/spykids.jpg';
import upaway from './Images/kids/upaway.jpg';
import babyjohn from './Images/comingsoon/babyjohn.jpg';
import bear from './Images/comingsoon/bear.jpg';
import fireinside from './Images/comingsoon/fireinside.jpg';
import gamechanger from './Images/comingsoon/gamechanger.jpg';
import kanguva from './Images/comingsoon/kanguva.jpg';
import salaar2 from './Images/comingsoon/salaar2.jpg';
import { IoIosCheckmark } from "react-icons/io";
import { TbBrandFacebook } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import playstore from './Images/playstore.jpg';
import appstore from './Images/appstore.jpg';
import Production from './Components/Production';


function App() {
  return (
    <div className="App">

     <Header/>
     <Slider/>
     
     <Container fluid className='bg-black text-white space-y-3'>
        <Row className= 'latest-release font-bold bg-black '>
          <h2>Latest Releases</h2>
        </Row>
        <Row style={{ overflowX: "hidden" }}>
          <div>
           <BsChevronCompactLeft classname="text-white text-[50px] absolute mt-[150px]" />
           <BsChevronCompactRight classname="text-white text-[50px] absolute mt-[150px]" />
            <div className='col flex-container bg-black flex '>
              <img src={singham} />
              <img src={vedaa} />
              <img src={bloddydaddy} />
              <img src={auronmaikahandumtha} />
              <img src={dopatti} />
              <img src={fauji} />
              <img src={stree2} />
              <img src={indianpoliceforce} />
            </div>
          </div>
        </Row>

        <Row className= 'bestinsports font-bold bg-black'>
          <h2>Best In Sports</h2>
        </Row>
        <Row style={{ overflowX: "scroll" }}>
          <div className='col flex-container bg-black flex'>
            <img src={fc25} />
            <img src={javelin} />
            <img src={chess} />
            <img src={baseball} />
            <img src={cricket} />
            <img src={polevault} />
            <img src={archery} />
            <img src={badminton} />
          </div>
        </Row>

        <Row className= 'action font-bold bg-black'>
          <h2>Action</h2>
        </Row>
        <Row style={{ overflowX: "scroll" }}>
          <div className='col flex-container bg-black flex'>
            <img src={armor} />
            <img src={bloddy} />
            <img src={fallguy} />
            <img src={fastx} />
            <img src={galaxy} />
            <img src={gladiator} />
            <img src={ruslaan} />
            <img src={war} />
          </div>
        </Row>

        <Row className= 'comedy font-bold bg-black'>
          <h2>Comedy</h2>
        </Row>
        <Row style={{ overflowX: "scroll" }}>
          <div className='col flex-container bg-black flex'>
            <img src={airplane} />
            <img src={coolie} />
            <img src={daddydaycare} />
            <img src={dhamaal} />
            <img src={hangover} />
            <img src={millers} />
            <img src={rushhour} />
            <img src={thrdictator} />
          </div>
        </Row>

        <Row className= 'kids font-bold bg-black'>
          <h2>Kids</h2>
        </Row>
        <Row style={{ overflowX: "scroll" }}>
          <div className='col flex-container bg-black flex'>
            <img src={daddyday} />
            <img src={encanto} />
            <img src={home} />
            <img src={nemo} />
            <img src={nimsisland} />
            <img src={soul} />
            <img src={spykids} />
            <img src={upaway} />
          </div>
        </Row>

        <Row className= 'comingsoon font-bold bg-black'>
          <h2>Coming Soon</h2>
        </Row>
        <Row style={{ overflowX: "scroll" }}>
          <div className='col flex-container bg-black flex'>
            <img src={babyjohn} />
            <img src={bear} />
            <img src={fireinside} />
            <img src={gamechanger} />
            <img src={kanguva} />
            <img src={salaar2} />
          </div>
        </Row>

      </Container>

    <Production/>

      <div className='bg-black text-white p-10'>
        <h5>Company </h5>
        <div className='text-muted'>About Us Careers</div>
        <h5>View Website in</h5> 
        <div className='flex items-center text-muted'><IoIosCheckmark/>English</div>
        <h5>Need Help?</h5><br/>
        <div className='text-muted'>Visit Help Center Share Feedback</div><br/>
        <h5>Connect With Us </h5>
        <div className='flex space-x-12 p-1'><TbBrandFacebook /> <FaXTwitter /> </div><br/>
        
        <div className='text-muted'>2024 STAR. All Rights Reserved.<br/>
        Terms of Use Privacy Policy FAQ<br/></div>

        <div className='flex space-x-20 p-8'>
        <img src={playstore}/>
        <img src={appstore}/></div>

      </div>

    </div>
  );
}

export default App;
