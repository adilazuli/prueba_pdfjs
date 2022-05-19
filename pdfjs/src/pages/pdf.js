import PdfViewer from "../components/PdfViewer_v4";

const Pdf = () => {
  return (
    <div>
      <PdfViewer url={"/doc.pdf"} /> 
    </div>
  );
}

export default Pdf;