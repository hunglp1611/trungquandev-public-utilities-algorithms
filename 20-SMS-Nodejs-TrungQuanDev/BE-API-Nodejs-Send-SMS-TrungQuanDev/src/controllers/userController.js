// Author: TrungQuanDev: https://youtube.com/@trungquandev
import { StatusCodes } from 'http-status-codes'
import { MOCK_USER } from '~/models/mockDatabase'


const register = async (req, res) => {
  try {
    // Giả sử việc tạo tài khoản đã thành công nhé. Còn trong thực tế ở bước này sẽ query vào database để tạo data và lưu lại, nếu bạn chưa hiểu thì có thể xem bộ video đầy đủ này của mình:
    // https://youtu.be/aakibYH9ReA?si=MtQ36SU3c3_d24Vu
    const createdUser = MOCK_USER

    // Gửi sms cho user sau khi đăng ký tài khoản, có thể là sms xác nhận, sms welcome...vv
    // Bước gửi sms này sẽ là việc gửi hành động đến một dịch vụ bên thứ 3.

    // Trả về response với thông tin user đã được tạo
    res.status(StatusCodes.OK).json(createdUser)
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
  }
}

export const userController = {
  register
}
