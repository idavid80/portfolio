import Nav from '../nav/Nav'

const Header = () => {

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  });

  return (
    <header className={`headerMain ${scroll ? "sticky" : ""}`}>
      <Nav>Your Navbar here...</Nav>
    </header>
  )

}

export default Header