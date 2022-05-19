import Link from "next/dist/client/link";

const Layout = ({children}) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand">DelphiAnalytics</a>
          </Link>
          <button className="navbar-toggler" type="button" >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/pdf">
                  <a className="nav-link">PDF viewer</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {children}
      <footer className="bg-dark p-3">
        <p className="text-light">Informacion del footer</p>
      </footer>
    </>
  );
}

export default Layout;