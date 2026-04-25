"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [usuario, setUsuario] = useState("muh.silva");
  const [senha, setSenha] = useState("********");

  const handleLogin = (e) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        background:
          "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
      }}
    >
      <div className="card bg-base-100 w-full max-w-md shadow-2xl">
        <div className="card-body p-8">
          <div className="flex flex-col items-center mb-6">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-white font-bold text-lg mb-4 bg-gradient-to-br from-blue-700 to-blue-500">
              SGPD
            </div>
            <h1 className="text-2xl font-bold">Acessar o Sistema</h1>
            <p className="text-sm opacity-70 mt-1">
              Entre com suas credenciais corporativas
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text font-semibold">Usuário</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                placeholder="seu.usuario"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-semibold">Senha</span>
              </label>
              <input
                type="password"
                className="input input-bordered w-full"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="********"
              />
            </div>

            <button type="submit" className="btn btn-primary w-full mt-6">
              Entrar
            </button>
          </form>

          <div className="text-center mt-4">
            <Link
              href="#"
              className="link link-primary text-sm"
            >
              Esqueci minha senha
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
