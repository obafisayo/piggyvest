import React from "react";
import { styled } from "styled-components";

function Home() {
    return (
        <StyledMain>
            <h1 className="hi">This is the Home page</h1>
        </StyledMain>
    );
}
export default Home;

const StyledMain = styled.main`
    padding-top: 150px;
    padding-bottom: 130px;
`;