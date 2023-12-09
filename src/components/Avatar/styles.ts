"use client";
import Image from "next/image";
import styled from "styled-components";

export const AvatarWrapper = styled.div`
position: relative;
	width: 68px;
	height: 68px;
	border-radius: 50%;
	border: 6px solid #fff;
  margin: 16px 8px 8px;
  background: black;
  box-sizing: content-box;
  `;

  export const StyledStatusIndicator = styled(Image)`
    position: absolute;
    bottom: -8px;
    right: -8px;
    width: 24px;
    height: 24px;
    box-sizing: content-box;
    filter: drop-shadow(0 0 0 8px var(--color-background));
  `;

export const SantaHatImage = styled(Image)`
position: absolute;
top: -28px;
right: -24px;
width: 66.81px;
height: 56.17px;
box-sizing: content-box;

`;