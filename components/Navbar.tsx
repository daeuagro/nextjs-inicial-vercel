import styles from './Navbar.module.css';
import { ActiveLink } from './ActiveLink';

export const Navbar = () => {

 const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];


  return (
    <nav className={ styles['menu-container'] }>
       {
         menuItems.map( ({ text, href}) => (
          <ActiveLink key={ href } text={ text } href={ href } />
         ))
       }


      {/* <ActiveLink text="home" href="/" />
      <ActiveLink text="about" href="/about" />
      <ActiveLink text="contact" href="/contact" />
      <ActiveLink text="pricing" href="/pricing" /> */}
    </nav>
  )
}
