import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 40px;
  font-size: 18px;
  background-color: #333;
  color: #fff;
  text-shadow: 0 2px 0 rgb(0 0 0 / 25%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  border: 0;
  bottom: 40px;
  right: 40px;
  z-index: 999999;
  user-select: none;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  white-space: unset;
  padding: 0.8rem 1.5rem;
  text-decoration: none;
  font-weight: 900;
  transition: all 0.7s cubic-bezier(0, 0.8, 0.26, 0.99);

  &:before {
    position: absolute;
    pointer-events: none;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    content: "";
    transition: 0.7s cubic-bezier(0, 0.8, 0.26, 0.99);
    z-index: -1;
    background-color: #333 !important;
    box-shadow: 0 -4px rgb(0 0 0 / 50%) inset,
      0 4px rgb(255 255 255 / 20%) inset, -4px 0 rgb(255 255 255 / 20%) inset,
      4px 0 rgb(0 0 0 / 50%) inset;
  }

  &:after {
    position: absolute;
    pointer-events: none;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    content: "";
    box-shadow: 0 4px 0 0 rgb(0 0 0 / 15%);
    transition: 0.7s cubic-bezier(0, 0.8, 0.26, 0.99);
  }

  &:hover:before {
    box-shadow: 0 -4px rgb(0 0 0 / 50%) inset,
      0 4px rgb(255 255 255 / 20%) inset, -4px 0 rgb(255 255 255 / 20%) inset,
      4px 0 rgb(0 0 0 / 50%) inset;
  }

  &:hover:after {
    box-shadow: 0 4px 0 0 rgb(0 0 0 / 15%);
  }

  &:active {
    transform: translateY(4px);
  }

  &:active:after {
    box-shadow: 0 0px 0 0 rgb(0 0 0 / 15%);
  }
`;

export const JumpImage = styled.img`
  width: 40px;
  height: 40px;
`;
