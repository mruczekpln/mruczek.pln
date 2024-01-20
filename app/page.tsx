import styles from "@/styles/page.module.scss";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar></Navbar>
      <hr />
      <section className={styles.header}>
        <div className={styles.avatar}>
          <Image src="/assets/avatar.gif" objectFit="cover" fill alt="hey" />
        </div>
        <div className={styles.mainInfo}>
          <h2>
            programmer, dreamer, <br /> <span>but mostly a student.</span>
          </h2>
          <p>
            <strong>17, based in PL.</strong> former gaming addict who&apos;s
            now trying to replace it wit coding and creative work. discovering
            modern technologies and solutions. learning through building and
            doine mistakes, but &quot;
            <em>kto kołaczy o droge nie pyta, ten nie błądzi</em>&quot; - biskup
            2023
          </p>
        </div>
      </section>

      <section className={styles.techContainer}>
        <h3>
          tech stack, <span>things that i know</span>
        </h3>
        <hr />
        <div className={styles.techGrid}>
          <p>HTML5</p>
          <p>CSS</p>
          <p>SASS</p>
          <p>TAILWIND CSS</p>
        </div>
      </section>
    </main>
  );
}
