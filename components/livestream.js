import * as PushAPI from "@pushprotocol/restapi";
import React, { useState, useEffect,useRef } from "react";
import { Button, FloatButton, Card, Drawer } from 'antd';
import { useAccount } from "wagmi";
import { Chat } from "@pushprotocol/uiweb";


export const LiveStream = () => {


  const videoRef = useRef(null);
  useEffect(() => {
    getVideo();
  }, [videoRef]);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 300 } })
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch(err => {
        console.error("error:", err);
      });
  };

 
  return (
    <>

<video ref={videoRef}/>
      

    </>
  )
}


export default LiveStream;
