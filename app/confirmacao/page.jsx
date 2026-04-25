"use client";

import Link from "next/link";
import AppLayout from "@/components/AppLayout";
import StatusBadge from "@/components/StatusBadge";

export default function ConfirmacaoPage() {
  const numeroProtocolo = "2026-000131";

  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto py-8">
        <div className="text-center mb-8">
          <div className="w-24 h-24 rounded-full bg-success/20 border-4 border-success flex items-center justify-center mx-auto mb-6">
            <span className="text-5xl text-success">✓</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">
            Processo aberto com sucesso!
          </h1>
          <p className="text-base-content/70">
            Sua solicitação foi registrada e encaminhada
            <br />
            ao setor responsável para análise.
          </p>
        </div>

        <div className="card bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-primary mb-6">
          <div className="card-body items-center text-center py-6">
            <div className="text-sm text-primary font-semibold uppercase tracking-wider">
              Número do Protocolo
            </div>
            <div className="text-4xl font-mono font-bold text-primary mt-2">
              {numeroProtocolo}
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-sm mb-6">
          <div className="card-body">
            <h3 className="font-bold text-lg mb-4">Resumo do processo</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-base-content/60">Título:</span>
                <span className="font-semibold">Solicitação de reembolso médico</span>
              </div>
              <div className="flex justify-between">
                <span className="text-base-content/60">Categoria:</span>
                <span>Recursos Humanos</span>
              </div>
              <div className="flex justify-between">
                <span className="text-base-content/60">Setor de destino:</span>
                <span>Departamento de RH</span>
              </div>
              <div className="flex justify-between">
                <span className="text-base-content/60">Documentos anexados:</span>
                <span>2 arquivos</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-base-content/60">Status:</span>
                <StatusBadge status="Em análise" cor="warning" />
              </div>
            </div>
          </div>
        </div>

        <div className="alert alert-info mb-6">
          <span>📧</span>
          <div>
            <div className="font-semibold">Notificação enviada</div>
            <div className="text-sm">
              Os analistas do setor de RH foram notificados por e-mail.
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row gap-3 justify-center">
          <Link href="/dashboard" className="btn btn-outline btn-primary">
            Voltar ao início
          </Link>
          <Link href="/processo/2026-000128" className="btn btn-primary">
            Acompanhar processo
          </Link>
        </div>
      </div>
    </AppLayout>
  );
}
