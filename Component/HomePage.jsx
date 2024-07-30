import { Link } from 'react-router-dom';
const HomePage =()=>{

return(
    <>
    <div className="mainbody">
        <section className="section1">
            <img src="/sunflowers.jpg" alt="sunflowers" className="wallpaper-sunflower"/>
            <section className="textwrapping">
                <div className="wrap-div1">
                    <div className="videocontainer">
                        <Link to="/video1" className="link-style">
                        <h5>VIDEO</h5>
                        <h4>Why we need to be Fighters for a Healthy Environment</h4></Link>
                    </div>
                    <div className="press-release">
                        <Link to="/press" className='link-style'>
                        <h5>PRESS RELEASE</h5>
                        <h4>Sub-Regional plans to Mitigrate the Effect of Climate Change before 2030</h4></Link>
                    </div>
                </div>

                <div className="wrap-div2">
                    <div className="action-container">
                        
                        <div className="action-un">
                        <Link to='/action-heat' className="link-style">
                        <h4 className="action">UN Secretary-General's Call to Action on Extreme Heat</h4></Link>
                        <h6>LEARN MORE</h6></div>
                    </div>
                    <div className="emphasis-container">
                        <Link to="/solution-emphasis" className="link-style">
                            <div className="emphasis-un">
                                <h5>VIDEO</h5>
                                <h4>Why the next round of climate pledges marks a crucial moment for the planet</h4>
                            </div>
                        </Link>
                        
                    </div>
                </div>
            </section>
        </section>

        {/* section 2 */}
        <section className="section2">
            <div className="imgEn">
                <Link to='/something'>
                <img src="/green-leaf.jpg" alt="green leaf" /></Link>
            </div>
            <div className="inFocus">
                <h3><Link to='/' style={{textDecoration:'none',color:'rgb(4, 73, 4)'}}>In Focus</Link></h3>
                <div className="pollution">
                    <h4><Link to='/' style={{textDecoration:'none',color:'black'}}>Placeholder here, nothing to write yet</Link></h4>
                    <p>Placeholder here, nothing to write yet. But its a note and something important</p>
                </div>
                <div className="biodiversity">
                    <h4><Link to='/' style={{textDecoration:'none',color:'black'}}>Placeholder here, nothing to write yet</Link></h4>
                    <p>Placeholder here, nothing to write yet. But its a note and something important</p>
                </div>
                <div className="climateCrisis">
                    <h4><Link to='/' style={{textDecoration:'none',color:'black'}}>Placeholder here, nothing to write yet</Link></h4>
                    <p>Placeholder here, nothing to write yet. But its a note and something important</p>
                </div>
            </div>
        </section>

        {/* section 3 */}
        <section className="mainSection3">
            <section className="section3">
            {/* gird news 1 */}
            <div className="girdNews1">
                <Link><img src="/fan.jpg" alt="fan" /></Link>
                <h5>REPORT</h5>
                <h3><Link to='/' style={{textDecoration:'none',color:'black', fontSize:'1.3rem'}}>A global foresight report on plantary health and human wellbeing</Link></h3>
            </div>
            {/* gird news 2 */}
            <div className="girdNews2">
                <Link><img src="/fan.jpg" alt="fan" /></Link>
                <h5>REPORT</h5>
                <h3><Link to='/' style={{textDecoration:'none',color:'black', fontSize:'1.3rem'}}>A global foresight report on plantary health and human wellbeing</Link></h3>
            </div>
            {/* gird news 3 */}
            <div className="girdNews3">
                <Link><img src="/fan.jpg" alt="fan" /></Link>
                <h5>REPORT</h5>
                <h3><Link to='/' style={{textDecoration:'none',color:'black', fontSize:'1.3rem'}}>A global foresight report on plantary health and human wellbeing</Link></h3>
            </div>
            {/* gird news 4 */}
            <div className="girdNews4">
                <Link><img src="/fan.jpg" alt="fan" /></Link>
                <h5>REPORT</h5>
                <h3><Link to='/' style={{textDecoration:'none',color:'black', fontSize:'1.3rem'}}>A global foresight report on plantary health and human wellbeing</Link></h3>
            </div>
            {/* gird news 5 */}
            <div className="girdNews5">
                <Link><img src="/fan.jpg" alt="fan" /></Link>
                <h5>REPORT</h5>
                <h3><Link to='/' style={{textDecoration:'none',color:'black', fontSize:'1.3rem'}}>A global foresight report on plantary health and human wellbeing</Link></h3>
            </div>
            {/* gird news 6 */}
            <div className="girdNews6">
                <Link><img src="/fan.jpg" alt="fan" /></Link>
                <h5>REPORT</h5>
                <h3><Link to='/' style={{textDecoration:'none',color:'black', fontSize:'1.3rem'}}>A global foresight report on plantary health and human wellbeing</Link></h3>
            </div>
            </section>
            <div className="seeMore">
                <button>SEE MORE</button>
            </div>
        </section>
        
    </div>
        
    </>
)
}
export default HomePage