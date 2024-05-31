import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { IGame, PLATFORMS } from "./types";

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
