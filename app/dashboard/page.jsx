"use client";

import Link from "next/link";
import { useState } from "react";
import AppLayout from "@/components/AppLayout";
import StatusBadge from "@/components/StatusBadge";
import processos from "@/data/processos.json";

export default function DashboardPage() {
  const [busca, setBusca] = useState("");
  const [filtroStatus, setFiltroStatus] = useState("");

  const stats = [
    { label: "Total de processos", valor: processos.length, trend: "↑ 3 este mês", cor: "text-success" },
    { label: "Em análise", valor: processos.filter(p => p.status === "Em análise").length, trend: "Aguardando", cor: "text-warning" },
    { label: "Aprovados", valor: processos.filter(p => p.status === "Aprovado").length, trend: "↑ 50% conclusão", cor: "text-success" },
    { label: "Tramitando", valor: processos.filter(p => p.status === "Tramitando").length, trend: "Em fluxo", cor: "text-info" },
  ];

  const processosFiltrados = processos.filter((p) => {
    const matchBusca =
      busca === "" ||
      p.id.toLowerCase().includes(busca.toLowerCase()) ||
      p.titulo.toLowerCase().includes(busca.toLowerCase());
    const matchStatus = filtroStatus === "" || p.status === filtroStatus;
    return matchBusca && matchStatus;
  });

  return (
    <AppLayout>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold">Meus Processos</h1>
          <p className="text-base-content/70 mt-1">
            Gerencie e acompanhe seus processos digitais
          </p>
        </div>
        <Link href="/abrir-processo" className="btn btn-primary">
          + Novo Processo
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {stats.map((s, i) => (
          <div key={i} className="card bg-base-100 shadow-sm border border-base-300">
            <div className="card-body p-4">
              <div className="text-xs text-base-content/60 uppercase tracking-wide">
                {s.label}
              </div>
              <div className="text-3xl font-bold">{s.valor}</div>
              <div className={`text-xs ${s.cor}`}>{s.trend}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="card bg-base-100 shadow-sm mb-4">
        <div className="card-body p-4 flex flex-col md:flex-row gap-3">
          <input
            type="text"
            className="input input-bordered flex-1"
            placeholder="🔍 Buscar por protocolo ou título..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
          <select
            className="select select-bordered w-full md:w-48"
            value={filtroStatus}
            onChange={(e) => setFiltroStatus(e.target.value)}
          >
            <option value="">Todos os status</option>
            <option>Em análise</option>
            <option>Aprovado</option>
            <option>Tramitando</option>
            <option>Em parecer</option>
          </select>
        </div>
      </div>

      <div className="card bg-base-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="bg-base-200">
                <th>Protocolo</th>
                <th>Título</th>
                <th className="hidden md:table-cell">Categoria</th>
                <th>Status</th>
                <th className="hidden md:table-cell">Data</th>
              </tr>
            </thead>
            <tbody>
              {processosFiltrados.map((p) => (
                <tr key={p.id} className="hover cursor-pointer">
                  <td>
                    <Link
                      href={`/processo/${p.id}`}
                      className="font-mono font-bold text-primary"
                    >
                      {p.id}
                    </Link>
                  </td>
                  <td>
                    <Link href={`/processo/${p.id}`} className="font-medium">
                      {p.titulo}
                    </Link>
                  </td>
                  <td className="hidden md:table-cell text-sm">
                    {p.categoria}
                  </td>
                  <td>
                    <StatusBadge status={p.status} cor={p.statusCor} />
                  </td>
                  <td className="hidden md:table-cell text-sm">
                    {p.dataAbertura}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {processosFiltrados.length === 0 && (
          <div className="text-center py-12 text-base-content/60">
            Nenhum processo encontrado com os filtros aplicados.
          </div>
        )}
      </div>
    </AppLayout>
  );
}
