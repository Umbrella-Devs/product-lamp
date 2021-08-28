import SocialMedia from './socialMedia';


const header = () => {
    
    return (
        <header>
           <div className="head w-90 mt-4 mx-auto flex">
                <div className="logo w-50 -ml-6 -mt-10">
                   <img className="w-35" src="../imgs/logo_svg.svg" alt="" />
                </div>
                <div className="-mt-12">
                   <img src="../imgs/lamp_illustration.svg" size="100" alt="" />
                </div>
                <div className="socialMedia-head w-50">
                    <SocialMedia />
                </div>
           </div>
        </header>
    )
}

export default header
