import "./globals.css";

export const metadata = {
  title: "SGPD - Sistema de Gestão de Processos Digitais",
  description: "Protótipo navegável do SGPD - Experiência Prática IV",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" data-theme="sgpd">
      <body>{children}</body>
    </html>
  );
}
