import { Button } from "@/components/button";
import { TodoCard } from "@/components/todo-card";
import { Wrapper } from "@/components/wrapper";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { TodoSchemaProps } from "@/validations/todo";
import { Link } from "react-router-dom";

import { RenderIf } from "@/components/render-if";
import {
  DragDropContext,
  Droppable,
  OnDragEndResponder,
} from "@hello-pangea/dnd";

export default function TodoList() {
  const [items, setItems] = useLocalStorage<TodoSchemaProps[]>("todo", []);

  const handleRemove = (data: TodoSchemaProps) => {
    setItems((state) => state.filter((item) => item.id !== data.id));
  };

  const handleDragEnd: OnDragEndResponder = (result) => {
    if (!result.destination) return;
    setItems((state) => {
      if (!result.destination) return state;

      const array = Array.from(state);
      const [removed] = array.splice(result.source.index, 1);
      array.splice(result.destination.index, 0, removed);

      return array;
    });
  };

  return (
    <Wrapper.Root>
      <Wrapper.Header>
        <Wrapper.HeaderTitle
          title="Lista de To Do"
          subtitle="Filtre para visualizar os dados"
        />
        <Wrapper.TopButtons>
          <Link to="/create">
            <Button type="button">Criar um To Do</Button>
          </Link>
        </Wrapper.TopButtons>
      </Wrapper.Header>
      <RenderIf condition={!!items.length} fallback={<p>Lista vazia</p>}>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="card" type="list" direction="vertical">
            {(provided) => (
              <div
                className="relative grid w-full gap-6 bg-gray-100 shadow-sm border border-gray-300 p-4 rounded-xl lg:w-2/3"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {items?.map((item, index) => (
                  <TodoCard
                    index={index}
                    item={item}
                    key={item.id}
                    onRemove={handleRemove}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </RenderIf>
    </Wrapper.Root>
  );
}
