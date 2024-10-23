import { create } from "zustand";

type Store = {
  // fields declaration
  similar_venues?: any[];
  social_share?: any[];
  venue: any;
  fast_enquiry?: any;
  country_long?: string;
  current_user?: any;
  breadcrumb: any[];

  // setters declaration
  setSimilarVenues: (similar_venues: any[]) => void;
  setSocialShare: (social_share: any[]) => void;
  setVenue: (venue: any) => void;
  setFastEnquiry: (fast_enquiry: any) => void;
  setCountryLong: (country_long: string) => void;
  setCurrentUser: (current_user: any) => void;
  setBreadCrumb: (breadcrumbs: any[]) => void;
  setVenueFavourite: (favourite: boolean) => void;
};

export const useVenueDetailStore = create<Store>()((set) => ({
  // field default values
  similar_venues: [],
  social_share: [],
  venue: null,
  fast_enquiry: null,
  country_long: "",
  current_user: null,
  breadcrumb: [],

  // setters implementation
  setSimilarVenues: (similar_venues: any[]) => {
    set((state) => ({ ...state, similar_venues }));
  },
  setSocialShare: (social_share: any[]) => {
    set((state) => ({ ...state, social_share }));
  },
  setVenue: (venue: any) => {
    set((state) => ({ ...state, venue }));
  },
  setFastEnquiry: (fast_enquiry: any) => {
    set((state) => ({ ...state, fast_enquiry }));
  },
  setCountryLong: (country_long: string) => {
    set((state) => ({ ...state, country_long }));
  },
  setCurrentUser: (current_user: any) => {
    set((state) => ({ ...state, current_user }));
  },
  setBreadCrumb: (breadcrumb: any[]) => {
    set((state) => ({ ...state, breadcrumb }));
  },
  setVenueFavourite: (favorite: boolean) => {
    set((state) => ({
      ...state,
      venue: {
        ...state.venue,
        attributes: {
          ...state.venue.attributes,
          favorite: {
            ...state.venue.attributes.favorite,
            favorite,
          },
        },
      },
    }));
  },
}));
