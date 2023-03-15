# Next Edge SSR Custom Image Loader Error

## Background

- [Use of the edge runtime for SSR has been experimentally available since version 12.2](https://nextjs.org/blog/next-12-2#edge-server-rendering-experimental).

- When using a cloud provider for image optimization instead of the built in Next.js optimization, [the docs suggest using a custom image loader](https://nextjs.org/docs/api-reference/next/image#loader-configuration).

However, combining these two features (Edge SSR and custom image loader), results in the error `Image with src "..." is missing "loader" prop`

## Reproduction

This repo uses the free placeholder image source `placeholder.com` to illustrate the issue.

1. In `next.config.js`, add the following

```js
  images: {
    loader: "custom",
    loaderFile: "./lib/imageLoader.js",
  },
  experimental: {
    runtime: "experimental-edge",
  }
```

2. Create the file `imageLoader.js` (I have placed it in a `lib` directory) with the following

```js
export default function imageLoader({ src, width, quality }) {
  return `https://via.placeholder.com/${width}`;
}
```

3. Paste the following into `pages/index.tsx`

```tsx
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image src="photo.jpg" width={200} height={200} alt="Image" />
    </div>
  );
}
```

4. Run `npm run dev` and go to `http://localhost:3000`
