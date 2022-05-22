import Profile from "./Profile";
import Footer from "./Footer";
import MenuItem from "./MenuItem";

interface SidebarProps {
  activeMenu: "overview" | "transactions" | "settings";
}

export default function Sidebar(props: SidebarProps) {
  const { activeMenu } = props;

  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            title="Overview"
            icon="icon-menu-overview"
            href="/member"
            active={activeMenu === "overview"}
          />
          <MenuItem
            title="Transactions"
            icon="icon-menu-transaction"
            href="/member/transactions"
            active={activeMenu === "transactions"}
          />
          <MenuItem
            title="Messages"
            icon="icon-menu-messages"
            href="/member/transactions"
          />
          <MenuItem
            title="Card"
            icon="icon-menu-card"
            href="/member/transactions"
          />
          <MenuItem
            title="Rewards"
            icon="icon-menu-rewards"
            href="/member/transactions"
          />
          <MenuItem
            title="Settings"
            icon="icon-menu-settings"
            href="/member/edit-profile"
            active={activeMenu === "settings"}
          />
          <MenuItem title="Log Out" icon="icon-menu-logout" href="/sign=in" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
