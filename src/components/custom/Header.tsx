import Banner from "./Banner";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full ">
      <Banner />
      <Nav />
    </header>
  );
} 