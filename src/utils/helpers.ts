import { Location } from "./types.d";

export const getRequirements = (obj: object = []) => {
    return Object.entries(obj).map(([name, value]) => ({ name, value }));
};

export const getPreviousUrl = (location: Location): string => {
    const { state } = location;
    let url = "/games";
    if (state && state.from) {
        url = state.from;
    }
    return url;
};

export const getPriousPathname = (location: Location): string => {
    const url = getPreviousUrl(location);
    return url.split("?")[0].replace("/", "");
};

export const breakTextIntoPieces = (text: string = "") => {
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
