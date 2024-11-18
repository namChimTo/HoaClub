import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function DangNhap() {
  useEffect(() => {
    document.title = "Đăng nhập - Hoa Club";
  }, []);
  return (
    <div className='login__main-container'>
      <div className='login__rectangle'>
        <div className='login__image' />
      </div>
      <div className='login__flex-row-eb'>
        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}  className='image-1'></Link>
        <div className='login__frame'>
          <div className='login__vector' />
          <div className='login__vector-2' />
          <div className='login__vector-3' />
        </div>
        <div className='login__vector-4' />
        <Link to='/thanhtoan' className='login__shopping-cart'>
          <div className='login__vector-5' />
          <div className='login__flex-row-b'>
            <div className='login__vector-6' />
            <div className='login__vector-7' />
          </div>
        </Link>
        <div className='login__rectangle-8'>
          <span className='login__log-in-register'>Log in/Register</span>
        </div>
        <Link className='san-pham' to="/sanpham" style={{ textDecoration: 'none', color: 'inherit' }}>Sản phẩm</Link>
        <Link className='dip' to='/dip' style={{ textDecoration: 'none', color: 'inherit' }}>Dịp</Link>
        <Link className='workshop' to='/workshop' style={{ textDecoration: 'none', color: 'inherit' }} >Workshop</Link>
        <Link className='ve-chung-toi' to='/aboutus' style={{ textDecoration: 'none', color: 'inherit' }}>Về chúng tôi</Link>
        <div className='login__vector-9' />
      </div>
      <div className='login__flex-row-cb'>
        <div className='login__image-a' />
        <div className='login__image-b' />
        <div className='login__image-c' />
        <div className='login__image-d' />
        <div className='login__rectangle-e'>
          <span className='login__dang-nhap'>Đăng nhập</span>
          <div className='login__line' />
          <span className='login__so-dien-thoai'>Số điện thoại</span>
          <div className='login__rectangle-f'>
          <div className='login__input-phone' contenteditable="true">
          </div>
          </div>
          <span className='login__input-password'>Mật khẩu</span>
          <div className='login__rectangle-10'>
            <div className='login__input-password-11' contenteditable="true"></div>
          </div>
          <button className='login__button-rectangle'>
            <span className='login__button-login'>Đăng nhập</span>
          </button>
          <div className='login__flex-row-afed'>
            <span className='login__or'>hoặc</span>
            <div className='login__rectangle-14'>
              <div className='login__ff-a-dc' />
              <div className='login__login-google'>
                <span className='login__login-with'>Đăng nhập với </span>
                <span className='login__google'>Google</span>
              </div>
            </div>
            <div className='login__rectangle-15'>
              <div className='login__image-16' />
              <div className='login__login-facebook'>
                <span className='login__login-with-17'>Đăng nhập với </span>
                <span className='login__facebook'>Facebook</span>
              </div>
            </div>
          </div>
          <div className='login__line-18' />
          <div className='login__flex-row'>
            <span className='login__no-account'>Bạn chưa có tài khoản? </span>
            <Link className='login__register' to='/dangKy'>Đăng ký</Link>
          </div>
        </div>
        <div className='login__tagline' />
        <div className='login__image-19' />
        <div className='login__image-1a' />
        <div className='login__image-1b' />
        <div className='login__image-1c' />
        <div className='login__image-1d' />
        <div className='login__image-1e' />
      </div>
      <div className='login__flex-row-aff'>
        <span className='login__ve-chung-toi-1f'>VỀ CHÚNG TÔI</span>
        <span className='login__dia-chi-cua-hang'>ĐỊA CHỈ CỬA HÀNG</span>
        <span className='login__mang-xa-hoi'>MẠNG XÃ HỘI</span>
        <span className='login__lien-he'>LIÊN HỆ</span>
      </div>
      <div className='login__flex-row-e'>
        <span className='login__hoa-club'>hoa_club</span>
        <span className='login__cau-chuyen-thuong-hieu'>Câu chuyện thương hiệu</span>
        <span className='login__so-nguyen-hy-quang'>
          Số 6 Nguyễn Hy Quang,
          <br />
          Quận Đống Đa, Hà Nội
        </span>
        <span className='login__email-hoaclub-tiepthi'>
          Email: hoaclub.tiepthi@gmail.com
        </span>
      </div>
      <div className='login__flex-row-c'>
        <div className='login__vector-20' />
        <span className='login__huong-dan-mua-hang'>Hướng dẫn mua hàng</span>
        <span className='login__hoa-club-21'>Hoa Club</span>
      </div>
      <div className='login__footer' />
    </div>
  );
}
