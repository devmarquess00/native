import { useState } from "react";

export function useAdd() {
  const [buttonExitValue, setButtonExitValue] = useState<boolean>(false);
  const [buttonEntriesValue, setButtonEntriesValue] = useState<boolean>(true);

  const toggleButtonEntriesValue = () => {
    setButtonEntriesValue((prev) => !prev);
    setButtonExitValue(false);
  };

  const toggleButtonExitValue = () => {
    setButtonExitValue((prev) => !prev);
    setButtonEntriesValue(false);
  };

  return {
    buttonExitValue,
    buttonEntriesValue,
    toggleButtonEntriesValue,
    toggleButtonExitValue,
  };
}
