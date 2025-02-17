import { useEffect, useMemo, useState } from "react";

function Typewriter({ className }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const titles = useMemo(
    () => [
      "UI Designer",
      "Web Designer",
      "Développeur Front-end",
      "Intégrateur Web",
    ],
    []
  );
  const typingSpeed = 50;
  const deletingSpeed = 50;
  const delayBetweenTitles = 4500;

  useEffect(() => {
    const timer = setTimeout(
      () => {
        const currentIndex = index % titles.length;
        const currentTitle = titles[currentIndex];

        if (!isDeleting) {
          setText(currentTitle.substring(0, text.length + 1));
          if (text === currentTitle) {
            setIsDeleting(true);
            setTimeout(() => {}, delayBetweenTitles);
          }
        } else {
          setText(currentTitle.substring(0, text.length - 1));
          if (text === "") {
            setIsDeleting(false);
            setIndex((index) => index + 1);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [index, isDeleting, text, titles]);

  return (
    <h1 className={className} id="site-title">
      {text}
    </h1>
  );
}

export default Typewriter;
