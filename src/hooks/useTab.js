import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useTab = (initialTab, tabList = []) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(initialTab);

  useEffect(() => {
    navigate(tabList[currentIndex].link);
  }, [currentIndex]);

  const onChangeIndex = useCallback(
    (index, link) => {
      setCurrentIndex(index);
    },
    [currentIndex]
  );
  return {
    currentItem: tabList[currentIndex],
    changeItem: onChangeIndex,
  };
};

export default useTab;
