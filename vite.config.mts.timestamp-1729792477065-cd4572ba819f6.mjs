// vite.config.mts
import { defineConfig } from "file:///Users/wafflehacker/Sites/VidBinge/node_modules/.pnpm/vitest@1.6.0_@types+node@20.16.5_jsdom@23.2.0/node_modules/vitest/dist/config.js";
import react from "file:///Users/wafflehacker/Sites/VidBinge/node_modules/.pnpm/@vitejs+plugin-react@4.3.1_vite@5.4.5/node_modules/@vitejs/plugin-react/dist/index.mjs";
import loadVersion from "file:///Users/wafflehacker/Sites/VidBinge/node_modules/.pnpm/vite-plugin-package-version@1.1.0_vite@5.4.5/node_modules/vite-plugin-package-version/dist/index.mjs";
import { VitePWA } from "file:///Users/wafflehacker/Sites/VidBinge/node_modules/.pnpm/vite-plugin-pwa@0.17.5_vite@5.4.5_workbox-build@7.1.1_workbox-window@7.1.0/node_modules/vite-plugin-pwa/dist/index.js";
import checker from "file:///Users/wafflehacker/Sites/VidBinge/node_modules/.pnpm/vite-plugin-checker@0.6.4_eslint@8.57.0_typescript@5.6.2_vite@5.4.5/node_modules/vite-plugin-checker/dist/esm/main.js";
import path2 from "path";
import million from "file:///Users/wafflehacker/Sites/VidBinge/node_modules/.pnpm/million@2.6.4/node_modules/million/dist/packages/compiler.mjs";

// plugins/handlebars.ts
import { globSync } from "file:///Users/wafflehacker/Sites/VidBinge/node_modules/.pnpm/glob@10.4.5/node_modules/glob/dist/esm/index.js";
import { viteStaticCopy } from "file:///Users/wafflehacker/Sites/VidBinge/node_modules/.pnpm/vite-plugin-static-copy@1.0.6_vite@5.4.5/node_modules/vite-plugin-static-copy/dist/index.js";
import Handlebars from "file:///Users/wafflehacker/Sites/VidBinge/node_modules/.pnpm/handlebars@4.7.8/node_modules/handlebars/lib/index.js";
import path from "path";
var handlebars = (options = {}) => {
  const files = globSync("src/assets/**/**.hbs");
  function render(content) {
    const template = Handlebars.compile(content);
    return template(options?.vars ?? {});
  }
  return [
    {
      name: "hbs-templating",
      enforce: "pre",
      transformIndexHtml: {
        order: "pre",
        handler(html) {
          return render(html);
        }
      }
    },
    viteStaticCopy({
      silent: true,
      targets: files.map((file) => ({
        src: file,
        dest: "",
        rename: path.basename(file).slice(0, -4),
        // remove .hbs file extension
        transform: {
          encoding: "utf8",
          handler(content) {
            return render(content);
          }
        }
      }))
    })
  ];
};

