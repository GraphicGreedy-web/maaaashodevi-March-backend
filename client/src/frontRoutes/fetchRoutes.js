import {
    getAllTours,
    getContactStatusRoute,
    getReviewsRoute,
    submitContactRoute,
    submitReviewRoute,
} from "../api.js"

const TOURS_CACHE_KEY = "tour-booking:tours-cache";
const TOURS_CACHE_TTL_MS = 1000 * 60 * 30;
const TOURS_CACHE_SCHEMA_VERSION = 2;

const canUseStorage = () => typeof window !== "undefined" && !!window.localStorage;

export const getCachedTours = () => {
    if (!canUseStorage()) return null;

    try {
        const rawCache = window.localStorage.getItem(TOURS_CACHE_KEY);
        if (!rawCache) return null;

        const parsedCache = JSON.parse(rawCache);
        if (!Array.isArray(parsedCache?.tours)) return null;
        if (parsedCache?.schemaVersion !== TOURS_CACHE_SCHEMA_VERSION) return null;

        const isFresh = Date.now() - Number(parsedCache?.updatedAt || 0) < TOURS_CACHE_TTL_MS;
        return {
            tours: parsedCache.tours,
            isFresh,
            cacheTag: parsedCache?.cacheTag || null,
        };
    } catch {
        return null;
    }
};

export const clearToursCache = () => {
    if (!canUseStorage()) return;

    try {
        window.localStorage.removeItem(TOURS_CACHE_KEY);
    } catch {
        // Ignore storage delete failures
    }
};

const setCachedTours = (tours, cacheTag = null) => {
    if (!canUseStorage() || !Array.isArray(tours)) return;

    try {
        window.localStorage.setItem(
            TOURS_CACHE_KEY,
            JSON.stringify({
                schemaVersion: TOURS_CACHE_SCHEMA_VERSION,
                tours,
                updatedAt: Date.now(),
                cacheTag,
            }),
        );
    } catch {
        // Ignore storage write failures
    }
};

export const fetchAllTours = async ({ forceRefresh = false } = {}) => {
    const cachedTours = getCachedTours();

    if (!forceRefresh && cachedTours?.isFresh) {
        return cachedTours.tours;
    }

    const res = await getAllTours();
    const tours = res?.data?.tours ?? [];
    const cacheTag = res?.headers?.["x-tours-cache-tag"] || null;
    setCachedTours(tours, cacheTag);
    return tours;
};
export const fetchContact = async (formData) => {
    const res = await submitContactRoute(formData);
    return res?.data;
}
export const fetchContactStatus = async (contactId) => {
    const res = await getContactStatusRoute(contactId);
    return res?.data;
}
export const fetchReviews = async () => {
    const res = await getReviewsRoute();
    return res?.data?.reviews || [];
}
export const fetchSubmitReview = async (formData) => {
    const res = await submitReviewRoute(formData);
    return res?.data;
}
