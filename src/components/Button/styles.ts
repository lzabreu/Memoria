import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  background-color: #1550FF;
  border-radius: 10px;
  cursor: pointer;
  opacity: 1;
  transition: all ease .3s;

  &:hover {
    opacity: 0.8;
  }
`

export const IconArea = styled.div`
  width: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid rgba(255, 255, 255, .2);
  padding: 0 15px;
`

export const Icon = styled.img`
  height: 20px;
`

export const Label = styled.div`
  height: inherit;
  color: white;
  justify-content: center;
  align-items: center;
  display: flex;
  flex: 1;
  padding: 0 40px;
`