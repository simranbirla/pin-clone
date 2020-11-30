const calSpans = (imgRef, setSpans) => {
  if (imgRef.current) {
    const height = imgRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    setSpans(spans);
  }
};

export default calSpans;
