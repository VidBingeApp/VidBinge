// stores/premiumStore.ts
import create from "zustand";

// Define an interface for the state
interface PremiumStoreState {
  isPremiumSite: boolean;
  setIsPremiumSite: (isPremium: boolean) => void;
  isReferrerChecked: boolean;
  setIsReferrerChecked: (isChecked: boolean) => void;
}

// Create the store using the interface
const usePremiumStore = create<PremiumStoreState>((set) => ({
  isPremiumSite: false,
  setIsPremiumSite: (isPremium: boolean) => set({ isPremiumSite: isPremium }),
  isReferrerChecked: false,
  setIsReferrerChecked: (isChecked: boolean) =>
    set({ isReferrerChecked: isChecked }),
}));

export default usePremiumStore;
