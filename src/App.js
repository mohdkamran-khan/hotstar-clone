import './App.css';
import Header from './Components/Header';
import Slider from './Components/Slider';
import {Container, Row } from 'react-bootstrap';
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
              <img alt="singham" src={singham} />
              <img alt="Veda" src={vedaa} />
              <img alt="bloodydaddy" src={bloddydaddy} />
              <img alt="Hello" src={auronmaikahandumtha} />
              <img  alt="Hello"src={dopatti} />
              <img  alt="Hello"src={fauji} />
              <img  alt="Hello" src={stree2} />
              <img alt="Hello" src={indianpoliceforce} />
            </div>
          </div>
        </Row>

        <Row className= 'bestinsports font-bold bg-black'>
          <h2>Best In Sports</h2>
        </Row>
        <Row style={{ overflowX: "scroll" }}>
          <div className='col flex-container bg-black flex'>
            <img alt="Hello" src={fc25} />
            <img alt="Hello" src={javelin} />
            <img alt="Hello" src={chess} />
            <img alt="Hello" src={baseball} />
            <img alt="Hello" src={cricket} />
            <img alt="Hello" src={polevault} />
            <img alt="Hello" src={archery} />
            <img alt="Hello" src={badminton} />
          </div>
        </Row>

        <Row className= 'action font-bold bg-black'>
          <h2>Action</h2>
        </Row>
        <Row style={{ overflowX: "scroll" }}>
          <div className='col flex-container bg-black flex'>
            <img alt="Hello" src={armor} />
            <img alt="Hello" src={bloddy} />
            <img alt="Hello" src={fallguy} />
            <img alt="Hello" src={fastx} />
            <img alt="Hello" src={galaxy} />
            <img alt="Hello" src={gladiator} />
            <img alt="Hello" src={ruslaan} />
            <img alt="Hello" src={war} />
          </div>
        </Row>

        <Row className= 'comedy font-bold bg-black'>
          <h2>Comedy</h2>
        </Row>
        <Row style={{ overflowX: "scroll" }}>
          <div className='col flex-container bg-black flex'>
            <img alt="Hello" src={airplane} />
            <img alt="Hello" src={coolie} />
            <img alt="Hello"  src={daddydaycare} />
            <img alt="Hello"  src={dhamaal} />
            <img alt="Hello"  src={hangover} />
            <img alt="Hello"  src={millers} />
            <img alt="Hello" src={rushhour} />
            <img alt="Hello" src={thrdictator} />
          </div>
        </Row>

        <Row className= 'kids font-bold bg-black'>
          <h2>Kids</h2>
        </Row>
        <Row style={{ overflowX: "scroll" }}>
          <div className='col flex-container bg-black flex'>
            <img alt="Hello" src={daddyday} />
            <img alt="Hello" src={encanto} />
            <img alt="Hello" src={home} />
            <img alt="Hello" src={nemo} />
            <img alt="Hello" src={nimsisland} />
            <img alt="Hello" src={soul} />
            <img alt="Hello" src={spykids} />
            <img alt="Hello" src={upaway} />
          </div>
        </Row>

        <Row className= 'comingsoon font-bold bg-black'>
          <h2>Coming Soon</h2>
        </Row>
        <Row style={{ overflowX: "scroll" }}>
          <div className='col flex-container bg-black flex'>
            <img alt="Hello" src={babyjohn} />
            <img alt="Hello"  src={bear} />
            <img alt="Hello"  src={fireinside} />
            <img alt="Hello"  src={gamechanger} />
            <img alt="Hello" src={kanguva} />
            <img alt="Hello" src={salaar2} />
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
        <img alt="Hello" src={playstore}/>
        <img alt="Hello" src={appstore}/></div>

      </div>

    </div>
  );
}

export default App;
