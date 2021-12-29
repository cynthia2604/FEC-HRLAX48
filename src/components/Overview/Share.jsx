import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
} from "react-share";
import { FacebookIcon, TwitterIcon, PinterestIcon } from "react-share";

export default function Share() {
  return (
    <div>
      <p>
        <b>Share:</b>
      </p>
      <div className="pd__share d-inline">
        <FacebookShareButton url={window.location.href} hashtag={"#hashtag"}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </div>
      <div className="pd__share d-inline">
        <TwitterShareButton url={window.location.href} hashtag={"#hashtag"}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </div>
      <div className="pd__share d-inline">
        <PinterestShareButton url={window.location.href} hashtag={"#hashtag"}>
          <PinterestIcon size={32} round />
        </PinterestShareButton>
      </div>
    </div>
  );
}
