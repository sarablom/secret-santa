"use client";
import Image from "next/image";
import styled from "styled-components";

export const AvatarWrapper = styled.div`
position: relative;
	width: 68px;
	height: 68px;
	border-radius: 50%;
	border: 6px solid #fff;
  background: black;
  color: white;
  `;

  export const StyledStatusIndicator = styled(Image)`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 16px;
    height: 16px;
  `;
