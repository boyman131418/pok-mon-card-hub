import { useState } from "react";
import Navbar from "@/components/Navbar";
import { mockLuckyBag } from "@/data/mockData";
import luckyBagHero from "@/assets/lucky-bag-hero.png";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Gift, Sparkles, Package } from "lucide-react";
import { toast } from "sonner";

const LuckyBag = () => {
  const [remaining, setRemaining] = useState(mockLuckyBag.remaining);
  const [purchasing, setPurchasing] = useState(false);
  const soldPercent = ((mockLuckyBag.totalStock - remaining) / mockLuckyBag.totalStock) * 100;

  const handlePurchase = () => {
    if (remaining <= 0) return;
    setPurchasing(true);
    setTimeout(() => {
      setRemaining((r) => r - 1);
      setPurchasing(false);
      toast.success("🎉 購買成功！你的福袋已加入訂單！", {
        description: "請留意電郵確認信息。",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container py-10">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            {/* Image */}
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-3xl bg-primary/5 blur-3xl" />
              <img
                src={luckyBagHero}
                alt="PTCG 福袋"
                className="relative z-10 w-80 animate-float drop-shadow-2xl"
              />
            </div>

            {/* Info */}
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary">
                <Sparkles className="h-4 w-4" />
                限量發售
              </div>
              <h1 className="font-display text-3xl text-accent mb-4">{mockLuckyBag.name}</h1>
              <p className="text-muted-foreground leading-relaxed mb-6">{mockLuckyBag.description}</p>

              <div className="mb-6 rounded-xl border border-border bg-card p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">價格</span>
                  <span className="font-display text-2xl text-accent">
                    HKD ${mockLuckyBag.price}
                  </span>
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-muted-foreground">
                      <Package className="mr-1 inline h-4 w-4" />
                      剩餘數量
                    </span>
                    <span className="text-foreground font-medium">
                      {remaining} / {mockLuckyBag.totalStock}
                    </span>
                  </div>
                  <Progress value={soldPercent} className="h-2" />
                  <p className="mt-1 text-xs text-muted-foreground text-right">
                    已售 {soldPercent.toFixed(1)}%
                  </p>
                </div>
              </div>

              <Button
                onClick={handlePurchase}
                disabled={remaining <= 0 || purchasing}
                className="w-full h-12 font-display text-lg bg-primary hover:bg-primary/90 text-primary-foreground glow-red"
                size="lg"
              >
                {purchasing ? (
                  "處理中..."
                ) : remaining <= 0 ? (
                  "已售罄"
                ) : (
                  <>
                    <Gift className="mr-2 h-5 w-5" />
                    立即購買
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LuckyBag;
