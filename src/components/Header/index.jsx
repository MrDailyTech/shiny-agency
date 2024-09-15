import { Link } from "react-router-dom";
import {styled} from "styled-components"
import colors from "../../utils/style/colors";
import logo from  "../../assets/shiny-logo.png";

const NavContainer = styled.nav`
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props) =>props.$isFullLink && `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`;

const HeaderImage = styled.img` 
    height: 50px;
`;



function Header() {
    return(
          <NavContainer>
              <Link to="/">
                 <HeaderImage src={logo} alt="logo shiny" />
              </Link>
              <div>
                    <StyledLink to="/">Acceuil</StyledLink>
                    <StyledLink to="/freelances">Profils</StyledLink>
                    <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
              </div>
          </NavContainer>
    )
}

export default Header