"use client";

import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const VideoCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  return (
    <div className="border-2 rounded-xl shadow p-4 hover:shadow-2xl cursor:pointer">
      <div>
        <video
          className="rounded-xl"
          src={post?.file ? `${post.file.location}` : "cat-video.mp4"}
        />
        <h1 className="text-lg font-medium">
          <span className="text-xs">Uploaded by:</span> {post?.creator?.name}
        </h1>
        <h1 className="text-lg font-bold">{post?.title}</h1>
        <p className="text-sm font-medium my-4 text-gray-700">
          {post?.description}
        </p>
        <p
          className="font-extrabold text-[#04aeee] cursor-pointer"
          onClick={() => handleTagClick && handleTagClick(post?.tag)}
        >
          {post?.tag}
        </p>

        {session?.user.id === post?.creator?._id && pathName === "/profile" && (
          <div className="flex justify-center items-stretch pt-4 space-x-3">
            <p
              className="text-sm bg-green-500 p-1 rounded-lg text-white cursor-pointer"
              onClick={handleEdit}
            >
              Edit
            </p>
            <p
              className="text-sm bg-red-500 p-1 rounded-lg text-white cursor-pointer"
              onClick={handleDelete}
            >
              Delete
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoCard;
