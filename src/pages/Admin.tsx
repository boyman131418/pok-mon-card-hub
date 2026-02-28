import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, Mail, Lock, LogOut, Users, UserPlus } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
import AdminDashboard from "@/components/AdminDashboard";

const Admin = () => {
  const { user, role, loading, signOut } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin },
        });
        if (error) throw error;
        toast.success("註冊成功！請查看電郵驗證你的帳戶。");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("登入成功！");
      }
    } catch (err: any) {
      toast.error(err.message || "操作失敗");
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogleLogin = async () => {
    const { error } = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin + "/admin",
    });
    if (error) toast.error("Google 登入失敗");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container py-10 flex items-center justify-center min-h-[calc(100vh-4rem)]">
          <p className="text-muted-foreground">載入中...</p>
        </main>
      </div>
    );
  }

  // Logged in
  if (user) {
    const isAdmin = role === "super_admin" || role === "admin";

    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container py-10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-display text-2xl text-accent">管理後台</h1>
              <p className="text-sm text-muted-foreground mt-1">
                {user.email} · 角色：
                <span className="text-primary font-medium">
                  {role === "super_admin" ? "超級管理員" : role === "admin" ? "管理員" : "一般用戶"}
                </span>
              </p>
            </div>
            <Button variant="outline" onClick={signOut} className="border-border text-foreground hover:bg-muted">
              <LogOut className="mr-2 h-4 w-4" />
              登出
            </Button>
          </div>

          {isAdmin ? (
            <AdminDashboard role={role!} />
          ) : (
            <div className="text-center py-20">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-muted">
                <Shield className="h-8 w-8 text-muted-foreground" />
              </div>
              <h2 className="font-display text-xl text-foreground mb-2">請等待 ADMIN 批準</h2>
              <p className="text-muted-foreground text-sm">你的帳戶尚未獲得管理員權限，請聯絡超級管理員。</p>
            </div>
          )}
        </main>
      </div>
    );
  }

  // Not logged in - show login/signup form
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container py-10 flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 glow-red">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-display text-2xl text-accent">
              {isSignUp ? "申請會員" : "管理員登入"}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {isSignUp ? "建立你的帳戶" : "使用你的電郵登入管理後台"}
            </p>
          </div>

          <form onSubmit={handleEmailAuth} className="rounded-xl border border-border bg-card p-6 space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">電郵地址</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-muted border-border"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground">密碼</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 bg-muted border-border"
                  required
                  minLength={6}
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={submitting}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
              size="lg"
            >
              {submitting ? "處理中..." : isSignUp ? (
                <><UserPlus className="mr-2 h-4 w-4" />註冊</>
              ) : "登入"}
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-card px-2 text-muted-foreground">或</span>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full border-border text-foreground hover:bg-muted"
              size="lg"
              onClick={handleGoogleLogin}
            >
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              使用 Google 登入
            </Button>
          </form>

          <p className="mt-4 text-center text-sm text-muted-foreground">
            {isSignUp ? (
              <>已有帳戶？<button onClick={() => setIsSignUp(false)} className="text-primary hover:underline">登入</button></>
            ) : (
              <>未有帳戶？<button onClick={() => setIsSignUp(true)} className="text-primary hover:underline">申請會員</button></>
            )}
          </p>

          <p className="mt-2 text-center text-xs text-muted-foreground">
            只有獲授權的管理員才可存取後台功能
          </p>
        </div>
      </main>
    </div>
  );
};

export default Admin;
