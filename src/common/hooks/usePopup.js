import { popupState } from "@store/popup/atom/popupState";
import { getRandomId } from "@utils/etc";
import { useRecoilState } from "recoil";

const usePopup = () => {
  const [popups, setPopups] = useRecoilState(popupState);

  const removePopup = (id) => {
    setPopups((prev) => prev?.filter((popup) => popup.id !== id));
  };

  const showPopup = (popup) => {
    const popupId = getRandomId();

    setPopups((prev) => [
      ...prev,
      {
        ...popup,
        id: popupId,
      },
    ]);
  };

  return { popups, showPopup, removePopup };
};

export default usePopup;
