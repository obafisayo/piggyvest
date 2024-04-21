import React, { useEffect, useState } from "react";
import styled from "styled-components";

function DisplayStyles({classname, children, showStyle, index}) {
    const [myStyle, setMyStyle] = useState(false);
    const [myStyle1, setMyStyle1] = useState(false);
    const [myStyle2, setMyStyle2] = useState(false);
    const [myStyle3, setMyStyle3] = useState(false);
    const [myStyle4, setMyStyle4] = useState(false);
    const [myStyle5, setMyStyle5] = useState(false);
    const [myStyle6, setMyStyle6] = useState(false);
    const style1 = {
        transition: "all 0.5s ease-in",
        opacity: myStyle1 || myStyle? "1" : "0",
        visibility: myStyle1 ? "visible" : "hidden"
    }
    const style2 = {
        transition: "all 0.5s ease-in",
        opacity: myStyle2 ? "1" : "0",
        visibility: myStyle2 ? "visible" : "hidden"
    }
    const style3 = {
        transition: "all 0.5s ease-in",
        opacity: myStyle3 ? "1" : "0",
        visibility: myStyle3 ? "visible" : "hidden"
    }
    const style4 = {
        transition: "all 0.5s ease-in",
        opacity: myStyle4 ? "1" : "0",
        visibility: myStyle4 ? "visible" : "hidden"
    }
    const style5 = {
        transition: "all 0.5s ease-in",
        opacity: myStyle5 ? "1" : "0",
        visibility: myStyle5 ? "visible" : "hidden"
    }
    const style6 = {
        transition: "all 0.5s ease-in",
        opacity: myStyle6 ? "1" : "0",
        visibility: myStyle6 ? "visible" : "hidden"
    }

    const allstyle = [style1, style2, style3, style4, style5, style6]

    function handleStyle() {
        setMyStyle(false);
        setTimeout(() => {
            setMyStyle1(true);
            setTimeout(() => {
                setMyStyle2(true);
                setTimeout(() => {
                    setMyStyle3(true);
                    setTimeout(() => {
                        setMyStyle4(true);
                        setTimeout(() => {
                            setMyStyle5(true);
                            setTimeout(() => {
                                setMyStyle6(true);
                            }, 250);
                        }, 250);
                    }, 250);
                }, 250);
            }, 250);
        }, 250);
    }

    useEffect(() => {
        if (showStyle) {
            handleStyle()
        }
    }, [showStyle])

    return (
        <StyledDiv className={classname? classname : ""} style={allstyle[index]}>
            {children}
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    .main-row>&.col-md-4 {
        margin: auto;
        text-align: center;
        @media only screen and (min-width: 992px) {
            flex: 33.333333% 1;
            max-width: 33.333333%;
        }
    }
    &.card {
        margin: 0 auto;
        padding: 30px!important;
        width: 352px;
        max-width: 360px!important;
        max-height: 654px;
        background-color: #fff!important;
        box-shadow: 0 0 1px 0 #ced3da;
        margin-bottom: 45px!important;
        min-height: 550px;
        position: relative;
        overflow: hidden;
        border-radius: 20px;
        @media only screen and (max-width: 992px) {
            padding: 30px!important;
        }
    }
`;

export default DisplayStyles;
