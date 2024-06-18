"use client"

import { useState } from 'react';
import styled from 'styled-components';
import { FaRegSmile, FaRegImage, FaRegPlayCircle, FaRegFileImage, FaRegChartBar, FaRegPaperPlane } from 'react-icons/fa';
import Image from "next/image"
import profile from "./profile.png"

const Modal = ({ showModal, setShowModal }) => {
  if (!showModal) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={() => setShowModal(false)}>×</CloseButton>
        <Header>
          <Image src={profile} alt="Profile" height="50" width="50" margin="100px" />
          <UserInfo>
            <UserName>Forrest Skerman-Stevenson</UserName>
            <UserPost>Posting to Merazonia</UserPost>
          </UserInfo>
        </Header>
        <TextArea placeholder="What do you want to talk about?" />
        <Footer>
          <IconButton><FaRegSmile /> Emoji</IconButton>
          <IconButton><FaRegImage /> Photo</IconButton>
          <IconButton><FaRegPlayCircle /> Video</IconButton>
          <IconButton><FaRegFileImage /> GIF</IconButton>
          <IconButton><FaRegChartBar /> Poll</IconButton>
          <div className="inline flex justify-between">
            <PostButton>
              <div style={{ marginRight: '10px' }}><FaRegPaperPlane /></div>
              <div> Post</div>
            </PostButton>
          </div>
        </Footer>
      </ModalContent>
    </ModalOverlay>
  );
};

const OpenModalButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 20px;
  background: #ff7979;
  border: none;
  color: white;
  border-radius: 40px;
  cursor: pointer;
  font-size: 16px;
`;

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <OpenModalButton onClick={() => setShowModal(true)}>Open Modal</OpenModalButton>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  height: 280px;
  background: white;
  width: 700px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const UserInfo = styled.div``;

const UserName = styled.div`
  font-weight: bold;
`;

const UserPost = styled.div`
  color: gray;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 80px;
  border: none;
  resize: none;
  outline: none;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconButton = styled.button`
  background: #f5f5f5;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;

const PostButton = styled.button`
  width: 140px;
  height: 60px;
  background: #ff7979;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 40px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;