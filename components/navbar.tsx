"use client";

import styles from "@/styles/component/navbar.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type Pathname = "" | "about" | "projects" | "contact";

export default function Navbar() {
  const pahtname = usePathname().slice(1) as Pathname;

  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  return (
    <nav className={styles.nav}>
      <Link
        href="/"
        style={{ borderBottom: pahtname === "" ? "2px solid blue" : "none" }}
        className={styles.h1}
      >
        <h1>mruczekpln</h1>
      </Link>
      <ul className={styles.ul}>
        <li>
          <Link
            href="/about"
            className={styles.a}
            style={{
              borderBottom: pahtname === "about" ? "2px solid black" : "none",
            }}
          >
            about
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className={styles.a}
            style={{
              borderBottom:
                pahtname === "projects" ? "2px solid black" : "none",
            }}
          >
            projects
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={styles.contact}
            style={{
              borderBottom: pahtname === "contact" ? "2px solid black" : "none",
            }}
          >
            get in touch
          </Link>
        </li>
      </ul>

      <button
        onClick={() => setMenuOpened(true)}
        className={styles.menuTrigger}
      >
        menu
      </button>

      {menuOpened && (
        <menu>
          <h1>The menu</h1>
          <Link href="/">homepage</Link>
          <Link href="/about">about me</Link>
          <Link href="/projects">my projects</Link>
          <Link href="/contact">
            <u>contact me</u>
          </Link>
          <button onClick={() => setMenuOpened(false)}>close</button>
        </menu>
      )}
    </nav>
  );
}
