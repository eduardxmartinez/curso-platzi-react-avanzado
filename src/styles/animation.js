import { keyframes, css } from "styled-components"

export const fadeIn = ({time = "1s", type="ease"}={}) =>
css`animation: ${time} ${fadeInKeyFrames} ${type};`

const fadeInKeyFrames = keyframes`
from{
    filter: blur(5px);
    opacity: 0;
}
to {
    filter: blur(0);
    opacity: 1;
}
`