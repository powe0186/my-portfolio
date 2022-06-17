import { Card } from 'react-bootstrap';
import { Document, Page, pdfjs } from 'react-pdf';
import { useState } from 'react';
pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';

const resumeStyle={
    color: "white",
}

const Resume = () => {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numpages }) {
        setNumPages(numPages);
    }

    return (
        <div style={ resumeStyle }>
            <h1>MY RESUME:</h1>
            <Document file="./BenPowellResume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
        </div>
    )
}

export default Resume;