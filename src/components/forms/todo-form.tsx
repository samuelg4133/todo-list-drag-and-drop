import { TodoSchemaProps, todoSchema } from "@/validations/todo";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "../button";
import { Input } from "../input";

type TodoFormProps = {
  onSubmit: (data: TodoSchemaProps) => void;
  defaultValues?: Partial<TodoSchemaProps>;
};

export function TodoForm({ onSubmit, defaultValues }: TodoFormProps) {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<TodoSchemaProps>({
    resolver: todoSchema,
    mode: "onChange",
    defaultValues,
  });

  return (
    <form
      className="grid gap-6 bg-white border border-neutral-300 rounded-lg pt-6 lg:w-2/3"
      onSubmit={handleSubmit((data) => onSubmit(data), console.error)}
    >
      <fieldset className="grid gap-4 px-6">
        <legend className="text-gray-700 text-xl font-semibold mb-6">
          Dados do To Do
        </legend>
        <Input
          label="Título"
          required
          {...register("title")}
          error={errors?.title?.message}
        />
        <Input
          label="Descrição"
          {...register("description")}
          error={errors?.description?.message}
        />
      </fieldset>
      <footer className="px-6 py-4 flex justify-end gap-4 border-t border-neutral-300 bg-slate-50 rounded-b-lg">
        <Link to="/">
          <Button type="reset" size="base" variant="secondary">
            Cancelar
          </Button>
        </Link>
        <Button type="submit" size="base" loading={isSubmitting}>
          Salvar
        </Button>
      </footer>
    </form>
  );
}
