import React from "react";
import { ImgWrapper, Img, Article } from "./styles";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";
import { FavButton } from "../LikeButton";
import { useMuationToogleLike } from "../../hooks/useMutationToggleLike";

export const PhotoCard = ({ id, likes = 0, src }) => {
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);
  const [show, ref] = useNearScreen();
  const { mutation, mutationLoading, mutationError } = useMuationToogleLike();
  const handleFavClick = () => {
    !liked &&
      mutation({
        variables: {
          input: { id },
        },
      });
    setLiked(!liked);
  };

  return (
    <Article ref={ref}>
      {show && (
        <>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Article>
  );
};
