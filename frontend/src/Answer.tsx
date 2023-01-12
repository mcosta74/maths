import { useTranslation } from 'react-i18next';

interface AnswerProps {
  correct: boolean | undefined;
}

function Answer({ correct }: AnswerProps) {

  const {t, i18n} = useTranslation();

  if (correct === undefined) {
    return null;
  }

  const text = correct ? t('answer.correct') : t('answer.wrong');
  const className = correct ? "text-success" : "text-error";

  return <p className={className}>{text}</p>
}

export default Answer;