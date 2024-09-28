import { defineEventHandler, readBody, createError } from 'h3'

const users = [
  { id: 1, username: 'user1', password: 'password1', name: 'Player 01' },
  { id: 2, username: 'user2', password: 'password2', name: 'Player 02' },
]

export default defineEventHandler(async (event) => {
  const { username, password } = await readBody(event)

  const user = users.find(u => u.username === username && u.password === password)

  if (user) {
    const { password, ...userWithoutPassword } = user
    return { user: userWithoutPassword }
  }

  throw createError({
    statusCode: 401,
    message: 'Tên đăng nhập hoặc mật khẩu không đúng',
  })
})