import Navbar from "@/components/Navbar";
import { mockCardsForSale } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";

const BuyCards = () => {
  const handleBuy = (name: string) => {
    toast.success(`已將「${name}」加入購物車！`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container py-10">
        <h1 className="font-display text-3xl text-accent mb-2">🛒 買寶可夢卡</h1>
        <p className="text-muted-foreground mb-8">精選寶可夢卡牌，品質保證</p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {mockCardsForSale.map((card) => (
            <div
              key={card.id}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-accent/30 card-shine"
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted flex items-center justify-center p-4">
                <img
                  src={card.imageUrl}
                  alt={card.name}
                  className="h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium text-foreground text-sm">{card.name}</h3>
                  <Badge variant="outline" className="text-[10px] border-muted-foreground/30 text-muted-foreground">
                    {card.condition}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground font-mono mb-1">{card.cardNumber}</p>
                <p className="text-xs text-muted-foreground mb-3">賣家: {card.seller}</p>
                <div className="flex items-center justify-between">
                  <span className="font-display text-lg text-accent">
                    ${card.price.toLocaleString()}
                  </span>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => handleBuy(card.name)}
                  >
                    <ShoppingCart className="mr-1 h-3.5 w-3.5" />
                    購買
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BuyCards;
