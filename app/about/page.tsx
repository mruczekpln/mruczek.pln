import Navbar from "@/components/navbar";
import styles from "@/styles/about.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className={styles.main}>
      <Navbar></Navbar>

      <hr />

      <section className={styles.header}>
        <h2>
          <span>building tommorrow&apos;s tech today. </span> <br /> <br />
          nahhh, im too young for some revolutionary stuff. its just {""}
          <strong>me and visual studio code.</strong>
        </h2>
      </section>
      <section className={styles.grid}>
        <article style={{ gridColumn: "1 / 3" }}>
          <p>level</p>
          <h3>17</h3>
        </article>

        <article style={{ gridColumn: "3 / 5" }}>
          <p>years of experience</p>
          <h3>3+ </h3>
        </article>

        <article style={{ gridColumn: "1 / 3" }}>
          <h2>hobbies</h2>
          <p>thangs i like doing</p>
        </article>

        <p style={{ gridColumn: "3 / 5", gridRow: "2 / 5" }}>
          <strong>thinking creatively since 2006</strong>. most of my knowledge
          got from my grandpa in a small village located on the west side of
          poland. went to primary school there and now learning in technical
          school no. 2 "Elektronik" on profile named "Programming Technician".
          in school i got taught html, css, js, php but i had known them earlier
          so it didnt really matter too much. now transpiling design ideas to
          real code in react on daily basis. when im doing something i really
          focus on time to outcome productivity and always trying the most
          efficient way!
        </p>

        <article className={styles.hobbie}>
          <Image
            src="/about/hobbies/billards.gif"
            alt="billards"
            width={180}
            height={130}
          ></Image>
        </article>
        <article className={styles.hobbie}>
          <Image
            src="/about/hobbies/dancing.gif"
            alt="billards"
            width={180}
            height={130}
          ></Image>
        </article>
        <article className={styles.hobbie}>
          <Image
            src="/about/hobbies/gaming.gif"
            alt="billards"
            width={180}
            height={130}
          ></Image>
        </article>
        <article className={styles.hobbie}>
          <Image
            src="/about/hobbies/cycling.gif"
            alt="billards"
            width={180}
            height={130}
          ></Image>
        </article>

        <article style={{ gridColumn: "1 / 2" }}>
          <h2>connect{"->"}</h2>
        </article>
        <article className={styles.contact}>
          <Link href="/contact">here!</Link>
          <Link href="/contact">here!</Link>
          <Link href="/contact">here!</Link>
          <Link href="/contact">here!</Link>
        </article>
      </section>
    </main>
  );
}
