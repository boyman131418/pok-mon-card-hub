import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, ShieldCheck, ShieldOff } from "lucide-react";
import { toast } from "sonner";

interface Props {
  role: "super_admin" | "admin";
}

interface UserWithRole {
  user_id: string;
  email: string;
  display_name: string;
  role: string;
}

const AdminDashboard = ({ role }: Props) => {
  const [users, setUsers] = useState<UserWithRole[]>([]);

  useEffect(() => {
    if (role !== "super_admin") return;
    fetchUsers();
  }, [role]);

  const fetchUsers = async () => {
    const { data: profiles } = await supabase.from("profiles").select("user_id, email, display_name");
    const { data: roles } = await supabase.from("user_roles").select("user_id, role");

    if (profiles && roles) {
      const merged = profiles.map((p) => ({
        ...p,
        role: roles.find((r) => r.user_id === p.user_id)?.role || "user",
      }));
      setUsers(merged);
    }
  };

  const changeRole = async (userId: string, newRole: "admin" | "user") => {
    const { error } = await supabase
      .from("user_roles")
      .update({ role: newRole })
      .eq("user_id", userId);

    if (error) {
      toast.error("更新失敗: " + error.message);
    } else {
      toast.success(`角色已更新為 ${newRole === "admin" ? "管理員" : "一般用戶"}`);
      fetchUsers();
    }
  };

  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-border bg-card p-6">
        <h2 className="font-display text-lg text-foreground mb-4">📋 管理功能</h2>
        <p className="text-muted-foreground text-sm">
          你可以管理新聞、炒價表、福袋和擺賣資訊。（功能待後續接入數據庫）
        </p>
      </div>

      {role === "super_admin" && (
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <Users className="h-5 w-5 text-accent" />
            <h2 className="font-display text-lg text-foreground">用戶管理</h2>
          </div>

          <div className="overflow-hidden rounded-lg border border-border">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="p-3 text-left text-sm font-medium text-muted-foreground">用戶</th>
                  <th className="p-3 text-left text-sm font-medium text-muted-foreground">角色</th>
                  <th className="p-3 text-right text-sm font-medium text-muted-foreground">操作</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.user_id} className="border-b border-border/50">
                    <td className="p-3">
                      <p className="text-sm font-medium text-foreground">{u.display_name}</p>
                      <p className="text-xs text-muted-foreground">{u.email}</p>
                    </td>
                    <td className="p-3">
                      <Badge
                        variant="outline"
                        className={
                          u.role === "super_admin"
                            ? "border-accent/40 text-accent"
                            : u.role === "admin"
                            ? "border-primary/40 text-primary"
                            : "border-muted-foreground/30 text-muted-foreground"
                        }
                      >
                        {u.role === "super_admin" ? "超級管理員" : u.role === "admin" ? "管理員" : "一般用戶"}
                      </Badge>
                    </td>
                    <td className="p-3 text-right">
                      {u.role !== "super_admin" && (
                        u.role === "admin" ? (
                          <Button size="sm" variant="outline" className="text-xs border-destructive/30 text-destructive hover:bg-destructive hover:text-destructive-foreground" onClick={() => changeRole(u.user_id, "user")}>
                            <ShieldOff className="mr-1 h-3 w-3" />降級
                          </Button>
                        ) : (
                          <Button size="sm" variant="outline" className="text-xs border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground" onClick={() => changeRole(u.user_id, "admin")}>
                            <ShieldCheck className="mr-1 h-3 w-3" />升級管理員
                          </Button>
                        )
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
