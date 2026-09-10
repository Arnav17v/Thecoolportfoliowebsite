"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { createTimeline, stagger } from 'animejs';
import {
  Award,
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
  Copy
} from "lucide-react";

export default function Home() {
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const tl = createTimeline({ defaults: { ease: 'outExpo', duration: 1000 } });
    tl.add(nameRef.current!, { translateY: [30, 0], delay: 200 })
      .add(titleRef.current!, { translateY: [20, 0] }, '-=800')
      .add(introRef.current!, { translateY: [15, 0] }, '-=700')
      .add([resumeRef.current!, contactRef.current!], {
        translateY: [10, 0], delay: stagger(100)
      }, '-=600');
    return () => { tl.revert(); };
  }, []);

  const experience = [
    {
      title: "Fullstack Developer (Freelance)",
      company: "DexiChat",
      period: "Jan 2026",
      location: "Remote",
      summary:
        "Built Shopify commerce infrastructure for a multi-tenant SaaS backend and improved AI-assisted shopping flows.",
      highlights: ["31 GraphQL ops", "11 Shopify tools", "Hybrid search"],
      description: [
        "Built and maintained 31 GraphQL operations across Shopify Admin and Storefront APIs for products, variants, customers, carts, checkout, and orders on a Node.js/Express multi-tenant SaaS backend.",
        "Improved LLM commerce flows with 11 Shopify tool definitions across search, cart, order preparation, order confirmation, and availability workflows.",
        "Enhanced product search with hybrid retrieval using Storefront predictive search and semantic vector fallback with pgvector.",
      ],
    },
    {
      title: "Fullstack Developer (Internship)",
      company: "DexoDash",
      period: "May 2025 - July 2025",
      location: "Remote",
      summary:
        "Developed a large-scale admin and storefront platform with AI content tools, PostgreSQL data modeling, and multilingual support.",
      highlights: ["55+ APIs", "23+ DB models", "46+ AI admin components"],
      description: [
        "Built a scalable Next.js 15 app with 55+ API endpoints and 23+ PostgreSQL models, including cart and checkout flows.",
        "Integrated Google Gemini for AI-powered content generation across 46+ admin components with live rich text editor functionality.",
        "Implemented i18n with English/Hebrew support, RTL layout, currency conversion, and RBAC with fine-grained permissions.",
      ],
    },
  ];

  const projects = [
    {
      title: "Get Uncooked",
      subtitle: "AI Interview Preparation Platform",
      link: "https://getuncooked.pro",
      repo: "",
      pitch:
        "Live AI-powered interview preparation platform that provides resume analysis, personalized interview questions, adaptive quizzes, and structured day-by-day preparation plans.",
      tech: [
        "Next.js 15",
        "FastAPI",
        "PostgreSQL",
        "Gemini",
        "Groq",
        "SSE",
      ],
      impact: [
        {
          label: "Built",
          text: "Developed a production AI interview prep SaaS as the sole full-stack developer with resume scoring, red-flag rewrites, adaptive quizzes, and personalized prep plans.",
        },
        {
          label: "Optimized",
          text: "Reduced LLM requests by ~3× through bundled resume analysis and streamed live progress using Server-Sent Events for a faster user experience.",
        },
        {
          label: "Engineered",
          text: "Cut quiz generation time by ~2× with asyncio parallelization and implemented Gemini→Groq failover with JSON repair for resilient AI responses.",
        },
      ],
    },
    {
      title: "StudyLens",
      subtitle: "AI Study Monitor",
      link: "https://lockedin-eight.vercel.app/",
      repo: "https://github.com/Arnav17v/studylens-model-app",
      pitch:
        "Privacy-first desktop app that monitors student focus locally through real-time webcam analysis.",
      tech: ["Python", "OpenCV", "dlib", "DeepFace", "FastAPI"],
      impact: [
        {
          label: "Built",
          text: "Real-time webcam focus tracking with a Tkinter dashboard.",
        },
        {
          label: "Integrated",
          text: "Drowsiness detection and facial emotion analysis for attention scoring.",
        },
        {
          label: "Shipped",
          text: "macOS executables with optional secure backend session uploads.",
        },
      ],
    },
    {
      title: "Real-Time Drowsiness Detection System",
      subtitle: "Collaborative Computer Vision Monitoring System",
      repo: "",
      pitch:
        "Production-ready monitoring platform for multi-device drowsiness detection and live operator visibility.",
      tech: ["Docker", "AWS EC2", "Flask", "Socket.IO", "Python"],
      impact: [
        {
          label: "Containerized",
          text: "Multi-stage Docker builds with health checks and persistent model storage.",
        },
        {
          label: "Automated",
          text: "AWS EC2 deployment with Bash scripts, systemd restart, and UFW rules.",
        },
        {
          label: "Architected",
          text: "Central Flask dashboard with real-time streaming and REST APIs.",
        },
      ],
    },
  ];
  const [toast, setToast] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCopy = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setToast(`${label} copied!`);
      setToastVisible(true);

      setTimeout(() => setToastVisible(false), 2000);
      setTimeout(() => setToast(""), 2300);

      scrollToContact();
    } catch {
      setToast("Copy failed");
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 2000);
      setTimeout(() => setToast(""), 2300);
    }
  };


  const skillGroups = [
    {
      title: "Languages",
      skills: ["Python", "C++", "Java"],
    },
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Flask", "FastAPI"],
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "pgvector"],
    },
    {
      title: "Libraries",
      skills: ["NumPy", "Pandas", "Matplotlib", "OpenCV"],
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Docker", "Vercel", "AWS", "GraphQL"],
    },
  ];

  const certifications = [
    "DevOps Fundamentals - IBM, Credential ID: CEDEV2IN",
    "DevOps, Agile and Design Thinking - IBM, Credential ID: CEDEA1IN",
  ];

  return (
    <main className="md:h-screen md:flex md:items-center md:justify-center">
      <div className="overflow-hidden relative sm:flex-grow-0 sm:w-fit md:h-lvh md:overflow-y-auto">
        <div className="p-5 md:pr-[3rem]">
          <div className="pb-4">
            <div className="text-3xl" ref={titleRef}>hi I&apos;m</div>
            <h1 className="text-7xl max-w-fit sm:text-8xl md:text-[10rem]" ref={nameRef}>
              <span className="px-2">Arnav</span> <br />{" "}
              <span className="bg-col2 text-col5 px-2 rounded-xl">Verma</span>
            </h1>
          </div>
          <div className="text-2xl mt-3 max-w-[30rem]" ref={introRef}>
            2026 new-grad software engineer focused on backend systems and AI-powered products.
          </div>
          <nav aria-label="Portfolio sections" className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-lg underline">
            <a href="#aboutme">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Hire / Contact</a>
          </nav>
          <div className="text-col5 gap-1 mt-6 mb-6" ref={resumeRef}>
            <a href="https://drive.google.com/file/d/1VzmEDh-ARNyphnW4-VPTZSxu8Y7yq9Gv/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <span className="learn-more">View resume</span>
            </a>
          </div>
          <div className="pl-1 pt-2 text-xl flex flex-col gap-4" ref={contactRef}>
            <div
              className="flex items-center cursor-pointer w-fit"
              onClick={() => handleCopy("arnavverma1204@gmail.com", "Email")}
            >
              <Mail className="mr-2 h-4 w-4" /> arnavverma1204@gmail.com
              <span className="pl-2">
                <Copy className="bg-col1 p-1 rounded-sm text-col5" size={22} />
              </span>
            </div>

            <div
              className="flex items-center cursor-pointer w-fit"
              onClick={() => handleCopy("7814069496", "Phone number")}
            >
              <Phone className="mr-2 h-4 w-4" /> 7814069496
              <span className="pl-2">
                <Copy className="bg-col1 p-1 rounded-sm text-col5" size={22} />
              </span>
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
      <div className="md:overflow-y-auto md:w-1/2 ml-0 flex-grow md:h-lvh ">
        <div
          className="md:text-8xl text-6xl pl-5 bg-col1 text-col5 py-5"
          id="aboutme"
        >
          <h2>About Me</h2>
          <p className="text-xl leading-relaxed pr-5 my-5">
            I’m Arnav Verma, a software engineering candidate expecting to graduate
            in 2026 from VIT Vellore. I’m interested in new-grad software engineer
            and backend engineer roles, building APIs, PostgreSQL data models,
            commerce integrations, and reliable AI workflows. My internship,
            freelance work, and projects below show what I’ve built.
          </p>
          <section className="text-3xl">
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            <div>
              Bachelor of Technology in Computer Science and Engineering
            </div>
            <p className="text-muted-foreground">
              Vellore Institute of Technology, Vellore
            </p>
            <p className="text-muted-foreground">Expected Graduation: 2026</p>
            <p className="font-medium">CGPA: 8.89 / 10.0</p>
          </section>
          <section className="mt-8 text-2xl pr-5">
            <h3 className="text-3xl font-semibold mb-4">Achievement</h3>
            <Card className="bg-col5 text-col1 border-4 border-col4 shadow-none">
              <CardHeader>
                <CardTitle className="flex items-start gap-3 text-2xl">
                  <Award className="h-7 w-7 shrink-0" />
                  Patent Application Published
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xl">
                <p className="font-semibold">
                  System and Method for Lightweight Machine Learning Based
                  Intrusion Detection in Agricultural IoT Networks
                </p>
                <p className="mt-3 text-muted-foreground">
                  Indian Patent Application No. 202541131653 A · Filed Dec 2025,
                  Published Jan 2026
                </p>
              </CardContent>
            </Card>
          </section>
          <section className="mt-8 text-2xl pr-5">
            <h3 className="text-3xl font-semibold mb-4">Certifications</h3>
            <ul className="list-disc pl-6 space-y-3">
              {certifications.map((certification) => (
                <li key={certification}>{certification}</li>
              ))}
            </ul>
          </section>
        </div>
        <div className="bg-col4 text-col5 text-xl font-bold w-full whitespace-nowrap overflow-hidden">
          · ★ Projects ★ · ★ Projects ★ · ★ Projects ★ · ★ Projects ★ · ★
          Projects ★ · ★ Projects ★ · ★ Projects ★ · ★ Projects ★ · ★ Projects ★
          · ★ Projects ★ · ★ Projects ★ ·
        </div>
        <div className="md:text-8xl text-6xl ml-5 my-5">
          <h2 id="experience">Work Experience</h2>
          <section className="relative mt-5 grid gap-6 pr-3 text-6xl before:absolute before:left-4 before:top-16 before:hidden before:h-[calc(100%-2rem)] before:w-1 before:bg-col4 md:before:block">
            {experience.map((role) => (
              <Card
                className="relative bg-col5 border-4 border-col4 shadow-none transition-all duration-500 hover:-translate-y-1 hover:bg-col4 hover:text-col5 md:ml-12"
                key={role.company}
              >
                <div className="absolute left-[-3.25rem] top-8 hidden h-8 w-8 items-center justify-center rounded-full border-4 border-col4 bg-col2 text-col5 md:flex">
                  <BriefcaseBusiness className="h-4 w-4" />
                </div>
                <CardHeader>
                  <CardTitle>
                    <span className="flex flex-col gap-3 text-col1">
                      <span className="text-3xl leading-none md:text-4xl">
                        {role.company}
                      </span>
                      <span className="flex flex-col gap-2 text-lg font-semibold sm:flex-row sm:items-center sm:justify-between">
                        <span>{role.title}</span>
                        <span className="inline-flex w-fit items-center gap-2 rounded-md bg-col1 px-3 py-1 text-sm text-col5">
                          <CalendarDays className="h-4 w-4" />
                          {role.period}
                        </span>
                      </span>
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
                    {role.summary}
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-lg">
                    {role.description.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {role.highlights.map((highlight) => (
                      <span
                        className="rounded-md border-2 border-col4 bg-col1 px-3 py-1 text-sm font-bold text-col5"
                        key={highlight}
                      >
                        {highlight}
                      </span>
                    ))}
                    <span className="rounded-md border-2 border-col4 px-3 py-1 text-sm font-bold">
                      {role.location}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </section>
          <h2 className="text-5xl font-bold pt-8" id="projects">
            Projects
          </h2>
          <section className="mt-5 text-xl">
            <div className="grid gap-6">
              {projects.map((project) => (
                <Card
                  className="group overflow-hidden bg-col5 transition-all duration-500 hover:-translate-y-1 hover:bg-col4 hover:text-col5 border-4 mr-3 border-col4 shadow-none"
                  key={project.title}
                >
                  <CardHeader className="pb-3">
                    <CardTitle>
                      <span className="flex flex-col gap-4 text-col1 sm:flex-row sm:items-start sm:justify-between">
                        <span>
                          <span className="flex items-center gap-3 text-3xl md:text-4xl">
                            <Code2 className="h-8 w-8 shrink-0" />
                            {project.title}
                          </span>
                          <span className="mt-2 block text-lg font-semibold text-muted-foreground">
                            {project.subtitle}
                          </span>
                        </span>
                        <div className="flex shrink-0 gap-2">
                          {"link" in project && project.link ? (
                            <Button
                              className="bg-col1 text-col5"
                              variant="outline"
                              size="sm"
                              asChild
                            >
                              <Link aria-label={`Visit ${project.title}`} href={project.link} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4" />
                              </Link>
                            </Button>
                          ) : null}
                          {project.repo && <Button
                            className="bg-col1 text-col5"
                            variant="outline"
                            size="sm"
                            asChild
                          >
                            <Link aria-label={`View ${project.title} source on GitHub`} href={project.repo} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4" />
                            </Link>
                          </Button>}
                        </div>
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
                      {project.pitch}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          className="rounded-md bg-col2 px-3 py-1 text-sm font-bold text-col5"
                          key={tech}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="grid gap-3">
                      {project.impact.map((item) => (
                        <div
                          className="flex flex-col gap-3 rounded-md border-2 border-col4 bg-col5/70 p-3 text-col1 sm:flex-row sm:items-start"
                          key={item.label}
                        >
                          <span className="w-fit shrink-0 rounded bg-col1 px-2 py-1 text-sm font-bold uppercase tracking-normal text-col5">
                            {item.label}
                          </span>
                          <span className="min-w-0 flex-1">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
        <div className="bg-col4 text-col5 text-xl font-bold w-full whitespace-nowrap overflow-hidden">
          · ★ Skills ★ · ★ Skills ★ · ★ Skills ★ · ★ Skills ★ · ★ Skills ★ · ★
          Skills ★ · ★ Skills ★ · ★ Skills ★ · ★ Skills ★ · ★ Skills ★ · ★
          Skills ★ ·
        </div>
        <div
          className="md:text-8xl text-6xl pl-5 bg-col1 text-col5 py-5"
          id="skills"
        >
          <h2>Skills</h2>
          <div className="grid grid-cols-1 text-xl sm:grid-cols-2 xl:grid-cols-3 gap-6 pr-5 mt-3">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="font-semibold text-2xl">{group.title}</h3>
                <ul className="list-disc pl-4">
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-col4 text-col5 text-xl font-bold w-full whitespace-nowrap overflow-hidden">
          · ★ Contact ★ · ★ Contact ★ · ★ Contact ★ · ★ Contact ★ · ★ Contact ★
          · ★ Contact ★ · ★ Contact ★ · ★ Contact ★ · ★ Contact ★ · ★ Contact ★
          · ★ Contact ★ ·
        </div>
        <div className="md:text-8xl text-6xl ml-5 my-5" id="contact">
          <h2>Let’s Work Together</h2>
          <section className="space-y-4">
            <p className="text-4xl md:text-5xl font-bold tracking-tight">
              Arnav Verma
            </p>
            <p className="text-xl text-muted-foreground">
              Hire Arnav Verma · 2026 new-grad software engineering candidate
            </p>
            <p className="text-lg leading-relaxed pr-5">
              Looking for the best new grad 2026 has to offer for your team?
              Explore my <a href="#projects" className="underline">projects</a> and{' '}
              <a href="#experience" className="underline">engineering experience</a>
              {' '}to evaluate the fit. I’d love to discuss software engineering
              and backend roles where I can contribute.
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
                <Link href="https://github.com/Arnav17v" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button className="bg-col1 text-col5" variant="outline" asChild>
                <Link
                  href="https://www.linkedin.com/in/arnav17v"
                  target="_blank" rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
      {toast && (
        <div
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 bg-col2 text-col5 px-4 py-2 rounded-full shadow-lg text-sm font-medium z-50 transition-opacity duration-300 ${toastVisible ? "opacity-100" : "opacity-0"
            }`}
        >
          {toast}
        </div>
      )}
    </main>
  );
}
