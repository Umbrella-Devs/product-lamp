import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
// import PropTypes from 'prop-types';

const socialMedia = () => {
    return (
        <div>
            <div className="sm-flex flex">
                <div className="sm1 twitter">
                    <button style={{ backgroundColor: '#FDBA23'}} className="btn-sm rounded-full px-1 pb-1" href="http://" target="_blank"> 
                        <AiOutlineTwitter  color="white" size="20" />
                    </button> 
                </div>
                <div className="sm2 linkedIn mx-5">
                    <button style={{ backgroundColor: '#FDBA23'}} className="btn-sm rounded-full px-1 pb-1"> 
                        <FaLinkedinIn  color="white" size="20" />
                    </button>
                </div>
                <div className="sm3 instagram">
                    <button style={{ backgroundColor: '#FDBA23'}} className="btn-sm rounded-full px-1 pb-1"> 
                        <AiOutlineInstagram  color="white" size="20" />
                    </button>
                </div>
            </div>
        </div>
    )
}


export default socialMedia
