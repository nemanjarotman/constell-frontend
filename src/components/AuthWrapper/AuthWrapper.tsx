import React from 'react'
import { useAuth } from '@/hooks/useAuth'

function withAuth(WrappedComponent: any) {
  return function WithAuthComponent(props: any) {
    const { data, error, isFetching } = useAuth()

    if (isFetching) {
      return <div>Loading...</div>
    }

    if (error) {
      return <div>Error: Please log in</div>
    }

    if (data && data.status === 'ok') {
      return <WrappedComponent {...props} />
    }

    return <div>Please log in</div>
  }
}

export default withAuth
