import {NavBarContainer} from "./NavBarContainer";
import {Logo} from "./Logo";

export const NavBar = (props) => {

  return (
      <NavBarContainer {...props}>
          <Logo
              w="150px"
              color='black'
          />
      </NavBarContainer>
  );
};