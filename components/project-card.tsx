import Link from "next/link";
import Image from "next/image";
import { ComponentProps } from "react";
import styles from "@/styles/component/project-card.module.scss";

type ProjectCardProps = {
  image: {
    src: string;
    alt: string;
  };
  titleText: string;
  year: number;
  stack: string[];
  links: {
    github: string;
    live?: string;
  };
} & ComponentProps<"article">;
export default function ProjectCard({
  image,
  titleText,
  year,
  stack,
  links,
  children,
}: ProjectCardProps) {
  return (
    <article className={styles.projectCard}>
      <Image src={image.src} alt={image.src} width={250} height={200}></Image>
      <div className={styles.container}>
        <div className={styles.description}>
          <h3>
            {titleText} <br />
            <span>{year}</span>
          </h3>
          {children}
        </div>
        <div className={styles.links}>
          <Link href={links.github} target="_blank">
            github
          </Link>
          {links.live && (
            <Link href={links.live} target="_blank">
              live
            </Link>
          )}
        </div>
        <div className={styles.stack}>
          {/* <strong>build with:</strong> */}
          {stack.map((stack, index) => (
            <p key={`${stack}_${index}`}>{stack}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
