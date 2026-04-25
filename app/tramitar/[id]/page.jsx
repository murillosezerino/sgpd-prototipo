"use client";

import Link from "next/link";
import { use, useState } from "react";
import { useRouter } from "next/navigation";
import AppLayout from "@/components/AppLayout";
import processos from "@/data/processos.json";
import dominio from "@/data/dominio.json";

export default function TramitarPage({ params }) {
  const { id } = use(params);
  const router = useRouter();
  const [operacao, setOperacao] = useState("tramitar");
  const [setor, setSetor] = useState("");
  const [parecer, setParecer] = useState("");
  const [despacho, setDespacho] = useState("");
  const [paralelo, setParalelo] = useState(false);

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

  const handleEncaminhar = () => {
    alert("Processo tramitado com sucesso! Notificação enviada ao setor destinatário.");
    router.push(`/processo/${id}`);
  };

  const operacoes = [
    { id: "tramitar", label: "Tramitar" },
    { id: "devolver", label: "Devolver" },
    { id: "complementar", label: "Solicitar Complementação" },
  ];

  return (
    <AppLayout>
      <div className="text-sm breadcrumbs mb-4">
        <ul>
          <li><Link href="/dashboard">Meus Processos</Link></li>
          <li><Link href={`/processo/${id}`}>{id}</Link></li>
          <li>Tramitar</li>
        </ul>
      </div>

      <h1 className="text-3xl font-bold">Tramitar Processo {processo.id}</h1>
      <p className="text-base-content/70 mt-1 mb-6">{processo.titulo}</p>

      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <div role="tablist" className="tabs tabs-boxed mb-6">
            {operacoes.map((op) => (
              <a
                key={op.id}
                role="tab"
                className={`tab ${operacao === op.id ? "tab-active" : ""}`}
                onClick={() => setOperacao(op.id)}
              >
                {op.label}
              </a>
            ))}
          </div>

          <div className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Setor de destino <span className="text-error">*</span>
                </span>
              </label>
              <select
                className="select select-bordered w-full"
                value={setor}
                onChange={(e) => setSetor(e.target.value)}
              >
                <option value="">Selecione o setor de destino</option>
                {dominio.setores.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>

            {operacao === "tramitar" && (
              <div className="form-control">
                <label className="label cursor-pointer justify-start gap-3">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary checkbox-sm"
                    checked={paralelo}
                    onChange={(e) => setParalelo(e.target.checked)}
                  />
                  <span className="label-text">
                    Tramitar para múltiplos setores em paralelo
                  </span>
                </label>
              </div>
            )}

            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  {operacao === "devolver" ? "Justificativa da devolução" : "Parecer técnico"}{" "}
                  <span className="text-error">*</span>
                </span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full min-h-[120px]"
                placeholder={
                  operacao === "devolver"
                    ? "Descreva o motivo da devolução, indicando o que precisa ser corrigido..."
                    : "Descreva sua análise técnica do processo, considerando regulamentos aplicáveis e documentação apresentada..."
                }
                value={parecer}
                onChange={(e) => setParecer(e.target.value)}
              />
            </div>

            {operacao === "tramitar" && (
              <div>
                <label className="label">
                  <span className="label-text font-semibold">Despacho</span>
                </label>
                <textarea
                  className="textarea textarea-bordered w-full"
                  placeholder="Texto do despacho oficial ao setor destinatário..."
                  value={despacho}
                  onChange={(e) => setDespacho(e.target.value)}
                  rows={3}
                />
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="label">
                  <span className="label-text font-semibold">Prioridade</span>
                </label>
                <select className="select select-bordered w-full" defaultValue="Normal">
                  {dominio.prioridades.map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="label">
                  <span className="label-text font-semibold">
                    Prazo solicitado (dias)
                  </span>
                </label>
                <input type="number" className="input input-bordered w-full" defaultValue="5" />
              </div>
            </div>
          </div>

          <div className="divider"></div>

          <div className="flex flex-col-reverse md:flex-row md:justify-between gap-3">
            <Link href={`/processo/${id}`} className="btn btn-ghost">
              Cancelar
            </Link>
            <button onClick={handleEncaminhar} className="btn btn-primary">
              Encaminhar
            </button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
