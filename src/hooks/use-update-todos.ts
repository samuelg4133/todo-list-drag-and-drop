import { TodoSchemaProps } from "@/validations/todo";
import { useMutation } from "@tanstack/react-query";
import { getStorageValue, setStorageValue } from "./use-local-storage";

export const useUpdateToDo = () =>
  useMutation<void, Error, TodoSchemaProps, unknown>({
    mutationFn: async (data) => {
      const items = getStorageValue<TodoSchemaProps[]>("todo", []);

      const itemIndex = items.findIndex((item) => item.id === data.id);

      if (itemIndex === -1) throw new Error("Registro não encontrado");

      const existsByTitle = items.find(
        (item) => item.title.toUpperCase() === data.title.toUpperCase()
      );

      if (existsByTitle) {
        if (existsByTitle.id !== data.id) throw new Error("Título já existe");
      }

      items[itemIndex] = data;

      setStorageValue("todo", items);
    },
  });
