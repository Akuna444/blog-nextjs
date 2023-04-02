import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div>
        <Image
          src="/images/site/me.png"
          alt="An Image showing person"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi I'm Akuna</h1>
      <p>I blog about Web Developement Specially Frontend!</p>
    </section>
  );
}

export default Hero;
