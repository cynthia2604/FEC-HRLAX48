import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
} from "react-share";
import { FacebookIcon, TwitterIcon, PinterestIcon } from "react-share";

export default function Share() {
  return (
    <div className="mt-2">
      <FacebookShareButton
        url={"https://www.facebook.com/"}
        hashtag={"#hashtag"}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton url={"https://www.twitter.com/"} hashtag={"#hashtag"}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <PinterestShareButton
        url={"https://www.pinterest.com/"}
        hashtag={"#hashtag"}
      >
        <PinterestIcon size={32} round />
      </PinterestShareButton>
    </div>
  );
}
