import { HeadContent } from "../../components";
import { useParams } from "react-router-dom";
import { useGetGameDetailsQuery } from "../../services";
import { Image, Button, Chip } from "@nextui-org/react";
import { FaFirefoxBrowser, FaWindows } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import { ImSad, ImHappy } from "react-icons/im";
import { VscDiffAdded } from "react-icons/vsc";


const getRequirements = (obj: any) => {
  return Object.entries(obj).map(([name, value]) => ({ name, value }));
};

export const SingleGame = () => {
  const { id } = useParams<{ id: string }>();
  const { data: game, isLoading } = useGetGameDetailsQuery(Number(id));

  return (
    <>
      <HeadContent
        title={`${game?.title} | FreeGamesHub`}
        description={game?.short_description}
      />
      <section className="text-gray-400 dark-bg-1 shadow-inset-1 body-font min-h-[66dvh]">
        <div className="container py-24 mx-auto flex flex-col">
          <div className="flex flex-col sm:flex-row ">
            <div className="sm:w-1/3 text-center sm:pr-4 sm:py-2">
              <Image
                src={game?.thumbnail}
                alt={game?.title}
                radius="sm"
                className="w-full"
                classNames={{
                  wrapper: "!max-w-full"
                }}
              />
              <div className="flex gap-5 items-center mt-5">
                <Button
                  size="lg"
                  color="default"
                  radius="sm"
                  variant="bordered"
                  as="div"
                  className="w-2/5 cursor-default border-1"
                >
                  {game?.genre}
                </Button>
                <Button
                  size="lg"
                  color={game?.platform === "PC (Windows)" ? "primary" : "secondary"}
                  radius="sm"
                  variant="ghost"
                  className="w-4/5 gap-1 text-xl font-bold"
                  endContent={<IoMdExit />}
                >
                  Play Now
                </Button>
              </div>

              <div className="flex justify-around p-4 mt-5 border border-gray-700 rounded-lg border-opacity-75 ">
                <div className="xl:w-1/3 md:w-1/2">
                  <div className="flex flex-col items-center justify-center ">
                    <ImHappy className="text-success mb-1" size={30} />
                    <p className="text-default-500">
                      {Math.ceil(Math.random() * 5000)}
                    </p>
                    <p className="text-default-500">Likes</p>
                  </div>
                </div>

                <div className="xl:w-1/3 md:w-1/2 ">
                  <div className="flex flex-col items-center justify-center ">
                    <ImSad className="text-danger mb-1" size={30} />
                    <p className="text-default-500">
                      {Math.ceil(Math.random() * 100)}
                    </p>
                    <p className="text-default-500">Dislikes</p>
                  </div>
                </div>

                <div className="xl:w-1/3 md:w-1/2 ">
                  <div className="flex flex-col items-center justify-center ">
                    <VscDiffAdded className="text-warning mb-1" size={30} />
                    <p className="text-default-500">
                      {Math.ceil(Math.random() * 200)}
                    </p>
                    <p className="text-default-500">Add</p>
                  </div>
                </div>

              </div>

              <div className="flex justify-around p-4 mt-5 border border-gray-700 rounded-lg border-opacity-75 ">
                <div className="md:w-1/2 flex flex-col items-center justify-center ">
                  <p className="text-default-500">
                    Developer
                  </p>
                  <p className="text-default-500">
                    {game?.developer}
                  </p>
                </div>

                <div className="md:w-1/2 flex flex-col items-center justify-center">
                  <p className="text-default-500">
                    Release Date
                  </p>
                  <p className="text-default-500">
                    {game?.release_date?.toString()}
                  </p>
                </div>
              </div>

            </div>

            <div className="sm:w-2/3 sm:pl-4 sm:py-2 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0">
              Details
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
