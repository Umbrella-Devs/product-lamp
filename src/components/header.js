import SocialMedia from './socialMedia';


const header = () => {
    
    return (
        <header>
           <div className="head">
                <div className="logo">
                   <img src="../imgs/logo_svg.svg" size="100" alt="" />
                </div>
                <div className="">
                   <img src="../imgs/lamp_illustration.svg" size="100" alt="" />
                </div>
                <div className="socialMedia-head">
                    <SocialMedia />
                </div>
           </div>
        </header>
    )
}

export default header
