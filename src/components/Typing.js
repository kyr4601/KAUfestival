import { useState, useEffect } from 'react';

const Typing = () => {
  const [contents, setContents] = useState('');
  const [count, setCount] = useState(-1);
  const completionWord = '한국항공대학교 대동제에 온 걸 환영해구리-!\n찾고 있는 게 있다면 나한테 말해봐!';
  const initialDelay = 1000;

  useEffect(() => {
    if (count === -1) {
      return;
    }

    const typingInterval = setInterval(() => {
      if (count < completionWord.length) {
        setContents((prevTitleValue) => prevTitleValue + completionWord[count]);
        setCount(count + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => {
      clearInterval(typingInterval);
    };
  }, [count]);

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      setCount(0);
    }, initialDelay);

    return () => {
      clearTimeout(typingTimeout);
    };
  }, []);

  return <p className="talk-content">{contents}</p>;
}

export default Typing;
