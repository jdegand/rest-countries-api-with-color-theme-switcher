import "../Nav.css";

function Nav() {
  const changeClass = () => {
    document.body.classList.toggle("dark");

    let icon = document.querySelector(".i");
    let modeText = document.querySelector(".dm");

    if (icon.classList.contains("far")) {
      icon.classList.remove("far");
      icon.classList.add("fas");
      icon.style.color = "white";
      modeText.style.color = "white";
      modeText.innerText = "Light Mode";
    } else {
      icon.classList.remove("fas");
      icon.classList.add("far");
      icon.style.color = "black";
      document.querySelector(".dm").style.color = "black";
      modeText.innerText = "Dark Mode";
    }
  };

  return (
    <nav className="nav">
      <ul className="nav-ul">
        <li className="world">Where in the World?</li>
        <li className="icon pointer" onClick={changeClass}>
          <i className="i far fa-moon fa-lg"></i>
          <span className="dm"> Dark Mode</span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
