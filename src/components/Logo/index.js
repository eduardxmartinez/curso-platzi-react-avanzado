import * as React from "react";
import { Svg, SvgContainer } from "./styles";


export const Logo = (props) => (
  <SvgContainer>
    <a href="/">
    <Svg
      width={302.328}
      height={119.726}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="98.836 15.137 302.328 119.726"
      style={{
        backgroundColor: "transparent",
      }}
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <defs>
        <linearGradient id="b" x1={-0.414} x2={1.414} y1={0.093} y2={0.907}>
          <stop offset={0} stopColor="#ee4208" />
          <stop offset={1} stopColor="#4139ff" />
        </linearGradient>
        <filter id="a" x="-100%" y="-100%" width="300%" height="300%">
          <feMorphology
            in="SourceGraphic"
            operator="dilate"
            radius={2}
            result="outline"
          />
          <feComposite operator="out" in="outline" in2="SourceAlpha" />
        </filter>
      </defs>
      <g filter="url(#a)">
        <path
          d="M7.42 13.31q-2.43 0-2.43-1.41v-35.77q0-4.16-.32-6.05-.32-1.89-.32-2.08 0-.77 1.35-1.09 1.34-.32 2.36-.32.9 0 1.25.83.35.84.55 1.96.19 1.12.25 1.56 1.47-2.36 3.43-3.58 1.95-1.22 4.19-1.22 3.07 0 5.37 2.18 2.31 2.18 3.52 6.11 1.22 3.94 1.22 8.99 0 8-2.88 12.48T17.22.38q-2.18 0-3.75-.83-1.57-.83-2.97-2.43V11.9q0 1.41-2.44 1.41h-.64Zm8.52-17.66q6.2 0 6.2-12.16 0-6.02-1.44-9.35-1.44-3.32-4.25-3.32-1.6 0-3.17 1.15-1.57 1.15-2.78 3.26v17.54q2.24 2.88 5.44 2.88ZM47.36.38q-6.78 0-10.08-4.16t-3.3-12.73q0-8.51 3.2-12.93t9.41-4.42q5.57 0 8.39 4.26 2.81 4.26 2.81 12.45 0 .57-.77 1.6-.76 1.02-1.34 1.02H39.74q.32 5.44 2.05 7.87 1.73 2.44 5.51 2.44 2.3 0 3.84-.64 1.53-.64 2.49-1.35.96-.7 1.15-.7.64 0 1.44 1.28.8 1.28.8 1.92 0 .77-1.31 1.76T52.16-.29q-2.24.67-4.8.67Zm-7.62-19.52H52.1q0-10.11-5.7-10.11-6.14 0-6.66 10.11ZM73.02.38q-2.81 0-4.99-1.69-2.17-1.7-2.17-6.05v-21.5h-2.12q-.64 0-.96-.45-.32-.45-.32-1.47v-.77q0-1.03.32-1.47.32-.45.96-.45h2.12l.76-6.72q.13-1.41 2.05-1.41h.64q1.92 0 1.92 1.41v6.72h4.23q.7 0 .99.45.29.44.29 1.47v.77q0 1.02-.29 1.47-.29.45-.99.45h-4.23v20.6q0 2.31.64 3.17.64.87 1.86.87.83 0 1.41-.16.57-.16.76-.16.58 0 .96 1.15.39 1.15.39 1.92 0 1.02-1.31 1.44-1.32.41-2.92.41Zm20.16 13.19q-5.24 0-8.25-1.89t-3.01-6.05q0-2.75 1.31-4.8t3.68-3.26v-.13q-.96-.77-1.5-1.98-.55-1.22-.55-2.69 0-3.71 3.01-6.02-2.3-1.34-3.52-3.84-1.21-2.49-1.21-5.76 0-4.99 2.72-8t7.84-3.01q1.6 0 3 .39h9.6q1.28 0 1.28 1.85v.77q0 .96-.28 1.38-.29.41-1 .41-2.56 0-3.52-.12l-.12.12q1.47 2.63 1.47 6.15 0 4.8-2.59 7.81-2.6 3-7.33 3.2-2.31.12-3.68 1.15-1.38 1.02-1.38 3.01 0 1.92 1.54 2.62 1.53.7 4.73 1.15l1.67.26q4.09.64 6.27 2.37 2.18 1.72 2.18 5.44 0 4.6-3.14 7.04-3.14 2.43-9.22 2.43ZM93.63-16q2.69 0 4.26-1.47 1.57-1.47 1.57-5.31 0-3.91-1.57-5.41-1.57-1.51-4.26-1.51-2.75 0-4.25 1.48-1.51 1.47-1.51 5.44 0 3.84 1.51 5.31Q90.88-16 93.63-16Zm0 25.41q7.04 0 7.04-4.74 0-1.66-.93-2.53-.92-.86-2.3-1.21T93.76.26q-2.82-.39-3.97-.77-3.33 1.73-3.33 5.12 0 4.8 7.17 4.8ZM117.12.13q-2.56 0-2.56-1.41v-22.59q0-4.23-.38-6.05-.39-1.82-.39-2.02 0-.76 1.22-1.12 1.21-.35 2.24-.35.89 0 1.31.96.42.96.64 2.02.22 1.05.29 1.37 3.07-4.8 6.72-4.8 1.6 0 2.46.71.87.7.87 1.79t-.39 2.27q-.38 1.19-.89 1.19-.32 0-1.16-.36-.83-.35-1.98-.35-1.66 0-3.17 1.38-1.5 1.37-2.01 2.53v23.42q0 1.41-2.56 1.41h-.26Zm26.3.25q-4.28 0-6.81-2.59-2.53-2.59-2.53-7.33 0-4.8 2.5-7.36 2.49-2.56 6.2-3.42 3.72-.86 8.52-.93v-3.01q0-2.17-1.35-3.58-1.34-1.41-4.22-1.41-2.24 0-3.94.55-1.69.54-2.91 1.15-1.22.61-1.41.61-.64 0-1.44-1.25-.8-1.25-.8-1.89 0-.83 1.51-1.73 1.5-.89 3.96-1.47 2.47-.58 5.09-.58 5.12 0 8 2.56t2.88 7.11v14.72q0 4.22.39 6.05.38 1.82.38 2.01 0 .77-1.22 1.12-1.21.35-2.24.35-.96 0-1.4-.99-.45-.99-.84-2.78-3.39 4.09-8.32 4.09Zm1.09-5.05q4.16 0 6.79-3.65v-8.26q-3.59.07-5.92.52-2.34.44-4 1.95-1.67 1.5-1.67 4.51 0 4.93 4.8 4.93Zm50.69-29.19q3.52 0 5.82 2.6 2.31 2.59 2.31 7.77v22.21q0 1.41-2.43 1.41h-.64q-2.44 0-2.44-1.41v-21.7q0-3-1.08-4.6-1.09-1.6-3.27-1.6-1.98 0-3.55 1.44-1.57 1.44-2.21 3.23v23.23q0 1.41-2.37 1.41h-.7q-2.43 0-2.43-1.41v-21.7q0-3-1.09-4.6-1.09-1.6-3.33-1.6-2.11 0-3.71 1.53-1.6 1.54-1.98 2.95v23.42q0 1.41-2.44 1.41h-.7q-2.37 0-2.37-1.41v-22.59q0-4.16-.32-6.02-.32-1.85-.32-2.05 0-.76 1.38-1.12 1.37-.35 2.33-.35.9 0 1.25.83.35.84.55 1.92.19 1.09.25 1.6 1.28-2.17 3.36-3.48 2.08-1.32 4.51-1.32 2.44 0 4.39 1.19 1.95 1.18 2.91 3.74 1.54-2.24 3.71-3.58 2.18-1.35 4.61-1.35Z"
          fill="url(#b)"
          transform="translate(146.16 102.593)"
        />
      </g>
    </Svg>
    </a>
  </SvgContainer>
);
