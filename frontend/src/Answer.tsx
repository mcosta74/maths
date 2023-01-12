interface AnswerProps {
  correct: boolean | undefined;
}

function Answer({ correct }: AnswerProps) {
  if (correct === undefined) {
    return null;
  }

  const text = correct ? "Giusto!" : "Sbagliato!";
  const className = correct ? "text-success" : "text-error";

  return <p className={className}>{text}</p>
}

export default Answer;