const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"] as const;

/**
 * 현재 날짜를 'YY.MM.DD 요일' 형식으로 반환
 * @returns {string} 예: '25.01.06 월'
 */
export const formatDate = (date = new Date()): string => {
  const year = date.getFullYear().toString().slice(2);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const weekday = WEEKDAYS[date.getDay()];

  return `${year}.${month}.${day} ${weekday}`;
};

/**
 * 자정까지 남은 시간을 'HH:MM:SS' 형식으로 반환
 * @returns {string} 예: '02:42:12'
 */
export const getRemainingTimeUntilMidnight = (): string => {
  const now = new Date();
  const midnight = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1, // 다음날
    0, // 0시
    0, // 0분
    0, // 0초
    0 // 0밀리초
  );

  const remainingMs = midnight.getTime() - now.getTime();

  const hours = Math.floor(remainingMs / (1000 * 60 * 60));
  const minutes = Math.floor((remainingMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingMs % (1000 * 60)) / 1000);

  const formatNumber = (num: number): string => num.toString().padStart(2, "0");

  return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`;
};
