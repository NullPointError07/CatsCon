"use client";

import Form from "@/components/Form";

import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const UpdateVideo = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const videoID = searchParams.get("id");

  console.log("testingWithout" + session?.user);
  console.log("testing" + JSON.stringify(session?.user));

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    title: "",
    description: "",
    tag: "",
  });

  useEffect(() => {
    const getVideoDetails = async () => {
      const response = await fetch(`api/video/${videoID}`);
      const data = await response.json();

      setPost({
        title: data.title,
        description: data.description,
        tag: data.tag,
      });
    };

    if (videoID) getVideoDetails();
  }, [videoID]);

  const updateVideo = async (e) => {
    e.preventDefault();

    setSubmitting(true);

    if (!videoID) return alert("Video ID not found");

    const data = {
      title: post.title,
      userId: session?.user._id,
      description: post.description,
      tag: post.tag,
    };

    console.log(data);

    try {
      const response = await fetch(`/api/video/${videoID}`, {
        method: "PATCH",
        body: JSON.stringify({
          title: post.title,
          userId: session?.user.id,
          description: post.description,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form
      type="Update"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updateVideo}
    />
  );
};

export default UpdateVideo;
