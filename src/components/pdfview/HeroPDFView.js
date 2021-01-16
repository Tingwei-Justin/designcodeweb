import React, { useState, useRef } from "react"
import styled from "styled-components/macro"
import { Document, Page } from "react-pdf/dist/esm/entry.webpack"

export default function HeroPDFView({ currentPDF, isShow, close }) {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1) //setting 1 to show fisrt page
  const pdvViewRef = useRef()
  // console.log("isshow: " + isShow)

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages)
    setPageNumber(1)
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset)
  }

  function previousPage() {
    changePage(-1)
  }

  function nextPage() {
    changePage(1)
  }

  return (
    <PDFWrapper isShow={isShow} ref={pdvViewRef}>
      <PDFDocumentWrapper>
        <Document file={currentPDF} onLoadSuccess={onDocumentLoadSuccess}>
          <CloseButton onClick={close}>
            <img src="/images/icons/cancel.svg" alt="close" />
          </CloseButton>
          <Page pageNumber={pageNumber} />
          <PageControl pageNumber={pageNumber}>
            <Button
              type="button"
              disabled={pageNumber <= 1}
              onClick={previousPage}
            >
              {`<`}
            </Button>
            <ControlText>
              {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
            </ControlText>
            <Button
              type="button"
              disabled={pageNumber >= numPages}
              onClick={nextPage}
            >
              {`>`}
            </Button>
          </PageControl>
        </Document>
      </PDFDocumentWrapper>
    </PDFWrapper>
  )
}

// const Header = styled.header`
//   background-color: rgb(50, 54, 57);
//   box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
//   padding: 20px;
//   color: white;
//   h1 {
//     font-size: inherit;
//     margin: 0px;
//   }
// `
const PDFWrapper = styled.div`
  /* transition: 0.5s ease-out; */
  visibility: ${({ isShow }) => (isShow ? "visable" : "hidden")};
  /* display: none; ${({ isShow }) => (isShow ? "block" : "none")}; */
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin: 80px; */
  /* padding: 10px; */
`

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 3;
  align-items: center;
  border-radius: 10px;
  /* transition: 0.5s ease-out; */

  :hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  }
`

const PDFDocumentWrapper = styled.div`
  /* margin: 1em 0; */
  top: 150px;
  position: absolute;
  max-width: 1110px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  z-index: 2;

  > * {
    box-shadow: 0 30px 40px 0 rgba(16, 36, 94, 0.2);
  }

  .react-pdf__Document {
    border-radius: 8px;
    max-width: 100%;
    position: relative;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(40px);
  }

  .react-pdf__Page {
    max-width: calc(~"100% - 2em");
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
    margin: 1em;
  }

  .react-pdf__Page__canvas {
    max-width: 100%;
    height: auto !important;
  }
`

const PageControl = styled.div`
  position: absolute;
  bottom: 5%;
  left: 50%;
  background: #f0f3f5;
  opacity: 1;
  transform: translateX(-50%);
  transition: opacity ease-in-out 0.2s;
  box-shadow: 0 30px 40px 0 rgba(16, 36, 94, 0.2);
  border-radius: 4px;
  opacity: 0;

  ${PDFWrapper}:hover & {
    opacity: 1;
  }
`

const Button = styled.button`
  width: 44px;
  height: 44px;
  background: #f0f3f5;
  border: 0;
  font: inherit;
  font-size: 0.8em;
  border-radius: 4px;

  :hover {
    background: ${({ disabled }) => (disabled ? "white" : "#bdbdbd")};
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.25);
  }
`

const ControlText = styled.span`
  font: inherit;
  font-size: 0.8em;
  padding: 0 0.5em;
`
