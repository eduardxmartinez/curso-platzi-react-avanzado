import React from "react";
import { ImgWrapper, Img, Article } from "./styles";
import { useNearScreen } from "../../hooks/useNearScreen";
import { FavButton } from "../LikeButton";
import { useMuationToogleLike } from "../../hooks/useMutationToggleLike";
import { Link } from "react-router-dom";

export const PhotoCard = ({ id, liked, likes = 0, src }) => {
  const [show, ref] = useNearScreen();
  const { mutation, mutationLoading, mutationError } = useMuationToogleLike();
  const handleFavClick = () => {
      mutation({
        variables: {
          input: { id },
        },
      });
  };

  return (
    <Article ref={ref}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Article>
  );
};
