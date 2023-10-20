import Link from "next/link";

const Newsletter = () => {
  return (
    <section className="bg-[#f1f7ff] w-full max-w-full grid lg:grid-cols-2 md:grid-cols-1 lg:px-24 md:px-10 sm:px-3 py-20 gap-10">
      <div className="py-12 px-16">
        <h1 className="text-[#034ea1] text-5xl mb-4">
          <span className="blue_gradient">Message Us</span>
        </h1>
        <p className="lg:text-left max-w-md text-xl">
          We'd love to hear about your experience with us.
        </p>
      </div>

      <div className="border-2 p-12 mx-12 shadow-lg rounded-lg">
        <form className="w-full max-w-4xl flex flex-col gap-7 glassmorphism">
          <div className="flex gap-7">
            <div className="w-full md:w-1/2">
              <label>
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  className="bg-[#d4e8ff] rounded-lg block w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </label>
            </div>
            <div className="w-full md:w-1/2">
              <label>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  className="bg-[#d4e8ff] rounded-lg block w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </label>
            </div>
          </div>

          <div className="flex  gap-7">
            <div className="w-full md:w-1/2">
              <label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="bg-[#d4e8ff] rounded-lg block w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </label>
            </div>
            <div className="w-full md:w-1/2">
              <label>
                <input
                  type="tel"
                  placeholder="Phone"
                  name="phone"
                  className="bg-[#d4e8ff] rounded-lg block w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </label>
            </div>
          </div>

          <label>
            <textarea
              style={{ resize: "none" }}
              rows={4}
              placeholder="Message"
              name="message"
              className="bg-[#d4e8ff] rounded-lg block w-full py-4 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </label>

          <div className="flex-end mb-5 gap-4">
            <Link href="/">
              <button
                type="submit"
                className="px-5 py-1.5 text-2xl btn-primary rounded-full "
              >
                Send Message
              </button>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
