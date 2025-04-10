"use client";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

const ThemeProvider = ({ children }) => {
  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0,
  });

  const getCursorPosition = useCallback( (e) => {
    setCursorPosition({
      x: e.clientX - (CURSOR_SIZE / 2),
      y: e.clientY - (CURSOR_SIZE / 2),
    })
  }, [cursorPosition]);

  useEffect(() => {
    window.addEventListener("mousemove", getCursorPosition);
    return () => {
      window.removeEventListener("mousemove", getCursorPosition);
    };
  }, []);

  const CURSOR_SIZE = 25;

  return (
    <div className="h-screen overflow-hidden overflow-y-auto relative">
      <Cursor
        style={{
          width: CURSOR_SIZE,
          height: CURSOR_SIZE,
          top: `${cursorPosition.y}px`,
          left: `${cursorPosition.x}px`,
        }}
      />
      {children}
    </div>
  );
};

export default ThemeProvider;

const Cursor = styled.div`
  position: absolute;
  border: 1px solid var(--color-foreground);
  border-radius: 50%;
  z-index: 9999999;
  pointer-events: none;
`;
