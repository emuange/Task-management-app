import Logo from "../assets/logo.png";

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="taskkeep logo"/>
        <span>Taskkeep</span>
      </div>
      <div className="themeSelector">
        <span className="light"></span>
        <span className="medium"></span>
        <span className="dark"></span>
        <span className="gradientOne"></span>
        <span className="gradientTwo"></span>
        <span className="gradientThree"></span>
      </div>
    </header>
  )
}
