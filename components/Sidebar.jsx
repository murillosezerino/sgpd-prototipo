"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { href: "/dashboard", icon: "📋", label: "Meus Processos" },
  { href: "/abrir-processo", icon: "➕", label: "Abrir Processo" },
  { href: "/notificacoes", icon: "🔔", label: "Notificações" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="bg-base-100 border-r border-base-300 w-64 min-h-[calc(100vh-64px)] hidden md:block">
      <ul className="menu p-4 gap-1">
        {menuItems.map((item) => {
          const active =
            pathname === item.href ||
            (item.href !== "/dashboard" && pathname.startsWith(item.href));
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={
                  active ? "active bg-primary/10 text-primary font-semibold" : ""
                }
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
        <div className="divider my-2"></div>
        <li>
          <a className="opacity-70">
            <span className="text-lg">⚙️</span>
            <span>Configurações</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}
