import { config } from "../../../config";

export type FontMap = Record<
  string,
  {
    data: Buffer | ArrayBuffer;
    name: string;
    weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
    style?: "normal" | "italic";
    lang?: string;
  }
>;
let loadedFonts: FontMap | null = null;
const loadFontsRaw = async (): Promise<FontMap> => {
  return {
    "inter-semibold": {
      name: "Inter",
      data: await fetch(new URL("fonts/Inter-SemiBold.ttf", config.baseUrl)).then(
        (res) => res.arrayBuffer()
      ),
      weight: 600,
      style: "normal",
    },
    "inter-regular": {
      name: "Inter",
      data: await fetch(new URL("fonts/Inter-Regular.ttf", config.baseUrl)).then(
        (res) => res.arrayBuffer()
      ),
      weight: 400,
      style: "normal",
    },
  };
};
export const loadFonts = async (): Promise<FontMap> => {
  if (loadedFonts) {
    return loadedFonts;
  }
  loadedFonts = await loadFontsRaw();
  return loadedFonts;
};
