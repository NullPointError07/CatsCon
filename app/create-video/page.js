"use client";

import Form from "@/components/Form";
import { data } from "autoprefixer";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CreateVideo = () => {
  const router = useRouter();
  const { data: session } = useSession();
  console.log("testing" + JSON.stringify(session?.user));

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const createVideo = async (e) => {
    e.preventDefault();

    setSubmitting(true);

    const data = {
      title: post.title,
      userId: session?.user._id,
      description: post.description,
      tag: post.tag,
    };

    console.log(data);

    try {
      const response = await fetch("/api/video/new", {
        method: "POST",
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
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createVideo}
    />
  );
};

export default CreateVideo;
