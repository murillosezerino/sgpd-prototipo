export default function Stepper({ etapaAtual = 1 }) {
  const etapas = [
    { numero: 1, nome: "Dados" },
    { numero: 2, nome: "Anexos" },
    { numero: 3, nome: "Revisão" },
  ];

  return (
    <div className="flex justify-center items-center gap-2 mb-8">
      {etapas.map((etapa, idx) => {
        const completed = etapa.numero < etapaAtual;
        const active = etapa.numero === etapaAtual;
        return (
          <div key={etapa.numero} className="flex items-center gap-2">
            <div className="flex flex-col items-center gap-1">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm ${
                  completed
                    ? "bg-success text-success-content"
                    : active
                    ? "bg-primary text-primary-content"
                    : "bg-base-300 text-base-content/50"
                }`}
              >
                {completed ? "✓" : etapa.numero}
              </div>
              <div
                className={`text-xs font-semibold ${
                  active
                    ? "text-primary"
                    : completed
                    ? "text-success"
                    : "text-base-content/50"
                }`}
              >
                {etapa.nome}
              </div>
            </div>
            {idx < etapas.length - 1 && (
              <div
                className={`w-16 h-0.5 mb-5 ${
                  completed ? "bg-success" : "bg-base-300"
                }`}
              ></div>
            )}
          </div>
        );
      })}
    </div>
  );
}
