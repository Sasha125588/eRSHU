import { CalcIcon, MenuIcon } from "../icons/svgIcons"

const HomePage = () => {
  return (
      <div className="grid grid-cols-2 justify-center items-center gap-6 text-white">
        <div className="flex flex-col justify-center items-center bg-blue px-4 py-14 rounded-xl cursor-pointer">
            <div className="text-center mb-2">
                <MenuIcon w={'40'} h={'40'}/>
            </div>
            <p className="font-medium text-lg">Розклад</p>
        </div>
        <div className="flex flex-col justify-center items-center bg-blue px-4 py-14 rounded-xl cursor-pointer">
            <div className="text-center mb-2">
                <CalcIcon w={'40'} h={'40'}/>
            </div>
            <p className="font-medium text-lg">Калькулятор рейтингу</p>
        </div>
      </div>
  )
}

export default HomePage
