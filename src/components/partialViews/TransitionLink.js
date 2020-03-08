import React from 'react'
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';


function TransitionLink(props) {
    var history = useHistory()

    function handleClick(e) {
        e.preventDefault();

        if(props.pathname===history.location.pathname) return;

        if(props.previousTransition!==undefined && props.previousDuration!==undefined){
            history.replace(history.location.pathname, {
                transition: props.previousTransition,
                duration: props.previousDuration
            });
        }

        history.push(props.pathname, {
          transition: props.transition,
          duration: props.duration
        });
    }

    return (
        <a style={props.style} className={props.className} href={props.pathname} onClick={(e)=>handleClick(e)}>
            {props.children}
        </a>
    )
}

TransitionLink.propTypes = {
    pathname: PropTypes.string.isRequired,
    transition: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    previousTransition: PropTypes.string,
    previousDuration: PropTypes.number,
    className: PropTypes.string,
    style: PropTypes.object
}


export default TransitionLink;