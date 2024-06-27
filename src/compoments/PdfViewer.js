import { Viewer, Worker } from '@react-pdf-viewer/core';
import React from 'react'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
const PdfViewer = ({ pdfUrl }) => {
    return (
        <div style={{ height: '750px' }}>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                <Viewer fileUrl={pdfUrl} />
            </Worker>
        </div>
    );
}

export default PdfViewer