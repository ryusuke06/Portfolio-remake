export default function({ $axios, redirect }) {
  $axios.setToken('access_token')

// CORSの許可
  $axios.onResponse(config => {
    $axios.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  })
}