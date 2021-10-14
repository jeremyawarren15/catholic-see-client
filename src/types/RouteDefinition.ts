export type RouteDefinition = {
  path: string,
  exact: boolean,
  authenticated: boolean,
  sidebar: boolean,
  component: React.ReactNode
}