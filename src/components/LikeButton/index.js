import React from 'react'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Button } from './styles';
import PropTypes from 'prop-types';

export const FavButton = ({liked,likes,onClick}) => {
    const Icon = liked ? AiFillHeart : AiOutlineHeart;
    return (<Button onClick={onClick}>
            <Icon size={"32px"} color={"white"} /> {likes} likes!
    </Button>)
}

FavButton.propTypes = {
    liked: PropTypes.bool.isRequired,
    likes: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
}