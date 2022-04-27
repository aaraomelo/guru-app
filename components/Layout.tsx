import NavBar from "./NavBar/NavBar";

export default function Layout({ children }: any) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  )
}