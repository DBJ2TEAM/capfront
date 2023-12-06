import { atom } from "jotai";

export type ContentModalType = {
  isContentModalOpen: boolean;
  title?: (() => JSX.Element) | null;
  content: (() => JSX.Element | null) | null;
};

export const contentModalState = {
  isContentModalOpen: true,
  title: null,
  content: null,
};

export const contentModalAtom = atom<ContentModalType>(
  contentModalState
);
