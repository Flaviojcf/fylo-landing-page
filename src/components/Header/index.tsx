import { HeaderContainer, ListContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src="/public/logo.svg" alt="" />
      </div>
      <div>
        <ListContainer>
            <li>Features</li>
            <li>Team</li>
            <li>Sign In</li>
        </ListContainer>
      </div>
    </HeaderContainer>
  );
}
