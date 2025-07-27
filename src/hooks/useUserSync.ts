import { useUser } from '@clerk/clerk-react'
import { useEffect } from 'react'

export const useUserSync = () => {
  const { user } = useUser()

  useEffect(() => {
    if (user) {
      fetch('http://localhost:4000/api/users/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: user.id,
          name: user.fullName,
          email: user.primaryEmailAddress?.emailAddress,
          orgId: user.organizationMemberships?.[0]?.organization.id,
          role: user.publicMetadata?.role || 'Investigator'
        })
      })
    }
  }, [user])
}