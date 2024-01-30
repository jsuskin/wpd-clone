import SiteBranding from "./SiteBranding";
import Search from "./Search";
import NavLinks from "./NavLinks";
import styles from "./header.module.css";

export default function () {
  return (
    <header className={styles.header}>
      <SiteBranding />
      <div>
        <Search />
      </div>
      <NavLinks />
      
    </header>
  );
}