// vite.config.mts
import { loadEnv, splitVendorChunkPlugin } from "file:///Users/wafflehacker/Sites/VidBinge/node_modules/.pnpm/vite@5.4.5_@types+node@20.16.5/node_modules/vite/dist/node/index.js";
import { visualizer } from "file:///Users/wafflehacker/Sites/VidBinge/node_modules/.pnpm/rollup-plugin-visualizer@5.12.0_@rollup+wasm-node@4.21.3/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import tailwind from "file:///Users/wafflehacker/Sites/VidBinge/node_modules/.pnpm/tailwindcss@3.4.11/node_modules/tailwindcss/lib/index.js";
import rtl from "file:///Users/wafflehacker/Sites/VidBinge/node_modules/.pnpm/postcss-rtlcss@4.0.9_postcss@8.4.47/node_modules/postcss-rtlcss/esm/index.js";
var __vite_injected_original_dirname = "/Users/wafflehacker/Sites/VidBinge";
var captioningPackages = [
  "dompurify",
  "htmlparser2",
  "subsrt-ts",
  "parse5",
  "entities",
  "fuse"
];
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    base: env.VITE_BASE_URL || "/",
    plugins: [
      million.vite({ auto: true, mute: true }),
      handlebars({
        vars: {
          opensearchEnabled: env.VITE_OPENSEARCH_ENABLED === "true",
          routeDomain: env.VITE_APP_DOMAIN + (env.VITE_NORMAL_ROUTER !== "true" ? "/#" : ""),
          domain: env.VITE_APP_DOMAIN,
          env
        }
      }),
      react({
        babel: {
          presets: [
            "@babel/preset-typescript",
            [
              "@babel/preset-env",
              {
                modules: false,
                useBuiltIns: "entry",
                corejs: {
                  version: "3.34"
                }
              }
            ]
          ]
        }
      }),
      VitePWA({
        disable: env.VITE_PWA_ENABLED !== "true",
        registerType: "autoUpdate",
        filename: "1256762.sw.js",
        workbox: {
          maximumFileSizeToCacheInBytes: 4e6,
          // 4mb
          globIgnores: ["**ping.txt**"]
        },
        includeAssets: [
          "OneSignalSDKWorker.js",
          "favicon.ico",
          "apple-touch-icon.png",
          "safari-pinned-tab.svg",
          "opensearch.xml",
          "robots.txt",
          "ping.txt",
          "favicon-32x32.png",
          "favicon-16x16.png",
          "browserconfig.xml",
          "splash_screens/iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_landscape.png",
          "splash_screens/iPhone_15_Pro__iPhone_15__iPhone_14_Pro_landscape.png",
          "splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png",
          "splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png",
          "splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png",
          "splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png",
          "splash_screens/iPhone_11__iPhone_XR_landscape.png",
          "splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png",
          "splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png",
          "splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png",
          "splash_screens/12.9__iPad_Pro_landscape.png",
          "splash_screens/11__iPad_Pro__10.5__iPad_Pro_landscape.png",
          "splash_screens/10.9__iPad_Air_landscape.png",
          "splash_screens/10.5__iPad_Air_landscape.png",
          "splash_screens/10.2__iPad_landscape.png",
          "splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png",
          "splash_screens/8.3__iPad_Mini_landscape.png",
          "splash_screens/iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_portrait.png",
          "splash_screens/iPhone_15_Pro__iPhone_15__iPhone_14_Pro_portrait.png",
          "splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png",
          "splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png",
          "splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png",
          "splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png",
          "splash_screens/iPhone_11__iPhone_XR_portrait.png",
          "splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png",
          "splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png",
          "splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png",
          "splash_screens/12.9__iPad_Pro_portrait.png",
          "splash_screens/11__iPad_Pro__10.5__iPad_Pro_portrait.png",
          "splash_screens/10.9__iPad_Air_portrait.png",
          "splash_screens/10.5__iPad_Air_portrait.png",
          "splash_screens/10.2__iPad_portrait.png",
          "splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png",
          "splash_screens/8.3__iPad_Mini_portrait.png"
        ],
        manifest: {
          id: "https://www.vidbinge.com/",
          name: "Vid Binge",
          short_name: "VidBinge",
          description: "Stream a wide array of movies and TV shows on Vid Binge, completely free. Enjoy unlimited, ad-free viewing with no subscriptions required.",
          theme_color: "#120f1d",
          background_color: "#120f1d",
          display: "standalone",
          start_url: "/",
          icons: [
            {
              src: "android-chrome-192x192.png",
              sizes: "192x192",
              type: "image/png",
              purpose: "any"
            },
            {
              src: "android-chrome-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "any"
            },
            {
              src: "android-chrome-192x192.png",
              sizes: "192x192",
              type: "image/png",
              purpose: "maskable"
            },
            {
              src: "android-chrome-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "maskable"
            }
          ]
        }
      }),
      loadVersion(),
      checker({
        overlay: {
          position: "tr"
        },
        typescript: true,
        // check typescript build errors in dev server
        eslint: {
          // check lint errors in dev server
          lintCommand: "eslint --ext .tsx,.ts src",
          dev: {
            logLevel: ["error"]
          }
        }
      }),
      splitVendorChunkPlugin(),
      visualizer()
    ],
    build: {
      sourcemap: true,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("@sozialhelden+ietf-language-tags") || id.includes("country-language")) {
              return "language-db";
            }
            if (id.includes("hls.js")) {
              return "hls";
            }
            if (id.includes("node-forge") || id.includes("crypto-js")) {
              return "auth";
            }
            if (id.includes("locales") && !id.includes("en.json")) {
              return "locales";
            }
            if (id.includes("react-dom")) {
              return "react-dom";
            }
            if (id.includes("Icon.tsx")) {
              return "Icons";
            }
            const isCaptioningPackage = captioningPackages.some((packageName) => id.includes(packageName));
            if (isCaptioningPackage) {
              return "caption-parsing";
            }
          }
        }
      }
    },
    css: {
      postcss: {
        plugins: [tailwind(), rtl()]
      }
    },
    resolve: {
      alias: {
        "@": path2.resolve(__vite_injected_original_dirname, "./src"),
        "@sozialhelden/ietf-language-tags": path2.resolve(
          __vite_injected_original_dirname,
          "./node_modules/@sozialhelden/ietf-language-tags/dist/cjs"
        )
      }
    },
    test: {
      environment: "jsdom"
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubXRzIiwgInBsdWdpbnMvaGFuZGxlYmFycy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy93YWZmbGVoYWNrZXIvU2l0ZXMvVmlkQmluZ2VcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy93YWZmbGVoYWNrZXIvU2l0ZXMvVmlkQmluZ2Uvdml0ZS5jb25maWcubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy93YWZmbGVoYWNrZXIvU2l0ZXMvVmlkQmluZ2Uvdml0ZS5jb25maWcubXRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVzdC9jb25maWdcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcbmltcG9ydCBsb2FkVmVyc2lvbiBmcm9tIFwidml0ZS1wbHVnaW4tcGFja2FnZS12ZXJzaW9uXCI7XG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSBcInZpdGUtcGx1Z2luLXB3YVwiO1xuaW1wb3J0IGNoZWNrZXIgZnJvbSBcInZpdGUtcGx1Z2luLWNoZWNrZXJcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgbWlsbGlvbiBmcm9tICdtaWxsaW9uL2NvbXBpbGVyJztcbmltcG9ydCB7IGhhbmRsZWJhcnMgfSBmcm9tIFwiLi9wbHVnaW5zL2hhbmRsZWJhcnNcIjtcbmltcG9ydCB7IFBsdWdpbk9wdGlvbiwgbG9hZEVudiwgc3BsaXRWZW5kb3JDaHVua1BsdWdpbiB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSBcInJvbGx1cC1wbHVnaW4tdmlzdWFsaXplclwiO1xuXG5pbXBvcnQgdGFpbHdpbmQgZnJvbSBcInRhaWx3aW5kY3NzXCI7XG5pbXBvcnQgcnRsIGZyb20gXCJwb3N0Y3NzLXJ0bGNzc1wiO1xuXG5jb25zdCBjYXB0aW9uaW5nUGFja2FnZXMgPSBbXG4gIFwiZG9tcHVyaWZ5XCIsXG4gIFwiaHRtbHBhcnNlcjJcIixcbiAgXCJzdWJzcnQtdHNcIixcbiAgXCJwYXJzZTVcIixcbiAgXCJlbnRpdGllc1wiLFxuICBcImZ1c2VcIlxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4ge1xuICBjb25zdCBlbnYgPSBsb2FkRW52KG1vZGUsIHByb2Nlc3MuY3dkKCkpO1xuICByZXR1cm4ge1xuICAgIGJhc2U6IGVudi5WSVRFX0JBU0VfVVJMIHx8ICcvJyxcbiAgICBwbHVnaW5zOiBbXG4gICAgICBtaWxsaW9uLnZpdGUoeyBhdXRvOiB0cnVlLCBtdXRlOiB0cnVlIH0pLFxuICAgICAgaGFuZGxlYmFycyh7XG4gICAgICAgIHZhcnM6IHtcbiAgICAgICAgICBvcGVuc2VhcmNoRW5hYmxlZDogZW52LlZJVEVfT1BFTlNFQVJDSF9FTkFCTEVEID09PSBcInRydWVcIixcbiAgICAgICAgICByb3V0ZURvbWFpbjpcbiAgICAgICAgICAgIGVudi5WSVRFX0FQUF9ET01BSU4gK1xuICAgICAgICAgICAgKGVudi5WSVRFX05PUk1BTF9ST1VURVIgIT09IFwidHJ1ZVwiID8gXCIvI1wiIDogXCJcIiksXG4gICAgICAgICAgZG9tYWluOiBlbnYuVklURV9BUFBfRE9NQUlOLFxuICAgICAgICAgIGVudixcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgcmVhY3Qoe1xuICAgICAgICBiYWJlbDoge1xuICAgICAgICAgIHByZXNldHM6IFtcbiAgICAgICAgICAgIFwiQGJhYmVsL3ByZXNldC10eXBlc2NyaXB0XCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIFwiQGJhYmVsL3ByZXNldC1lbnZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG1vZHVsZXM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHVzZUJ1aWx0SW5zOiBcImVudHJ5XCIsXG4gICAgICAgICAgICAgICAgY29yZWpzOiB7XG4gICAgICAgICAgICAgICAgICB2ZXJzaW9uOiBcIjMuMzRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBWaXRlUFdBKHtcbiAgICAgICAgZGlzYWJsZTogZW52LlZJVEVfUFdBX0VOQUJMRUQgIT09IFwidHJ1ZVwiLFxuICAgICAgICByZWdpc3RlclR5cGU6IFwiYXV0b1VwZGF0ZVwiLFxuICAgICAgICBmaWxlbmFtZTogJzEyNTY3NjIuc3cuanMnLFxuICAgICAgICB3b3JrYm94OiB7XG4gICAgICAgICAgbWF4aW11bUZpbGVTaXplVG9DYWNoZUluQnl0ZXM6IDQwMDAwMDAsIC8vIDRtYlxuICAgICAgICAgIGdsb2JJZ25vcmVzOiBbXCIqKnBpbmcudHh0KipcIl0sXG4gICAgICAgIH0sXG4gICAgICAgIGluY2x1ZGVBc3NldHM6IFtcbiAgICAgICAgICBcIk9uZVNpZ25hbFNES1dvcmtlci5qc1wiLFxuICAgICAgICAgIFwiZmF2aWNvbi5pY29cIixcbiAgICAgICAgICBcImFwcGxlLXRvdWNoLWljb24ucG5nXCIsXG4gICAgICAgICAgXCJzYWZhcmktcGlubmVkLXRhYi5zdmdcIixcbiAgICAgICAgICBcIm9wZW5zZWFyY2gueG1sXCIsXG4gICAgICAgICAgXCJyb2JvdHMudHh0XCIsXG4gICAgICAgICAgXCJwaW5nLnR4dFwiLFxuICAgICAgICAgIFwiZmF2aWNvbi0zMngzMi5wbmdcIixcbiAgICAgICAgICBcImZhdmljb24tMTZ4MTYucG5nXCIsXG4gICAgICAgICAgXCJicm93c2VyY29uZmlnLnhtbFwiLFxuICAgICAgICAgIFwic3BsYXNoX3NjcmVlbnMvaVBob25lXzE1X1Byb19NYXhfX2lQaG9uZV8xNV9QbHVzX19pUGhvbmVfMTRfUHJvX01heF9sYW5kc2NhcGUucG5nXCIsXG4gICAgICAgICAgXCJzcGxhc2hfc2NyZWVucy9pUGhvbmVfMTVfUHJvX19pUGhvbmVfMTVfX2lQaG9uZV8xNF9Qcm9fbGFuZHNjYXBlLnBuZ1wiLFxuICAgICAgICAgIFwic3BsYXNoX3NjcmVlbnMvaVBob25lXzE0X1BsdXNfX2lQaG9uZV8xM19Qcm9fTWF4X19pUGhvbmVfMTJfUHJvX01heF9sYW5kc2NhcGUucG5nXCIsXG4gICAgICAgICAgXCJzcGxhc2hfc2NyZWVucy9pUGhvbmVfMTRfX2lQaG9uZV8xM19Qcm9fX2lQaG9uZV8xM19faVBob25lXzEyX1Byb19faVBob25lXzEyX2xhbmRzY2FwZS5wbmdcIixcbiAgICAgICAgICBcInNwbGFzaF9zY3JlZW5zL2lQaG9uZV8xM19taW5pX19pUGhvbmVfMTJfbWluaV9faVBob25lXzExX1Byb19faVBob25lX1hTX19pUGhvbmVfWF9sYW5kc2NhcGUucG5nXCIsXG4gICAgICAgICAgXCJzcGxhc2hfc2NyZWVucy9pUGhvbmVfMTFfUHJvX01heF9faVBob25lX1hTX01heF9sYW5kc2NhcGUucG5nXCIsXG4gICAgICAgICAgXCJzcGxhc2hfc2NyZWVucy9pUGhvbmVfMTFfX2lQaG9uZV9YUl9sYW5kc2NhcGUucG5nXCIsXG4gICAgICAgICAgXCJzcGxhc2hfc2NyZWVucy9pUGhvbmVfOF9QbHVzX19pUGhvbmVfN19QbHVzX19pUGhvbmVfNnNfUGx1c19faVBob25lXzZfUGx1c19sYW5kc2NhcGUucG5nXCIsXG4gICAgICAgICAgXCJzcGxhc2hfc2NyZWVucy9pUGhvbmVfOF9faVBob25lXzdfX2lQaG9uZV82c19faVBob25lXzZfXzQuN19faVBob25lX1NFX2xhbmRzY2FwZS5wbmdcIixcbiAgICAgICAgICBcInNwbGFzaF9zY3JlZW5zLzRfX2lQaG9uZV9TRV9faVBvZF90b3VjaF81dGhfZ2VuZXJhdGlvbl9hbmRfbGF0ZXJfbGFuZHNjYXBlLnBuZ1wiLFxuICAgICAgICAgIFwic3BsYXNoX3NjcmVlbnMvMTIuOV9faVBhZF9Qcm9fbGFuZHNjYXBlLnBuZ1wiLFxuICAgICAgICAgIFwic3BsYXNoX3NjcmVlbnMvMTFfX2lQYWRfUHJvX18xMC41X19pUGFkX1Byb19sYW5kc2NhcGUucG5nXCIsXG4gICAgICAgICAgXCJzcGxhc2hfc2NyZWVucy8xMC45X19pUGFkX0Fpcl9sYW5kc2NhcGUucG5nXCIsXG4gICAgICAgICAgXCJzcGxhc2hfc2NyZWVucy8xMC41X19pUGFkX0Fpcl9sYW5kc2NhcGUucG5nXCIsXG4gICAgICAgICAgXCJzcGxhc2hfc2NyZWVucy8xMC4yX19pUGFkX2xhbmRzY2FwZS5wbmdcIixcbiAgICAgICAgICBcInNwbGFzaF9zY3JlZW5zLzkuN19faVBhZF9Qcm9fXzcuOV9faVBhZF9taW5pX185LjdfX2lQYWRfQWlyX185LjdfX2lQYWRfbGFuZHNjYXBlLnBuZ1wiLFxuICAgICAgICAgIFwic3BsYXNoX3NjcmVlbnMvOC4zX19pUGFkX01pbmlfbGFuZHNjYXBlLnBuZ1wiLFxuICAgICAgICAgIFwic3BsYXNoX3NjcmVlbnMvaVBob25lXzE1X1Byb19NYXhfX2lQaG9uZV8xNV9QbHVzX19pUGhvbmVfMTRfUHJvX01heF9wb3J0cmFpdC5wbmdcIixcbiAgICAgICAgICBcInNwbGFzaF9zY3JlZW5zL2lQaG9uZV8xNV9Qcm9fX2lQaG9uZV8xNV9faVBob25lXzE0X1Byb19wb3J0cmFpdC5wbmdcIixcbiAgICAgICAgICBcInNwbGFzaF9zY3JlZW5zL2lQaG9uZV8xNF9QbHVzX19pUGhvbmVfMTNfUHJvX01heF9faVBob25lXzEyX1Byb19NYXhfcG9ydHJhaXQucG5nXCIsXG4gICAgICAgICAgXCJzcGxhc2hfc2NyZWVucy9pUGhvbmVfMTRfX2lQaG9uZV8xM19Qcm9fX2lQaG9uZV8xM19faVBob25lXzEyX1Byb19faVBob25lXzEyX3BvcnRyYWl0LnBuZ1wiLFxuICAgICAgICAgIFwic3BsYXNoX3NjcmVlbnMvaVBob25lXzEzX21pbmlfX2lQaG9uZV8xMl9taW5pX19pUGhvbmVfMTFfUHJvX19pUGhvbmVfWFNfX2lQaG9uZV9YX3BvcnRyYWl0LnBuZ1wiLFxuICAgICAgICAgIFwic3BsYXNoX3NjcmVlbnMvaVBob25lXzExX1Byb19NYXhfX2lQaG9uZV9YU19NYXhfcG9ydHJhaXQucG5nXCIsXG4gICAgICAgICAgXCJzcGxhc2hfc2NyZWVucy9pUGhvbmVfMTFfX2lQaG9uZV9YUl9wb3J0cmFpdC5wbmdcIixcbiAgICAgICAgICBcInNwbGFzaF9zY3JlZW5zL2lQaG9uZV84X1BsdXNfX2lQaG9uZV83X1BsdXNfX2lQaG9uZV82c19QbHVzX19pUGhvbmVfNl9QbHVzX3BvcnRyYWl0LnBuZ1wiLFxuICAgICAgICAgIFwic3BsYXNoX3NjcmVlbnMvaVBob25lXzhfX2lQaG9uZV83X19pUGhvbmVfNnNfX2lQaG9uZV82X180LjdfX2lQaG9uZV9TRV9wb3J0cmFpdC5wbmdcIixcbiAgICAgICAgICBcInNwbGFzaF9zY3JlZW5zLzRfX2lQaG9uZV9TRV9faVBvZF90b3VjaF81dGhfZ2VuZXJhdGlvbl9hbmRfbGF0ZXJfcG9ydHJhaXQucG5nXCIsXG4gICAgICAgICAgXCJzcGxhc2hfc2NyZWVucy8xMi45X19pUGFkX1Byb19wb3J0cmFpdC5wbmdcIixcbiAgICAgICAgICBcInNwbGFzaF9zY3JlZW5zLzExX19pUGFkX1Byb19fMTAuNV9faVBhZF9Qcm9fcG9ydHJhaXQucG5nXCIsXG4gICAgICAgICAgXCJzcGxhc2hfc2NyZWVucy8xMC45X19pUGFkX0Fpcl9wb3J0cmFpdC5wbmdcIixcbiAgICAgICAgICBcInNwbGFzaF9zY3JlZW5zLzEwLjVfX2lQYWRfQWlyX3BvcnRyYWl0LnBuZ1wiLFxuICAgICAgICAgIFwic3BsYXNoX3NjcmVlbnMvMTAuMl9faVBhZF9wb3J0cmFpdC5wbmdcIixcbiAgICAgICAgICBcInNwbGFzaF9zY3JlZW5zLzkuN19faVBhZF9Qcm9fXzcuOV9faVBhZF9taW5pX185LjdfX2lQYWRfQWlyX185LjdfX2lQYWRfcG9ydHJhaXQucG5nXCIsXG4gICAgICAgICAgXCJzcGxhc2hfc2NyZWVucy84LjNfX2lQYWRfTWluaV9wb3J0cmFpdC5wbmdcIlxuXG4gICAgICAgIF0sXG4gICAgICAgIG1hbmlmZXN0OiB7XG4gICAgICAgICAgaWQ6IFwiaHR0cHM6Ly93d3cudmlkYmluZ2UuY29tL1wiLFxuICAgICAgICAgIG5hbWU6IFwiVmlkIEJpbmdlXCIsXG4gICAgICAgICAgc2hvcnRfbmFtZTogXCJWaWRCaW5nZVwiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlN0cmVhbSBhIHdpZGUgYXJyYXkgb2YgbW92aWVzIGFuZCBUViBzaG93cyBvbiBWaWQgQmluZ2UsIGNvbXBsZXRlbHkgZnJlZS4gRW5qb3kgdW5saW1pdGVkLCBhZC1mcmVlIHZpZXdpbmcgd2l0aCBubyBzdWJzY3JpcHRpb25zIHJlcXVpcmVkLlwiLFxuICAgICAgICAgIHRoZW1lX2NvbG9yOiBcIiMxMjBmMWRcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kX2NvbG9yOiBcIiMxMjBmMWRcIixcbiAgICAgICAgICBkaXNwbGF5OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgICBzdGFydF91cmw6IFwiL1wiLFxuICAgICAgICAgIGljb25zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNyYzogXCJhbmRyb2lkLWNocm9tZS0xOTJ4MTkyLnBuZ1wiLFxuICAgICAgICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXG4gICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgICAgIHB1cnBvc2U6IFwiYW55XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzcmM6IFwiYW5kcm9pZC1jaHJvbWUtNTEyeDUxMi5wbmdcIixcbiAgICAgICAgICAgICAgc2l6ZXM6IFwiNTEyeDUxMlwiLFxuICAgICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgICAgICBwdXJwb3NlOiBcImFueVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3JjOiBcImFuZHJvaWQtY2hyb21lLTE5MngxOTIucG5nXCIsXG4gICAgICAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcbiAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgICAgcHVycG9zZTogXCJtYXNrYWJsZVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3JjOiBcImFuZHJvaWQtY2hyb21lLTUxMng1MTIucG5nXCIsXG4gICAgICAgICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcbiAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgICAgcHVycG9zZTogXCJtYXNrYWJsZVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBsb2FkVmVyc2lvbigpLFxuICAgICAgY2hlY2tlcih7XG4gICAgICAgIG92ZXJsYXk6IHtcbiAgICAgICAgICBwb3NpdGlvbjogXCJ0clwiLFxuICAgICAgICB9LFxuICAgICAgICB0eXBlc2NyaXB0OiB0cnVlLCAvLyBjaGVjayB0eXBlc2NyaXB0IGJ1aWxkIGVycm9ycyBpbiBkZXYgc2VydmVyXG4gICAgICAgIGVzbGludDoge1xuICAgICAgICAgIC8vIGNoZWNrIGxpbnQgZXJyb3JzIGluIGRldiBzZXJ2ZXJcbiAgICAgICAgICBsaW50Q29tbWFuZDogXCJlc2xpbnQgLS1leHQgLnRzeCwudHMgc3JjXCIsXG4gICAgICAgICAgZGV2OiB7XG4gICAgICAgICAgICBsb2dMZXZlbDogW1wiZXJyb3JcIl0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgc3BsaXRWZW5kb3JDaHVua1BsdWdpbigpLFxuICAgICAgdmlzdWFsaXplcigpIGFzIFBsdWdpbk9wdGlvblxuICAgIF0sXG5cbiAgICBidWlsZDoge1xuICAgICAgc291cmNlbWFwOiB0cnVlLFxuICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICBtYW51YWxDaHVua3MoaWQ6IHN0cmluZykge1xuICAgICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKFwiQHNvemlhbGhlbGRlbitpZXRmLWxhbmd1YWdlLXRhZ3NcIikgfHwgaWQuaW5jbHVkZXMoXCJjb3VudHJ5LWxhbmd1YWdlXCIpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBcImxhbmd1YWdlLWRiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoXCJobHMuanNcIikpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFwiaGxzXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoXCJub2RlLWZvcmdlXCIpIHx8IGlkLmluY2x1ZGVzKFwiY3J5cHRvLWpzXCIpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBcImF1dGhcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpZC5pbmNsdWRlcyhcImxvY2FsZXNcIikgJiYgIWlkLmluY2x1ZGVzKFwiZW4uanNvblwiKSkge1xuICAgICAgICAgICAgICByZXR1cm4gXCJsb2NhbGVzXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoXCJyZWFjdC1kb21cIikpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFwicmVhY3QtZG9tXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoXCJJY29uLnRzeFwiKSkge1xuICAgICAgICAgICAgICByZXR1cm4gXCJJY29uc1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaXNDYXB0aW9uaW5nUGFja2FnZSA9IGNhcHRpb25pbmdQYWNrYWdlcy5zb21lKHBhY2thZ2VOYW1lID0+IGlkLmluY2x1ZGVzKHBhY2thZ2VOYW1lKSk7XG4gICAgICAgICAgICBpZiAoaXNDYXB0aW9uaW5nUGFja2FnZSkge1xuICAgICAgICAgICAgICByZXR1cm4gXCJjYXB0aW9uLXBhcnNpbmdcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGNzczoge1xuICAgICAgcG9zdGNzczoge1xuICAgICAgICBwbHVnaW5zOiBbdGFpbHdpbmQoKSwgcnRsKCldLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IHtcbiAgICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXG4gICAgICAgIFwiQHNvemlhbGhlbGRlbi9pZXRmLWxhbmd1YWdlLXRhZ3NcIjogcGF0aC5yZXNvbHZlKFxuICAgICAgICAgIF9fZGlybmFtZSxcbiAgICAgICAgICBcIi4vbm9kZV9tb2R1bGVzL0Bzb3ppYWxoZWxkZW4vaWV0Zi1sYW5ndWFnZS10YWdzL2Rpc3QvY2pzXCJcbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIHRlc3Q6IHtcbiAgICAgIGVudmlyb25tZW50OiBcImpzZG9tXCIsXG4gICAgfSxcbiAgfTtcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvd2FmZmxlaGFja2VyL1NpdGVzL1ZpZEJpbmdlL3BsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy93YWZmbGVoYWNrZXIvU2l0ZXMvVmlkQmluZ2UvcGx1Z2lucy9oYW5kbGViYXJzLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy93YWZmbGVoYWNrZXIvU2l0ZXMvVmlkQmluZ2UvcGx1Z2lucy9oYW5kbGViYXJzLnRzXCI7aW1wb3J0IHsgZ2xvYlN5bmMgfSBmcm9tIFwiZ2xvYlwiO1xuaW1wb3J0IHsgdml0ZVN0YXRpY0NvcHkgfSBmcm9tICd2aXRlLXBsdWdpbi1zdGF0aWMtY29weSdcbmltcG9ydCB7IFBsdWdpbk9wdGlvbiB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgSGFuZGxlYmFycyBmcm9tIFwiaGFuZGxlYmFyc1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZWJhcnMgPSAob3B0aW9uczogeyB2YXJzPzogUmVjb3JkPHN0cmluZywgYW55PiB9ID0ge30pOiBQbHVnaW5PcHRpb25bXSA9PiB7XG4gIGNvbnN0IGZpbGVzID0gZ2xvYlN5bmMoXCJzcmMvYXNzZXRzLyoqLyoqLmhic1wiKTtcblxuICBmdW5jdGlvbiByZW5kZXIoY29udGVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IEhhbmRsZWJhcnMuY29tcGlsZShjb250ZW50KTtcbiAgICByZXR1cm4gdGVtcGxhdGUob3B0aW9ucz8udmFycyA/PyB7fSk7XG4gIH1cblxuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdoYnMtdGVtcGxhdGluZycsXG4gICAgICBlbmZvcmNlOiBcInByZVwiLFxuICAgICAgdHJhbnNmb3JtSW5kZXhIdG1sOiB7XG4gICAgICAgIG9yZGVyOiAncHJlJyxcbiAgICAgICAgaGFuZGxlcihodG1sKSB7XG4gICAgICAgICAgcmV0dXJuIHJlbmRlcihodG1sKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICAgIHZpdGVTdGF0aWNDb3B5KHtcbiAgICAgIHNpbGVudDogdHJ1ZSxcbiAgICAgIHRhcmdldHM6IGZpbGVzLm1hcChmaWxlID0+ICh7XG4gICAgICAgIHNyYzogZmlsZSxcbiAgICAgICAgZGVzdDogJycsXG4gICAgICAgIHJlbmFtZTogcGF0aC5iYXNlbmFtZShmaWxlKS5zbGljZSgwLCAtNCksIC8vIHJlbW92ZSAuaGJzIGZpbGUgZXh0ZW5zaW9uXG4gICAgICAgIHRyYW5zZm9ybToge1xuICAgICAgICAgIGVuY29kaW5nOiAndXRmOCcsXG4gICAgICAgICAgaGFuZGxlcihjb250ZW50OiBzdHJpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiByZW5kZXIoY29udGVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KSlcbiAgICB9KVxuICBdXG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTBSLFNBQVMsb0JBQW9CO0FBQ3ZULE9BQU8sV0FBVztBQUNsQixPQUFPLGlCQUFpQjtBQUN4QixTQUFTLGVBQWU7QUFDeEIsT0FBTyxhQUFhO0FBQ3BCLE9BQU9BLFdBQVU7QUFDakIsT0FBTyxhQUFhOzs7QUNOMFIsU0FBUyxnQkFBZ0I7QUFDdlUsU0FBUyxzQkFBc0I7QUFFL0IsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxVQUFVO0FBRVYsSUFBTSxhQUFhLENBQUMsVUFBMEMsQ0FBQyxNQUFzQjtBQUMxRixRQUFNLFFBQVEsU0FBUyxzQkFBc0I7QUFFN0MsV0FBUyxPQUFPLFNBQXlCO0FBQ3ZDLFVBQU0sV0FBVyxXQUFXLFFBQVEsT0FBTztBQUMzQyxXQUFPLFNBQVMsU0FBUyxRQUFRLENBQUMsQ0FBQztBQUFBLEVBQ3JDO0FBRUEsU0FBTztBQUFBLElBQ0w7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULG9CQUFvQjtBQUFBLFFBQ2xCLE9BQU87QUFBQSxRQUNQLFFBQVEsTUFBTTtBQUNaLGlCQUFPLE9BQU8sSUFBSTtBQUFBLFFBQ3BCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxNQUNSLFNBQVMsTUFBTSxJQUFJLFdBQVM7QUFBQSxRQUMxQixLQUFLO0FBQUEsUUFDTCxNQUFNO0FBQUEsUUFDTixRQUFRLEtBQUssU0FBUyxJQUFJLEVBQUUsTUFBTSxHQUFHLEVBQUU7QUFBQTtBQUFBLFFBQ3ZDLFdBQVc7QUFBQSxVQUNULFVBQVU7QUFBQSxV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
