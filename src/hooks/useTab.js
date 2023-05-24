import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const useTab = (initialTab, tabList = []) => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(initialTab);

    const onChangeIndex = useCallback(
        (index, link) => {
            // navigate(link);
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
