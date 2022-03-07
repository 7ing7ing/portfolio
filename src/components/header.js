import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="h-20 flex sm:justify-between pl-4 pr-4 sm:pl-16 sm:pr-16 bg-navy text-white font-sans leading-relaxed sticky -top-0">
      <div className="flex items-center">
        <Link to="/">
          <img src="/images/logo.png" alt="logo" className="w-14 sm:mr-2" />
        </Link>
        <div className="ml-2 sm:ml-4 flex-wrap">
          <p className="font-bold">Ting-Ting Chen</p>
          <p>Full stack web developer</p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-around sm:flex-row">
        <div className="flex justify-end sm:items-center">
          <Link to="/about">
            <p className="ml-10 mr-2 sm:mr-4">About</p>
          </Link>
          <Link to="/portfolio">
            <p className="mr-0 sm:mr-4">Portfolio</p>
          </Link>
        </div>
        <div className="flex justify-end sm:items-center text-3xl">
          <a
            target={"_blank"}
            href="https://github.com/7ing7ing"
            rel="noreferrer"
          >
            <FaGithub className="mr-2 sm:mr-4" />
          </a>
          <a
            target={"_blank"}
            href="https://www.linkedin.com/in/7ing7ing/"
            rel="noreferrer"
          >
            <FaLinkedin className="mr-0 sm:mr-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
