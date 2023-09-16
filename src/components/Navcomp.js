import { Link } from 'react-router-dom';

const Navcomp = ()=> {

 const handleNavClick = (index) => {
    const links = document.getElementsByClassName("nav-link");
    for (let i = 0; i < links.length; i++) {
      links[i].style.color = i === index ? "white" : "grey";
    }

  };
 
return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">News thunda</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"><Link className="nav-link" onClick={() => handleNavClick(0)} aria-current="page" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" onClick={() => handleNavClick(1)} to="/business">Business</Link></li>
        <li className="nav-item"><Link className="nav-link" onClick={() => handleNavClick(2)} to="/health">Health</Link></li>
        <li className="nav-item"><Link className="nav-link" onClick={() => handleNavClick(3)} to="/science">Science</Link></li>
        <li className="nav-item"><Link className="nav-link" onClick={() => handleNavClick(4)} to="/entertainment">Entertainment</Link></li>
        <li className="nav-item"><Link className="nav-link" onClick={() => handleNavClick(5)} to="/sports">Sports</Link></li>
        <li className="nav-item"><Link className="nav-link" onClick={() => handleNavClick(6)} to="/technology">Technology</Link></li>     
      </ul>

    </div>
  </div>
</nav>
    </div>
)
}


export default Navcomp
