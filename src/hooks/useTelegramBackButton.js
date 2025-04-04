import { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useTelegram } from "./useTelegram.js";

const useBackButton = () => {
  const { tg } = useTelegram();
  const navigate = useNavigate();

  const onClickBackButton = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  useEffect(() => {
    if (!window.Telegram || !tg) {
      return;
    }

    const backButton = tg.BackButton;

    backButton.show();
    backButton.onClick(onClickBackButton);

    return () => {
      backButton.hide();
      backButton.offClick(onClickBackButton);
    };
  }, [tg, onClickBackButton]);
};

export default useBackButton;
