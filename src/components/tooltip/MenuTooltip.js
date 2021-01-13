import React from "react"
import styled from "styled-components/macro"
import { tooltipData } from "../../data/menuData"
import MenuButton from "../buttons/MenuButton"

function MenuTooltip({ isOpen }) {
  return (
    <Wrapper isOpen={isOpen}>
      {tooltipData.map((item, index) => (
        <MenuButton item={item} key={index} />
      ))}
    </Wrapper>
  )
}

export default MenuTooltip

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  right: 30px;
  background: rgba(15, 14, 71, 0.3);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  border-radius: 20px;
  padding: 20px;

  z-index: 1;
  display: grid;
  gap: 10px;
  grid-template-columns: 150px;

  transition: 0.3s ease-in-out;
  visibility: ${({ isOpen }) => (isOpen ? "visable" : "hidden")};
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  transform: ${({ isOpen }) =>
    isOpen
      ? " skewY(0deg) rotate(0deg) translateY(0px)"
      : " skewY(-5deg) rotate(5deg) translateY(-30px)"};
`
