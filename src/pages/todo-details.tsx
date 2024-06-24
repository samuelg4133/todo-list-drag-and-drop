import { Breadcrumb } from "@/components/breadcrumb";
import { TodoForm } from "@/components/forms/todo-form";
import { makeToast } from "@/components/toast";
import { Wrapper } from "@/components/wrapper";
import { getStorageValue } from "@/hooks/use-local-storage";
import { useUpdateToDo } from "@/hooks/use-update-todos";
import { TodoSchemaProps } from "@/validations/todo";
import { useNavigate, useParams } from "react-router-dom";

export default function TodoDetails() {
  const { id } = useParams<{ id: string }>();

  const item = getStorageValue<TodoSchemaProps[]>("todo", []).find(
    (item) => item.id === id
  );

  const push = useNavigate();

  const { mutateAsync: updateToDo } = useUpdateToDo();

  const handleUpdate = async (data: TodoSchemaProps) => {
    await updateToDo(data, {
      onError: (error) => {
        const message =
          error instanceof Error ? error.message : "Erro ao atualizar.";

        makeToast({
          message,
          title: "Erro!",
          type: "error",
        });
      },
      onSuccess: () => {
        makeToast({
          message: "To Do atualizado com sucesso.",
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
              to: `/${id}`,
              value: "Detalhes",
            },
          ]}
        />
      </Wrapper.Header>
      <TodoForm onSubmit={handleUpdate} defaultValues={item} />
    </Wrapper.Root>
  );
}
