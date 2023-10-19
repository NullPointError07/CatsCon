"use client";

import Form from "@/components/Form";

import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const CreateVideo = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const videoID = searchParams.get("id");

  const [submitting, setSubmitting] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const [videoFile, setVideoFile] = useState(null);

  useEffect(() => {
    const getVideoDetails = async () => {
      if (videoID) {
        const response = await fetch(`/api/video/${videoID}`);
        const data = await response.json();

        // Use set functions to update state
        setTitle(data.title);
        setDescription(data.description);
        setTag(data.tag);
        setVideoFile(data.videoFile)
      }
    };

    getVideoDetails();
  }, [videoID]);

  const handleFileChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitting(true);

    const formData = new FormData();
    formData.append("userId", session.user.id);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("tag", tag);
    formData.append("file", videoFile);

    try {
      const response = await fetch(`/api/video/${videoID}`, {
        method: "PATCH",
        body: formData,
      });

      if (response.ok) {
        router.push("/");
      } else {
        console.error("Error uploading video.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form
      type="Update"
      title={title}
      setTitle={setTitle}
      description={description}
      setDescription={setDescription}
      tag={tag}
      setTag={setTag}
      submitting={submitting}
      handleFileChange={handleFileChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default CreateVideo;
