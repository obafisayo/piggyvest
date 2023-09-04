import React from "react";
import { styled } from "styled-components";

const StyledMain = styled.main`
    .hi:not(:last-child) {
        margin-bottom: 10rem;
    }
`;
function Home() {
    return (
        <StyledMain>
            <h1 className="hi">This is the Home page</h1>
            <h1 className="hi">This is the Home page</h1>
            <h1 className="hi">This is the Home page</h1>
            <h1 className="hi">This is the Home page</h1>
            <h1 className="hi">This is the Home page</h1>
        </StyledMain>
    );
}
export default Home;