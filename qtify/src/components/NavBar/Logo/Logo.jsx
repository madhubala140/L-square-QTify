import LogoImage from "../../../assets/Logo.png";

/**
 * Represents the logo component.
 * Renders an image as a logo.
 * @returns {JSX.Element} The rendered logo component.
 */
const Logo = () => {
  return <img src={LogoImage} alt="Logo"  width={67} height={34}/>;
};

export default Logo;