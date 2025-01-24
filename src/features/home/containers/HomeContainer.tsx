import { useMemo, useState } from "react";
import { TodoItemType } from "@moeum/features/home/components/Todo/type";
import { HomeScreen } from "@moeum/features/home/HomeScreen";
import { SAMPLE_TODO_ITEMS } from "@moeum/features/home/mocks/todo";

export const HomeContainer = () => {
  const [todo, setTodo] = useState<TodoItemType[]>(SAMPLE_TODO_ITEMS);
  const progressCount = useMemo(() => todo.filter(item => item.isCompleted).length, [todo]);

  const handleUpdateTodo = (value: TodoItemType[]) => {
    setTodo(value);
  };

  return <HomeScreen todo={todo} onUpdateTodo={handleUpdateTodo} progressCount={progressCount} />;
};
