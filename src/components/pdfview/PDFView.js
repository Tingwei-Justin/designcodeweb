import React, { useState, useEffect } from "react"
import styled from "styled-components/macro"
import { Document, Page } from "react-pdf/dist/esm/entry.webpack"
import cv from "./cv.pdf"

export default function PDFView() {
  const [numPages, setNumPages] = useState(null)
  // const [file, setFile] = useState(null)

  // useEffect(() => {
  //   console.log("effect")
  //   // setFile(pdfFile)
  // }, [])

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages)
  }

  return (
    <Wrapper>
      <Header>
        <h1>Ziyi Zhao(Iggy) Resume</h1>
      </Header>

      <PDFWrapper>
        <PDFDocumentWrapper>
          <Document file={cv} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </PDFDocumentWrapper>
      </PDFWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0;
  background-color: rgb(82, 86, 89);
  font-family: Segoe UI, Tahoma, sans-serif;
`

const Header = styled.header`
  background-color: rgb(50, 54, 57);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  padding: 20px;
  color: white;
  h1 {
    font-size: inherit;
    margin: 0px;
  }
`
const PDFWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
`

const PDFDocumentWrapper = styled.div`
  margin: 1em 0;

  .react-pdf__Document {
    display: flex;
    flex-direction: column;
    align-items: center;
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
