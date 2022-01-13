import React from 'react'
import mockProductImage from 'assets/images/Peak.jpg'
import * as Styled from './styled'

function Product() {
  return (
    <Styled.Product>
      <Styled.ProductContainer>
        <Styled.ProductImage src={mockProductImage} />
        <Styled.ProductInfo>
          <Styled.ProductName>ProductName</Styled.ProductName>
          <Styled.ProductPrice>đ 3000</Styled.ProductPrice>
          <Styled.ProductMetadata>
            <Styled.LikeButton />
            <Styled.Rating />
            <Styled.SoldNumber>
              <span>100</span>
              <span>Đã bán</span>
            </Styled.SoldNumber>
          </Styled.ProductMetadata>
          <Styled.SellerLocation>Hà Nội</Styled.SellerLocation>
        </Styled.ProductInfo>
      </Styled.ProductContainer>
    </Styled.Product>
  )
}

export default Product
