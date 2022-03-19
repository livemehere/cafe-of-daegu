interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

function Layout({ children }: LayoutProps) {
  return <div className="layout">{children}</div>;
}

export default Layout;
