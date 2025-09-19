import React from 'react';
import { Reorder } from 'framer-motion';

/**
 * Type definition for a single grid item.
 * Each item needs a unique ID and the component to render.
 */
export interface GridItem {
  id: number | string;
  component: React.ReactNode;
}

/**
 * Props for the BentoGrid component.
 * It takes an array of items and a function to update their order.
 */
interface BentoGridProps {
  items: GridItem[];
  setItems: React.Dispatch<React.SetStateAction<GridItem[]>>;
}

/**
 * A responsive, draggable, and reorderable grid component
 * that uses Framer Motion's `Reorder` components.
 */
const BentoGrid: React.FC<BentoGridProps> = ({ items, setItems }) => {
  return (
    // Reorder.Group is the main container for draggable items.
    <Reorder.Group
      axis="y" // Reordering is based on vertical movement.
      values={items} // The array of items to be reordered.
      onReorder={setItems} // The function that updates the state when an item is dropped.
      className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4" // Responsive grid layout.
    >
      {items.map((item) => (
        // Reorder.Item represents a single draggable card.
        <Reorder.Item
          key={item.id}
          value={item} // This links the DOM element to the item in the `values` array.
          layout // Enables smooth animations when the grid reorders.
          transition={{ type: 'spring', stiffness: 300, damping: 30 }} // Smooth, springy animation.
          // Animation props for hover and drag states.
          whileHover={{ scale: 1.03, zIndex: 10 }}
          whileDrag={{
            scale: 1.05,
            zIndex: 10,
            boxShadow: '0px 15px 30px rgba(0,0,0,0.2)',
          }}
        >
          {/* Render the actual card component here. */}
          {item.component}
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};

export default BentoGrid;