export const exportImageUrl = (path) => {
    return new URL(`../assets/${path}`, import.meta.url).href;
}

