import { HiMail } from "react-icons/hi";

export default function ContactMe() {
  return (
    <div className="flex flex-col items-center bg-grey py-5">
      <p className="md:text-4xl text-navylight">Get in touch</p>
      <div className="flex flex-col items-center">
        <a className="text-navy" href="mailto:hchunyu.tty@gmail.com">
          <HiMail className="text-3xl md:text-6xl" />
        </a>
        <a
          className="md:text-2xl text-navylight"
          href="mailto:hchunyu.tty@gmail.com"
        >
          hchunyu.tty@gmail.com
        </a>
        <p className="md:text-2xl text-navylight">Email me</p>
      </div>
    </div>
  );
}
