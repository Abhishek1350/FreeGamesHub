import { HeadContent } from "../../components";
import { useParams, useLocation } from "react-router-dom";
import { useGetGameDetailsQuery } from "../../services";
import { Image, Button, Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { IoMdExit } from "react-icons/io";
import { ImSad, ImHappy } from "react-icons/im";
import { VscDiffAdded } from "react-icons/vsc";

interface Location {
  pathname: string;
  search: string;
  state: { from: string } | null;
  hash: string;
  key: string;
}

const getRequirements = (obj: object) => {
  return Object.entries(obj).map(([name, value]) => ({ name, value }));
};

const getPreviousUrl = (location: Location): string => {
  const { state } = location;
  let url = "/games";
  if (state && state.from) {
    url = state.from;
  }
  return url;
};

const getPriousPathname = (location: Location): string => {
  const url = getPreviousUrl(location);
  return url.split("?")[0].replace("/", "");
};

const breakTextIntoPieces = (text: string = "") => {
  const pieces = [];
  let currentPiece = "";

  text.split(".").forEach((sentence) => {
    if ((currentPiece + sentence).length < 500) {
      currentPiece += sentence + ".";
    } else {
      pieces.push(currentPiece.trim());
      currentPiece = sentence + ".";
    }
  });

  if (currentPiece.trim() !== "") {
    pieces.push(currentPiece.trim());
  }

  return pieces;
};

export const SingleGame = () => {
  const { id } = useParams<{ id: string }>();
  const { data: game, isLoading } = useGetGameDetailsQuery(Number(id));
  const location = useLocation();

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
                  wrapper: "!max-w-full",
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
                  color={game?.platform === "Windows" ? "primary" : "secondary"}
                  radius="sm"
                  variant="ghost"
                  className="w-4/5 gap-1 text-xl font-bold"
                  endContent={<IoMdExit />}
                  onClick={() => window.open(game?.game_url, "_blank")}
                >
                  Play Now
                </Button>
              </div>

              <div className="flex justify-around p-4 mt-5 border border-gray-700 rounded-lg border-opacity-75 ">
                <div className="xl:w-1/3 md:w-1/2">
                  <div className="flex flex-col items-center justify-center ">
                    <ImHappy className="text-success mb-1" size={30} />
                    <p className="text-color-3">
                      {Math.ceil(Math.random() * 5000)}
                    </p>
                    <p className="text-color-2">Likes</p>
                  </div>
                </div>

                <div className="xl:w-1/3 md:w-1/2 ">
                  <div className="flex flex-col items-center justify-center ">
                    <ImSad className="text-danger mb-1" size={30} />
                    <p className="text-color-3">
                      {Math.ceil(Math.random() * 100)}
                    </p>
                    <p className="text-color-2">Dislikes</p>
                  </div>
                </div>

                <div className="xl:w-1/3 md:w-1/2 ">
                  <div className="flex flex-col items-center justify-center ">
                    <VscDiffAdded className="text-warning mb-1" size={30} />
                    <p className="text-color-3">
                      {Math.ceil(Math.random() * 200)}
                    </p>
                    <p className="text-color-2">Add</p>
                  </div>
                </div>
              </div>

              {/* <div className="flex justify-around p-4 mt-5 border border-gray-700 rounded-lg border-opacity-75 ">
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
              </div> */}
            </div>

            <div className="sm:w-2/3 sm:pl-4 sm:py-2 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-6 sm:mt-0">
              <div className="header mb-3">
                <Breadcrumbs size="sm" className="mb-2">
                  <BreadcrumbItem href="/">Home</BreadcrumbItem>
                  <BreadcrumbItem
                    href={getPreviousUrl(location)}
                    className="capitalize"
                  >
                    {getPriousPathname(location)}
                  </BreadcrumbItem>
                  <BreadcrumbItem>{game?.title}</BreadcrumbItem>
                </Breadcrumbs>
                <h1>
                  <span className="text-2xl sm:text-3xl font-bold text-color-2">
                    {game?.title}
                  </span>
                </h1>
                <div className="flex flex-wrap border gap-5 sm:gap-10 border-gray-700 border-opacity-75 p-4 my-5 rounded-lg">
                  <div className="m-auto">
                    <p className="leading-relaxed text-base text-color-3 ">
                      Developer
                    </p>
                    <h6 className="text-lg text-color-2 font-medium title-font">
                      {game?.developer}
                    </h6>
                  </div>

                  <div className="m-auto">
                    <p className="leading-relaxed text-base text-color-3 ">
                      Publisher
                    </p>
                    <h6 className="text-lg text-color-2 font-medium title-font">
                      {game?.publisher}
                    </h6>
                  </div>

                  <div className="m-auto">
                    <p className="leading-relaxed text-base text-color-3 ">
                      Release Date
                    </p>
                    <h6 className="text-lg text-color-2 font-medium title-font">
                      {game?.release_date?.toString()}
                    </h6>
                  </div>
                </div>
              </div>

              <div className="content">
                <h4 className="text-2xl font-semibold text-color-3 mb-2">
                  About This Game
                </h4>
                {breakTextIntoPieces(game?.description).length ? (
                  breakTextIntoPieces(game?.description).map((text, index) => (
                    <p key={index} className="text-color-2 mb-2 text-justify">
                      {text}
                    </p>
                  ))
                ) : (
                  <p className="text-color-2 mb-20">
                    {game?.short_description}
                  </p>
                )}
                <div className="mt-4">
                  <h4 className="text-2xl font-semibold text-color-3 mb-2">
                    Screenshots
                  </h4>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
