"use client";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const VideoCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  return (
    <div>
      <div>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <p>{post.tag}</p>
      </div>
    </div>
  );
};

export default VideoCard;
