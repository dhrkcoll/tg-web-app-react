import { useEffect } from "react";

export const useTelegramButton = (text, isVisible) => {
  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      if (isVisible) {
        window.Telegram.WebApp.MainButton.show();
        window.Telegram.WebApp.MainButton.setParams({ text });
      } else {
        window.Telegram.WebApp.MainButton.hide();
      }
    }
  }, [text, isVisible]);
};
