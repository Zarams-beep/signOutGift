import { GoChevronDown,GoChevronUp,GoLaw,GoGoal } from "react-icons/go";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { useState} from "react";
import { useMediaQuery } from "react-responsive";
const Header=()=>{
    const [isOpen,setIsopen]=useState(false)
    const [isOpen2,setIsopen2] =useState(false)
    const [isOpen3, setIsopen3] = useState(false)
    const [isOpen4,setIsopen4] = useState(false)
    const [menuOpen,setMenuOpen] = useState(false)

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
    const isMenuToggle = ()=>{
        setMenuOpen(prev=>!prev)
    }
   
    // resize screen
    const is767 = useMediaQuery({query:'(max-width:767px)'})

    return(
        <>
       
         <header className={`headerBlack ${is767?'newHeaderBlack':''}` } >
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

         <header className={`header2 ${is767? 'newHeader2':''}`}>
            <div className="un_header"><Link to='/un' className="link-style1">
                <h1>UN<GoLaw/></h1>
                <h4>environment programme</h4></Link>
            </div>

            {/* at 767, active */}
            <div className="newActive">
                {is767?<h4 className="newSearch"><IoSearchSharp /></h4>:''}
                {is767?<h4 className="newMenu" onClick={isMenuToggle}>{menuOpen ? <RxCross2 /> : <IoMdMenu/>}</h4>:''}
            </div>

            {/* at 767, gone */}
            <div className={`divNewHeader ${is767?'divHeadNew':""}`}style={{opacity:menuOpen?1.0:''}}>
            <h4 onClick={()=>{
                isToggleWe()
                is767?setIsopen2(false):''
            }} className={`another 
            ${isOpen2 ? 'WeAre' : ''} ${is767?'newAnother':''}`}
            >{is767?<Link to='/placeholder' className="link-style">Who we are</Link>:<>
                Who we are{isOpen2 ? <GoChevronUp /> : <GoChevronDown />}
            </>}</h4>

            <h4 onClick={()=>{
                isToggleWhere()
                is767?setIsopen3(false):''
            }} className={`another 
            ${isOpen3 ? 'WeAre' : ''} ${is767?'newAnother':''}`}>
                {is767?<Link to='/placeholder' className="link-style">Where we work</Link>:<>
                    Where we work{isOpen3 ? <GoChevronUp /> : <GoChevronDown />}
            </>}
               </h4>

            <h4 onClick={()=>{
                isToggleWhat()
                is767?setIsopen4(false):''
            }} className={`another 
            ${isOpen4 ? 'WeAre' : ''} ${is767?'newAnother':''}`}>
                {is767?<Link to='/placeholder' className="link-style">What we do</Link>:<>
                    What we do{isOpen4 ? <GoChevronUp /> : <GoChevronDown />}
            </>}</h4>

            <h4><Link to='/publication' className={`link-style1 another ${is767?'newAnother':''}`}>Publications & data</Link></h4>

            <h5><Link to='/our-target'><GoGoal style={{color:'rgb(83, 83, 83)', fontSize:'4rem'}} className={`style-Goal ${is767?'newAnother  newNew':''}`}/></Link></h5></div>
         </header>
         
         <div className={`floatingOption1 ${is767?'newFloatingOption1':''}`} style={{ opacity: isOpen2?1:0, transition: 'opacity 0.5s ease-in-out' }}>
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