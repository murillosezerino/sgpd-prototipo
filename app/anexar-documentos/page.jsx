"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AppLayout from "@/components/AppLayout";
import Stepper from "@/components/Stepper";

export default function AnexarDocumentosPage() {
  const router = useRouter();
  const [arquivos, setArquivos] = useState([
    { nome: "comprovante_consulta.pdf", tamanho: "2.30 MB", tipo: "PDF", cor: "bg-error/20 text-error" },
    { nome: "recibo_pagamento.jpg", tamanho: "850 KB", tipo: "JPG", cor: "bg-info/20 text-info" },
  ]);

  const removerArquivo = (idx) => {
    setArquivos(arquivos.filter((_, i) => i !== idx));
  };

  const handleEnviar = () => {
    router.push("/confirmacao");
  };

  return (
    <AppLayout>
      <div className="text-sm breadcrumbs mb-4">
        <ul>
          <li><Link href="/dashboard">Início</Link></li>
          <li><Link href="/abrir-processo">Abrir Processo</Link></li>
          <li>Anexar Documentos</li>
        </ul>
      </div>

      <h1 className="text-3xl font-bold mb-6">Anexar Documentos</h1>

      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <Stepper etapaAtual={2} />

          <div className="border-2 border-dashed border-primary bg-primary/5 rounded-xl p-12 text-center cursor-pointer hover:bg-primary/10 transition-all">
            <div className="text-6xl mb-3">📤</div>
            <div className="text-lg font-bold text-primary mb-1">
              Arraste arquivos aqui ou clique para selecionar
            </div>
            <div className="text-sm text-base-content/60">
              PDF, JPG, PNG, DOCX • Máximo 10 MB por arquivo
            </div>
          </div>

          <div className="flex justify-between items-center mt-6 mb-3">
            <div className="font-semibold">
              Arquivos anexados ({arquivos.length})
            </div>
            <div className="text-sm text-base-content/60">
              Total: {arquivos.length > 0 ? "3.15 MB" : "0 MB"}
            </div>
          </div>

          <div className="space-y-2">
            {arquivos.map((arq, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 bg-base-200 rounded-lg"
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xs ${arq.cor}`}
                >
                  {arq.tipo}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold truncate">{arq.nome}</div>
                  <div className="text-xs text-base-content/60">
                    {arq.tamanho} • Enviado
                  </div>
                </div>
                <span className="badge badge-success badge-sm">✓</span>
                <button
                  onClick={() => removerArquivo(idx)}
                  className="btn btn-ghost btn-xs text-error"
                  aria-label="Remover"
                >
                  ✕
                </button>
              </div>
            ))}
            {arquivos.length === 0 && (
              <div className="text-center py-6 text-base-content/50 text-sm">
                Nenhum arquivo anexado ainda
              </div>
            )}
          </div>

          <div className="divider"></div>

          <div className="flex flex-col-reverse md:flex-row md:justify-between gap-3">
            <Link href="/abrir-processo" className="btn btn-ghost">
              ← Voltar
            </Link>
            <button onClick={handleEnviar} className="btn btn-primary">
              Revisar e Enviar
            </button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
