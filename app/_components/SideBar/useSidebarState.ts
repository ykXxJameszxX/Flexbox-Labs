import { useState, useCallback } from "react";
const useSidebarActiveTab = () => {
  const [switchState, setSwitchState] = useState(0);
  const [showPanel, setShowPanel] = useState(true);

  const handleSwitch = useCallback(
    (dataSwitch: number) => {
      setSwitchState(dataSwitch);

      if (!showPanel) setShowPanel(true);
    },
    [showPanel],
  );

  const handlePanelToggle = useCallback(() => {
    setShowPanel((prev) => !prev);
  }, []);

  return {
    switchState,
    handleSwitch,
    showPanel,
    handlePanelToggle,
  };
};

export default useSidebarActiveTab;
