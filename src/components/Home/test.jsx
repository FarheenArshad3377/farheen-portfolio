// import React, { useState, useEffect } from "react";
// import { Container, Row } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Particle from "../Particle";
// import { AiOutlineDownload } from "react-icons/ai";
// import { Document, Page } from "react-pdf";
// import { pdfjs } from "react-pdf";
// import pdf from "../../assets/fariResume.pdf";

// import "react-pdf/dist/Page/AnnotationLayer.css";
// import "react-pdf/dist/Page/TextLayer.css";

// // ✅ VITE + REACT-PDF WORKER (FIXED)
// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "react-pdf/node_modules/pdfjs-dist/build/pdf.worker.min.mjs",
//   import.meta.url
// ).toString();

// const ResumeNew = () => {
//   const [width, setWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => setWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <Container fluid className="resume-section">
//       <Particle />

//       <Row style={{ justifyContent: "center" }}>
//         <Button variant="primary" href={pdf} target="_blank">
//           <AiOutlineDownload /> &nbsp;Download CV
//         </Button>
//       </Row>

//       <Row className="resume d-flex justify-content-center mt-4">
//         <Document
//           file={pdf}
//           onLoadError={(e) => console.error("PDF error:", e)}
//         >
//           <Page pageNumber={1} scale={width > 786 ? 1.2 : 0.8} />
//         </Document>
//       </Row>
//     </Container>
//   );
// };

// export default ResumeNew;

