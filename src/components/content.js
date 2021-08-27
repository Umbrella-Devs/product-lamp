import Button from './button'
import SocialMedia from './socialMedia';
import { IoIosCloseCircle} from "react-icons/io";
import { AiOutlineMail} from "react-icons/ai";
import { AiOutlinePhone} from "react-icons/ai";
import { VscLocation} from "react-icons/vsc";

const content = () => {
    return (
        <div className="">
            <div className="content">
                <div className="home">
                    <div className="home-text">
                        <div className="home-text-title">
                            <h1>
                                <span>We help you build </span><br></br>
                                <span className="desirable" style={{color: '#FDBA23'}}>Desirable products.</span>
                            </h1>
                        </div>
                        <div className="home-text-para">
                            <p>
                                Product lamp is a team of product nerds that helps
                                you build well-<br></br>thought, desirable products, with
                                strategies, roadmaps, metrics<br></br> and team practices
                                that work, just for you!
                            </p>
                            <div style={{marginTop: '40px'}}>
                                <Button text='All activities' />
                            </div>
                        </div>
                    </div>
                    <div className="home-illu">
                        <img src="../imgs/team_illustration.svg" width="900" alt="" />
                    </div>
                </div>
                <div className="ourselves">
                    <div className="heading-ours">
                        <h1>How do we define ourseleves</h1>
                    </div>
                    <div>
                        <p>Product lamp is a team of product nerds that helps you build well-thought,desirable products, with strategies, roadmaps, metrics and team practicesthat work, just for you!</p>
                        <div style={{marginTop: '40px'}}>
                        <Button text='Hire Us'/>
                        </div>
                    </div>
                </div>
                <div className="activity">
                    <div className="activity-flex">
                        <div className="activity-illu">
                            <img src="../imgs/girl_illustration.svg" width="700" alt="" />
                        </div>
                        <div className="activity-text">
                            <div>
                                <h1>Our Activities</h1>
                            </div>
                            <div className="activities">
                                <p style={{display: 'flex'}}>
                                    <IoIosCloseCircle style={{paddingTop: '',}} color="#FDBA23"  size="23"/>
                                    <span style={{marginLeft: '30px',marginTop: '',}} className="icon-des">Explore problems.</span>
                                </p>
                                <p style={{display: 'flex'}}>
                                    <IoIosCloseCircle style={{paddingTop: '',}} color="#FDBA23"  size="23"/>
                                    <span style={{marginLeft: '30px',marginTop: '',}} className="icon-des">Conduct customer research.</span>
                                </p>
                                <p style={{display: 'flex'}}>
                                    <IoIosCloseCircle style={{paddingTop: '',}} color="#FDBA23"  size="23"/>
                                    <span style={{marginLeft: '30px',marginTop: '',}} className="icon-des">Validate solutions.</span>
                                </p>
                                <p style={{display: 'flex'}}>
                                    <IoIosCloseCircle style={{paddingTop: '',}} color="#FDBA23"  size="23"/>
                                    <span style={{marginLeft: '30px',marginTop: '',}} className="icon-des">Empower your product team with vision and anagile mindset.</span>
                                </p>
                                <p style={{display: 'flex'}}>
                                    <IoIosCloseCircle style={{paddingTop: '',}} color="#FDBA23"  size="23"/>
                                    <span style={{marginLeft: '30px',marginTop: '',}} className="icon-des">Find product market fit.</span>
                                </p>
                                <p style={{display: 'flex'}}>
                                    <IoIosCloseCircle style={{paddingTop: '',}} color="#FDBA23"  size="23"/>
                                    <span style={{marginLeft: '30px',marginTop: '',}} className="icon-des">Scale your product.</span>
                                </p>
                                <p style={{display: 'flex'}}>
                                    <IoIosCloseCircle style={{paddingTop: '',}} color="#FDBA23"  size="23"/>
                                    <span style={{marginLeft: '30px',marginTop: '',}} className="icon-des">Create a loyal product audience.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="audience">
                    <div className="audience-head">
                        <h1>Our Target Audience</h1>
                        <p>
                            Product lamp is a team of product nerds that helps you build well-thought,
                            desirable products, with strategies, roadmaps, metrics and team practices
                            that work, just for you!
                        </p>
                    </div>
                    <div className="audience-flex">
                        <div className="plant-flex">
                            <img src="../imgs/growing_plant.svg" width="130" alt="" />
                            <p>For startups founders trying to reach a product market fit.</p>
                        </div>
                        <div className="organization-flex">
                            <img src="../imgs/organisation.svg" width="130" alt="" />
                            <p>For startups founders trying to reach a product market fit.</p>
                        </div>
                        <div className="product-flex">
                            <img src="../imgs/new+product.svg" width="130" alt="" />
                            <p>For startups founders trying to reach a product market fit.</p>
                        </div>
                    </div>
                </div>
                <div className="ourselves">
                    <div className="heading-ours">
                        <h1>Qoutes</h1>
                    </div>
                    <div>
                        <p>“when you’re listening to a Spotify playlist and think,"Wow, Spotify just gets me?"<br></br> That’s the feeling we’re able to create for your product audience."</p>
                        <div style={{marginTop: '40px', textAlign: 'center'}}>
                            <button style={{backgroundColor: '#FDBA23'}} className='btn-qoutes'></button>
                            <button style={{backgroundColor: '#FED26F'}} className='btn-qoutes'></button>
                            <button style={{backgroundColor: '#FED26F'}} className='btn-qoutes'></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="border-full"></div>
                <div className="footer-flex">
                    <div className="footer-logo">
                        <div className="footer-logo-png">
                            <img src="../imgs/logo_svg.svg" alt="" />
                        </div>
                    </div>
                    <div className="footer-social">
                        <SocialMedia />
                    </div>
                </div>
                <div className="border-90"></div>
                <div className="footer-contact">
                    <div className="footer-mail">
                        <AiOutlineMail size="50" style={{color:'#606060'}} />
                        <p style={{marginTop: '-5px'}}><b>Mail</b></p>
                        <p style={{marginTop: '-10px'}}>info@productlamp.com</p>
                    </div>
                    <div className="footer-phone">
                        <AiOutlinePhone size="50" style={{color:'#606060'}} />
                        <p style={{marginTop: '-5px'}}><b>Phone</b></p>
                        <p style={{marginTop: '-10px'}}>+250 780 000 000</p>
                    </div>
                    <div className="footer-findUs">
                        <VscLocation size="50" style={{color:'#606060'}} />
                        <p style={{marginTop: '-5px'}}><b>Find Us</b></p>
                        <p style={{marginTop: '-10px'}}>Kigali, Rwanda</p>
                    </div>
                </div>
                <div className="border-90-2"></div>
                <div className="footer-copyright">
                    <p style={{textAlign: 'center'}}>Copyright 2020 Product Lamp. All right reserved</p>
                </div>
            </div>
        </div>
    )
}

export default content
