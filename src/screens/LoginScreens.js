import React from 'react'

const LoginScreens = () => {
  return (
    <div>
      <h1>Đăng nhập</h1>
      <form>
        <div>
          <label htmlFor="username">Tài khoản:</label>
          <input type="text" id="username" />
        </div>
        <div>
          <label htmlFor="password">Mật khẩu:</label>
          <input type="password" id="password" />
        </div>
        <div>
          <button type="submit">Đăng nhập</button>
        </div>
        <div>
          <button>Đăng nhập với Google</button>
        </div>
        <div>
          <button>Quên mật khẩu</button>
        </div>
        <div>
          <button>Tạo tài khoản</button>
        </div>
      </form>
    </div>
  )
}

export default LoginScreens