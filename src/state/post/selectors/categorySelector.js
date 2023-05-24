import { GetCategoryList } from '@services/chat/postApi';
import { selector } from 'recoil';

export const categoryInfo = selector({
    key: 'categoryInfo',
    get: async () => {
        const response = await GetCategoryList();

        return response;
    },
});
