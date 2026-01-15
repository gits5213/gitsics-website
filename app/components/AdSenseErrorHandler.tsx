"use client";

import { useEffect } from "react";

export default function AdSenseErrorHandler() {
  useEffect(() => {
    // Handle unhandled promise rejections from AdSense (common before approval)
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason?.toString() || "";
      const errorMessage = event.reason?.message || "";
      const combinedMessage = `${reason} ${errorMessage}`.toLowerCase();
      
      // Suppress AdSense-related promise rejections
      if (
        combinedMessage.includes("message channel closed") ||
        combinedMessage.includes("asynchronous response") ||
        combinedMessage.includes("runtime.lasterror") ||
        combinedMessage.includes("adsbygoogle") ||
        combinedMessage.includes("listener indicated an asynchronous response")
      ) {
        event.preventDefault();
        // Optionally log a cleaner message in development
        if (process.env.NODE_ENV === "development") {
          // Suppress completely in dev
          return;
        }
        return;
      }
    };

    // Handle general errors that might be AdSense-related
    const handleError = (event: ErrorEvent) => {
      const message = (event.message || "").toLowerCase();
      
      // Suppress AdSense script errors
      if (
        message.includes("adsbygoogle") ||
        message.includes("runtime.lasterror") ||
        message.includes("message channel closed") ||
        message.includes("asynchronous response")
      ) {
        event.preventDefault();
        if (process.env.NODE_ENV === "development") {
          return;
        }
        return;
      }
    };

    // Also catch errors from console.error (some extensions log here)
    const originalConsoleError = console.error;
    console.error = (...args: any[]) => {
      const message = args.join(" ").toLowerCase();
      if (
        message.includes("message channel closed") ||
        message.includes("asynchronous response") ||
        message.includes("runtime.lasterror") ||
        message.includes("adsbygoogle")
      ) {
        // Suppress in development
        if (process.env.NODE_ENV === "development") {
          return;
        }
      }
      originalConsoleError.apply(console, args);
    };

    // Add event listeners
    window.addEventListener("unhandledrejection", handleUnhandledRejection, true);
    window.addEventListener("error", handleError, true);

    // Cleanup
    return () => {
      window.removeEventListener("unhandledrejection", handleUnhandledRejection, true);
      window.removeEventListener("error", handleError, true);
      console.error = originalConsoleError;
    };
  }, []);

  return null;
}
