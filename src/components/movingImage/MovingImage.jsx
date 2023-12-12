import React, {useState} from "react";
import styled from "styled-components";
import Img from "../img/Img";
import HomeImage from "../../assets/static/img/home_image.avif"
import flexNairaBox from "../../assets/static/img/Flex-naira-box.avif"
import investifyBox from "../../assets/static/img/ivestify-box.avif"
import piggybankBox from "../../assets/static/img/piggybank-box.avif"
import SafelockBox from "../../assets/static/img/safelock-box.avif"
import targetBox from "../../assets/static/img/target-savings-box.avif"
import EnteredDiv from "../Entereddiv/EnteredDiv";

function MovingImage() {
     const [isDivEntered, setIsDivEntered] = useState(false);
     const [isDivEntered1, setIsDivEntered1] = useState(false);
     const [isDivEntered2, setIsDivEntered2] = useState(false);
     const [isDivEntered3, setIsDivEntered3] = useState(false);
     const [isDivEntered4, setIsDivEntered4] = useState(false);

     const styles = {
          opacity: isDivEntered ? "1" : "0",
          borderRadius: "16px",
          width: isDivEntered ? "500px" : "300px",
          height: isDivEntered ? "unset" : "200px",
          top: isDivEntered ? "0px" : "50px",
          left: isDivEntered ? "0px" : "130px",
          transition: "all 0.5s ease-in"
     }
     const styles1 = {
          transform: isDivEntered ? "translate(0px, 0px)" : "translate(0px, 100px)",
          opacity: isDivEntered ? "1" : "0",
     }
     const styles2 = {
          transform: isDivEntered1 ? "translate(0px, 0px)" : "translate(0px, 100px)",
          opacity: isDivEntered1 ? "1" : "0",
     }
     const styles3 = {
          transform: isDivEntered2 ? "translate(0px, 0px)" : "translate(0px, 100px)",
          opacity: isDivEntered2 ? "1" : "0",
     }
     const styles4 = {
          transform: isDivEntered3 ? "translate(0px, 0px)" : "translate(0px, 100px)",
          opacity: isDivEntered3 ? "1" : "0",
     }
     const styles5 = {
          transform: isDivEntered4 ? "translate(0px, 0px)" : "translate(0px, 100px)",
          opacity: isDivEntered4 ? "1" : "0",
     }
     function handleEnter() {
          setIsDivEntered(true)
          setTimeout(() => {
               setIsDivEntered1(true);
               setTimeout(() => {
                    setIsDivEntered2(true);
                    setTimeout(() => {
                         setIsDivEntered3(true);
                         setTimeout(() => {
                              setIsDivEntered4(true);
                         }, 250);
                    }, 250);
               }, 250);
          }, 250);
     }
     return(
          <StyledDiv>
               <EnteredDiv threshold={0.5} whenDivIsentered={handleEnter}>
                    <Img styles={styles} src={HomeImage} alt={"card-img"} className={"rel-pos headerImg"}/>
                    <SmallImgs>
                         <Img className={"absNwidth safe style"} styles={styles1} src={SafelockBox} alt={"card-img"} />
                         <Img className={"absNwidth target style"} styles={styles2} src={targetBox} alt={"card-img"} />
                         <Img className={"absNwidth flexBox style"} styles={styles3} src={flexNairaBox} alt={"card-img"} />
                         <Img className={"absNwidth invest style"} styles={styles4} src={investifyBox} alt={"card-img"} />
                         <Img className={"absNwidth piggy style"} styles={styles5} src={piggybankBox} alt={"card-img"} />
                    </SmallImgs>
               </EnteredDiv>
          </StyledDiv>
     );
}

const StyledDiv = styled.div`
     position: relative;
     width: 500px;
     min-height: 520px;
     animation: animate 2.3s ease-in-out infinite alternate;
     &:hover {
          cursor: pointer;
          animation-play-state: paused;
     }
     @keyframes animate {
          0% {
               transform: translateY(0)
          }

          100% {
               transform: translateY(-20px)
          }
     }
     @media only screen and (max-width: 600px) {
          width: 330px;
          max-width: 85vw;
          min-height: unset;
     }
`;
const SmallImgs = styled.div`
     position: absolute;
     width: 100%;
     height: 100%;
     top: 0;
     left: 0;
`;
export default MovingImage;
