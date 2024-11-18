import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function DangKy() {
  useEffect(() => {
    document.title = "Đăng kí - Hoa Club";
  }, []);
  return (
    <div className='register__main-container'>
      <div className='register__rectangle'>
        <div className='register__image' />
      </div>
      <div className='register__flex-row-bd'>
        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}  className='image-1'></Link>
        <div className='register__frame'>
          <div className='register__vector' />
          <div className='register__vector-2' />
          <div className='register__vector-3' />
        </div>
        <div className='register__vector-4' />
        <Link to='/thanhtoan' className='register__shopping-cart'>
          <div className='register__vector-5' />
          <div className='register__flex-row'>
            <div className='register__vector-6' />
            <div className='register__vector-7' />
          </div>
        </Link>
        <div className='register__rectangle-8'>
        <Link className='log-in-register' to='/dangNhap' style={{ textDecoration: 'none', }}>Log in/Register</Link>
        </div>
        <Link className='san-pham' to="/sanpham" style={{ textDecoration: 'none', color: 'inherit' }}>Sản phẩm</Link>
        <Link className='dip' to='/dip' style={{ textDecoration: 'none', color: 'inherit' }}>Dịp</Link>
        <Link className='workshop' to='/workshop' style={{ textDecoration: 'none', color: 'inherit' }} >Workshop</Link>
        <Link className='ve-chung-toi' to='/aboutus' style={{ textDecoration: 'none', color: 'inherit' }}>Về chúng tôi</Link>
        <div className='register__vector-9' />
      </div>
      <div className='register__flex-row-f'>
        <div className='register__image-a' />
        <div className='register__image-b' />
        <div className='register__image-c' />
        <div className='register__image-d' />
        <div className='register__rectangle-e'>
          <span className='register__dang-ky'>Đăng ký</span>
          <div className='register__line' />
          <span className='register__ho-va-ten' >Họ và tên</span>
          <div className='register__rectangle-f' contenteditable='true'>
            <span className='register__full-name' contenteditable='true'></span>
          </div>
          <span className='register__date-of-birth'>Ngày sinh</span>
          <div className='register__rectangle-10' contenteditable='true'>
            <span className='register__date-format' contenteditable='true'></span>
          </div>
          <span className='register__email'>Email</span>
          <div className='register__rectangle-11' contenteditable='true'>
            <span className='register__input-email' contenteditable='true'></span>
          </div>
          <span className='register__phone-number'>Số điện thoại</span>
          <div className='register__flex-row-12'>
            <div className='register__rectangle-13' contenteditable='true'>
              <div className='register__input-phone-number' />
            </div>
            <div className='register__image-14' />
            <div className='register__image-15' />
            <span className='register__password'>Mật khẩu</span>
            <div className='register__rectangle-16' contenteditable='true'>
              <span className='register__input-password' placeholder='Nhập mật khẩu'></span>
            </div>
            <span className='register__confirm-password'>Xác nhận mật khẩu</span>
            <div className='register__rectangle-17' contenteditable='true'>
              <span className='register__confirm' contenteditable='true'></span>
            </div>
          </div>
          <button className='register__rectangle-18'>
            <span className='register__create-account'>Tạo tài khoản</span>
          </button>
          <div className='register__line-19' />
          <div className='register__flex-row-c'>
            <span className='register__have-account'>Bạn đã có tài khoản? </span>
            <Link className='register__login' to='/dangNhap'>Đăng nhập</Link>
          </div>
        </div>
        <div className='register__tagline' />
        <div className='register__image-1a' />
        <div className='register__image-1b' />
        <div className='register__image-1c' />
        <div className='register__image-1d' />
        <div className='register__image-1e' />
        <div className='register__image-1f' />
      </div>
      <div className='register__flex-row-be'>
        <span className='register__ve-chung-toi-20'>VỀ CHÚNG TÔI</span>
        <span className='register__dia-chi-cua-hang'>ĐỊA CHỈ CỬA HÀNG</span>
        <span className='register__mang-xa-hoi'>MẠNG XÃ HỘI</span>
        <span className='register__lien-he'>LIÊN HỆ</span>
      </div>
      <div className='register__flex-row-eb'>
        <span className='register__hoa-club'>hoa_club</span>
        <span className='register__cau-chuyen-thuong-hieu'>Câu chuyện thương hiệu</span>
        <span className='register__so-nguyen-hy-quang'>
          Số 6 Nguyễn Hy Quang,
          <br />
          Quận Đống Đa, Hà Nội
        </span>
        <span className='register__email-hoaclub-tiepthi-gmail-com'>
          Email: hoaclub.tiepthi@gmail.com
        </span>
      </div>
      <div className='register__flex-row-f-21'>
        <div className='register__vector-22' />
        <span className='register__huong-dan-mua-hang'>Hướng dẫn mua hàng</span>
        <span className='register__hoa-club-23'>Hoa Club</span>
      </div>
      <div className='register__footer' />
    </div>
  );
}
