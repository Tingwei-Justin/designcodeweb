import React from "react"
import styled from "styled-components/macro"

function WaveBackground() {
  return (
    <Wrapper>
      <Background />
      <Wave
        src="/images/waves/hero-wave1.svg"
        style={{ top: "100px", filter: "blur(60px)" }}
      />
      <Wave src="/images/waves/hero-wave2.svg" style={{ top: "350px" }} />
      <Wave src="/images/waves/hero-wave3.svg" style={{ top: "550px" }} />
    </Wrapper>
  )
}

export default WaveBackground

const Wrapper = styled.div`
  position: relative;
`

const Wave = styled.img`
  position: absolute;
  z-index: -1;
  /* filter: blur(60px); */
  @media (min-width: 1440px) {
    width: 100%;
  }
`

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 800px;
  background: linear-gradient(117.03deg, #3672f8 0%, #b01eff 100%);
  z-index: -1;
`
