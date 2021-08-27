import propTypes from 'prop-types'

const button = ({color, text,size}) => {
    return <button className="btn" style={{backgroundColor: color, fontSize: size}}>{text}</button>
}
button.defaultProps ={
    color: '#FDBA23',
    text: 'Default',
    size: '15px'
}
export default button
