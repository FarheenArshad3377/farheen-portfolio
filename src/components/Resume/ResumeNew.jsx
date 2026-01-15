import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import pdf from "../../assets/farheen-arshad.pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// ✅ VITE-SAFE PDF WORKER
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "react-pdf/node_modules/pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();
const ResumeNew = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />

      {/* PDF VIEW */}
  <Row className="resume-row">
  <Document
    file={pdf}
    onLoadError={(e) => console.error("PDF error:", e)}
  >
    <Page pageNumber={1} width={Math.min(width * 0.9, 800)} />
  </Document>
</Row>

      {/* BOTTOM DOWNLOAD BUTTON */}
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          style={{ maxWidth: "250px" ,marginTop:"30px"}}
        >
          <AiOutlineDownload /> &nbsp;Download CV
        </Button>
      </Row>
    </Container>
  );
};

export default ResumeNew;

