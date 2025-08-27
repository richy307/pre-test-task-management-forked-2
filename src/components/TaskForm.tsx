import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";
import { Task } from "../types/task";

export const TaskForm: React.FC = () => {
  const { addTask } = useTasks();
  const [formData, setFormData] = useState<Omit<Task, "id" | "createdAt">>({
    title: "",
    description: "",
    status: "todo",
    priority: "medium",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      alert("任務標題不能為空！");
      return;
    }
    addTask(formData);
    // 重設表單
    setFormData({
      title: "",
      description: "",
      status: "todo",
      priority: "medium",
    });
  };

  return (
    <div className="my-4">
      <h2 className="text-lg font-bold mb-2">新增任務</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div>
          <label htmlFor="title" className="block">
            標題：
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="border border-gray-300 p-1 w-full"
            maxLength={100}
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block">
            描述：
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description || ""}
            onChange={handleChange}
            className="border border-gray-300 p-1 w-full"
            rows={3}
          />
        </div>

        <div className="flex gap-4">
          <div>
            <label htmlFor="status" className="block">
              狀態：
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="border border-gray-300 p-1"
            >
              <option value="todo">待辦</option>
              <option value="in-progress">進行中</option>
              <option value="done">已完成</option>
            </select>
          </div>

          <div>
            <label htmlFor="priority" className="block">
              優先權：
            </label>
            <select
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="border border-gray-300 p-1"
            >
              <option value="low">低</option>
              <option value="medium">中</option>
              <option value="high">高</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded mt-2 w-full"
        >
          新增任務
        </button>
      </form>
    </div>
  );
};