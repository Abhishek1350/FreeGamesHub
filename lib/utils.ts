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

  if (params.sortby) {
    switch (params.sortby) {
      case "popularity":
        return games;

      case "recently-added":
        return games.sort(
          (a: IGame, b: IGame) =>
            new Date(b.release_date).getTime() -
            new Date(a.release_date).getTime()
        );

      case "oldest":
        return games.sort(
          (a: IGame, b: IGame) =>
            new Date(a.release_date).getTime() -
            new Date(b.release_date).getTime()
        );

      case "a-z":
        return games.sort((a: IGame, b: IGame) =>
          a.title.localeCompare(b.title)
        );

      case "z-a":
        return games.sort((a: IGame, b: IGame) =>
          b.title.localeCompare(a.title)
        );

      default:
        return games;
    }
  }

  if (!params.platform && !params.category) return games;

  return games.filter((game: IGame) => {
    const platformCondition =
      !params.platform ||
      game.platform === getPlatfrom(params.platform as string);
    const categoryCondition =
      !params.category || game.genre === params.category;
    return platformCondition && categoryCondition;
  });
}
