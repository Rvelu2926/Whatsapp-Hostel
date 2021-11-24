export interface ISideNavconfig {
  title: string
  path: string
  icon: any
}

export interface ISideNavProps {
  navigationData: Array<ISideNavconfig>
}
