import React from "react";
import styled from "styled-components";
import Container from "../container/Container";
import TextCard from "../TextCard/TextCard";

function PageInfo({title, children}) {
    return(
        <Section>
            <Container>
                <TextCard title={title} dynamicEl={"h2"} dystyle
                    classname={"infotext"} paragraph pstyle
                >
                    {children}
                </TextCard>
                <Div>

                </Div>
            </Container>
        </Section>
    );
};

const Section = styled.section`
    padding: 60px 16px 100px;
    @media only screen and (max-width: 992px) {
        padding-bottom: 50px;
    }
`;
 
const Div = styled.div`
`;

export default PageInfo;
