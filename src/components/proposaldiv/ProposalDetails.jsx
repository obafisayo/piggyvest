import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Img from "../img/Img";

function ProposalDetails({ config }) {
    const { id } = useParams(); // Destructure the id parameter from useParams()
    const [data, setData] = useState(null);

    useEffect(() => {
        const foundItem = config.find((item) => item.id === id);
        setData(foundItem);
    }, [id, config]);

    return (
        <StyledDiv className="container">
            {data && (
                <Box className="box">
                    <Img src={data.img} width={"400px"} height={"350px"}/>
                    <h2>{data.title}</h2>
                    <p>{data.members}</p>
                    <p>{data.permember}</p>
                    <p>{data.days}</p>
                </Box>
            )}
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
    &.container {
        padding: 100px;
    }
    `;
const Box = styled.div`
    &.box {
        border-top: 1px solid red;
    } 
`

export default ProposalDetails;
