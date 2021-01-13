import React from "react"
// import { Link } from "gatsby"
import styled, { keyframes } from "styled-components/macro"
import { H1, MediumText } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import PurchaseButton from "../buttons/PurchaseButton"
import MockupAnimation from "../animations/MockupAnimation"
import WaveBackground from "../backgrounds/WaveBackground"

function HeroSection() {
  return (
    <Wrapper>
      <WaveBackground />
      <ContentWrapper>
        <TextWrapper>
          {/* <img src="/images/logos/logo.svg" alt="logo" /> */}
          <Title>
            Ziyi Zhao <span>(Iggy)</span>
          </Title>
          <Description>
            This is the test for react design with styled component
          </Description>
          <PurchaseButton title="Title" subtitle="This is the subtitle" />
          {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
        </TextWrapper>

        <MockupAnimation />
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const animation = keyframes`
  from {opacity: 0; transform: translateY(-20px); filter: blur(10px)}
  to {opacity: 1; transform: translateY(0px); filter: blur(0px)}
`

const Wrapper = styled.div`
  /* background: linear-gradient(117.03deg, #3672f8 0%, #b01eff 100%); */
  /* min-height: 1024px; */
  height: 800px;
  width: 100%;
  overflow: hidden;
`

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto; // top right bottom left
  padding: 200px 30px;
  display: grid;
  grid-template-columns: 440px auto;

  @media (max-width: 450px) {
    /* gap: 60px; */
    grid-template-columns: auto;
    gap: 60px;
    padding: 150px 20px 250px 20px;
  }
`

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;

  > * {
    // no children
    opacity: 0;
    animation: ${animation} 1s forwards;

    :nth-child(1) {
      animation-delay: 0s;
    }
    :nth-child(2) {
      animation-delay: 0.2s;
    }
    :nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`

const Title = styled(H1)`
  /* color: ${themes.dark.text1}; */
  background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  span {
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (max-width: 450px) {
    /* top: 30px; */
    font-size: 48px;
  }
`

const Description = styled(MediumText)``
