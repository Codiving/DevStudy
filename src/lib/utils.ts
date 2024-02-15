const onMoveToId = (id: string) => {
  const quizDom = document.getElementById(id);

  if (!quizDom) return;

  quizDom.scrollIntoView({
    behavior: "smooth"
  });
};

export { onMoveToId };
