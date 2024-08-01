import { GoChevronDown,GoChevronUp,GoLaw,GoGoal } from "react-icons/go";
import { Link } from 'react-router-dom';
import { useState} from "react";
const Header=()=>{
    const [isOpen,setIsopen]=useState(false)
    const [isOpen2,setIsopen2] =useState(false)
    const [isOpen3, setIsopen3] = useState(false)
    const [isOpen4,setIsopen4] = useState(false)

    const isToggleLang=()=>{
        setIsopen(prev=>!prev)
        setIsopen2(false)
    }
    const isToggleWe=()=>{
        setIsopen2(prev=>!prev)
        setIsopen(false)
        setIsopen3(false)
        setIsopen4(false)
    }
    const isToggleWhere=()=>{
        setIsopen3(prev=>!prev)
        setIsopen(false)
        setIsopen2(false)
        setIsopen4(false)
    }
    const isToggleWhat=()=>{
        setIsopen4(prev=>!prev)
        setIsopen(false)
        setIsopen2(false)
        setIsopen3(false)
    }
   
    return(
        <>
         <header className="headerBlack">
            <h4><Link to="/news-stories-and-speeches" className="link-style">News, Stories & Speeches</Link></h4>
            <h4><Link to="/events" className="link-style">Events</Link></h4>
            <h4><Link to="/get-involved" className="link-style">Get Involved</Link></h4>
            <h4 className="lang_h4" onClick={isToggleLang}>Language{isOpen ? <GoChevronUp /> : <GoChevronDown />}
            </h4>
         </header>

         <div className="floatOption" style={{ opacity: isOpen?1:0, transition: 'opacity 0.5s ease-in-out' }}>
            <ul>
            <li>English</li>
            <li>Japanese</li>
            <li>Igbo</li>
            <li>Yoruba</li>
            <li>Hausa</li>
            <li>Spanish</li>
            <li>English</li>
            <li>Japanese</li>
            <li>Igbo</li>
            <li>Yoruba</li>
            <li>Hausa</li>
            <li>Spanish</li>
            </ul>
        </div>

         <header className="header2">
            <div className="un_header"><Link to='/un' className="link-style1">
                <h1>UN<GoLaw/></h1>
                <h4>environment programme</h4></Link>
            </div>
            <h4 onClick={isToggleWe} className={`another 
            ${isOpen2 ? 'WeAre' : ''}`}
            >Who we are {isOpen2 ? <GoChevronUp /> : <GoChevronDown />}</h4>

            <h4 onClick={isToggleWhere} className={`another 
            ${isOpen3 ? 'WeAre' : ''}`}>Where we work{isOpen3?<GoChevronUp style={{color:'black'}}/>:<GoChevronDown />}</h4>

            <h4 onClick={isToggleWhat} className={`another 
            ${isOpen4 ? 'WeAre' : ''}`}>What we do{isOpen4?<GoChevronUp style={{color:'black'}}/>:<GoChevronDown />}</h4>

            <h4><Link to='/publication' style={{color:'rgb(83, 83, 83)', textDecoration:'none'}} className="another">Publications & data</Link></h4>

            <h5><Link to='/our-target'><GoGoal style={{color:'rgb(83, 83, 83)', fontSize:'4rem'}} className="style-Goal"/></Link></h5>
         </header>
         
         <div className="floatingOption1" style={{ opacity: isOpen2?1:0, transition: 'opacity 0.5s ease-in-out' }}>
            <div className="who">
                <p>About Us</p>
                <p>Structure and leadership</p>
            </div>
            <div className="with-us">
                <p>Committee of Permanent Representatives</p>
                <p>UN Environment Assembly</p>
            </div>
            <div className="fundingUs">
                <p>Funding and Partnership</p>
                <p>Policies and Strategies</p>
                <p>Evaluation Office</p>
            </div>
            <div className="contactUs">
                <p>Secrtariats and Conventions</p>
                <p>Contact Us</p>
            </div>
         </div>

         {/* 2 */}
         <div className="floatingOption1" style={{ opacity: isOpen3?1:0, transition: 'opacity 0.5s ease-in-out' }}>
            <div className="who">
                <p>Africa</p>
                <p>Asia and the Pacific</p>
            </div>
            <div className="with-us">
                <p>Europe</p>
                <p>Latin America and the Caribbean</p>
            </div>
            <div className="fundingUs">
                <p>New York Offices</p>
                <p>North American</p>
            </div>
            <div className="contactUs">
                <p>West Asia</p>
            </div>
         </div>

         {/* 3 */}
         <div className="floatingOption1" style={{ opacity: isOpen4?1:0, transition: 'opacity 0.5s ease-in-out' }}>
            <div className="who">
                <p>Africa</p>
                <p>Asia and the Pacific</p>
            </div>
            <div className="with-us">
                <p>Climate Action</p>
                <p>Aganist Global Warming</p>
                <p>Sustainable Development Goals</p>
            </div>
            <div className="fundingUs">
                <p>Mitigating Policies</p>
                <p>Adaptability Policies</p>
            </div>
            <div className="contactUs">
                <p>Heatwave</p>
                <p>Drought</p>
                <p>Heavy Rainfall</p>
            </div>
         </div>
        </>
    )
}
export default Header