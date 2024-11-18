import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

export default function DangKy_mb() {
  return (
    <div className='mb_dangKy_main-container'>
      <div className='mb_dangKy_rectangle'>
        <div className='mb_dangKy_image' />
      </div>
      <div className='mb_dangKy_flex-row-ea'>
        <Link to='/' style={{ textDecoration: 'none', }} className='mb_dangKy_image-1' />
        <div className='mb_dangKy_frame'>
          <div className='mb_dangKy_vector' />
          <div className='mb_dangKy_vector-2' />
          <div className='mb_dangKy_vector-3' />
        </div>
        <Link to='/dangNhap' className='mb_dangKy_vector-4' />
        <div to='/thanhToan' className='mb_dangKy_shopping-cart'>
          <div className='mb_dangKy_vector-5' />
          <div className='mb_dangKy_flex-row-ba'>
            <div className='mb_dangKy_vector-6' />
            <div className='mb_dangKy_vector-7' />
          </div>
        </div>
        <div className='mb_dangKy_rectangle-8'>
          <span className='mb_dangKy_log-in-register'>Log in/Register</span>
        </div>
        <Link to='/thanhToan' className='mb_dangKy_shopping-cart-9'>
          <div className='mb_dangKy_vector-a' />
          <div className='mb_dangKy_flex-row-b'>
            <div className='mb_dangKy_vector-b' />
            <div className='mb_dangKy_vector-c' />
          </div>
        </Link>
        <Link to='/sanPham' style={{ textDecoration: 'none', }} className='mb_dangKy_san-pham'>Sản phẩm</Link>
        <Link to='/Dip' style={{ textDecoration: 'none', }} className='mb_dangKy_dip'>Dịp</Link>
        <Link to='/workShop' style={{ textDecoration: 'none', }} className='mb_dangKy_workshop'>Workshop</Link>
        <Link to='/aboutUs' style={{ textDecoration: 'none', }} className='mb_dangKy_ve-chung-toi'>Về chúng tôi</Link>
        <Link to='/dangNhap' style={{ textDecoration: 'none', }} className='mb_dangKy_vector-d' />
      </div>
      <div className='mb_dangKy_flex-row-e'>
        <div className='mb_dangKy_image-e' />
        <div className='mb_dangKy_image-f' />
        <div className='mb_dangKy_image-10' />
        <div className='mb_dangKy_image-11' />
        <div className='mb_dangKy_rectangle-12'>
          <span className='mb_dangKy_dang-ky'>Đăng ký</span>
          <div className='mb_dangKy_line' />
          <span className='mb_dangKy_ho-va-ten'>Họ và tên</span>
          <div className='mb_dangKy_rectangle-13'>
            <span className='mb_dangKy_ho-va-ten-14'>Họ và tên</span>
          </div>
          <span className='mb_dangKy_ngay-sinh'>Ngày sinh</span>
          <div className='mb_dangKy_rectangle-15'>
            <span className='mb_dangKy_date-input'>Ngày/Tháng/Năm</span>
          </div>
          <span className='mb_dangKy_email-input'>Email</span>
          <span className='mb_dangKy_phone-input'>Số điện thoại</span>
          <div className='mb_dangKy_flex-row'>
            <div className='mb_dangKy_rectangle-16'>
              <div className='mb_dangKy_phone-input-label' />
            </div>
        
            <span className='mb_dangKy_password-input'>Mật khẩu</span>
            <div className='mb_dangKy_rectangle-19'>
              <span className='mb_dangKy_password-input-label'>Nhập mật khẩu</span>
            </div>
            <span className='mb_dangKy_confirm-password-input-label'>
              Xác nhận mật khẩu
            </span>
            <div className='mb_dangKy_rectangle-1a'>
              <span className='mb_dangKy_confirm-button'>Xác nhận</span>
            </div>
          </div>
          <button className='mb_dangKy_button-rectangle'>
            <span className='mb_dangKy_create-account-button'>Tạo tài khoản</span>
          </button>
          <div className='mb_dangKy_line-1b' />
          <div className='mb_dangKy_flex-row-1c'>
            <span className='mb_dangKy_have-account-text'>Bạn đã có tài khoản? </span>
            <Link to='/dangNhap' style={{ textDecoration: 'none', }} className='mb_dangKy_login-text'>Đăng nhập</Link>
          </div>
        </div>
        <div className='mb_dangKy_tagline'>
          <div className='mb_dangKy_rectangle-1d'>
            <span className='mb_dangKy_input-email'>Nhập Email</span>
          </div>
        </div>
        <div className='mb_dangKy_image-1e' />
        <div className='mb_dangKy_image-1f' />
        <div className='mb_dangKy_image-20' />
        <div className='mb_dangKy_image-21' />
        <div className='mb_dangKy_image-22' />
        <div className='mb_dangKy_image-23' />
      </div>
      <div className='mb_dangKy_flex-row-b-24'>
        <span className='mb_dangKy_about-us'>VỀ CHÚNG TÔI</span>
        <span className='mb_dangKy_about-us-25'>VỀ CHÚNG TÔI</span>
        <span className='mb_dangKy_store-address'>ĐỊA CHỈ CỬA HÀNG</span>
        <span className='mb_dangKy_store-address-26'>ĐỊA CHỈ CỬA HÀNG</span>
        <span className='mb_dangKy_social-media'>MẠNG XÃ HỘI</span>
        <span className='mb_dangKy_social-media-27'>MẠNG XÃ HỘI</span>
        <span className='mb_dangKy_contact'>LIÊN HỆ</span>
      </div>
      <div className='mb_dangKy_flex-row-bee'>
        <span className='mb_dangKy_hoa-club'>Hoa Club</span>
        <span className='mb_dangKy_hoa-club-28'>Hoa Club</span>
        <div className='mb_dangKy_instagram'>
          <div className='mb_dangKy_instagram-29' />
        </div>
        <span className='mb_dangKy_story-brand'>Câu chuyện thương hiệu</span>
        <span className='mb_dangKy_story-brand-2a'>Câu chuyện thương hiệu</span>
        <span className='mb_dangKy_email'>Email: hoaclub.tiepthi@gmail.com</span>
        <span className='mb_dangKy_address'>
          Số 6 Nguyễn Hy Quang,
          <br />
          Quận Đống Đa, Hà Nội
        </span>
        <span className='mb_dangKy_address-2b'>
          Số 6 Nguyễn Hy Quang,
          <br />
          Quận Đống Đa, Hà Nội
        </span>
        <span className='mb_dangKy_buy-guide'>Hướng dẫn mua hàng</span>
        <span className='mb_dangKy_buy-guide-2c'>Hướng dẫn mua hàng</span>
        <span className='mb_dangKy_hoa-club-2d'>hoa_club</span>
        <span className='mb_dangKy_hoa-club-2e'>hoa_club</span>
        <div className='mb_dangKy_vector-2f'>
          <div className='mb_dangKy_vector-30' />
        </div>
      </div>
      <div className='mb_dangKy_footer' />
      <div className='mb_dangKy_footer-31' />
      <div className='mb_dangKy_footer-32' />
    </div>
  );
}
