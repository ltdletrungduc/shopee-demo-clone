import React from 'react'
import * as Styled from './styled'

function Footer() {
  return (
    <Styled.Footer>
      <div className="container">
        <Styled.Container className="footer-1">
          <div>© 2021 Shopee. Tất cả các quyền được bảo lưu.</div>
          <Styled.Locate>
            <div>Quốc gia & Khu vực:</div>
            <span className="active">Việt Nam</span>
            <span>Singapore</span>
            <span>Indonesia</span>
          </Styled.Locate>
        </Styled.Container>
        <Styled.Container className="footer-2">
          <Styled.Policy>Chính sách bảo mật</Styled.Policy>
          <Styled.Policy>Quy chế hoạt động</Styled.Policy>
          <Styled.Policy>Chính sách vận chuyển</Styled.Policy>
          <Styled.Policy>Chính sách trả hàng và hoàn tiền</Styled.Policy>
        </Styled.Container>
        <Styled.Container className="footer-3">
          <div>Công ty TNHH Shopee</div>
        </Styled.Container>
        <Styled.Container className="footer-4">
          <div>
            Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai,
            Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng
            đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
          </div>
          <div>
            Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên
            hệ: 024 73081221 (ext 4678)
          </div>
          <div>
            Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp
            lần đầu ngày 10/02/2015
          </div>
          <div>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</div>
        </Styled.Container>
      </div>
    </Styled.Footer>
  )
}

export default Footer
