import Button from './button'
import SocialMedia from './socialMedia';
import { IoIosCloseCircle} from "react-icons/io";
import { AiOutlineMail} from "react-icons/ai";
import { AiOutlinePhone} from "react-icons/ai";
import { VscLocation} from "react-icons/vsc";

const content = () => {
    return (
        <div className="">
            <div className="content -mt-12 w-90 mx-auto">
                <div className="home flex">
                    <div className="home-text w-55 relative">
                        <div className="home-text-title">
                            <h1 className="text-6xl">We help you build</h1>
                            <h1 className="desirable text-6xl -mt-12" style={{color: '#FDBA23'}}>Desirable products.</h1>
                        </div>
                        <div className="home-text-para -mt-5">
                            <p>
                                Product lamp is a team of product nerds that helps
                                you build well-<br></br>thought, desirable products, with
                                strategies, roadmaps, metrics<br></br> and team practices
                                that work, just for you!
                            </p>
                            <div style={{marginTop: '40px'}}>
                                <Button className="w-40" text='All activities' />
                            </div>
                        </div>
                    </div>
                    <div className="home-illu w-80">
                        <img style={{marginLeft: '250px'}} src="../imgs/team_illustration.svg" width="1800" alt="" />
                    </div>
                </div>
                <div className="ourselves text-center w-60 mx-auto mt-32">
                    <div className="heading-ours">
                        <h1>How do we define ourseleves</h1>
                    </div>
                    <div>
                        <p>Product lamp is a team of product nerds that helps you build well-thought,desirable products, with strategies, roadmaps, metrics and team practicesthat work, just for you!</p>
                        <div style={{marginTop: '40px'}}>
                            <button className="btn rounded-full text-white w-20" style={{backgroundColor: '#FDBA23', fontSize: '15px'}}>Hire Us</button>
                        </div>
                    </div>
                </div>
                <div className="activity mt-32">
                    <div className="activity-flex flex">
                        <div className="activity-illu w-50">
                            <img style={{marginLeft: '-150px'}} src="../imgs/girl_illustration.svg" alt="" />
                        </div>
                        <div className="activity-text w-55">
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
                <div className="audience mt-32">
                    <div className="audience-head text-center w-60 mx-auto">
                        <h1>Our Target Audience</h1>
                        <p>
                            Product lamp is a team of product nerds that helps you build well-thought,
                            desirable products, with strategies, roadmaps, metrics and team practices
                            that work, just for you!
                        </p>
                    </div>
                    <div className="audience-flex flex mt-10 w-60 mx-auto">
                        <div className="plant-flex w-30">
                            <img src="../imgs/growing_plant.svg" width="130" alt="" />
                            <p>For startups founders trying to reach a product market fit.</p>
                        </div>
                        <div className="organization-flex w-30 mx-auto">
                            <img src="../imgs/organisation.svg" width="130" alt="" />
                            <p>For startups founders trying to reach a product market fit.</p>
                        </div>
                        <div className="product-flex w-30">
                            <img src="../imgs/new+product.svg" width="130" alt="" />
                            <p>For startups founders trying to reach a product market fit.</p>
                        </div>
                    </div>
                </div>
                <div className="ourselves w-60 mx-auto text-center mt-32">
                    <div className="heading-ours">
                        <h1>Qoutes</h1>
                    </div>
                    <div>
                        <p>“when you’re listening to a Spotify playlist and think,"Wow, Spotify just gets me?"<br></br> That’s the feeling we’re able to create for your product audience."</p>
                        <div style={{marginTop: '40px', textAlign: 'center'}}>
                            <button style={{backgroundColor: '#FDBA23'}} className='btn-qoutes px-4 pt-1 border-1 border-solid rounded'></button>
                            <button style={{backgroundColor: '#FED26F'}} className='btn-qoutes px-2 pt-1 border-1 border-solid rounded'></button>
                            <button style={{backgroundColor: '#FED26F'}} className='btn-qoutes px-2 pt-1 border-1 border-solid rounded'></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer mt-32">
                <div className="border-1 border-solid border-grey border-bottom"></div>
                <div className="footer-flex flex w-90 mx-auto mt-10">
                    <div className="footer-logo w-40  mx-auto">
                        <div className="footer-logo-png">
                            <img className="w-75 -mt-24 ml-24" src="../imgs/logo_svg.svg" alt="" />
                        </div>
                    </div>
                    <div className="footer-social">
                        <SocialMedia />
                    </div>
                </div>
                <div className="-mt-10 w-90 mx-auto border-1 border-solid border-grey border-bottom"></div>
                <div className="footer-contact mt-10 flex text-center w-60 mx-auto">
                    <div className="footer-mail">
                        <AiOutlineMail size="50" style={{color:'#606060'}} />
                        <p style={{marginTop: '-5px'}}><b>Mail</b></p>
                        <p style={{marginTop: '-10px'}}>info@productlamp.com</p>
                    </div>
                    <div className="footer-phone mx-32">
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
                <div className="mt-10 w-90 mx-auto border-1 border-solid border-grey border-bottom"></div>
                <div className="footer-copyright">
                    <p style={{textAlign: 'center'}}>Copyright 2020 Product Lamp. All right reserved</p>
                </div>
            </div>
        </div>
    )
}

export default content
