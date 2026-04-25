"use client";

import Link from "next/link";
import { useState } from "react";
import AppLayout from "@/components/AppLayout";
import notificacoesData from "@/data/notificacoes.json";

const ICON_BG = {
  success: "bg-success/20 text-success",
  warning: "bg-warning/20 text-warning",
  info: "bg-info/20 text-info",
  purple: "bg-purple-100 text-purple-700",
  error: "bg-error/20 text-error",
};

export default function NotificacoesPage() {
  const [notificacoes, setNotificacoes] = useState(notificacoesData);

  const naoLidas = notificacoes.filter((n) => !n.lida).length;

  const marcarTodasLidas = () => {
    setNotificacoes(notificacoes.map((n) => ({ ...n, lida: true })));
  };

  return (
    <AppLayout>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold">Notificações</h1>
            {naoLidas > 0 && (
              <span className="badge badge-error badge-lg">
                {naoLidas} novas
              </span>
            )}
          </div>
          <p className="text-base-content/70 mt-1">
            Acompanhe os eventos dos seus processos
          </p>
        </div>
        {naoLidas > 0 && (
          <button onClick={marcarTodasLidas} className="btn btn-outline btn-primary">
            Marcar todas como lidas
          </button>
        )}
      </div>

      <div className="space-y-3">
        {notificacoes.map((n) => (
          <Link
            key={n.id}
            href={`/processo/${n.processoRef}`}
            className={`card shadow-sm hover:shadow-md transition-all cursor-pointer ${
              !n.lida ? "bg-primary/5 border-l-4 border-primary" : "bg-base-100"
            }`}
          >
            <div className="card-body p-4 flex flex-row items-start gap-4">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0 ${
                  ICON_BG[n.tipo] || ICON_BG.info
                }`}
              >
                {n.icone}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div className="font-bold">{n.titulo}</div>
                  {!n.lida && (
                    <div className="w-2.5 h-2.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  )}
                </div>
                <div className="text-sm text-base-content/70 mt-1">
                  {n.descricao}
                </div>
                <div className="text-xs text-base-content/50 italic mt-2">
                  {n.tempo}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {notificacoes.length === 0 && (
        <div className="text-center py-12 text-base-content/60">
          Nenhuma notificação no momento.
        </div>
      )}
    </AppLayout>
  );
}
