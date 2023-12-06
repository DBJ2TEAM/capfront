import { AllHTMLAttributes, ButtonHTMLAttributes } from "react";
import { Theme } from "@emotion/react";
import { Interpolation } from "@emotion/serialize";

export interface BaseTypes extends AllHTMLAttributes<T> {
  css?: Interpolation<Theme>;
  onChange?: React.ChangeEventHandler<T>;
  children?: React.ReactNode;
}

export interface ButtonTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  css?: Interpolation<Theme>;
  customStyle?: string;
}

export interface Structure<T> {
  id: keyof T;
  label: string;
  isChangeable?: boolean;
  parser?: (value: T) => React.ReactNode;
  columnStyle?: { [key: string]: string | undefined };
}
