import { HeadContent } from "../../components";
import { useParams } from "react-router-dom";
import { useGetGameDetailsQuery } from "../../services";
import { Image, Tabs, Tab } from "@nextui-org/react";
import { FaFirefoxBrowser, FaWindows } from "react-icons/fa";

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
          <div className="mx-auto">
            <div className="flex flex-col sm:flex-row ">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
                  <Image src={game?.thumbnail} alt={game?.title} radius="sm" />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h1 className="text-3xl title-font mt-2 text-white font-bold">
                    {game?.title}
                  </h1>
                  <div className="w-16 h-1 bg-indigo-500 rounded mt-2 mb-2"></div>
                  <div className="flex gap-5 mb-2">
                    <h3 className="text-base font-bold">{game?.genre}</h3>
                    {game?.platform === "PC (Windows)" ? (
                      <h3 className="text-base font-bold flex items-center text-primary">
                        Windows <FaWindows className="inline ml-1 " />
                      </h3>
                    ) : (
                      <h3 className="text-base font-bold flex items-center text-secondary">
                        Browser <FaFirefoxBrowser className="inline ml-1 " />
                      </h3>
                    )}
                  </div>
                  <p className="text-base text-gray-400">
                    {game?.short_description}
                  </p>
                </div>
              </div>

              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0">
                <div className="flex flex-wrap gap-4">
                  <Tabs variant="underlined" fullWidth>
                    <Tab key="requirements" title="Requirements">
                      <div className="text-center">
                        <h6 className="text-xl font-medium text-center title-font text-white mb-4">
                          Minimum System Requirements
                        </h6>
                      </div>
                      <div className="flex flex-wrap sm:mx-auto sm:mb-2 -mx-2">
                        {
                          game?.minimum_system_requirements && (
                            getRequirements(game?.minimum_system_requirements)?.map((item: any, index: number) => (
                              <div className="p-2 sm:w-1/2  w-full min-h-[96px]" key={index}>
                                <div className="bg-gray-800 rounded  p-3 h-full ">
                                  <h6 className="title-font font-medium text-white capitalize">
                                    {item.name}
                                  </h6>
                                  <p className="title-font font-medium text-gray-300 capitalize">
                                    {item.value}
                                  </p>
                                </div>
                              </div>
                            ))
                          )
                        }
                      </div>
                    </Tab>
                    <Tab key="details" title="Details">
                      <div className="text-tiny">
                        {game?.description}
                      </div>
                    </Tab>
                    <Tab key="images" title="Images">
                      Images
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
