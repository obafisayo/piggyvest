import React from "react";
import { styled } from "styled-components";

function Home() {
    return (
        <StyledMain>
            <h1 className="hi">This is the Home page</h1>
            <form name="contact" netlify>
                <p>
                    <label>Name <input type="text" name="name" /></label>
                </p>
                <p>
                    <label>Email <input type="email" name="email" /></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        </StyledMain>
    );
}
export default Home;

const StyledMain = styled.main`
    padding-top: 150px;
    padding-bottom: 130px;
`;