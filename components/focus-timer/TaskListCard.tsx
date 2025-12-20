"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { CheckCircle2, Circle, Plus, ListTodo } from "lucide-react";

const BRAND_BLUE = "#1D2D50";

interface TaskListCardProps {
  onAddTask: () => void;
  variant?: "light" | "dark";
}

const demoTasks = [
  { id: 1, text: "Finish Project API", completed: true },
  { id: 2, text: "Read Research Paper", completed: false },
  { id: 3, text: "Review Code Changes", completed: false },
  { id: 4, text: "Update Documentation", completed: true },
  { id: 5, text: "Prepare Presentation", completed: false },
];

export function TaskListCard({ onAddTask, variant = "light" }: TaskListCardProps) {
  const [visibleTasks, setVisibleTasks] = useState<typeof demoTasks>([]);
  const isLight = variant === "light";

  // Animate tasks appearing one by one
  useEffect(() => {
    setVisibleTasks([]);
    demoTasks.forEach((task, index) => {
      setTimeout(() => {
        setVisibleTasks((prev) => [...prev, task]);
      }, 300 * (index + 1));
    });
  }, []);

  const completedCount = demoTasks.filter((t) => t.completed).length;

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div
            className="p-2 rounded-lg"
            style={{ background: isLight ? `${BRAND_BLUE}10` : "rgba(245, 232, 199, 0.1)" }}
          >
            <ListTodo className="w-5 h-5" style={{ color: isLight ? BRAND_BLUE : "#F5E8C7" }} />
          </div>
          <h3 
            className="text-lg font-semibold"
            style={{ color: isLight ? "#111827" : "#F5E8C7" }}
          >
            Task Manager
          </h3>
        </div>
        <span
          className="text-xs font-medium px-2 py-1 rounded-full"
          style={{
            background: isLight ? "rgba(34, 197, 94, 0.1)" : "rgba(34, 197, 94, 0.2)",
            color: "#22C55E",
          }}
        >
          {completedCount}/{demoTasks.length} Done
        </span>
      </div>

      {/* Progress bar */}
      <div 
        className="h-1.5 rounded-full mb-4 overflow-hidden"
        style={{ background: isLight ? `${BRAND_BLUE}10` : "rgba(245, 232, 199, 0.1)" }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: "#22C55E" }}
          initial={{ width: 0 }}
          animate={{ width: `${(completedCount / demoTasks.length) * 100}%` }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>

      {/* Task list */}
      <div className="flex-grow space-y-2 overflow-hidden">
        <AnimatePresence>
          {visibleTasks.map((task, index) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, x: -20, height: 0 }}
              animate={{ opacity: 1, x: 0, height: "auto" }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center gap-3 p-2.5 rounded-lg transition-all"
              style={{
                background: isLight 
                  ? (task.completed ? "rgba(34, 197, 94, 0.05)" : `${BRAND_BLUE}05`)
                  : (task.completed ? "rgba(34, 197, 94, 0.1)" : "rgba(245, 232, 199, 0.05)"),
                border: `1px solid ${isLight ? `${BRAND_BLUE}10` : "rgba(245, 232, 199, 0.1)"}`,
              }}
            >
              {task.completed ? (
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
              ) : (
                <Circle 
                  className="w-5 h-5 flex-shrink-0" 
                  style={{ color: isLight ? `${BRAND_BLUE}40` : "rgba(245, 232, 199, 0.4)" }}
                />
              )}
              <span
                className={`text-sm flex-grow ${task.completed ? "line-through" : ""}`}
                style={{ 
                  color: task.completed 
                    ? (isLight ? "#9CA3AF" : "rgba(245, 232, 199, 0.5)")
                    : (isLight ? "#374151" : "#F5E8C7")
                }}
              >
                {task.text}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Add task button */}
      <motion.button
        className="mt-4 w-full py-2.5 rounded-lg flex items-center justify-center gap-2 font-medium text-sm transition-all"
        style={{
          background: isLight ? `${BRAND_BLUE}10` : "rgba(245, 232, 199, 0.1)",
          color: isLight ? BRAND_BLUE : "#F5E8C7",
          border: `1px dashed ${isLight ? `${BRAND_BLUE}30` : "rgba(245, 232, 199, 0.3)"}`,
        }}
        whileHover={{ 
          background: isLight ? `${BRAND_BLUE}15` : "rgba(245, 232, 199, 0.15)",
          scale: 1.01,
        }}
        whileTap={{ scale: 0.99 }}
        onClick={onAddTask}
      >
        <Plus className="w-4 h-4" />
        Add Task
      </motion.button>
    </div>
  );
}

