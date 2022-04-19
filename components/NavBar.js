import {NavBarContainer} from "./NavBarContainer";
import {Logo} from "./Logo";

export const NavBar = (props) => {

  return (
      <NavBarContainer {...props}>
          <Logo
              w="150px"
              color={["white", "white", "primary.500", "primary.500"]}
          />
      </NavBarContainer>
  );
};