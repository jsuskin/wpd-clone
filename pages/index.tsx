import SiteHeader from "@/components/SiteHeader";
import styles from "./page.module.css";
import Sidebar from "@/components/Sidebar";
import SiteBanner from "@/components/Subheader/SiteBanner";
import NewPostButton from "@/components/Content/NewPostButton";
import Posts from "@/components/Content/Posts";
import PageSelector from "@/components/PageSelector";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles["online-user-count"]}>
        <p>2360 people here now (804 logged in)</p>
      </div>
      <SiteHeader />
      <SiteBanner />
      <div className={styles["main-wrapper"]}>
        <div className={styles["content"]}>
          <NewPostButton />
          <Posts />
        </div>
        <Sidebar />
      </div>
      <PageSelector />
    </main>
  );
}
