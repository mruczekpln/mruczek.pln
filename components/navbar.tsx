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
      >
        <h1>mruczekpln</h1>
      </Link>
      <ul>
        <li>
          <Link href="/about" data-active={pahtname === "about"}>
            about
          </Link>
        </li>
        <li>
          <Link href="/projects" data-active={pahtname === "projects"}>
            projects
          </Link>
        </li>
        <li>
          <Link href="/contact" data-active={pahtname === "contact"}>
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
