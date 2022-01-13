import { validateEmail } from 'utils/helper'

export const emailRules = {
  email: {
    required: {
      value: true,
      message: 'Emaii là bắt buộc nhập'
    },
    minLength: {
      value: 6,
      message: 'Email có độ dài từ 6 - 160 ký tự'
    },
    maxLength: {
      value: 160,
      message: 'Email có độ dài từ 6 - 160 ký tự'
    },
    validate: {
      email: value => validateEmail(value) || 'Email không đúng định dạng'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Mật khẩu là bắt buộc nhập'
    },
    minLength: {
      value: 6,
      message: 'Mật khẩu có độ dài từ 6 - 160 ký tự'
    },
    maxLength: {
      value: 160,
      message: 'Mật khẩu có độ dài từ 6 - 160 ký tự'
    }
  },
  confirmedPassword: {
    required: {
      value: true,
      message: 'Nhập lại mật khẩu là bắt buộc nhập'
    },
    minLength: {
      value: 6,
      message: 'Nhập lại mật khẩu có độ dài từ 6 - 160 ký tự'
    },
    maxLength: {
      value: 160,
      message: 'Nhập lại mật khẩu có độ dài từ 6 - 160 ký tự'
    }
  }
}

export const userRules = {
  name: {
    maxLength: {
      value: 160,
      message: 'Tên có độ dài tối đa là 160 ký tự'
    }
  },
  phone: {
    maxLength: {
      value: 20,
      message: 'Số điện thoại có độ dài tối đa là 20 ký tự'
    }
  },
  address: {
    maxLength: {
      value: 160,
      message: 'Địa chỉ có độ dài tối đa là 160 ký tự'
    }
  }
}
