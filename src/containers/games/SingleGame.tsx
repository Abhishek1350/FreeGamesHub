import { HeadContent } from "../../components"
import { useParams } from "react-router-dom"

export const SingleGame = () => {
  const { id } = useParams<{ id: string }>()
  return (
    <>
      <HeadContent
        title="Game Details"
        description="Game Details"
      />
      <section className="text-gray-400 dark-bg-1 shadow-inset-1 body-font min-h-[66dvh]">
        <div className="min-h-[66dvh] flex justify-center items-center">
          <h1 className="text-6xl">
            <span className=" bg-gradient-to-r from-orange-500 via-white to-green-500 bg-clip-text text-transparent  font-extrabold">
              Working on it! game id is {id}
            </span>
          </h1>

        </div>
      </section >
    </>

  )
}
