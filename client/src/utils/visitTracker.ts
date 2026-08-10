const VISITOR_ID_KEY = "maa_asho_visitor_id";

const getVisitorId = () => {
  const existingVisitorId = window.localStorage.getItem(VISITOR_ID_KEY);

  if (existingVisitorId) {
    return existingVisitorId;
  }

  const newVisitorId = window.crypto.randomUUID();
  window.localStorage.setItem(VISITOR_ID_KEY, newVisitorId);

  return newVisitorId;
};

export const trackVisit = async (path: string) => {
  try {
    const payload = {
      visitorId: getVisitorId(),
      path,
      url: window.location.href,
      referrer: document.referrer || "",
      language: navigator.language || "",
      screen: `${window.screen.width}x${window.screen.height}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "",
    };

    await fetch(`${import.meta.env.VITE_API}/api/visits/track`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(payload),
      keepalive: true,
    });
  } catch (error) {
    console.error("Visit tracking failed:", error);
  }
};
