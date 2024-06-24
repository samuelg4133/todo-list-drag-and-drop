import { Breadcrumb } from "@/components/breadcrumb";
import { TodoForm } from "@/components/forms/todo-form";
import { makeToast } from "@/components/toast";
import { Wrapper } from "@/components/wrapper";
import { useCreateToDo } from "@/hooks/use-create-todo";
import { TodoSchemaProps } from "@/validations/todo";
import { useNavigate } from "react-router-dom";

import { v4 } from "uuid";

export default function CreateTodo() {
  const push = useNavigate();
  const newId = v4();

  const { mutateAsync: createToDo } = useCreateToDo();

  const handleCreate = async (data: TodoSchemaProps) => {
    await createToDo(data, {
      onError: (error) => {
        const message =
          error instanceof Error ? error.message : "Erro ao criar To Do.";

        makeToast({
          message,
          title: "Erro!",
          type: "error",
        });
      },
      onSuccess: () => {
        makeToast({
          message: "To Do criado com sucesso.",
          title: "Sucesso!",
          type: "success",
        });
        push("/");
      },
    });
  };

  return (
    <Wrapper.Root>
      <Wrapper.Header>
        <Breadcrumb
          items={[
            {
              to: "/create",
              value: "Criar To Do",
            },
          ]}
        />
      </Wrapper.Header>

      <TodoForm
        onSubmit={handleCreate}
        defaultValues={{
          id: newId,
        }}
      />
    </Wrapper.Root>
  );
}
