import { styles } from "@/src/components/modal/styles";
import { AnimatePresence, MotiView } from "moti";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  isOpen: boolean;
};

const Modal: FC<Props> = ({ children, isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <MotiView
          from={{ translateY: 300, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          exit={{ translateY: 300, opacity: 0 }}
          transition={{ type: "timing", duration: 200 }}
          style={styles.modal}
        >
          {children}
        </MotiView>
      )}
    </AnimatePresence>
  );
};

export { Modal };

