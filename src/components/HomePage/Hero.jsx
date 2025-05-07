import headshot from "../../assets/headshot.jpeg";

export default function Hero() {
  return (
    <section className="flex justify-center pt-20 font-monte h-screen">
      <div className="w-full max-w-6xl">
        <div className="flex">
          <img
            src={headshot}
            className="rounded-full h-80 w-80 object-cover"
            alt="headshot / hero cover"
          />
          <div className="flex flex-col ml-10 p-10 rounded-lg text-white">
            <h1 className="text-3xl font-bold mb-4">
              John's Beginner Projects
            </h1>
            <p>
              This is a website for myself. Since being unemployed for almost a
              year at this point I thought'd it would be nice to create my own
              little portfolio website that showcases the projects that i do so
              I can showcase this to companies or recruiters if ever given the
              chance.
            </p>
            <ul className="flex text-5xl justify-center socials p-2">
              <li>
                <a
                  href="https://github.com/johnwjt"
                  className="mr-5 hover:bg-white hover:text-black p-1 rounded-lg"
                  target="_blank"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/johntan-wei/"
                  className="hover:bg-white hover:text-black p-1 rounded-lg"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
