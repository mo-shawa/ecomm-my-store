import { useEffect, useState } from 'react'

export default function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => setHasMounted(true), []) // necessary due to checking localStorage

  return hasMounted
}
