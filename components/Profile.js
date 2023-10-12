import VideoCard from "./VideoCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <div className="w-full">
      <div>
        {name} Profile
        <p>{desc}</p>
        <div className="my-10 grid lg:grid-cols-4 md:grid-cols-2 gap-4 cursor-pointer xl:px-[105px] lg:px-[93.33px] md:px-[30px] px-[22px]">
          {data.map((post) => (
            <VideoCard
              key={post._id}
              post={post}
              handleEdit={() => handleEdit && handleEdit(post)}
              handleDelete={() => handleDelete && handleDelete(post)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
