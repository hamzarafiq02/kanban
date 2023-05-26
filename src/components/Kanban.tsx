import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import mockData from "../Data";
import Cards from "./Cards";
import "../Kanban.css";

const Kanban: React.FC = () => {
  const [data, setData] = useState(mockData);

  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
      const destinationColIndex = data.findIndex(
        (e) => e.id === destination.droppableId
      );

      const sourceCol = data[sourceColIndex];
      const destinationCol = data[destinationColIndex];

      const sourceTask = [...sourceCol.tasks];
      const destinationTask = [...destinationCol.tasks];

      const [removed] = sourceTask.splice(source.index, 1);
      destinationTask.splice(destination.index, 0, removed);

      data[sourceColIndex].tasks = sourceTask;
      data[destinationColIndex].tasks = destinationTask;

      setData(data);
    }
  };

  const handleDeleteCard = (sectionId: string, taskId: string) => {
    const sectionIndex = data.findIndex((e) => e.id === sectionId);
    const section = data[sectionIndex];
    const taskIndex = section.tasks.findIndex((task) => task.id === taskId);

    const updatedTasks = [...section.tasks];
    updatedTasks.splice(taskIndex, 1);

    const updatedSection = {
      ...section,
      tasks: updatedTasks,
    };

    const updatedData = [...data];
    updatedData[sectionIndex] = updatedSection;

    setData(updatedData);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="activity">
        {data.map((section) => (
          <Droppable key={section.id} droppableId={section.id}>
            {(provided) => (
              <div
                {...provided.droppableProps}
                className="activity__section"
                ref={provided.innerRef}
              >
                <div className="activity__section__title">{section.title}</div>
                <div className="activity__section__content">
                  {section.tasks.map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            ...provided.draggableProps.style,
                            opacity: snapshot.isDragging ? "0.5" : "1",
                          }}
                        >
                          <Cards
                            onDelete={() => handleDeleteCard(section.id, task.id)}
                          >
                            {task.title}
                          </Cards>
                        </div>
                      )}
                    </Draggable>
                  ))}
                </div>
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default Kanban;
