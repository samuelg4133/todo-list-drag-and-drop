import { promiser } from "@/utils/helpers/promiser";
import { TodoSchemaProps } from "@/validations/todo";
import { useMutation } from "@tanstack/react-query";
import { getStorageValue, setStorageValue } from "./use-local-storage";

export const useCreateToDo = () =>
  useMutation<void, Error, TodoSchemaProps, unknown>({
    mutationFn: async (data) => {
      const items = getStorageValue<TodoSchemaProps[]>("todo", []);

      const titleExists = items.find(
        (item) =>
          item.title.toUpperCase() === data.title.toUpperCase() ||
          item.id === data.id
      );

      if (titleExists) throw new Error("Título já existe");

      items.push(data);

      await promiser(() => setStorageValue("todo", items), 2000);
    },
  });
