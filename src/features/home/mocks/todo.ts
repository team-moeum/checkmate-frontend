import { TodoItemType, TAGS, TIMES } from "../components/Todo/type";

export const SAMPLE_TODO_ITEMS: TodoItemType[] = [
  {
    id: "1",
    tag: TAGS.HEALTH,
    title: "아침운동가기",
    time: TIMES.EVERYDAY,
    isCompleted: false
  },
  {
    id: "2",
    tag: TAGS.INTELLECTUAL,
    title: "아침 독서(책10쪽)",
    time: TIMES.WEEKDAY,
    isCompleted: false
  },
  {
    id: "3",
    tag: TAGS.HABIT,
    title: "저녁 공부하기",
    time: TIMES.WEEKEND,
    isCompleted: false
  },
  {
    id: "4",
    tag: TAGS.FINANCE,
    title: "사고싶은거 1개씩만 사고 기록하기",
    time: TIMES.DAILY,
    isCompleted: false
  },
  {
    id: "5",
    tag: TAGS.FINANCE,
    title: "오늘의 경제 뉴스레터 읽어보기",
    time: TIMES.WEEKDAY,
    isCompleted: false
  }
];
