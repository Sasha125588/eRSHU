import { NotificationIcon, ProfileIcon } from "@/app/icons/svgIcons"

const Header = () => {
  return (
    <nav>
      <ul className="flex justify-between">
        <li>
            <ProfileIcon w={'30'} h={'30'}/>
        </li>
        <li>
            <h1 className="text-white text-2xl mb-12">
                єРДГУ
            </h1>
        </li>
        <li>
            <NotificationIcon w={'30'} h={'30'}/>
        </li>
      </ul>
    </nav>
  )
}

export default Header
