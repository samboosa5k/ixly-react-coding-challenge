const reduceUnsplashImageObj = (imageObjArr: IUnsplashImageObj[]) => {
  return imageObjArr.map((imageObj: IUnsplashImageObj) => {
    return {
      id: imageObj.id,
      src: imageObj.urls.regular,
      alt: imageObj.alt_description
    };
  });
};

export { reduceUnsplashImageObj };
