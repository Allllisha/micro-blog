import Link from "next/link";

const Menu = () => {
  return (
    <div className="links">
      <div className="portfolio">
        <Link href="https://www.arisanemoto.com/" passHref>
          <button>Portfolio</button>
        </Link>
      </div>
      <div className="linkedin">
        <Link href="https://www.linkedin.com/in/arisa-nemoto" passHref>
          <button>Linkedin</button>
        </Link>
      </div>
      <div className="github">
        <Link href="https://github.com/Allllisha" passHref>
          <button>Github</button>
        </Link>
      </div>
      <div className="contact">
        <Link href="https://www.arisanemoto.com/#contact" passHref>
          <button>Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
