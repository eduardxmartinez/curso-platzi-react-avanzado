import React, { useEffect, useRef, useState } from "react";
import { ImgWrapper, Img, Button, Article } from "./styles";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const DEFAULT_IMAGE =
  "https://www.eluniversal.com.mx/sites/default/files/upload/u40162/dualipa-orinoco.png";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const key = `like-${id}`
  const [liked, setLiked] = useState(()=> {
    try{
      const like = localStorage.getItem(key)
      return like
    } catch(e){
      return false
    }
  });

  useEffect(
    function () {
      Promise.resolve(
        typeof window.IntersectionObserver !== "undefined"
          ? window.IntersectionObserver
          : import("intersection-observer")
      ).then(() => {
        const observer = new window.IntersectionObserver(function (entries) {
          const { isIntersecting } = entries[0];
          if (isIntersecting) {
            setShow(true);
            observer.disconnect();
          }
        });
        observer.observe(ref.current);
      });
    },
    [ref]
  );

  const Icon = liked ? AiFillHeart : AiOutlineHeart;

  const setLocalStorage = (value) => {
    try {
      localStorage.setItem(key, value);
      setLiked(value);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Article ref={ref}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={DEFAULT_IMAGE} />
            </ImgWrapper>
          </a>
          <Button onClick={() => setLocalStorage(!liked)}>
            <Icon size={"32px"} color={"white"} /> {likes} likes!
          </Button>
        </>
      )}
    </Article>
  );
};
