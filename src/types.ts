import React from "react";

export type BentoItem = {
  id: number;
  width: number;
  height: number;
  className?: string;
  element: React.ReactNode;
  colSpan?: string;
  rowSpan?: string;
};

export type BentoGridProps = {
  items: BentoItem[];
  gridCols?: number;
  rowHeight?: number;
  gap?: number;
};