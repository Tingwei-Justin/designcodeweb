import { Link } from "gatsby"
import React from "react"
import styled from "styled-components/macro"
import { Caption2, SmallText } from "../styles/TextStyles"

function PurchaseButton(props) {
  const { title, subtitle } = props
  return (
    <Link to="/page-2">
      <Wrapper>
        <IconWrapper>
          <Icon src="/images/icons/credit.svg" />
          <Ring src="/images/icons/icon-ring.svg" />
        </IconWrapper>
        <TextWrapper>
          <Title>{title || "Default"}</Title>
          <SubTitle>{subtitle || "$19 per month"}</SubTitle>
        </TextWrapper>
      </Wrapper>
    </Link>
  )
}
export default PurchaseButton

const Wrapper = styled.div`
  max-width: 280px;
  height: 77px;
  padding: 12px;
  background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  border: 0px;
  display: grid;
  grid-template-columns: 53px auto;
  align-items: center;
  gap: 20px;
  transition: 0.5s ease-in-out;
  /* *,
  & {
    transition: 0.5s ease-in-out;
  } */

  :hover {
    cursor: pointer;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 20px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-3px);
  }
`
const TextWrapper = styled.div``

const Title = styled(Caption2)`
  color: black;
`

const SubTitle = styled(SmallText)`
  color: black;
  opacity: 0.7;
`

const Icon = styled.img`
  width: 29px;
  height: 29px;
`

const Ring = styled.img`
  position: absolute;
  top: -15px;
  left: -16px;
  transition: 0.5s ease-in-out;
  ${Wrapper}:hover & {
    transform: rotate(30deg) scale(1.2) translate(1px, 1px);
  }
`

const IconWrapper = styled.div`
  width: 45px;
  height: 45px;
  background: linear-gradient(
    200.44deg,
    rgb(67, 22, 219) 13.57%,
    rgb(144, 118, 231) 98.38%
  );
  border-radius: 50px;
  display: grid;
  justify-content: center; // horizontal
  align-content: center; //vertical
  gap: 4px;
  justify-self: center;
  position: relative;

  ${Wrapper}:hover & {
    filter: hue-rotate(10deg) brightness(150%) saturate(120%);
  }
`
