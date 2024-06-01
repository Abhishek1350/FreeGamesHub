import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { IGame } from "./types";
import { PLATFORMS } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRequirements(
  obj: object = []
): { name: string; value: string }[] {
  return Object.entries(obj).map(([name, value]) => ({ name, value }));
}

export function breakTextIntoPieces(text: string = ""): string[] {
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
}

export function getCategories(games: IGame[], type: string): string[] {
  switch (type) {
    case "pc":
      return Array.from(
        new Set(
          games
            ?.filter((game: IGame) => game?.platform === PLATFORMS.PC)
            ?.map((game: IGame) => game?.genre)
        )
      ).sort((a, b) => a.localeCompare(b));

    case "browser":
      return Array.from(
        new Set(
          games
            ?.filter((game: IGame) => game?.platform === PLATFORMS.BROWSER)
            ?.map((game: IGame) => game?.genre)
        )
      ).sort((a, b) => a.localeCompare(b));

    default:
      return Array.from(new Set(games?.map((game: IGame) => game?.genre))).sort(
        (a, b) => a.localeCompare(b)
      );
  }
}

export function getPlatfrom(platform: string): string {
  if (platform === "pc") return PLATFORMS.PC;
  if (platform === "browser") return PLATFORMS.BROWSER;
  return platform;
}

export function filterGames(
  params: {
    [key: string]: string | string[] | undefined;
  },
  games: IGame[]
): IGame[] {
  let filteredGames = [...games];

  if (params.sortby) {
    switch (params.sortby) {
      case "popularity":
        break;

      case "newest":
        filteredGames.sort(
          (a: IGame, b: IGame) =>
            new Date(b.release_date).getTime() -
            new Date(a.release_date).getTime()
        );
        break;

      case "oldest":
        filteredGames.sort(
          (a: IGame, b: IGame) =>
            new Date(a.release_date).getTime() -
            new Date(b.release_date).getTime()
        );
        break;

      case "a-z":
        filteredGames.sort((a: IGame, b: IGame) =>
          a.title.localeCompare(b.title)
        );
        break;

      case "z-a":
        filteredGames.sort((a: IGame, b: IGame) =>
          b.title.localeCompare(a.title)
        );
        break;

      default:
        break;
    }
  }

  if (params.platform) {
    const platforms = Array.isArray(params.platform)
      ? params.platform.map((platform: string) => getPlatfrom(platform))
      : [getPlatfrom(params.platform as string)];

    filteredGames = filteredGames.filter((game: IGame) =>
      platforms.includes(game.platform)
    );
  }

  if (params.category) {
    filteredGames = filteredGames.filter(
      (game: IGame) => game.genre === params.category
    );
  }

  return filteredGames;
}

