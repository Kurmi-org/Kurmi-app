// components/MyComponent.jsx
import { useSession } from 'next-auth/react'

export default function MyComponent() {
  const { data: session } = useSession()

  if (session) {
    return <p>Signed in as {session.user.name}</p>
  } else {
    return <p>Not signed in</p>
  }
}