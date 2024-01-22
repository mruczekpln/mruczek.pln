import Navbar from "@/components/navbar";
import styles from "@/styles/page/contact.module.scss";
import Link from "next/link";

export default function Contact() {
  return (
    <main className={styles.main}>
      <Navbar></Navbar>
      <hr />

      <section>
        <div>
          me me me me me me me me me me m <br />
          contact contact contact contact <br /> <br />
          contact contact contact contact <br />
          me me me me me me me me me me m <br /> <br />
          contact contact contact contact <br />
          contact contact contact contact <br /> <br />
          me me me me me me me me me me m <br />
          me me me me me me me me me me m <br /> <br />
          contact contact contact contact <br />
          me me me me me me me me me me m <br /> <br />
          me me me me me me me me me me m <br />
          contact contact contact contact <br /> <br />
          me me me me me me me me me me m <br />
          contact contact contact contact <br />
        </div>

        <article>
          <p>
            email:
            <Link href="mailto:leonwdev@gmail.com">leonwdev@gmail.com</Link>
          </p>
          <p>
            github:
            <Link target="_blank" href="github.com/mruczekpln">
              mruczekpln
            </Link>
          </p>
        </article>
      </section>
    </main>
  );
}
