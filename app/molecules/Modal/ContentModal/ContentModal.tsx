/** @jsxImportSource @emotion/react */
import { ContentModalType } from "./ContentModalAtom";
import Modal from "../Modal";

export default function ContentModal({
  title: Title = null,
  content: Component = null,
}: Omit<ContentModalType, "isContentModalOpen">) {
  return (
    <Modal open={!!Component}>
      <section css={wrapper}>
        {Title && <Title />}
        {Component && <Component />}
      </section>
    </Modal>
  );
}

const wrapper = {
  maxHeight: "95%",
  backgroundColor: "white",
  overflowY: "auto" as const,
  borderRadius: "4px",
};
