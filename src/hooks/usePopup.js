import { popupState } from "@store/popup/atom/popupState";
import { getRandomId } from "@utils/etc";
import { useRecoilState } from "recoil";

const usePopup = () => {
  const [popups, setPopups] = useRecoilState(popupState);

  const removePopup = (id) => {
    setPopups((prev) => {
      let result = prev?.list.filter((popup) => popup.id !== id);

      return {
        ...prev,
        visible: false,
        list: [...result],
      };
    });
  };

  const showPopup = (popup) => {
    const popupId = getRandomId();

    setPopups((prev) => ({
      ...prev,
      visible: true,
      list: [
        ...prev?.list,
        {
          ...popup,
          id: popupId,
        },
      ],
    }));
  };

  return { popups, showPopup, removePopup };
};

export default usePopup;
