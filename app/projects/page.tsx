import Navbar from "@/components/navbar";
import ProjectCard from "@/components/project-card";
import styles from "@/styles/projects.module.scss";
import Image from "next/image";

export default function Projects() {
  return (
    <main className={styles.main}>
      <Navbar></Navbar>
      <hr />
      <section className={styles.header}>
        {/* <aside> */}
        <Image
          src="/assets/projects1.gif"
          alt="projects 1"
          width={120}
          height={120}
        ></Image>
        {/* </aside> */}

        <div>
          <h2>projects</h2>
          <h3>
            thingys that <span> i&apos;ve built</span>
          </h3>
        </div>
      </section>
      <hr />
      <section className={styles.projects}>
        <ProjectCard
          image={{ src: "/projects/tastybites.png", alt: "tastybites" }}
          titleText="TastyBites"
          year={2024}
          stack={[
            "nextts13",
            "tailwindcss",
            "next-auth",
            "trpc",
            "drizzle",
            "vercel",
          ]}
          links={{
            github: "https://github.com/mruczekpln/tastybites.git",
            live: "https://tastybites-zeta.vercel.app",
          }}
        >
          <p>
            recipe sharing and creation app built using nextjs 14 with
            typescript, offering a platform for users to share and create
            culinary recipes.
          </p>
        </ProjectCard>
        <ProjectCard
          image={{ src: "/projects/zephyr.png", alt: "zephyr" }}
          titleText="Zephyr"
          year={2023}
          stack={["nextts13", "tailwindcss", "next-auth", "mongodb", "vercel"]}
          links={{
            github: "https://github.com/mruczekpln/zephyr.git",
            live: "https://zephyr-eta.vercel.app/",
          }}
        >
          <p>
            zephyr is your goto weather companion, providing realtime weather
            updates and forecasts at your fingertips.
          </p>
        </ProjectCard>
        <ProjectCard
          image={{ src: "/projects/lowel.png", alt: "lowel" }}
          titleText="Lowel."
          year={2023}
          stack={[
            "reactts",
            "react-router",
            "framer-motion",
            "tailwindcss",
            "netlify",
          ]}
          links={{
            github: "https://github.com/mruczekpln/lowel.git",
            live: "https://comfy-pavlova-9ced48.netlify.app/",
          }}
        >
          <p>
            e-commerce shop frontend layer with responsive design and modern
            animations.
          </p>
        </ProjectCard>

        <ProjectCard
          image={{ src: "/projects/nonogram.png", alt: "nonogram" }}
          titleText="Nonogram App"
          year={2023}
          stack={["reactjs", "tailwindcss", "vite"]}
          links={{
            github: "https://github.com/mruczekpln/nonogram.git",
          }}
        >
          <p>
            one of my first react apps, simple nonogram game styled w/ tailwind.
          </p>
        </ProjectCard>

        <ProjectCard
          image={{ src: "/projects/blocks.png", alt: "blocks" }}
          titleText="blocks"
          year={2022}
          stack={[
            "reactts",
            "tailwindcss",
            "vite",
            "nodejs",
            "express",
            "mysql + xampp",
          ]}
          links={{
            github: "https://github.com/mruczekpln/blocks.git",
          }}
        >
          <p>
            my first fullstack app. most basic crud on top of reactts and
            expressjs connected with mysql local database.
          </p>
        </ProjectCard>
      </section>
    </main>
  );
}
