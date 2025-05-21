import { useMemo } from "react";

const tg = window.Telegram?.WebApp;

export function useTelegram() {
  const onClose = () => {
    if (tg) {
      tg.close();
    }
  };

  const onToggleButton = () => {
    if (tg) {
      if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
      } else {
        tg.MainButton.show();
      }
    }
  };

  const user = tg?.initDataUnsafe?.user;
  const queryId = tg?.initDataUnsafe?.query_id;

  return useMemo(
    () => ({
      tg,
      onToggleButton,
      onClose,
      user,
      queryId,
    }),
    [tg]
  );
}
