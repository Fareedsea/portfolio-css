
import Link from "next/link";
export default function Header() {
  return (
        <div className="header">
        <Link href="#" className="logo">Fareed</Link>
      <nav className="navbar">
        <Link href="/" className="active">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      </div>
    
  );
}
