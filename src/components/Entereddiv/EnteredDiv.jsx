import React, { useRef, useEffect } from "react";
import styled from "styled-components";

function EnteredDiv ({children, classname, threshold, whenDivIsentered, whenYouLeaveDiv, showLeaveFunction}) { 
    const enteredDivRef = useRef(null)

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: `${threshold}`
        };
        
        const enteredDivRefel = enteredDivRef.current;
        function callback(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    whenDivIsentered()
                } else {
                    showLeaveFunction && whenYouLeaveDiv()
                }
            });
        }
    
        const observer = new IntersectionObserver(callback, options);
    
        if (enteredDivRef.current) {
        observer.observe(enteredDivRef.current);
        }
    
        return () => {
        if (enteredDivRefel) {
            observer.unobserve(enteredDivRefel);
        }
        };
    }, [threshold, whenDivIsentered, whenYouLeaveDiv, showLeaveFunction]);

    return (
        <Div ref={enteredDivRef} className={classname}>
            {children}
        </Div>
    )
}
const Div = styled.div`
    &.text-card { 
        max-width: 93vw;
        @media only screen and (max-width: 600px) {
            width: 95%;
            font-size: 16px!important;
            line-height: 26px;
        }
        @media only screen and (max-width: 992px) {
            /* max-width: unset; */
            margin-left: auto!important;
            margin-right: auto!important;
        }
    }
`;
export default EnteredDiv;