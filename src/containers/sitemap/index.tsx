import { Link } from "react-router-dom";

export const Sitemap = () => {
  const routes = [
    { path: "/", label: "Home" },
    { path: "/games", label: "Games" },
    { path: "/games?platform=pc", label: "PC Games" },
    { path: "/games?platform=browser", label: "Browser Games" },
    { path: "/games?sortby=popularity", label: "Popular Games" },
    { path: "/games?sortby=recently_added", label: "New Games" },
    { path: "/sitemap", label: "Sitemap" },
  ];

  return (
    <div className="container mx-auto mt-8 min-h-[80dvh]">
      <h1 className="text-4xl font-bold mb-4">Sitemap</h1>
      <ul className="list-disc pl-4">
        {routes.map((route) => (
          <li key={route.path} className="mb-1">
            <Link to={route.path}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
