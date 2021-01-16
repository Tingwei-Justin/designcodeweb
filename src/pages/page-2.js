import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import PDFView from "../components/pdfview/PDFView"
import HeroPDFView from "../components/pdfview/HeroPDFView"
// import pdfFile from "../components/pdfview/cv.pdf"

function SecondPage() {
  return (
    <Layout>
      <SEO title="Page two" />
      <PDFView />
      {/* <HeroPDFView currentPDF={pdfFile} /> */}
    </Layout>
  )
}

export default SecondPage
