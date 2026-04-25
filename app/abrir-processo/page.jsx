"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AppLayout from "@/components/AppLayout";
import Stepper from "@/components/Stepper";
import dominio from "@/data/dominio.json";

export default function AbrirProcessoPage() {
  const router = useRouter();
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [prioridade, setPrioridade] = useState("Normal");
  const [descricao, setDescricao] = useState("");
  const [setor, setSetor] = useState("");

  const handleProximo = (e) => {
    e.preventDefault();
    router.push("/anexar-documentos");
  };

  return (
    <AppLayout>
      <div className="text-sm breadcrumbs mb-4">
        <ul>
          <li><Link href="/dashboard">Início</Link></li>
          <li>Abrir Processo</li>
        </ul>
      </div>

      <h1 className="text-3xl font-bold mb-6">Abrir Novo Processo</h1>

      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <Stepper etapaAtual={1} />

          <form onSubmit={handleProximo} className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Título do processo <span className="text-error">*</span>
                </span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Ex: Solicitação de reembolso médico"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="label">
                  <span className="label-text font-semibold">
                    Categoria <span className="text-error">*</span>
                  </span>
                </label>
                <select
                  className="select select-bordered w-full"
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                >
                  <option value="">Selecione uma categoria</option>
                  {dominio.categorias.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="label">
                  <span className="label-text font-semibold">Prioridade</span>
                </label>
                <select
                  className="select select-bordered w-full"
                  value={prioridade}
                  onChange={(e) => setPrioridade(e.target.value)}
                >
                  {dominio.prioridades.map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Descrição detalhada <span className="text-error">*</span>
                </span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full min-h-[120px]"
                placeholder="Descreva o motivo da solicitação, incluindo todos os detalhes relevantes..."
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />
            </div>

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
                <option value="">Selecione o setor responsável</option>
                {dominio.setores.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="divider"></div>

            <div className="flex flex-col-reverse md:flex-row md:justify-between gap-3">
              <Link href="/dashboard" className="btn btn-ghost">
                Salvar rascunho
              </Link>
              <button type="submit" className="btn btn-primary">
                Próximo →
              </button>
            </div>
          </form>
        </div>
      </div>
    </AppLayout>
  );
}
