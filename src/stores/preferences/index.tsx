import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export interface PreferencesStore {
  enableAds: boolean;
  enableThumbnails: boolean;
  enableAutoplay: boolean;
  sourceOrder: string[];

  setEnableAds(v: boolean): void;
  setEnableThumbnails(v: boolean): void;
  setEnableAutoplay(v: boolean): void;
  setSourceOrder(v: string[]): void;
}

export const usePreferencesStore = create(
  persist(
    immer<PreferencesStore>((set) => ({
      enableAds: true,
      enableThumbnails: true,
      enableAutoplay: true,
      sourceOrder: [],
      setEnableThumbnails(v) {
        set((s) => {
          s.enableThumbnails = v;
        });
      },
      setEnableAds(v) {
        set((s) => {
          s.enableAds = v;
        });
      },
      setEnableAutoplay(v) {
        set((s) => {
          s.enableAutoplay = v;
        });
      },
      setSourceOrder(v) {
        set((s) => {
          s.sourceOrder = v;
        });
      },
    })),
    {
      name: "__MW::preferences",
    },
  ),
);
