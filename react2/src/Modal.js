import React, { Fragment, Component } from "react";
import Portal from "./Portal";
import styled from "styled-components";

export default class Modal extends Component {
  render() {
    const { children, on, toggle } = this.props;
    return (
      <Portal>
        {on && (
          <ModalWrapper>
            <ModalCard>
              <CloseButton onClick={toggle}>Close Modal</CloseButton>
              {children}
            </ModalCard>
            <Background onClick={toggle} />
          </ModalWrapper>
        )}
      </Portal>
    );
  }
}

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalCard = styled.div`
  position: relative;
  z-index: 10;
  background: white;
  min-width: 400px;
  padding: 15px;
  border-radius: 7px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`;

const Background = styled.div`
  background: black;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  opacity: 0.5;
`;
