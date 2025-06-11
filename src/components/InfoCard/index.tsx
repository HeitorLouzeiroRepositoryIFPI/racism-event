export function InfoCard() {
  return (
    <div className="bg-gray-100 shadow-lg rounded-lg p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Informações Importantes</h2>
      <p className="text-gray-700 mb-4">
        Este site é uma iniciativa para promover a conscientização sobre os
        diferentes tipos de racismo e suas implicações sociais.
      </p>
      <ul className="list-disc list-inside text-gray-600">
        <li>Racismo Direto: Ações e declarações abertamente hostis.</li>
        <li>
          Racismo Indireto: Práticas discriminatórias não intencionais ou
          sistêmicas.
        </li>
        <li>
          Racismo Estrutural: Discriminação enraizada em instituições sociais.
        </li>
      </ul>
    </div>
  );
}
