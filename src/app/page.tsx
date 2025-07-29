import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Home() {
  const experience = {
    title: "Frontend Developer (Freelance)",
    company: "VR Food Products",
    link: "https://vrfoodproducts.com",
    repo: "https://github.com/pcell62/vrfoodproducts",
    description: [
      "Developed a fully responsive e-commerce website with React.js, Next.js, Tailwind CSS, and TypeScript, improving user engagement by 40%.",
      "Designed catalog, landing, about us, and product pages to showcase 50+ products with detailed descriptions.",
      "Deployed on Hostinger, achieving 99.9% uptime and reducing load times by 30%.",
      "Enhanced performance to score 90 on Google Lighthouse for desktop.",
    ],
  };
  const projects = [
    {
      title: "AD-Assist",
      subtitle: "College Add and Drop Platform",
      link: "https://ad-eta-vert.vercel.app",
      repo: "https://github.com/Arnav17v/ad",
      description: [
        "Built a platform to facilitate class slot and teacher exchanges within college communities using Next.js, Tailwind CSS, and Firebase.",
        "Designed and implemented features including request posting, contact sharing, and full CRUD functionality.",
        "Integrated Firebase Authentication for secure user login and access.",
        "Deployed on Vercel, ensuring seamless performance and high availability.",
      ],
    },
    {
      title: "StudyLens",
      subtitle: "AI Study Monitor",
      link: "https://lockedin-eight.vercel.app/",
      repo: "https://github.com/Arnav17v/studylens-model-app",
      description: [
        "Built a desktop application for analyzing student focus via real-time local webcam processing using Python, OpenCV, dlib, and DeepFace.",
        "Integrated drowsiness detection (Eye Aspect Ratio using dlib) and facial emotion analysis (DeepFace) for comprehensive attention monitoring.",
        "Designed a Tkinter-based GUI displaying real-time focus time, wasted time, drowsy intervals, and attention scores.",
        "Implemented optional session statistics upload to a secure FastAPI backend while maintaining core processing locally for privacy.",
        "Packaged the application into distributable executables for macOS using PyInstaller for easy deployment.",
      ],
    },
    {
      title: "Sumo Snack",
      subtitle: "Japanese Cuisine Restaurant Platform",
      link: "https://sumo-snack.vercel.app",
      repo: "https://github.com/Arnav17v/sumo-snack",
      description: [
        "Developed a Japanese cuisine restaurant platform showcasing 20+ menu items with a minimalist, elegant design using Next.js and Tailwind CSS.",
        "Created a main landing page, menu page, and order online page, improving user engagement by 30% through intuitive navigation.",
        "Implemented features like menu sorting options, search functionality, and a cart system for seamless checkout, reducing user task time by 25%.",
      ],
    },
  ];
  return (
    <div className="md:h-screen md:flex md:items-center md:justify-center">
      <div className="overflow-hidden relative sm:flex-grow-0 sm:w-fit sm:h-lvh">
        <div className="p-5 md:pr-[3rem]">
          <div className="pb-4">
            <div className="text-3xl">hi I'm</div>
            <div className="text-8xl max-w-fit md:text-[10rem]">
              <span className="px-2">Arnav</span> <br />{" "}
              <span className="bg-col2 text-col5 px-2 rounded-xl">Verma</span>
            </div>
          </div>
          <div className="text-2xl mt-3 max-w-[30rem]">
            Hello and Welcome to my portfolio. Here are some quick links you
            would be interested in 👇👇👇👇
          </div>
          <div className="grid grid-cols-2 text-col5 gap-1 mt-10">
            <div className="py-6 flex justify-center items-center text-3xl bg-col1 rounded-xl">
              <a href="#projects">Projects</a>
            </div>
            <div className="py-6 flex justify-center items-center text-3xl bg-col1 rounded-xl">
              <a href="#skills">Skills</a>
            </div>
            <a href="https://drive.google.com/file/d/1e9H3HjV_EocDohUWXYQOkOst_ksvwjI3/view?usp=sharing">
              <div className="py-6 flex justify-center items-center text-3xl bg-col1 rounded-xl">
                Resume
              </div>
            </a>
            <div className="py-6 flex justify-center items-center text-3xl bg-col1 rounded-xl">
              <a href="#contact">Contact Me</a>
            </div>
          </div>
        </div>
        <div className="md:absolute md:rotate-90 md:top-[442px] md:left-[-408px] h-fit">
          <div className="marquee-text bg-col2 py-2">
            <div className="text-xl font-bold marquee-text-track">
              <p>·</p>
              <p>Projects</p>
              <p>·</p>
              <p>Skills</p>
              <p>·</p>
              <p>Contact Me</p>
              <p>·</p>
              <p>Projects</p>
              <p>·</p>
              <p>Projects</p>
              <p>·</p>
              <p>Skills</p>
              <p>·</p>
              <p>Contact Me</p>
              <p>·</p>
              <p>Projects</p>
              <p aria-hidden="true">·</p>
              <p aria-hidden="true">Projects</p>
              <p aria-hidden="true">·</p>
              <p aria-hidden="true">Skills</p>
              <p aria-hidden="true">·</p>
              <p aria-hidden="true">Contact Me</p>
              <p aria-hidden="true">·</p>
              <p aria-hidden="true">Projects</p>
              <p aria-hidden="true">·</p>
              <p aria-hidden="true">Projects</p>
              <p aria-hidden="true">·</p>
              <p aria-hidden="true">Skills</p>
              <p aria-hidden="true">·</p>
              <p aria-hidden="true">Contact Me</p>
              <p aria-hidden="true">·</p>
              <p aria-hidden="true">Projects</p>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-y-scroll md:w-1/2 ml-0 flex-grow h-lvh ">
        <div
          className="md:text-8xl text-6xl pl-5 bg-col1 text-col5 py-5"
          id="skills"
        >
          Skills
          <div className="grid grid-cols-2 text-2xl sm:grid-cols-3 gap-6">
            {/* Programming Languages */}
            <div>
              <h3 className="font-semibold">Programming Languages</h3>
              <ul className="list-disc pl-4">
                <li>Python</li>
                <li>C++</li>
                <li>TypeScript</li>
              </ul>
            </div>

            {/* Frontend */}
            <div>
              <h3 className="font-semibold">Frontend</h3>
              <ul className="list-disc pl-4">
                <li>Next.js</li>
                <li>React.js</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>

            {/* Backend */}
            <div>
              <h3 className="font-semibold">Backend</h3>
              <ul className="list-disc pl-4">
                <li>Firebase</li>
              </ul>
            </div>

            {/* Libraries & Tools */}
            <div>
              <h3 className="font-semibold">Libraries & Tools</h3>
              <ul className="list-disc pl-4">
                <li>NumPy</li>
                <li>Pandas</li>
                <li>Matplotlib</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-col4 text-col5 text-xl font-bold w-full whitespace-nowrap overflow-hidden">
          · ★ Projects ★ · ★ Projects ★ · ★ Projects ★ · ★ Projects ★ · ★
          Projects ★ · ★ Projects ★ · ★ Projects ★ · ★ Projects ★ · ★ Projects ★
          · ★ Projects ★ · ★ Projects ★ ·
        </div>
        <div className="md:text-8xl text-6xl ml-5 my-5" id="projects">
          Projects
          <section className="mt-5 text-xl">
            <div className="grid gap-6">
              {projects.map((project) => (
                <Card
                  className="bg-col5 hover:bg-col4 hover:text-col5 transition-all duration-500 border-4 mr-3 border-col4 shadow-none"
                  key={project.title}
                >
                  <CardHeader>
                    <CardTitle>
                      <span className="flex  text-col1 items-center justify-between">
                        {project.title}
                        <div className="flex gap-2">
                          <Button
                            className="bg-col1 text-col5"
                            variant="outline"
                            size="sm"
                            asChild
                          >
                            <Link href={project.link} target="_blank">
                              Visit Site
                            </Link>
                          </Button>
                          <Button
                            className="bg-col1 text-col5"
                            variant="outline"
                            size="sm"
                            asChild
                          >
                            <Link href={project.repo} target="_blank">
                              <Github className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {project.subtitle}
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      {project.description.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
          <div className="text-5xl font-bold pt-3">Work Experience</div>
          <section className="mt-1 text-xl">
            <Card
              className=" hover:bg-col4 hover:text-col5 transition-all duration-500 bg-col5  border-4 mr-3 border-col4 shadow-none"
              key={experience.title}
            >
              <CardHeader>
                <CardTitle>
                  <span className="flex  text-col1 items-center justify-between">
                    {experience.title}
                    <div className="flex gap-2">
                      <Button
                        className="bg-col1 text-col5"
                        variant="outline"
                        size="sm"
                        asChild
                      >
                        <Link href={experience.link} target="_blank">
                          Visit Site
                        </Link>
                      </Button>
                      <Button
                        className="bg-col1 text-col5"
                        variant="outline"
                        size="sm"
                        asChild
                      >
                        <Link href={experience.repo} target="_blank">
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {experience.company}
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  {experience.description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>
        </div>
        <div className="bg-col4 text-col5 text-xl font-bold w-full whitespace-nowrap overflow-hidden">
          · ★ About ME ★ · ★ About ME ★ · ★ About ME ★ · ★ About ME ★ · ★ About
          ME ★ · ★ About ME ★ · ★ About ME ★ · ★ About ME ★ · ★ About ME ★ · ★
          About ME ★ · ★ About ME ★ ·
        </div>
        <div
          className="md:text-8xl text-6xl pl-5 bg-col1 text-col5 py-5"
          id="aboutme"
        >
          About Me
          <section className="text-3xl">
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <div>
              Bachelor of Technology in Computer Science and Engineering
            </div>
            <p className="text-muted-foreground">
              Vellore Institute of Technology, Vellore
            </p>
            <p className="text-muted-foreground">Expected Graduation: 2026</p>
            <p className="font-medium">CGPA: 8.97</p>
          </section>
        </div>
        <div className="bg-col4 text-col5 text-xl font-bold w-full whitespace-nowrap overflow-hidden">
          · ★ Contact ★ · ★ Contact ★ · ★ Contact ★ · ★ Contact ★ · ★ Contact ★
          · ★ Contact ★ · ★ Contact ★ · ★ Contact ★ · ★ Contact ★ · ★ Contact ★
          · ★ Contact ★ ·
        </div>
        <div className="md:text-8xl text-6xl ml-5 my-5" id="contact">
          Contact Me{" "}
          <section className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Arnav Verma
            </h1>
            <p className="text-xl text-muted-foreground">
              Computer Science Student & Developer
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button className="bg-col1 text-col5" variant="outline" asChild>
                <Link href="mailto:arnavverma1204@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </Link>
              </Button>
              <Button className="bg-col1 text-col5" variant="outline" asChild>
                <Link href="tel:+917814069496">
                  <Phone className="mr-2 h-4 w-4" />
                  Call
                </Link>
              </Button>
              <Button className="bg-col1 text-col5" variant="outline" asChild>
                <Link href="https://github.com/Arnav17v" target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button className="bg-col1 text-col5" variant="outline" asChild>
                <Link
                  href="https://www.linkedin.com/in/arnav17v"
                  target="_blank"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
