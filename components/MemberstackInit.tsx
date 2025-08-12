"use client";
import { useEffect } from "react";

export default function MemberstackInit() {
  useEffect(() => {
    // Nur im Browser laden (kein SSR, kein Prerender)
    (async () => {
      const memberstackDOM = (await import("@memberstack/dom")).default;
      memberstackDOM.init({ publicKey: "pk_89825d0662d17a373e2b" });
    })();
  }, []);
  return null;
}
