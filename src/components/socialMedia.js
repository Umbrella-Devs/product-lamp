import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
// import PropTypes from 'prop-types';

const socialMedia = () => {
    return (
        <div>
            <div className="sm-flex">
                <div className="sm1 twitter">
                    <button className="btn-sm" href="http://" target="_blank" rel="noopener noreferrer"> 
                        <AiOutlineTwitter  color="white" size="20" />
                    </button> 
                </div>
                <div className="sm2 linkedIn">
                    <button className="btn-sm" href="http://" target="_blank" rel="noopener noreferrer"> 
                        <FaLinkedinIn  color="white" size="20" />
                    </button>
                </div>
                <div className="sm3 instagram">
                    <button className="btn-sm" href="http://" target="_blank" rel="noopener noreferrer"> 
                        <AiOutlineInstagram  color="white" size="20" />
                    </button>
                </div>
            </div>
        </div>
    )
}


export default socialMedia
