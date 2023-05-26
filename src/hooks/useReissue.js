import React, { useCallback } from 'react';

const useReissue = () => {
    const reissue = useCallback(() => {}, []);
    return { reissue };
};

export default useReissue;
