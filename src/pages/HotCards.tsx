import Navbar from "@/components/Navbar";
import { mockHotCards } from "@/data/mockData";
import { TrendingUp, TrendingDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const HotCards = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container py-10">
        <h1 className="font-display text-3xl text-accent mb-2">🔥 熱門卡片炒賣價格</h1>
        <p className="text-muted-foreground mb-8">實時追蹤最熱門PTCG卡牌的市場價格走勢</p>

        {/* Table view */}
        <div className="overflow-hidden rounded-xl border border-border">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="p-4 text-left text-sm font-medium text-muted-foreground">卡牌</th>
                <th className="p-4 text-left text-sm font-medium text-muted-foreground hidden md:table-cell">卡編號</th>
                <th className="p-4 text-left text-sm font-medium text-muted-foreground hidden md:table-cell">稀有度</th>
                <th className="p-4 text-right text-sm font-medium text-muted-foreground">價格 (HKD)</th>
                <th className="p-4 text-right text-sm font-medium text-muted-foreground">漲跌</th>
              </tr>
            </thead>
            <tbody>
              {mockHotCards.map((card, i) => (
                <tr
                  key={card.id}
                  className="border-b border-border/50 transition-colors hover:bg-muted/30"
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={card.imageUrl}
                        alt={card.name}
                        className="h-16 w-12 rounded-md object-contain bg-muted"
                        loading="lazy"
                      />
                      <div>
                        <p className="font-medium text-foreground">{card.name}</p>
                        <p className="text-xs text-muted-foreground md:hidden">{card.cardNumber}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-muted-foreground hidden md:table-cell font-mono">
                    {card.cardNumber}
                  </td>
                  <td className="p-4 hidden md:table-cell">
                    <Badge variant="outline" className="text-xs border-accent/30 text-accent">
                      {card.rarity}
                    </Badge>
                  </td>
                  <td className="p-4 text-right font-display text-lg text-foreground">
                    ${card.price.toLocaleString()}
                  </td>
                  <td className="p-4 text-right">
                    <span
                      className={`inline-flex items-center gap-1 text-sm font-medium ${
                        card.priceChange >= 0 ? "text-green-400" : "text-destructive"
                      }`}
                    >
                      {card.priceChange >= 0 ? (
                        <TrendingUp className="h-4 w-4" />
                      ) : (
                        <TrendingDown className="h-4 w-4" />
                      )}
                      {card.priceChange > 0 ? "+" : ""}
                      {card.priceChange}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default HotCards;
