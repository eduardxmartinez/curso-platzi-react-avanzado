import React, { useEffect, useRef, useState } from "react";
import { ImgWrapper, Img, Button, Article } from "./styles";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";

export const PhotoCard = ({ id, likes = 0, src}) => {
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key,false);
  const Icon = liked ? AiFillHeart : AiOutlineHeart;
  const [show, ref] = useNearScreen();
  

  return (
    <Article ref={ref}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <Button onClick={() => setLiked(!liked)}>
            <Icon size={"32px"} color={"white"} /> {likes} likes!
          </Button>
        </>
      )}
    </Article>
  );
};
