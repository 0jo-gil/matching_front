import { useRecoilState } from "recoil";

import { toastState } from "../../store/toast/atom/toast";
import { getRandomId } from "../utils/etc";

const useToast = () => {
  const [toasts, setToasts] = useRecoilState(toastState);

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const firedToast = (toast) => {
    const toastId = getRandomId();

    setToasts((prev) => [
      ...prev,
      {
        ...toast,
        id: toastId,
        duration: toast.duration ?? 1000,
        type: toast.type,
      },
    ]);

    console.log(toast.type);

    if (toast.type === "login") return;

    setTimeout(() => removeToast(toastId), 500 + (toast.duration ?? 1000));
  };

  return { toasts, firedToast };
};

export default useToast;
