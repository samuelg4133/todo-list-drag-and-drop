import { TodoSchemaProps } from "@/validations/todo";
import { Draggable } from "@hello-pangea/dnd";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { Card } from "../card";
import { CardDescription } from "../card/card-description";
import { CardTitle } from "../card/card-title";
import { DragIndicator } from "../icons/drag-indicator";
import { ActionButton } from "./action-button";

type TodoCardProps = {
  item: TodoSchemaProps;
  onRemove: (item: TodoSchemaProps) => void;
  index: number;
};

export function TodoCard({ item, onRemove, index }: TodoCardProps) {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <span className="relative">
          <Card
            className={twMerge(
              "justify-between items-center flex flex-wrap",
              snapshot.isDragging &&
                "shadow-lg border-cyan-200 border-2 border-dashed opacity-90 !top-auto !left-auto"
            )}
            ref={provided.innerRef}
            {...provided.draggableProps}
          >
            <div className="grid gap-0.5">
              <CardTitle>{item.title}</CardTitle>
              {item.description && (
                <CardDescription>{item.description}</CardDescription>
              )}
            </div>
            <aside className="flex flex-wrap items-center gap-2">
              <Link to={`/${item.id}`}>
                <ActionButton variant="blue">
                  <PencilIcon className="size-5" />
                </ActionButton>
              </Link>
              <ActionButton variant="red" onClick={() => onRemove(item)}>
                <TrashIcon className="size-5" />
              </ActionButton>
              <button
                className="ml-2 hover:text-gray-900 text-gray-500 hover:bg-gray-200 rounded-md"
                {...provided.dragHandleProps}
              >
                <DragIndicator />
              </button>
            </aside>
          </Card>
        </span>
      )}
    </Draggable>
  );
}
