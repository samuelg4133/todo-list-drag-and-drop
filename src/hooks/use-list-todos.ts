import { TodoSchemaProps } from "@/validations/todo";
import { useQuery } from "@tanstack/react-query";
import { getStorageValue } from "./use-local-storage";

export const useListTodos = () =>
  useQuery({
    retry: false,
    refetchOnWindowFocus: false,
    queryKey: ["todo-list"],
    queryFn: async () => {
      const items = getStorageValue<TodoSchemaProps[]>("todo", []);

      return items;
    },
  });
