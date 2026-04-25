"use client";

import Link from "next/link";
import { use, useState } from "react";
import { notFound } from "next/navigation";
import AppLayout from "@/components/AppLayout";
import StatusBadge from "@/components/StatusBadge";
import processos from "@/data/processos.json";

export default function ProcessoDetalhePage({ params }) {
  const { id } = use(params);
  const [abaAtiva, setAbaAtiva] = useState("historico");

  const processo = processos.find((p) => p.id === id);

  if (!processo) {
    return (
      <AppLayout>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-4">Processo não encontrado</h1>
          <Link href="/dashboard" className="btn btn-primary">
            Voltar para meus processos
          </Link>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="text-sm breadcrumbs mb-4">
        <ul>
          <li><Link href="/dashboard">Meus Processos</Link></li>
          <li>{processo.id}</li>
        </ul>
      </div>

      <div className="card bg-base-100 shadow-sm mb-4">
        <div className="card-body">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div>
              <div className="font-mono text-sm text-base-content/60">
                PROTOCOLO {processo.id}
              </div>
              <h1 className="text-2xl font-bold my-2">{processo.titulo}</h1>
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <StatusBadge status={processo.status} cor={processo.statusCor} />
                <span className="text-base-content/60">
                  Aberto em {processo.dataAbertura} • Prioridade: {processo.prioridade}
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                href={`/tramitar/${processo.id}`}
                className="btn btn-outline btn-primary btn-sm"
              >
                Tramitar
              </Link>
              <button className="btn btn-primary btn-sm">
                Emitir parecer
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 shadow-sm">
        <div className="card-body p-0">
          <div role="tablist" className="tabs tabs-bordered px-6 pt-4">
            <a
              role="tab"
              className={`tab ${abaAtiva === "detalhes" ? "tab-active" : ""}`}
              onClick={() => setAbaAtiva("detalhes")}
            >
              Detalhes
            </a>
            <a
              role="tab"
              className={`tab ${abaAtiva === "anexos" ? "tab-active" : ""}`}
              onClick={() => setAbaAtiva("anexos")}
            >
              Anexos ({processo.anexos.length})
            </a>
            <a
              role="tab"
              className={`tab ${abaAtiva === "historico" ? "tab-active" : ""}`}
              onClick={() => setAbaAtiva("historico")}
            >
              Histórico ({processo.historico.length})
            </a>
            <a
              role="tab"
              className={`tab ${abaAtiva === "pareceres" ? "tab-active" : ""}`}
              onClick={() => setAbaAtiva("pareceres")}
            >
              Pareceres
            </a>
          </div>

          <div className="p-6">
            {abaAtiva === "detalhes" && (
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-base-content/60 mb-1">Categoria</div>
                  <div className="font-semibold">{processo.categoria}</div>
                </div>
                <div>
                  <div className="text-sm text-base-content/60 mb-1">Solicitante</div>
                  <div className="font-semibold">{processo.solicitante}</div>
                </div>
                <div>
                  <div className="text-sm text-base-content/60 mb-1">Setor atual</div>
                  <div className="font-semibold">{processo.setorAtual}</div>
                </div>
                <div>
                  <div className="text-sm text-base-content/60 mb-1">Descrição</div>
                  <div>{processo.descricao}</div>
                </div>
              </div>
            )}

            {abaAtiva === "anexos" && (
              <div className="space-y-2">
                {processo.anexos.length === 0 ? (
                  <div className="text-center py-6 text-base-content/60">
                    Nenhum anexo neste processo.
                  </div>
                ) : (
                  processo.anexos.map((arq, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 bg-base-200 rounded-lg"
                    >
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xs bg-error/20 text-error">
                        {arq.tipo}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold">{arq.nome}</div>
                        <div className="text-xs text-base-content/60">
                          {arq.tamanho}
                        </div>
                      </div>
                      <button className="btn btn-ghost btn-sm">Baixar</button>
                    </div>
                  ))
                )}
              </div>
            )}

            {abaAtiva === "historico" && (
              <div className="relative pl-8">
                {processo.historico.map((evt, idx) => (
                  <div key={idx} className="relative pb-6 last:pb-0">
                    <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-primary border-4 border-base-100 ring-2 ring-primary"></div>
                    {idx < processo.historico.length - 1 && (
                      <div className="absolute -left-[26px] top-5 w-0.5 h-full bg-base-300"></div>
                    )}
                    <div className="text-xs text-base-content/60 font-mono">
                      {evt.data}
                    </div>
                    <div className="font-bold mt-0.5">{evt.evento}</div>
                    <div className="text-sm text-base-content/70 italic">
                      por {evt.autor}
                    </div>
                    <div className="text-sm mt-2">{evt.detalhe}</div>
                  </div>
                ))}
              </div>
            )}

            {abaAtiva === "pareceres" && (
              <div className="text-center py-6 text-base-content/60">
                Nenhum parecer registrado ainda neste processo.
              </div>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
