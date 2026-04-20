export interface WorkflowStep {
  title: string;
  description: string;
  meta?: string;
}

export interface WorkflowContent {
  id: "workflow";
  kicker?: string;
  title: string;
  subtitle: string;
  steps: WorkflowStep[];
}

export const workflow: WorkflowContent = {
  id: "workflow",
  kicker: "Как работим",
  title: "Без губене на време",
  subtitle:
    "От първия разговор до готовата документация - ясно, организирано и без излишни усложнения.",
  steps: [
    {
      title: "Консултация",
      meta: "Същия ден",
      description:
        "Разглеждаме случая, уточняваме нужните документи и определяме точния обхват на услугата.",
    },
    {
      title: "Оглед и измерване",
      meta: "30–90 мин",
      description:
        "Извършваме прецизно заснемане на място със съвременна апаратура (GNSS/тотална станция).",
    },
    {
      title: "Обработка и изготвяне",
      meta: "1–2 работни дни",
      description:
        "Обработваме данните и подготвяме планове, чертежи и необходимата документация според случая.",
    },
    {
      title: "Предаване и съдействие",
      meta: "След финал",
      description:
        "Предоставяме готовите материали и оставаме на разположение при въпроси/следващи стъпки.",
    },
  ],
} as const;
