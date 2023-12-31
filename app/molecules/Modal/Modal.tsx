/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import { createPortal } from "react-dom";

export interface PropTypes {
  open: boolean;
  children: React.ReactNode;
}

export default function Modal({ open, children }: PropTypes) {
  useEffect(() => {
    if (open) {
      document.body.classList.add("modal-wrapper-opened");

      return () => {
        document.body.classList.remove("modal-wrapper-opened");
      };
    }
  }, [open]);

  if (!open) return null;

  return createPortal(
    <div css={modalWrapper} tabIndex={0}>
      <div css={contentWrapper}>{children}</div>
    </div>,
    document.body
  );
}

const modalWrapper = {
  position: "fixed" as const,
  top: "0",
  left: "0",
  zIndex: "999",
  display: "flex",
  width: "100%",
  height: "100%",
  backgroundColor: `rgba(0, 0, 0, 0.5)`,
};

const contentWrapper = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
};
``