import { Link, useLocation } from "react-router-dom";
import { Newspaper, TrendingUp, Gift, ShoppingBag, Shield } from "lucide-react";

const navItems = [
  { path: "/", label: "卡牌新聞", icon: Newspaper },
  { path: "/hot-cards", label: "熱門炒價", icon: TrendingUp },
  { path: "/lucky-bag", label: "抽福袋", icon: Gift },
  { path: "/buy-cards", label: "買卡專區", icon: ShoppingBag },
  { path: "/admin", label: "管理後台", icon: Shield },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-display text-sm text-primary-foreground">
            PT
          </div>
          <span className="font-display text-lg text-accent">PTCG HUB</span>
        </Link>

        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden md:inline">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
