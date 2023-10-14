import { useCallback, useEffect, useState } from "react";
import { throttle }                         from "lodash-es";

// Hook
export default function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    const handleResize = useCallback(() => {
        // Set window width/height to state
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }, []);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleResizeThrottled = useCallback(throttle(handleResize, 700), [handleResize]);

    useEffect(() => {
        // Add event listener
        window.addEventListener("resize", handleResizeThrottled);
        // Call handler right away so state gets updated with initial window size
        handleResizeThrottled();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResizeThrottled);
    }, [handleResizeThrottled]); // Empty array ensures that effect is only run on mount
    return windowSize;
}