import Layout from "../components/Layout";
// import "../../node_modules/pdfjs-dist/web/pdf_viewer.css" // pdfJS
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../styles/styles.css";
import "../../styles/globals.css";


const App = ({Component, pageProps}) => {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
export default App;