import Logo from "@/assets/icons/logo.svg";
import Container from "../Container";
import HamburgerMenu from "../HamburgerMenu";

const Header = () => {
  return (
    <header>
      <Container className="flex justify-between bg-[#141414] py-6">
        <Logo className="w-[180px] h-10" />
        <div className="relative">
          <HamburgerMenu />
        </div>
      </Container>
    </header>
  );
};

export default Header;
