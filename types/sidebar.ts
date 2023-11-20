export interface ISidebarItem {
  label: string
  icon: JSX.Element
  link: string
  activeLabel: string
  setActiveLabel: React.Dispatch<React.SetStateAction<string>>
}
