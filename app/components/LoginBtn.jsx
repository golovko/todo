import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginBtn(onClick) {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <button className="button" onClick={() => signOut()}>Sign out</button>
        {" "}
        <a href="/profile">Profile</a>
      </>
    )
  }
  return (
    <>
      <button className="button" onClick={() => signIn()}>Sign in</button>
    </>
  )
}