import toastify from "react-hot-toast";

import { CustomToast, ToastMessageProps } from "./toast";

export const makeToast = (props: ToastMessageProps) =>
  toastify.custom((t) => (
    <CustomToast
      {...props}
      onClose={() => toastify.dismiss(t.id)}
      visible={t.visible}
    />
  ));
