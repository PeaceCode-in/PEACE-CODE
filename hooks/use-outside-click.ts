import { useEffect, type RefObject } from "react";

type OutsideEvent = MouseEvent | TouchEvent;

/**
 * Runs `handler` when a pointer event happens outside of `ref`.
 * Useful for dismissing popovers/modals.
 */
export function useOutsideClick<T extends HTMLElement>(
  ref: RefObject<T>,
  handler: (event: OutsideEvent) => void,
  enabled: boolean = true,
) {
  useEffect(() => {
    if (!enabled) return;

    const listener = (event: OutsideEvent) => {
      const el = ref.current;
      if (!el) return;

      const target = event.target as Node | null;
      if (!target) return;

      // Ignore events that originate from inside the referenced element.
      if (el.contains(target)) return;

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener, { passive: true });

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler, enabled]);
}


