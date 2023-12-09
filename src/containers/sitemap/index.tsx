import { Link } from "react-router-dom";
import { useGetPopularGamesQuery } from "../../services";

export const Sitemap = () => {
  const { data: popularGames } = useGetPopularGamesQuery();

  const routes = [
    { path: "/", label: "Home" },
    { path: "/games", label: "Games" },
    { path: "/games?platform=pc", label: "PC Games" },
    { path: "/games?platform=browser", label: "Browser Games" },
    { path: "/games?sortby=recently_added", label: "New Games" },
    { path: "/games?sortby=popularity", label: "Popular Games" },
    { path: "/giveaways", label: "Giveaways" },
    { path: "/news", label: "Latest Gaming News" },
    { path: "/sitemap", label: "Sitemap" },
  ];

  return (
    <div className="container mx-auto mt-8 min-h-[80dvh]">
      <h1 className="text-4xl font-bold mb-5">Sitemap</h1>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2">
          <h1 className="text-2xl font-bold mb-4">Main Pages</h1>
          <ul className="list-disc pl-4">
            {routes.map((route) => (
              <li key={route.path} className="mb-1">
                <Link to={route.path}>{route.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full sm:w-1/2">
          <h1 className="text-2xl font-bold mb-4">Best Free Games</h1>
          <ul className="list-disc pl-4 max-h-[60dvh] overflow-auto scrollbar-hide">
            {popularGames &&
              popularGames.slice(15, 75).map((game) => (
                <li key={game.id} className="mb-1">
                  <Link to={`/games/${game.id}`}>{game.title}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
