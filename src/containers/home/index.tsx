import { Image, Button } from "@nextui-org/react";

export const Home = () => {
  return (
    <section className="top-section">
      <div className="container ">
        <div className="mx-auto flex px-5 py-16 items-center justify-center flex-col">
          <Image
            isZoomed
            alt="Abhishek Bhardwaj"
            src="/profile.jpg"
            // className="lg:w-2/6 md:w-3/6 w-5/6 mb-5 object-cover object-center rounded"
            width={200}
            className="mb-5 object-cover object-center"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-5xl text-3xl sm:mb-4 mb-1 font-medium">
              Abhishek Bhardwaj
            </h1>
            <h2 className="leading-relaxed sm:text-5xl text-3xl sm:mb-3 mb-1 font-medium text-gray-400 italic">
              Software Engineer
            </h2>
            <h2 className="title-font sm:text-5xl text-3xl font-medium">
              Himachal Pradesh, India
            </h2>
            <div className="flex justify-center gap-4 mt-5">
              <Button color="warning">
                Contact Me
              </Button>
              <Button color="warning" variant="bordered">
                View Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}