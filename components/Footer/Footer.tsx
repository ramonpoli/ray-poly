'use client';
import styles from './Footer.module.scss';
import Image from "next/image";
import LinkedInSvgComponent from "../SVGs/LinkedInSvgComponent";
import InstagramSvgComponent from '../SVGs/InstagramSvgComponent';
import GithubSvgComponent from '../SVGs/GithubSvgComponent';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div />
      <Image src={'/logos/logo.png'} alt={'Ray Poly\'s logo'} width={200} height={200} />
      <div className={styles.SocialMedias}>
        <Link
          href={"https://www.linkedin.com/in/ramon-polidura/"}
          target="_blank">
          <LinkedInSvgComponent fill={"#00ffc2"} />
        </Link>
        <Link
          href={"https://www.instagram.com/ray.poly.web.developer/"}
          target="_blank">
          <InstagramSvgComponent fill={"#00ffc2"} />
        </Link>

        <Link
          href={"https://github.com/ramonpoli"}
          target="_blank">
          <GithubSvgComponent fill={"#00ffc2"} />
        </Link>
      </div>
    </footer >
  );
};
export default Footer;
