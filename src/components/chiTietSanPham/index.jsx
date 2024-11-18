import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

export default function ChiTietSanPham() {
  return (
    <div className='sp1__main-container'>
      <div className='sp1__rectangle'>
        <div className='sp1__product-image' />
      </div>
      <div className='sp1__flex-row'>
      <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}  className='image-1'></Link>
        <div className='sp1__frame'>
          <div className='sp1__vector' />
          <div className='sp1__vector-2' />
          <div className='sp1__vector-3' />
        </div>
        <div className='sp1__vector-4' />
        <Link to='/thanhtoan' className='sp1__shopping-cart'>
          <div className='sp1__vector-5' />
          <div className='sp1__flex-row-de'>
            <div className='sp1__vector-6' />
            <div className='sp1__vector-7' />
          </div>
        </Link>
        <div className='sp1__rectangle-8'>
        <Link className='log-in-register' to='/dangNhap' style={{ textDecoration: 'none', }}>Log in/Register</Link>
        </div>
        <Link className='san-pham' to="/sanpham" style={{ textDecoration: 'none', color: 'inherit' }}>Sản phẩm</Link>
        <Link className='dip' to='/dip' style={{ textDecoration: 'none', color: 'inherit' }}>Dịp</Link>
        <Link className='workshop' to='/workshop' style={{ textDecoration: 'none', color: 'inherit' }} >Workshop</Link>
        <Link className='ve-chung-toi' to='/aboutus' style={{ textDecoration: 'none', color: 'inherit' }}>Về chúng tôi</Link>
        <div className='sp1__vector-9' />
      </div>
      <span className='sp1__san-pham-a'>Sản phẩm</span>
      <div className='sp1__flex-row-dd'>
        <span className='sp1__tinh-cach'>Vui tinh </span>
        <div className='sp1__rectangle-b'>
          <div className='sp1__vector-c' />
        </div>
        <div className='sp1__rectangle-d'>
          <div className='sp1__vector-e' />
        </div>
        <span className='sp1__gia'>Giá</span>
      </div>
      <div className='sp1__flex-row-f'>
        <div className='sp1__instagram-highlights-stories' />
        <span className='sp1__manh-me'>Mạnh mẽ 1</span>
        <span className='sp1__vnd'>840.000 VNĐ</span>
        <span className='sp1__choose-size'>Chọn size</span>
        <button className='sp1__rectangle-10'>
          <span className='sp1__size-s'>S</span>
        </button>
        <button className='sp1__rectangle-11'>
          <span className='sp1__size-m'>M</span>
        </button>
        <button className='sp1__rectangle-12'>
          <span className='sp1__size-l'>L</span>
        </button>
        <button className='sp1__rectangle-13'>
          <span className='sp1__checkout'>Thanh toán</span>
        </button>
        <button className='sp1__rectangle-14'>
          <span className='sp1__add-to-cart'>Thêm vào giỏ hàng</span>
        </button>
      </div>
      <div className='sp1__flex-row-a'>
        <span className='sp1__review'>Đánh giá (2)</span>
        <div className='sp1__star' />
        <div className='sp1__star-15' />
        <div className='sp1__star-16' />
        <div className='sp1__star-17' />
        <div className='sp1__star-18' />
      </div>``
      <div className='sp1__line' />
      <div className='sp1__flex-row-a-19'>
        <div className='sp1__b-edcc' />
        <span className='sp1__ilovecheeseball'>Ilovecheeseball</span>
        <div className='sp1__star-1a' />
        <div className='sp1__star-1b' />
        <div className='sp1__star-1c' />
      </div>
      <div className='sp1__flex-row-c'>
        <div className='sp1__cba-a-ba' />
        <span className='sp1__son-tung-shopee'>Sơn Tùng Shopee</span>
      </div>
      <div className='sp1__flex-row-d'>
        <div className='sp1__bd-b-fcca' />
        <span className='sp1__mt-nem'>MT Nem</span>
      </div>
      <div className='sp1__flex-row-acfe'>
        <span className='sp1__ve-chung-toi-1d'>VỀ CHÚNG TÔI</span>
        <span className='sp1__dia-chi-cua-hang'>ĐỊA CHỈ CỬA HÀNG</span>
        <span className='sp1__mang-xa-hoi'>MẠNG XÃ HỘI</span>
        <span className='sp1__lien-he'>LIÊN HỆ</span>
      </div>
      <div className='sp1__flex-row-fa'>
        <div className='sp1__facebook' />
        <div className='sp1__instagram' />
        <span className='sp1__hoa-club'>hoa_club</span>
        <span className='sp1__cau-chuyen-thuong-hieu'>Câu chuyện thương hiệu</span>
        <span className='sp1__dia-chi'>
          Số 6 Nguyễn Hy Quang,
          <br />
          Quận Đống Đa, Hà Nội
        </span>
        <span className='sp1__email'>Email: hoaclub.tiepthi@gmail.com</span>
      </div>
      <div className='sp1__flex-row-1e'>
        <div className='sp1__vector-1f' />
        <span className='sp1__huong-dan-mua-hang'>Hướng dẫn mua hàng</span>
        <span className='sp1__hoa-club-20'>Hoa Club</span>
      </div>
      <div className='sp1__footer' />
    </div>
  );
}
