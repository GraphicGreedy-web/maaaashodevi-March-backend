import { useEffect } from "react";
import {
  getCachedTours,
  fetchAllTours,
  fetchContact,
  fetchContactStatus,
  fetchReviews,
  fetchSubmitReview,
} from "../frontRoutes/fetchRoutes.js";
import { useState } from 'react';
export const getToursHook = () => {
  const cachedTours = getCachedTours();
  const [tours, setTours] = useState(cachedTours?.tours ?? []);

  useEffect(() => {
    let isMounted = true;

    if (cachedTours?.tours?.length) {
      setTours(cachedTours.tours);
    }

    fetchAllTours({ forceRefresh: true }).then((freshTours) => {
      if (!isMounted) return;
      setTours(freshTours ?? []);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return tours
}
export const useContactHook = () => {
  const submitContact = async (formData) => {
    return await fetchContact(formData)
  };
  return submitContact;
}
export const useContactStatusHook = () => {
  const fetchStatus = async (contactId) => {
    return await fetchContactStatus(contactId);
  };

  return fetchStatus;
}
export const getReviewsHook = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetchReviews().then(setReviews);
  }, []);
  return { reviews, setReviews };
}
export const useReviewHook = () => {
  const submitReview = async (formData) => {
    return await fetchSubmitReview(formData);
  };
  return submitReview;
}
