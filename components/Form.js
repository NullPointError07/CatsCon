import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="bg-[#f1f7ff] w-full max-w-full grid lg:grid-cols-2 md:grid-cols-1 lg:px-16 md:px-10 sm:px-3 py-20  gap-10">
      <div className="p-12">
        <h1 className="text-[#034ea1] text-[38.4px]">
          <span className="blue_gradient">{type} Video</span>
        </h1>
        <p className=" lg:text-left  max-w-md">
          {type} and share your amazing cat videos with the world, and let
          capture beautiful moments of your cats and make everyone aww
        </p>
      </div>

      <div className="border-2 p-12 mx-12 shadow-lg rounded-lg">
        <form
          onSubmit={handleSubmit}
          className=" w-full max-w-2xl flex flex-col gap-7 glassmorphism"
        >
          <label>
            <input
              type="text"
              placeholder="Title"
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              className="bg-[#d4e8ff] rounded-lg block w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </label>

          <label>
            <input
              type="text"
              placeholder="Description"
              value={post.description}
              onChange={(e) =>
                setPost({ ...post, description: e.target.value })
              }
              className="bg-[#d4e8ff] rounded-lg  block w-full py-8 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </label>

          <label>
            <input
              type="text"
              placeholder="Tags #adorable, #orange, #aww, etc."
              value={post.tag}
              onChange={(e) => setPost({ ...post, tag: e.target.value })}
              className="bg-[#d4e8ff] rounded-lg  block w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </label>

          <label>
            <input
              type="file"
              placeholder="Upload Your Video"
              // value={post.tag}
              // onChange={(e) => setPost({ ...post, tag: e.target.value })}
              className="bg-[#d4e8ff] rounded-lg  block w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              // required
            />
          </label>

          <div className="flex-end mx-3 mb-5 gap-4">
            <Link href="/" className="text-gray-500 text-sm pr-4">
              Cancel
            </Link>

            <button
              type="submit"
              disabled={submitting}
              className="px-5 py-1.5 text-sm btn-primary rounded-full "
            >
              {submitting ? `${type}ing...` : type}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
