import React, { FC } from "react";
import style from "./footer.module.scss";
import footerItem from "../../constants/footerItem";

const Footer: FC = () => (
  <footer className={style.footer}>
    <span>Information system</span>
    <div className={style.list}>
      {footerItem.map(({ linkRef, imageLink, alt }) => (
        <div key={imageLink} className={style.item}>
          <a href={linkRef}>
            <img src={imageLink} alt={alt} />
          </a>
        </div>
      ))}
    </div>
    <span> © GamingShop, 2022</span>
  </footer>
);

export default Footer;
