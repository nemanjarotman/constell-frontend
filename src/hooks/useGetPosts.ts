import { useQuery } from '@tanstack/react-query'

async function fetchAllPosts() {
  const res = await fetch('/api/posts', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
    },
  })
  return res.json()
}

export function useGetPosts() {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      try {
        const res = await fetchAllPosts()
        return res
      } catch (error) {
        console.error('Error fetching auth status:', error)
        throw error
      }
    },
  })

  console.log(data, isLoading, error, isFetching)

  return { isLoading, error, data, isFetching }
}
