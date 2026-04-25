"use client";

import Link from "next/link";

export default function Header() {
  return (
    <div className="navbar bg-primary text-primary-content shadow-md sticky top-0 z-50">
      <div className="flex-1">
        <Link href="/dashboard" className="flex items-center gap-3 px-4">
          <div className="w-9 h-9 bg-white text-primary rounded-lg flex items-center justify-center font-bold text-sm">
            SG
          </div>
          <div className="hidden sm:block">
            <div className="font-bold text-base leading-tight">SGPD</div>
            <div className="text-xs opacity-85 leading-tight">
              Sistema de Gestão de Processos Digitais
            </div>
          </div>
        </Link>
      </div>

      <div className="flex-none gap-2">
        <Link
          href="/notificacoes"
          className="btn btn-ghost btn-circle"
          aria-label="Notificações"
        >
          <div className="indicator">
            <span className="text-xl">🔔</span>
            <span className="badge badge-sm badge-error indicator-item">3</span>
          </div>
        </Link>

        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-9 h-9 rounded-full bg-white text-primary flex items-center justify-center font-bold">
              <span>M</span>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-base-content rounded-box w-52"
          >
            <li className="px-2 py-1">
              <div className="font-semibold">Muh Silva</div>
            </li>
            <li className="px-2 pb-2 text-xs opacity-70">Solicitante</li>
            <div className="divider my-0"></div>
            <li>
              <a>Meu Perfil</a>
            </li>
            <li>
              <a>Configurações</a>
            </li>
            <li>
              <Link href="/login">Sair</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
