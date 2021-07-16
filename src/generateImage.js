const generateImage = (url, size) => {
    const newImage = new Image();
    newImage.style.width = `${size}px`;
    newImage.src = url;

    return newImage;
}

export { generateImage };