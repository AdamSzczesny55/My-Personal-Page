import { useState } from "react"

export default function App() {
  const [selectedGame, setSelectedGame] = useState("")
  const [selectedSeries, setSelectedSeries] = useState("")
  const [selectedAnime, setSelectedAnime] = useState("")

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      
      <header className="text-center py-6 text-3xl font-bold border-b border-gray-700">
        My Personal Page - adumme6/Adam Szczęsny
      </header>

      <main className="flex-1 flex items-center justify-center">
        <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-center">
          
          <div
            onMouseLeave={() => setSelectedGame("")}
            className="group w-100 h-200 bg-gray-800 rounded-xl flex items-center justify-center text-xl font-semibold relative overflow-hidden transition-all duration-300 hover:scale-105"
          >

          <div className="transition-all duration-300 group-hover:opacity-0">
            GAMES
          </div>

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center gap-4 px-4 py-4 text-center overflow-y-auto">

            <div className="flex flex-col items-center">
              <div className="font-bold">Hollow Knight</div>
              <img
                src="hk.png"
                onClick={() => setSelectedGame("hk")}
                className="w-28 h-28 object-contain my-1 cursor-pointer hover:scale-110 transition-all duration-300"
                alt="Hollow Knight"
              />
              <div className="text-xs text-gray-300 break-words">
                dope metroidvania defeat the radiance yes yes
              </div>
                {selectedGame === "hk" && (
                <div className="mt-3 flex flex-col items-center bg-gray-700 p-3 rounded-xl">
                  <div className="font-bold text-sm">
                    Favorite Character
                  </div>

                  <img
                    src="c1.png"
                    className="w-20 h-20 object-contain my-2"
                    alt="quirell"
                  />

                  <div className="text-xs text-gray-300 text-center">
                    Quirell - the GOAT.
                  </div>

                </div>
              )}
            </div>

            <div className="flex flex-col items-center">
              <div className="font-bold">Silksong</div>
              <img
                src="ss.png"
                onClick={() => setSelectedGame("ss")}
                className="w-28 h-28 object-contain my-1 cursor-pointer hover:scale-110 transition-all duration-300"
                alt="Silksong"
              />
              <div className="text-xs text-gray-300 break-words">
                shaw garama edino type shi
              </div>
              {selectedGame === "ss" && (
                <div className="mt-3 flex flex-col items-center bg-gray-700 p-3 rounded-xl">
                  <div className="font-bold text-sm">
                    Favorite Character
                  </div>

                  <img
                    src="c2.png"
                    className="w-20 h-20 object-contain my-2"
                    alt="trobbio"
                  />

                  <div className="text-xs text-gray-300 text-center">
                    TROBBIOOOOOOO
                  </div>

                </div>
              )}
            </div>

            <div className="flex flex-col items-center">
              <div className="font-bold">Geometry Dash</div>
              <img
                src="gd.png"
                onClick={() => setSelectedGame("gd")}
                className="w-28 h-28 object-contain my-1 cursor-pointer hover:scale-110 transition-all duration-300"
                alt="Geometry Dash"
              />
              <div className="text-xs text-gray-300 break-words">
                fire in the hole
              </div>
              {selectedGame === "gd" && (
                <div className="mt-3 flex flex-col items-center bg-gray-700 p-3 rounded-xl">
                  <div className="font-bold text-sm">
                    Favorite Player
                  </div>

                  <img
                    src="c3.png"
                    className="w-20 h-20 object-contain my-2"
                    alt="doggie"
                  />

                  <div className="text-xs text-gray-300 text-center">
                    get back on grief
                  </div>

                </div>
              )}
            </div>
          </div>
        </div>

          <div
            onMouseLeave={() => setSelectedSeries("")}
            className="group w-100 h-200 bg-gray-800 rounded-xl flex items-center justify-center text-xl font-semibold relative overflow-hidden transition-all duration-300 hover:scale-105"
          >
          <div className="transition-all duration-300 group-hover:opacity-0">
            SERIES/MOVIES
          </div>

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center gap-4 px-4 py-4 text-center overflow-y-auto">

            <div className="flex flex-col items-center">
              <div className="font-bold">The Boys</div>
              <img
                src="theboys.png"
                onClick={() => setSelectedSeries("tb")}
                className="w-28 h-28 object-contain my-1 cursor-pointer hover:scale-110 transition-all duration-300"
                alt="The Boys"
              />

              <div className="text-xs text-gray-300 break-words">
                sum guy named ojczyznosław calls himself a god lmao
              </div>
              {selectedSeries === "tb" && (
              <div className="mt-3 flex flex-col items-center bg-gray-700 p-3 rounded-xl">

                <div className="font-bold text-sm">
                  Favorite Character
                </div>

                <img
                  src="c4.png"
                  className="w-20 h-20 object-contain my-2"
                  alt="a-train"
                />

                <div className="text-xs text-gray-300 text-center">
                  here comes the A-TRAAAAAAIN
                </div>

              </div>
              )}
            </div>

            <div className="flex flex-col items-center">
              <div className="font-bold">Maze Runner</div>
              <img
                src="mr.png"
                onClick={() => setSelectedSeries("mr")}
                className="w-28 h-28 object-contain my-1 cursor-pointer hover:scale-110 transition-all duration-300"
                alt="Maze Runner"
              />
              <div className="text-xs text-gray-300 break-words">
                thomas minho escape the maze sum wicked is bad
              </div>
              {selectedSeries === "mr" && (
              <div className="mt-3 flex flex-col items-center bg-gray-700 p-3 rounded-xl">

                <div className="font-bold text-sm">
                  Favorite Character
                </div>

                <img
                  src="c5.png"
                  className="w-20 h-20 object-contain my-2"
                  alt="favorite character"
                />

                <div className="text-xs text-gray-300 text-center">
                  minho - cool runner ig
                </div>

              </div>
              )}
            </div>

            <div className="flex flex-col items-center">
              <div className="font-bold">Money Heist</div>
              <img
                src="mh.png"
                onClick={() => setSelectedSeries("mh")}
                className="w-28 h-28 object-contain my-1 cursor-pointer hover:scale-110 transition-all duration-300"
                alt="Money Heist"
              />
              <div className="text-xs text-gray-300 break-words">
                steal the money from the heist el professor is a sigma male
              </div>
              {selectedSeries === "mh" && (
              <div className="mt-3 flex flex-col items-center bg-gray-700 p-3 rounded-xl">

                <div className="font-bold text-sm">
                  Favorite Character
                </div>

                <img
                  src="c6.png"
                  className="w-20 h-20 object-contain my-2"
                  alt="el professor"
                />

                <div className="text-xs text-gray-300 text-center">
                  smart af hes lowkey him
                </div>

              </div>
              )}
            </div>

          </div>

        </div>

          <div
            onMouseLeave={() => setSelectedAnime("")}
            className="group w-100 h-200 bg-gray-800 rounded-xl flex items-center justify-center text-xl font-semibold relative overflow-hidden transition-all duration-300 hover:scale-105"
          >
          <div className="transition-all duration-300 group-hover:opacity-0">
            ANIME
          </div>

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center gap-4 px-4 py-4 text-center overflow-y-auto">

            <div className="flex flex-col items-center">
              <div className="font-bold">My Dress-Up Darling</div>
              <img
                src="mdud.png"
                onClick={() => setSelectedAnime("mdud")}
                className="w-28 h-28 object-contain my-1 cursor-pointer hover:scale-110 transition-all duration-300"
                alt="My Dress-Up Darling"
              />
              <div className="text-xs text-gray-300 break-words">
                gojo and marin kitagawa romantic cosplay sum like that
              </div>
              {selectedAnime === "mdud" && (
              <div className="mt-3 flex flex-col items-center bg-gray-700 p-3 rounded-xl">

                <div className="font-bold text-sm">
                  Favorite Character
                </div>

                <img
                  src="c7.png"
                  className="w-20 h-20 object-contain my-2"
                  alt="marin kitagawa"
                />

                <div className="text-xs text-gray-300 text-center">
                  she is so tuff
                </div>

              </div>
              )}
            </div>

            <div className="flex flex-col items-center">
              <div className="font-bold">Jujutsu Kaisen</div>
              <img
                src="jjk.png"
                onClick={() => setSelectedAnime("jjk")}
                className="w-28 h-28 object-contain my-1 cursor-pointer hover:scale-110 transition-all duration-300"
                alt="Jujutsu Kaisen"
              />
              <div className="text-xs text-gray-300 break-words">
                domain expansions yuji sukuna fingers gojo type shi
              </div>
              {selectedAnime === "jjk" && (
              <div className="mt-3 flex flex-col items-center bg-gray-700 p-3 rounded-xl">

                <div className="font-bold text-sm">
                  Favorite Character
                </div>

                <img
                  src="c8.png"
                  className="w-20 h-20 object-contain my-2"
                  alt="yuta okkotsu"
                />

                <div className="text-xs text-gray-300 text-center">
                  come rika, give me everything
                </div>

              </div>
              )}
            </div>

          </div>

        </div>

        </div>
      </main>

      <footer className="text-center py-4 border-t border-gray-700 text-sm text-gray-400">
        By: Adam Szczęsny
      </footer>

    </div>
  )
}