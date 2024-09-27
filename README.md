<p align="center">
  <img src="https://skillicons.dev/icons?i=react,vite,ts" />
</p>

This is the source code to VidBinge, allegedly. I do not condone piracy of any kind. I just simply like coding stuff.

# ⚡What is VidBinge?

This service works by displaying video files from third-party providers inside an intuitive and aesthetic user interface.

# 🔥Features

- Automatic saving of progress - optionally synced to an account.
- Bookmark shows or movies, keep track of what you want to watch.
- Minimalistic interface that only shows what's required - no algorithm to consume you.

## 🍄 Philosophy

This project is meant to be simple and easy to use. Keep features minimal but polished.
We do not want this project to be yet another bulky streaming site, instead it aims for minimalism.

On top of that, hosting should be as cheap and simple as possible. Just a static website with a proxy, with an optional backend if you want cross-device syncing.

Content is fetched from third parties and scraping is fully done on the client. This means that the hoster has no files or media on their server. All files are streamed directly from the third parties.

## ⚠️ Limitations

- Due to being a static site, there can be no SSR
- To keep it cheap to host, the amount of proxied requests need to be kept to a minimum
- Also to keep it cheap, no content must ever be streamed through the proxy. So only streams not protected by CORS headers.

# 🧬 Running locally for development

To run locally, you must first clone the repository. After that, run the following commands in the root of the repository:

```bash
pnpm install
pnpm run dev
```

You have to also make an `.env` file to configure your environment. Use `example.env` as a reference.

To build production files, run:

```bash
pnpm build
```

> **Note**
> You must use pnpm (`npm i -g pnpm`) and run NodeJS 20

# ❗ Important Note

The `vidbingedotcom` branch is specifically tailored for the official VidBinge website (vidbinge.com) and includes custom features such as exclusive advertisements and proprietary analytics code. These modifications are intended solely for VidBinge’s production environment.

**We recommend using the `dev` branch as your source for general development.** This branch is fully functional for production use but does not include the site-specific modifications found in the `vidbingedotcom` branch. Deploying the `dev` branch will help avoid unintended incorporation of VidBinge-specific advertising and analytics into your projects.


# ✉️ Contact

[Discord Server](https://discord.gg/4jzBvV8E5r)

[Email](mailto:josh@vidbinge.com)


# ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=VidBingeApp/vidbinge&type=Date)](https://star-history.com/#VidBingeApp/vidbinge&Date)


## 🤝 Thanks to all Contributors

This project would not be possible without our amazing contributors and the community. Thanks a lot! Keep rocking 🍻!
