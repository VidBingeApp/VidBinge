// src/global.d.ts
interface Umami {
  track: (eventName: string, properties?: Record<string, any>) => void;
  identify: (userId: string, properties?: Record<string, any>) => void;
}

interface Window {
  umami: Umami;
}
