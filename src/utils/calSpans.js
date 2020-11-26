const calSpans = (imgRef, setSpans) => {
  const height = imgRef.current.clientHeight;

  const spans = Math.ceil(height / 10);

  setSpans(spans);
};

export default calSpans;
