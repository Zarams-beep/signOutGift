import { CiFaceSmile } from "react-icons/ci";
import { BiLogoLinkedinSquare, BiLogoInstagram, BiLogoFacebookCircle, BiLogoTiktok, BiLogoYoutube } from "react-icons/bi";
const Footer =()=>{

    return(
        <>
            <footer className="mainFooter">
                 {/* footer 1 */}
                <footer className="footer1">
                    <div className="sdg-note">
                        <h3>SUSTAINABLE DEVELOPMENT GOALS</h3>
                        <p>A clean and healthy environment is required to achieve the Sustainable Development Goals. Efforts to counter the triple planetary crisis of climate change, nature and biodiversity loss, and pollution and waste must be ramped up in order to truly transform societies and economies for everyone, everywhere.</p>
                        <button>FIND OUT WHAT WE ARE DOING</button>
                    </div>
                    <div className="sdg-logo">
                        <p className="smile-logo">
                        <CiFaceSmile style={{fontSize:'5rem'}}/></p>
                        <p>SUSTAINABLE<br/>DEVELOPMENT<br/>GOALS</p>
                    </div>
                </footer>

                <footer className="footer2">
                    <div className="firstPart">
                        <div className="firstsmallpart">
                            <h3>GOVERNANCE & LEADERSHIP</h3>
                            <p>Senior Management Team</p>
                            <p>Committee of Permanent Representatives</p>
                            <p>Environment Assembly - UNEA</p>

                            <h3>FUNDING & PARTNERS</h3>
                            <p>Overview</p>
                            <p>Civil Society</p>
                            <p>Member States</p>
                            <p>Private Sector</p>
                            <p>Environment Fund</p>
                            <p>Global Environment Facility</p>
                            <p>Green Climate Fund</p>
                            <p>Centres collaborating with UNEP</p>

                            <h3>STRUCTURE</h3>
                            <p>Divisions and Offices</p>
                            <p>Evaluation Office</p>
                            <p>Secretariats and Conventions</p>
                        </div>

                        <div className="secondsmallpart">
                            <h3>KEY DOCUMENTS</h3>
                            <p>Annual Report</p>
                            <p>Global Framework on Chemicals</p>
                            <p>Knowledge Repository</p>
                            <p>Kunming-Montreal Global Biodiversity</p>
                            <p>Framework</p>
                            <p>Medium Term Strategy</p>
                            <p>Programme of Work and Budget</p>

                            <h3>RESOURCES</h3>
                            <p>Environment and Social Safeguards</p>
                            <p>Frequently Asked Questions</p>
                            <p>Intergovernmental Negotiating Committee</p>
                            <p>(INC) on Plastic Pollution</p>
                            <p>Policies & Strategies</p>
                            <p>Projects – Open Data Portal</p>
                            <p>Sustainability at UNEP</p>
                            <p>Sustainable Development Goals</p>
                            <p>World Environment Situation Room</p>
                        </div>

                        <div className="thirdsmallpart">
                            <h3>ADVOCACY</h3>
                            <p>Beat Pollution</p>
                            <p>Champions of the Earth</p>
                            <p>Goodwill Ambassadors and Patrons</p>
                            <p>International Days</p>
                            <p>UN Decade on Ecosystem Restoration</p>
                            <p>UNEP at 50</p>
                            <p>Young Champions of the Earth</p>

                            <h3>MEDIA</h3>
                            <p>Media Centre</p>
                            <p>Social Media</p>
                            <p>News, Stories & Speeches</p>

                            <h3>WORK WITH US</h3>
                            <p>Calls for Proposals</p>
                            <p>Job Vacancies</p>
                        </div>
                    </div>
                    <div className="secondPart">
                        <div className="sdg-logo2">
                            <p className="p-smile">
                            <CiFaceSmile className="smile-logo2"/></p>
                            <p className="sub-p">SUSTAINABLE<br/>DEVELOPMENT<br/>GOALS</p>
                        </div>

                        <button className="subBtn">
                            SUBSCRIBE TO THE UNEP NEWSLETTER
                        </button>
                    </div>
                    <div className="thirdPart">
                        <div className="divFirst">
                            <p style={{border:'none',paddingLeft:'0'}}>&copy;2024</p>
                            <p>Terms of Use</p>
                            <p>Privacy</p>
                            <p>Report Project Concern</p>
                            <p>Report Scam</p>
                            <p>Contact Us</p>
                        </div>
                        <div className="divSecond">
                        <p><BiLogoLinkedinSquare/> </p>
                        <p><BiLogoInstagram/></p> 
                        <p><BiLogoFacebookCircle/> </p>
                        <p><BiLogoTiktok/> </p>
                        <p><BiLogoYoutube/></p>
                        <p><BiLogoLinkedinSquare/> </p>
                        <p><BiLogoInstagram/></p> 
                        </div>
                    </div>
                </footer>
            </footer>
        </>
    )
}
export default Footer