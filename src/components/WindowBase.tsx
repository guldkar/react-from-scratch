import React, { useState, useCallback } from "react";

const WindowBase = () => {
  const [position, setPosition] = useState<Position>({ x: 250, y: 250 });
  const [size, setSize] = useState<WindowSize>({ width: 400, height: 300 });


  let initialPosition: Position = {x: 0, y: 0};
 
  const resizeTarget = useCallback((ev: Event) => {
      let event = ev as MouseEvent;
      console.log(event.clientX, event.clientY);
    setSize({
      height: size.height + (event.clientY - initialPosition.y),
      width: size.width + (event.clientX - initialPosition.x),
    });
  }, []);
 
  const moveTarget = useCallback((ev: Event) => {
    let event = ev as MouseEvent;
    console.log(event.clientX, event.clientY, position);
    setPosition({
      x: position.x + (event.clientX - initialPosition.x),
      y: position.y + (event.clientY - initialPosition.y),
    });
  }, []);

  const startMovement = (ev: React.MouseEvent): void => {
    ev.preventDefault();
    initialPosition = { x: ev.clientX, y: ev.clientY };
    document.addEventListener("mousemove", moveTarget, false);
  };

  const stopMovement = (): void => {
    document.removeEventListener("mousemove", moveTarget);
  };

  const startResize = (ev: React.MouseEvent) => {
    initialPosition = { x: ev.clientX, y: ev.clientY };
    console.log(initialPosition)
    document.addEventListener("mousemove", resizeTarget);
  };

  const stopReszie = () => {
    document.removeEventListener("mousemove", resizeTarget);
  };


    const logwindow = (ev: Event) => {
        let event = ev as MouseEvent;
        document.getElementById("this-dumb")!.innerHTML =`x: ${event.clientX}, y: ${event.clientY} `
    }

    const logDiv = (ev: Event) => {
        let event = ev as MouseEvent;
        document.getElementById("this-dumb")!.innerHTML =`x: ${event.clientX}, y: ${event.clientY} `
    }

    const onEnter = (ev: React.MouseEvent) => {
        document.removeEventListener("mousemove",logwindow);
        document.addEventListener("mousemove", logDiv);
    }

    const onLeave = (ev: React.MouseEvent) => {
        document.removeEventListener("mousemove", logDiv);
        document.addEventListener("mousemove", logwindow);
    }

  return (
    <div
      style={{
        position: "absolute",
        top: position.y,
        left: position.x,
        width: size.width,
        height: size.height,
        background: "magenta",
      }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div
        style={{
          width: "100%",
          height: 25,
          background: "blue",
        }}
        onMouseDown={startMovement}
        onMouseUp={stopMovement}
      ></div>

      <div id="this-dumb">
      </div>
      <div
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          height: 20,
          width: 20,
          background: "black",
        }}
        onMouseDown={startResize}
        onMouseUp={stopReszie}
      ></div>
    </div>
  );
};

export default WindowBase;

export interface Position {
  x: number;
  y: number;
}

interface WindowSize {
  height: number;
  width: number;
}
