import Navbar from "@/components/Navbar";
import { mockNews } from "@/data/mockData";
import heroBanner from "@/assets/hero-banner.png";
import { Badge } from "@/components/ui/badge";
import { CalendarDays } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={heroBanner}
          alt="PTCG Banner"
          className="h-64 w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-4xl md:text-5xl text-accent drop-shadow-lg">
              PTCG 每日新聞
            </h1>
            <p className="mt-2 text-muted-foreground">最新寶可夢卡牌資訊一手掌握</p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <main className="container py-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockNews.map((news) => (
            <article
              key={news.id}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/40 hover:glow-red"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={news.imageUrl}
                  alt={news.title}
                  className="h-full w-full object-contain bg-muted transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="mb-3 flex items-center gap-2">
                  <Badge variant="secondary" className="bg-primary/15 text-primary border-0 text-xs">
                    {news.category}
                  </Badge>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <CalendarDays className="h-3 w-3" />
                    {news.date}
                  </span>
                </div>
                <h2 className="font-display text-base leading-snug text-foreground group-hover:text-accent transition-colors">
                  {news.title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                  {news.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
