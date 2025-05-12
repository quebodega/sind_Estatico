
'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

interface QuorumResult {
  met: boolean;
  message: string;
  minWorkers?: number;
  minPercentage?: number;
  requiredWorkersByPercentage?: number;
}

export default function RequisitosCalculator() {
  const [totalWorkers, setTotalWorkers] = useState<string>('');
  const [currentWorkers, setCurrentWorkers] = useState<string>('');
  const [result, setResult] = useState<QuorumResult | null>(null);

  const handleCalculate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const numTotalWorkers = parseInt(totalWorkers, 10);
    const numCurrentWorkers = parseInt(currentWorkers, 10);

    if (isNaN(numTotalWorkers) || isNaN(numCurrentWorkers) || numTotalWorkers <= 0 || numCurrentWorkers < 0) {
      setResult({ met: false, message: 'Por favor, ingresa números válidos para los trabajadores.' });
      return;
    }

    if (numCurrentWorkers > numTotalWorkers) {
      setResult({ met: false, message: 'El número de trabajadores interesados no puede ser mayor al total de trabajadores en la empresa.' });
      return;
    }

    let calculatedResult: QuorumResult;

    if (numTotalWorkers > 50) {
      const minPercentage = 10;
      const requiredByPercentage = Math.ceil(numTotalWorkers * (minPercentage / 100));
      const minAbs = 25;
      const requiredWorkers = Math.max(minAbs, requiredByPercentage);

      if (numCurrentWorkers >= requiredWorkers) {
        calculatedResult = {
          met: true,
          message: `¡Cumplen los requisitos! Necesitan al menos ${requiredWorkers} trabajadores (el ${minPercentage}% de ${numTotalWorkers} o ${minAbs} como mínimo). Tienen ${numCurrentWorkers}.`,
          minWorkers: requiredWorkers,
          minPercentage,
          requiredWorkersByPercentage
        };
      } else {
        calculatedResult = {
          met: false,
          message: `No cumplen los requisitos. Necesitan al menos ${requiredWorkers} trabajadores (el ${minPercentage}% de ${numTotalWorkers} o ${minAbs} como mínimo). Actualmente tienen ${numCurrentWorkers}. Faltan ${requiredWorkers - numCurrentWorkers}.`,
          minWorkers: requiredWorkers,
          minPercentage,
          requiredWorkersByPercentage
        };
      }
    } else { // 50 o menos trabajadores
      const minPercentage = 50;
      const requiredByPercentage = Math.ceil(numTotalWorkers * (minPercentage / 100));
      const minAbs = 8;
      // En empresas de 50 o menos, el requisito es 8 trabajadores Y que representen el 50%.
      // Sin embargo, la ley dice "a lo menos ocho trabajadores, siempre que representen, a lo menos, el cincuenta por ciento del total de los que presten servicios en la respectiva empresa"
      // Esto implica que si el 50% es menos de 8, igual se necesitan 8. Si el 50% es más de 8, se necesita ese número mayor.
      const requiredWorkers = Math.max(minAbs, requiredByPercentage);

      if (numCurrentWorkers >= requiredWorkers) {
        calculatedResult = {
          met: true,
          message: `¡Cumplen los requisitos! Necesitan al menos ${requiredWorkers} trabajadores (el ${minPercentage}% de ${numTotalWorkers}, con un mínimo de ${minAbs}). Tienen ${numCurrentWorkers}.`,
          minWorkers: requiredWorkers,
          minPercentage,
          requiredWorkersByPercentage
        };
      } else {
        calculatedResult = {
          met: false,
          message: `No cumplen los requisitos. Necesitan al menos ${requiredWorkers} trabajadores (el ${minPercentage}% de ${numTotalWorkers}, con un mínimo de ${minAbs}). Actualmente tienen ${numCurrentWorkers}. Faltan ${requiredWorkers - numCurrentWorkers}.`,
          minWorkers: requiredWorkers,
          minPercentage,
          requiredWorkersByPercentage
        };
      }
    }
    setResult(calculatedResult);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 my-8">
      <h3 className="text-xl font-semibold text-primary mb-4">Calculadora de Quórum para Formar Sindicato</h3>
      <form onSubmit={handleCalculate} className="space-y-4">
        <div>
          <label htmlFor="totalWorkers" className="block text-sm font-medium text-text-primary mb-1">
            Número total de trabajadores en la empresa:
          </label>
          <input
            type="number"
            id="totalWorkers"
            value={totalWorkers}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setTotalWorkers(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="currentWorkers" className="block text-sm font-medium text-text-primary mb-1">
            Número de trabajadores interesados en formar el sindicato:
          </label>
          <input
            type="number"
            id="currentWorkers"
            value={currentWorkers}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setCurrentWorkers(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-primary text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Calcular Requisito
        </button>
      </form>
      {result && (
        <div className={`mt-6 p-4 rounded-md ${result.met ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
          <p className={`font-semibold ${result.met ? 'text-green-700' : 'text-red-700'}`}>
            {result.message}
          </p>
          {result.minWorkers !== undefined && (
            <p className="text-sm mt-1 ${result.met ? 'text-green-600' : 'text-red-600'}">
              Detalle: Mínimo absoluto de trabajadores: {totalWorkers && parseInt(totalWorkers) > 50 ? '25' : '8'}. Mínimo por porcentaje ({result.minPercentage}% de {totalWorkers}): {result.requiredWorkersByPercentage}.
              Se requiere el mayor de estos dos (o el mínimo absoluto si el porcentaje es menor), resultando en {result.minWorkers} trabajadores.
            </p>
          )}
           <p className="text-xs mt-2 text-gray-600">
            Nota: Esta calculadora es una guía referencial. Siempre consulte la legislación vigente y la Dirección del Trabajo para información oficial.
            Para empresas sin sindicato vigente, se puede constituir con 8 trabajadores, pero deben completar el quórum legal (generalmente 50% si la empresa tiene 50 o menos trabajadores) en el plazo de un año.
          </p>
        </div>
      )}
    </div>
  );
}

