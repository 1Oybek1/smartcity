import Link from 'next/link';
import { useState } from 'react';
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);

    const toggleDropdown = () => {
        setDropdown(!dropdown);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">Smart City</Link>
            </div>
            <ul className={styles.navbarlist}>
                <li><Link href="/">Bosh sahifa</Link></li>
                <li>
                    <Link href="#" onClick={toggleDropdown}>Transport</Link>
                    {dropdown && (
                        <ul className={styles.dropdown}>
                            <li><Link href="/transport/public">Jamoaviy transport</Link></li>
                            <li><Link href="/transport/bikes">Velosiped yo'llari</Link></li>
                            <li><Link href="/transport/pedestrian">Piyoda xavfsizligi</Link></li>
                            <li><Link href="/transport/status">Transport holati</Link></li>
                        </ul>
                    )}
                </li>

                <li>
                    <Link href="#" onClick={toggleDropdown}>Sahifalar</Link>
                    {dropdown && (
                        <ul className={styles.dropdown1}>
                        <li><Link href="/energy">Energiya va resurslar</Link></li>
                <li><Link href="/ecology">Ekologiya</Link></li>
                <li><Link href="/community">Ijtimoiy aloqalar</Link></li>
                <li><Link href="/issues">O'zgaruvchan ma'lumotlar</Link></li>
                <li><Link href="/contact">Aloqa</Link></li>
                <li><Link href="/profile">Profil</Link></li>
                        </ul>
                    )}
                </li>
                
            
            </ul>
            <div className={styles.search}>
                <input type="text" placeholder="Qidirish..." />
            </div>

        </nav>
    );
};

export default Navbar;