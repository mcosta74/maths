import { useEffect, useState } from "react";

import { GenerateDivision, CheckDivision } from "../../wailsjs/go/main/App";
import { DivisionProps, Division } from "./Division";

export function DivisionContainer() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [correct, setCorrect] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    generate();
  }, []);

  function check(result: number, remainder: number) {
    CheckDivision(a, b, result, remainder).then((x) => {
      setCorrect(x);
    });
  }

  function generate() {
    GenerateDivision().then((x) => {
      setA(x.x);
      setB(x.y);
      setCorrect(undefined);
    });
  }

  const props: DivisionProps = {
    a,
    b,
    correctAnswer: correct,
    onCheck: check,
    onGenerate: generate,
  };

  return <Division {...props} />;
}
