import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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
