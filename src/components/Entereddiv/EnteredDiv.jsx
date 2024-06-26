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
    &.main-row {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        margin-right: -15px;
        margin-left: -15px;
        @media only screen and (max-width: 1024px) {
            margin-left: 0;
            margin-right: 0;
        }
    }
    &.static {
        margin-bottom: -7px;
    }
    &.home-header, &.other-header { 
        max-width: 93vw;
        @media only screen and (max-width: 600px) {
            width: 95%;
            font-size: 16px!important;
            line-height: 26px;
        }
        @media only screen and (max-width: 992px) {
            margin-left: auto!important;
            margin-right: auto!important;
        }
    }
    &.brands {
        display: flex;
        justify-content: center;
        align-items: center;
        grid-gap: 0 2rem;
        gap: 0 2rem;
        flex-wrap: wrap;
        @media only screen and (max-width: 600px) {
            grid-gap: 2rem;
            gap: 2rem;
        }
    }
    &.pageinfo {
        display: flex;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
        @media only screen and (max-width: 1024px) {
            margin-left: 0;
            margin-right: 0;
        }
    }
    &.flex {
        @media only screen and (min-width: 993px) {
            display: flex;
        }
    }
`;
export default EnteredDiv;