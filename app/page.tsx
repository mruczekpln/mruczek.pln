import styles from "@/styles/page/home.module.scss";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar></Navbar>
      <hr />
      <section className={styles.header}>
        <div className={styles.avatar}>
          <Image
            className={styles.gif}
            src="/assets/landing1.gif"
            fill
            alt="hey"
          />
        </div>
        <div className={styles.mainInfo}>
          <h2>
            programmer, <em>dreamer,</em> <br />
            <span>but mostly a student.</span>
          </h2>
          <p>
            <strong>18, based in Poland.</strong> former gaming addict
            who&apos;s now trying to replace it wit coding and creative work.
            discovering modern technologies and solutions. learning through
            building and doing mistakes.
            {/* , but &quot; */}
            {/* <em>kto kołaczy o droge nie pyta, ten nie błądzi</em>&quot; - biskup */}
            {/* 2023 */}
          </p>
        </div>
      </section>

      <section className={styles.techSection}>
        <div className={`${styles.techContainer} ${styles.programming}`}>
          <h3>programming languages & solutions</h3>
          <hr />
          <div className={styles.techGrid}>
            <p>
              <i className="devicon-html5-plain"></i>
              HTML5
            </p>
            <p>
              <i className="devicon-css3-plain"></i>
              CSS
            </p>
            <p>
              <i className="devicon-sass-original"></i>
              SASS
            </p>
            <p>
              <i className="devicon-tailwindcss-plain"></i>
              TAILWIND CSS
            </p>
            <p>
              <i className="devicon-php-plain"></i>
              PHP
            </p>
            <p>
              <i className="devicon-mysql-plain"></i>
              MYSEQUEL
            </p>
            <p>
              <i className="devicon-javascript-plain"></i>
              JAVASCRIPT
            </p>
            <p>
              <i className="devicon-typescript-plain"></i>
              TYPESCRIPT
            </p>
            <p>
              <i className="devicon-react-plain"></i>
              REACT
            </p>
            <p>
              <i className="devicon-nextjs-original"></i>
              NEXT JS 14
            </p>
          </div>
        </div>
        <div className={styles.thumbnail}>
          <Image
            className={styles.gif}
            src="/assets/landing2.gif"
            fill
            alt="landing2"
          />
        </div>
      </section>

      <section
        style={{ flexDirection: "row-reverse" }}
        className={styles.techSection}
      >
        <div className={`${styles.techContainer} ${styles.design}`}>
          <h3>creative apps & design utilities</h3>
          <hr />
          <div className={styles.techGrid}>
            <p>
              <i className="devicon-gimp-plain"></i>
              GIMP
            </p>
            <p>
              <i className="devicon-photoshop-plain"></i>
              PHOTOSHOP
            </p>
            <p>
              <i className="devicon-premierepro-plain"></i>
              PREMIERE PRO
            </p>
            <p>VEGAS PRO</p>
            <p>
              <i className="devicon-figma-plain"></i>
              FIGMA
            </p>
          </div>
        </div>
        <div className={styles.thumbnail}>
          <Image
            className={styles.gif}
            src="/assets/landing3.gif"
            fill
            alt="landing2"
          />
        </div>
      </section>
      <hr />
      <section className={styles.rigSection}>
        <h2>
          Daily rig, <br /> <span>dev enviroment</span>
        </h2>
        <ul>
          <li>
            pc:{" "}
            <Link href="https://pcpartpicker.com/list/D2zRHG">partpicker</Link>
          </li>
          <li>visual studio code</li>
          <li>wsl2, ubuntu 22.04</li>
        </ul>
      </section>
    </main>
  );
}
