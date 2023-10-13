"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "@/components/Profile";

import React from "react";

const MyProfile = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch(`/api/users/${session?.user.id}/posts`);
    const data = await response.json();

    setPosts(data);
  };

  useEffect(() => {
    if (session?.user.id) fetchPosts();
  }, []);

  const handleEdit = (post) => {
    router.push(`/update-video?id=${post._id}`);
  };

  const handleDelete = async (post) => {
    const hasConfirmed = confirm("This video will be deleted. Are you sure?");

    if (hasConfirmed) {
      try {
        await fetch(`api/video/${post._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPost = post.filter((p) => p._id !== post.id);
        setPosts(filteredPost);
      } catch (error) {}
    }
  };

  return (
    <Profile
      name="user"
      desc="Welcome to your profile"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
