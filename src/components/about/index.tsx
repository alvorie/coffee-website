import Style from "./About.module.css";

export default function About() {
  return (
    <div className={Style.Container}>
      <div className={Style.ImgContainer}>
        <img
          className={Style.Img}
          src="/coffee-cups.png"
          alt="Coffee cups at Bean Beverage"
        />
      </div>
      <div className={Style.Text}>
        <h2>about bean beverage</h2>
        <p>
          Bean Beverage is a community-driven coffee experience where
          enthusiasts gather to explore bold flavors, swap brewing secrets, and
          connect over expertly crafted cups.
        </p>
        <p>
          We host curated tastings, latte art workshops, and pop-up
          events—turning every sip into a shared adventure. Whether you're a
          seasoned barista or a curious newbie, come fuel your passion for all
          things coffee.
        </p>
      </div>
    </div>
  );
}
