import { ReactComponent as LogoSvg } from "../../../../shared/assets/img/logo.svg";

const Logo = () => {
  return (
    <div className="logo_container">
      <div className="logo_image-container">
        <LogoSvg className="logo_image"/>
      </div>
      <h1 className="logo_title">Vikinger</h1>
    </div>
  )
}

export default Logo