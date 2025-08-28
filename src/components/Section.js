import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import { motion, useInView } from "framer-motion";

function Section({
  title,
  description,
  lefBtnText,
  RightBtnText,
  backgroundImg,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  // once: true => chỉ animate 1 lần khi xuất hiện
  // margin => chạy animation sớm hơn khi gần viewport

  return (
    <Wrap bgImage={backgroundImg} ref={ref}>
      <Fade
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>

      <Buttons>
        <Fade
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 2 }}
        >
          <ButtonGroup
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <LeftButton>{lefBtnText}</LeftButton>
            {RightBtnText && <RightButton>{RightBtnText}</RightButton>}
          </ButtonGroup>
          <DownArrow
            src="/images/down-arrow.svg"
            onClick={() =>
              window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
            }
          />
        </Fade>
      </Buttons>
    </Wrap>
  );
}

export default Section;

const animateDown = keyframes`
  0%,20%,50%,80%,100% { transform: translateY(0); }
  40% { transform: translateY(5px); }
  60% { transform: translateY(3px); }
`;

const Wrap = styled.div`
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 35px;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  color: white;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  margin: 0 8px;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }
`;

const RightButton = styled(LeftButton)`
  background: white;
  color: black;
  opacity: 0.65;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: ${animateDown} 1.5s infinite;
  cursor: pointer;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(1.5);
  }
`;

const Fade = styled(motion.div)``;
