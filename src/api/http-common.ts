import axios from 'axios'

export default axios.create({
  baseURL: process?.env?.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_FREEWAY_BACKEND_URL_DEV : '',
  headers: {
    'Content-type': 'application/json',
  },
})
