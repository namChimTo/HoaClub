import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

export default function DangNhap_mb() {
  return (
    <div className='mb_dangNhap_main-container'>
      <div className='mb_dangNhap_rectangle'>
        <div className='mb_dangNhap_image' />
      </div>
      <div className='mb_dangNhap_flex-row-ded'>
        <Link to='/' className='mb_dangNhap_image-1' />
        <div className='mb_dangNhap_frame'>
          <div className='mb_dangNhap_vector' />
          <div className='mb_dangNhap_vector-2' />
          <div className='mb_dangNhap_vector-3' />
        </div>
        <div className='mb_dangNhap_vector-4' />
        <div className='mb_dangNhap_shopping-cart'>
          <div className='mb_dangNhap_vector-5' />
          <div className='mb_dangNhap_flex-row-caf'>
            <div className='mb_dangNhap_vector-6' />
            <div className='mb_dangNhap_vector-7' />
          </div>
        </div>
        <div className='mb_dangNhap_rectangle-8'>
          <span className='mb_dangNhap_log-in-register'>Log in/Register</span>
        </div>
        <div className='mb_dangNhap_shopping-cart-9'>
          <div className='mb_dangNhap_vector-a' />
          <div className='mb_dangNhap_flex-row-a'>
            <div className='mb_dangNhap_vector-b' />
            <div className='mb_dangNhap_vector-c' />
          </div>
        </div>
        <Link to='/sanPham' style={{ textDecoration: 'none', }} className='mb_dangNhap_san-pham'>Sản phẩm</Link>
        <Link to='/Dip' style={{ textDecoration: 'none', }} className='mb_dangNhap_dip'>Dịp</Link>
        <Link to='/workShop' style={{ textDecoration: 'none', }} className='mb_dangNhap_workshop'>Workshop</Link>
        <Link to='/aboutUs' style={{ textDecoration: 'none', }} className='mb_dangNhap_ve-chung-toi'>Về chúng tôi</Link>
        <div className='mb_dangNhap_vector-d' />
      </div>
      <div className='mb_dangNhap_flex-row'>
        <div className='mb_dangNhap_image-e' />
        <div className='mb_dangNhap_image-f' />
        <div className='mb_dangNhap_image-10' />
        <div className='mb_dangNhap_image-11' />
        <div className='mb_dangNhap_rectangle-12'>
          <span className='mb_dangNhap_dang-nhap'>Đăng nhập</span>
          <div className='mb_dangNhap_line' />
          <span className='mb_dangNhap_so-dien-thoai'>Số điện thoại</span>
          <div className='mb_dangNhap_rectangle-13'>
            <span className='mb_dangNhap_nhap-so-dien-thoai'>Nhập số điện thoại</span>
          </div>
          <span className='mb_dangNhap_password'>Mật khẩu</span>
          <div className='mb_dangNhap_rectangle-14'>
            <span className='mb_dangNhap_enter-password'>Nhập mật khẩu</span>
          </div>
          <div className='mb_dangNhap_flex-row-cac'>
            <button className='mb_dangNhap_rectangle-15'>
              <span className='mb_dangNhap_login'>Đăng nhập</span>
            </button>
            <span className='mb_dangNhap_or'>hoặc</span>
            <div className='mb_dangNhap_rectangle-18'>
              <div className='mb_dangNhap_ff-a-dc' />
              <div className='mb_dangNhap_login-with-google'>
                <span className='mb_dangNhap_login-with-google-19'>Đăng nhập với </span>
                <span className='mb_dangNhap_google'>Google</span>
              </div>
            </div>
            <button className='mb_dangNhap_rectangle-1a'>
              <div className='mb_dangNhap_image-1b' />
            </button>
            <div className='mb_dangNhap_login-with-facebook'>
              <span className='mb_dangNhap_login-with-facebook-1c'>Đăng nhập với </span>
              <span className='mb_dangNhap_facebook'>Facebook</span>
            </div>
          </div>
          <div className='mb_dangNhap_line-1d' />
          <div className='mb_dangNhap_flex-row-a-1e'>
            <span className='mb_dangNhap_ban-chua-co'>Bạn chưa có tài khoản? </span>
            <Link to='/dangKy' style={{ textDecoration: 'none', }} className='mb_dangNhap_dang-ky'>Đăng ký</Link>
          </div>
        </div>
        <div className='mb_dangNhap_tagline' />
        <div className='mb_dangNhap_image-1f' />
        <div className='mb_dangNhap_image-20' />
        <div className='mb_dangNhap_image-21' />
        <div className='mb_dangNhap_image-22' />
        <div className='mb_dangNhap_image-23' />
        <div className='mb_dangNhap_image-24' />
      </div>
      <div className='mb_dangNhap_flex-row-cdf'>
        <span className='mb_dangNhap_ve-chung-toi-25'>VỀ CHÚNG TÔI</span>
        <span className='mb_dangNhap_ve-chung-toi-26'>VỀ CHÚNG TÔI</span>
        <span className='mb_dangNhap_dia-chi-cua-hang'>ĐỊA CHỈ CỬA HÀNG</span>
        <span className='mb_dangNhap_dia-chi-cua-hang-27'>ĐỊA CHỈ CỬA HÀNG</span>
        <span className='mb_dangNhap_mang-xa-hoi'>MẠNG XÃ HỘI</span>
        <span className='mb_dangNhap_mang-xa-hoi-28'>MẠNG XÃ HỘI</span>
        <span className='mb_dangNhap_lien-he'>LIÊN HỆ</span>
      </div>
      <div className='mb_dangNhap_flex-row-b'>
        <span className='mb_dangNhap_hoa-club'>Hoa Club</span>
        <span className='mb_dangNhap_hoa-club-29'>Hoa Club</span>
        <div className='mb_dangNhap_instagram'>
          <div className='mb_dangNhap_instagram-2a' />
        </div>
        <span className='mb_dangNhap_story-brand'>Câu chuyện thương hiệu</span>
        <span className='mb_dangNhap_story-brand-2b'>Câu chuyện thương hiệu</span>
        <span className='mb_dangNhap_email-hoaclub'>Email: hoaclub.tiepthi@gmail.com</span>
        <span className='mb_dangNhap_address-hanoi'>
          Số 6 Nguyễn Hy Quang,
          <br />
          Quận Đống Đa, Hà Nội
        </span>
        <span className='mb_dangNhap_address-hanoi-2c'>
          Số 6 Nguyễn Hy Quang,
          <br />
          Quận Đống Đa, Hà Nội
        </span>
        <span className='mb_dangNhap_buy-guide'>Hướng dẫn mua hàng</span>
        <span className='mb_dangNhap_buy-guide-2d'>Hướng dẫn mua hàng</span>
        <span className='mb_dangNhap_hoa-club-2e'>hoa_club</span>
        <span className='mb_dangNhap_hoa-club-2f'>hoa_club</span>
        <div className='mb_dangNhap_vector-30'>
          <div className='mb_dangNhap_vector-31' />
        </div>
      </div>
      <div className='mb_dangNhap_footer' />
      <div className='mb_dangNhap_footer-32' />
      <div className='mb_dangNhap_footer-33' />
    </div>
  );
}
