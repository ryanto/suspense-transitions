import { Loading } from "./loading";
import { useTimeout } from "../lib/use-timeout";
import { useState } from "react";

export const LoadingPopup = ({ children, delayMs }) => {
  let [isShowing, setIsShowing] = useState(false);
  useTimeout(() => setIsShowing(true), delayMs);

  return (
    isShowing && (
      <div className="fixed bottom-0 right-0 z-20 flex items-center justify-center px-4 py-2 mb-4 mr-4 text-white rounded shadow bg-emerald-600">
        <Loading className="w-4 h-4 mr-2 animate-spin" />
        {children}
      </div>
    )
  );
};
