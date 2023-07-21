import React, { useState, useCallback } from "react";

const WindowBase = () => {
  const [position, setPosition] = useState<Position>({ x: 250, y: 250 });
  let initialPosition: Position;

  const startMovement = (ev: React.MouseEvent): void => {
    ev.preventDefault();
    initialPosition = { x: ev.clientX, y: ev.clientY };
    document.addEventListener("mousemove", moveTarget, false);
  };

  const stopMovement = (ev: React.MouseEvent): void => {
    document.removeEventListener("mousemove", moveTarget);
  };

  const moveTarget = useCallback((ev: Event) => {
    let event = ev as MouseEvent;
    setPosition({
      x: position.x + (event.clientX - initialPosition.x),
      y: position.y + (event.clientY - initialPosition.y),
    });
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: position.y,
        left: position.x,
        width: 250,
        height: 250,
        background: "magenta",
      }}
    >
      <div
        style={{
          width: "100%",
          height: 25,
          background: "blue"
        }}
        onMouseDown={startMovement}
        onMouseUp={stopMovement}
      ></div>
      <div
      style={{
        position: "absolute",
        right: 0,
        bottom: 0,
        height: 20,
        width: 20,
        background: 'black'
      }}
      >

      </div>
    </div>
  );
};

export default WindowBase;

export interface Position {
  x: number;
  y: number;
}
