import { Navbar, NavbarBrand, Nav ,NavItem} from "react-bootstrap";
import GitHubButton from "react-github-btn";

const NavBar = () => {
  return (
    <nav>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <NavbarBrand href="/" className="font-weight-bold">CV Generator App</NavbarBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
             
            <NavItem className="px-lg-3">
                {/* github fork repo button */}
                <abbr title="Frontend on github">
                  <GitHubButton
                    href="https://github.com/dimuthus/di_cv_gen_frontend"
                    data-icon="octicon-repo-forked"
                    aria-label="Fork di_cv_gen_frontend on GitHub"
                  >
                    Frontend
                  </GitHubButton>
                </abbr>
              </NavItem>
              <NavItem className="px-lg-3">
                {/* github star repo button */}
                <abbr title="Backend on github">
                  <GitHubButton
                    href="https://github.com/dimuthus/di_cv_gen_backend"
                    data-icon="octicon-repo-forked"
                    aria-label="Fork di_cv_gen_backend on GitHub"
                  >
                    Backend
                  </GitHubButton>
                </abbr>
              </NavItem>
              
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </nav>
  );
};

export default NavBar;
