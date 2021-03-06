import React from "react"
import styled from "styled-components/macro"

function MockupAnimation({ click }) {
  return (
    <Wrapper>
      <div className="mockup1" onClick={click} />
      <div className="mockup2" onClick={click} />
      <div className="mockup3" onClick={click} />
      <div className="mockup4" onClick={click} />
      <div className="mockup5" onClick={click} />
    </Wrapper>
  )
}

export default MockupAnimation

const Wrapper = styled.div`
  position: relative;
  /* top: 30px;
  left: -30px; */
  perspective: 5000px;
  perspective-origin: left bottom;
  transform-style: flat;
  /* top: 30px;
  left: -30px; */

  @media (max-width: 768px) {
    /* top: 30px; */
    transform: scale(0.6);
    transform-origin: top left;
  }

  @media (max-width: 450px) {
    /* top: 30px; */
    transform: scale(0.4);
  }

  div {
    transform: rotateY(-20deg) rotateX(20deg);
    transform-origin: bottom left;
  }

  * {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover div {
    transform: rotateY(0deg) rotateX(0deg);
    &.mockup1 {
      transition-delay: 0.1s;
      transform: translate(-30px, -30px);
    }
    &.mockup2 {
      transition-delay: 0.2s;
      transform: translate(0px, -30px);
    }
    &.mockup3 {
      transition-delay: 0s;
    }
    &.mockup4 {
      transition-delay: 0.1s;
      transform: translate(-120px, 30px);
    }
    &.mockup5 {
      transform: translate(-90px, -30px);
      transition-delay: 0.2s;
    }
    :hover {
      filter: brightness(150%) saturate(120%);
    }
  }

  .mockup1 {
    position: absolute;
    width: 183px;
    height: 120px;
    left: -37px;
    //right: 617px;
    top: 0px;

    background: url("/images/animations/mockup1.svg"),
      radial-gradient(
        218.51% 281.09% at 100% 100%,
        rgba(253, 63, 51, 0.6) 0%,
        rgba(76, 0, 200, 0.6) 45.83%,
        rgba(76, 0, 200, 0.6) 100%
      );
    border: 0.273134px solid rgba(255, 255, 255, 0.3);
    box-sizing: border-box;
    box-shadow: 0px 16.3881px 32.7761px rgba(99, 30, 187, 0.5);
    backdrop-filter: blur(21.8507px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 16.3881px;
  }

  .mockup2 {
    position: absolute;
    width: 183px;
    height: 120px;
    left: 176px;
    //right: 403px;
    top: 0px;

    background: url("/images/animations/mockup2.svg"),
      linear-gradient(
        198.85deg,
        #4316db 12.72%,
        #9076e7 54.49%,
        #a2eeff 100.01%
      );
    border: 0.27304px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0px 8.19119px 16.3824px rgba(0, 0, 0, 0.1),
      0px 16.3824px 32.7648px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(21.8432px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 16.3824px;
  }

  .mockup3 {
    position: absolute;
    width: 701px;
    height: 428px;
    /* right: 62px;
    top: 60px; */
    top: 50px;
    left: 0px;

    background: url("/images/animations/mockup3.svg"), rgba(23, 12, 61, 0.5);
    border: 0.342305px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(27.3844px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 6.8461px;
  }

  .mockup4 {
    position: absolute;
    width: 399px;
    height: 274px;
    top: 220px;
    left: 40px;
    /* right: 207px;
    top: 262px; */

    background: url("/images/animations/mockup4.svg"), rgba(39, 20, 62, 0.3);
    border: 0.5px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    backdrop-filter: blur(27.3844px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 14px;
  }

  .mockup5 {
    position: absolute;
    width: 412px;
    height: 274px;
    /* right: -228px;
    top: 262px; */
    top: 250px;
    left: 340px;

    background: url("/images/animations/mockup5.svg"), rgba(39, 20, 62, 0.2);
    border: 0.5px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    backdrop-filter: blur(27.3844px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 14px;
  }
`
