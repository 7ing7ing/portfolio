import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiBootstrap,
  SiMongodb,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
} from "react-icons/si";

export default function SectionHome() {
  return (
    <section className=" bg-white">
      <div className="flex flex-col justify-center items-center text-center h-screen text-navylight">
        <img
          src="/images/ting.jpg"
          className="w-40 rounded-full"
          alt="ting"
        ></img>
        <div className="mx-2">
          <h1 className="text-4xl sm:text-6xl">
            Hi there, my name is Ting-Ting
          </h1>
          <p className="text-2xl sm:text-4xl">
            I'm a web developer based in London.
          </p>
          <p className="text-sm sm:text-2xl mt-10 text-navy">
            Javascript (ES6) | CSS3 | HTML5| Bootstrap | MongoDB | React.js |
            Node.js | TailwindCSS | Json | API's{" "}
          </p>
        </div>
        <div className="flex mt-12 text-xl sm:text-5xl text-navy">
          <SiJavascript className="mr-3 sm:mr-4" />
          <SiCss3 className="mr-3 sm:mr-4" />
          <SiHtml5 className="mr-3 sm:mr-4" />
          <SiBootstrap className="mr-3 sm:mr-4" />
          <SiMongodb className="mr-3 sm:mr-4" />
          <SiReact className="mr-3 sm:mr-4" />
          <SiNodedotjs className="mr-3 sm:mr-4" />
          <SiTailwindcss className="mr-3 sm:mr-4" />
        </div>
      </div>
    </section>
  );
}
