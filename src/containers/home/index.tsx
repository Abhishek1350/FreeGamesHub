import { Button } from "@nextui-org/react";
import { FaWindows, FaFirefoxBrowser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NewGameAdded } from "../../components";

export const Home = () => {
  return (
    <section className="top-section">
      <div
        className="bg-center bg-cover bg-no-repeat py-4 sm:py-14"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.80), rgba(0, 0, 0, 0.80)), url(https://wallpaper.dog/large/5483415.jpg)"
        }}
      >
        <div className="container mx-auto flex items-center justify-center flex-col">
          <div className="text-center max-w-[700px]">
            <h1 className="sm:text-4xl text-3xl mb-3 sm:mb-5 font-semibold text-white">
              Hunt Down the Ultimate <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent font-bold">Free-to-Play</span> Gaming Experiences!
            </h1>
            <p className="mb-5  sm:text-[16px] text-[15px]">
              Embark on a quest for the best free-to-play thrills! Discover diverse digital realms, each offering exciting adventures. Unleash the <span className="bg-gradient-to-r from-danger to-warning bg-clip-text text-transparent font-semibold">ultimate gaming experiences</span> and let the quest begin!
            </p>
            <p className="sm:text-3xl text-2xl mb-6 font-bold text-danger">
              Choose your platform
            </p>
            <div className="flex justify-center gap-6">
              <Button
                color="primary"
                variant="ghost"
                className="font-bold gap-1"
                size="lg"
                startContent={<FaWindows size={18} />}
                as={Link}
                to="/pc-games"
              >
                Windows
              </Button>
              <Button
                color="secondary"
                variant="ghost"
                className="font-bold gap-1"
                size="lg"
                startContent={<FaFirefoxBrowser size={18} />}
                as={Link}
                to="/browser-games"
              >
                Browser
              </Button>
            </div>
          </div>
        </div>
      </div>
      <NewGameAdded/>
    </section>
  )
}