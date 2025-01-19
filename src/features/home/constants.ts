export const TAGS = {
  HEALTH: { type: "health", label: "건강" },
  INTELLECTUAL: { type: "intellectual", label: "지력" },
  HABIT: { type: "habit", label: "습관" },
  FINANCE: { type: "finance", label: "자산" }
} as const;

export const TIMES = {
  EVERYDAY: { type: "everyday", label: "매주 평일" },
  WEEKDAY: { type: "weekday", label: "월화수목금" },
  WEEKEND: { type: "weekend", label: "주말" },
  DAILY: { type: "daily", label: "매일" }
} as const;
