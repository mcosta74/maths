import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

import Answer from "../Answer";

export interface DivisionProps {
  a: number;
  b: number;
  correctAnswer?: boolean;
  onCheck: (result: number, remainder: number) => void;
  onGenerate: () => void;
};

export function Division({a, b, correctAnswer, onCheck, onGenerate}: DivisionProps) {
  const [result, setResult] = useState(0);
  const [remainder, setRemainder] = useState(0);

  const {t, i18n} = useTranslation();
  useEffect(() => {
    setResult(0);
    setRemainder(0);
  }, [a, b]);

  return (
    <div className="prose p-4 flex flex-col gap-4">
      <div>
        <h3>{t("divisions.title")}</h3>
        <p className="text-center text-xl">
          {a} : {b} = ?
        </p>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">{t("divisions.result")}</span>
        </label>
        <input
          type="number"
          className="input input-bordered"
          placeholder="inserisci il risultato"
          onChange={(e) => setResult(e.target.valueAsNumber)}
          value={result}
        ></input>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">{t("divisions.remainder")}</span>
        </label>
        <input
          type="number"
          className="input input-bordered"
          placeholder="inserisci il resto"
          onChange={(e) => setRemainder(e.target.valueAsNumber)}
          value={remainder}
        ></input>
      </div>

      <div className="flex gap-8 justify-center">
        <button className="btn" onClick={onGenerate}>
          {t("divisions.new")}
        </button>
        <button
          className="btn btn-primary"
          onClick={() => onCheck(result, remainder)}
        >
          {t("divisions.try")}
        </button>
      </div>

      <Answer correct={correctAnswer} />
    </div>
  );
}
