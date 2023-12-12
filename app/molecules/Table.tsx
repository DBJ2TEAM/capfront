/** @jsxImportSource @emotion/react */
import { BaseTypes } from "../types"; 

const Table = {
  Wrapper: ({ children, ...props }: BaseTypes) => {
    return (
      <div {...props}>
        {children}
      </div>
    );
  },

  Caption: ({ children, ...props }: BaseTypes) => {
    return (
      <p css={defaultCaptionStyle} {...props}>
        {children}
      </p>
    );
  },

  TableHeader: ({ children, ...props }: BaseTypes) => {
    return (
      <div css={defaultTableHeaderStyle} {...props}>
        {children}
      </div>
    );
  },

  TableBody: ({ children, ...props }: BaseTypes) => {
    return <div {...props}>{children}</div>;
  },

  Row: ({ children, ...props }: BaseTypes) => {
    return (
      <div css={defaultRowStyle} {...props}>
        {children}
      </div>
    );
  },

  Column: ({ children, ...props }: BaseTypes) => {
    return <div {...props}>{children}</div>;
  },

  HeaderCell: ({ children, ...props }: BaseTypes) => {
    return (
      <div css={defaultHeaderStyle} {...props}>
        {children}
      </div>
    );
  },

  Cell: ({ children, ...props }: BaseTypes) => {
    return (
      <div css={defaultCellStyle} {...props}>
        {children}
      </div>
    );
  },
};

export default Table;

const defaultCaptionStyle = {
  paddingBottom: "16px",
  borderBottom: `1px solid gray`,
};

const defaultTableHeaderStyle = {
  display: "flex",
};

const defaultHeaderStyle = {
  backgroundColor: "gray",
  wordBreak: "keep-all" as const,
};

const defaultRowStyle = {
  display: "flex",
};

const defaultCellStyle = {
  wordBreak: "keep-all" as const,
  whiteSpace: "pre-line" as const,
};
