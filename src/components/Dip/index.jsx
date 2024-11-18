import './index.css'
import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

function Dip() {
  useEffect(() => {
    document.title = "Dịp - Hoa Club";
  }, []);
  return (
    <div className='dip__main-container'>
      <div className='dip__rectangle'>
        <div className='dip__image' />
      </div>
      <div className='dip__flex-row-fc'>
        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}  className='image-1'></Link>  
        <div className='dip__frame'>
          <div className='dip__vector' />
          <div className='dip__vector-2' />
          <div className='dip__vector-3' />
        </div>
        <div className='dip__vector-4' />
        <Link to='/thanhtoan' className='dip__shopping-cart'>
          <div className='dip__vector-5' />
          <div className='dip__flex-row-ee'>
            <div className='dip__vector-6' />
            <div className='dip__vector-7' />
          </div>
        </Link>
        <div className='dip__rectangle-8'>
        <Link className='log-in-register' to='/dangNhap' style={{ textDecoration: 'none', }}>Log in/Register</Link>
        </div>
        <Link className='san-pham' to="/sanpham" style={{ textDecoration: 'none', color: 'inherit' }}>Sản phẩm</Link>
        <Link className='dip' to='/dip' style={{ textDecoration: 'none', color: 'inherit' }}>Dịp</Link>
        <Link className='workshop' to='/workshop' style={{ textDecoration: 'none', color: 'inherit' }} >Workshop</Link>
        <Link className='ve-chung-toi' to='/aboutus' style={{ textDecoration: 'none', color: 'inherit' }}>Về chúng tôi</Link>
        <div className='dip__vector-a' />
      </div>
      <span className='dip__dip-b'>Dịp</span>
      <div className='dip__flex-row-fc-c'>
        <span className='dip__dip-d'>Dịp</span>
        <div className='dip__rectangle-e'>
          <div className='dip__vector-f' />
        </div>
        <div className='dip__rectangle-10'>
          <div className='dip__vector-11' />
        </div>
        <span className='dip__gia'>Giá</span>
      </div>
      <div className='dip__flex-row'>
        <div className='dip__rectangle-12' />
        <div className='dip__n' />
        <div className='dip__n-13' />
      </div>
      <div className='dip__flex-row-ef'>
        <span className='dip__hoa-cuoi'>Hoa cưới</span>
        <span className='dip__gio-hoa-hinh-tron'>Giỏ hoa hình tròn</span>
      </div>
      <div className='dip__flex-row-aad'>
        <span className='dip__text-b'>900.000 VNĐ</span>
        <span className='dip__text-c'>480.000 VNĐ</span>
      </div>
      <div className='dip__flex-row-cd'>
        <div className='dip__n-14' />
        <div className='dip__n-15' />
      </div>
      <div className='dip__flex-row-ef-16'>
        <span className='dip__gio-hoa-hinh-tron-17'>giỏ HOA hình tròn</span>
        <span className='dip__nhe-nhang'>Nhẹ nhàng</span>
      </div>
      <div className='dip__flex-row-fb'>
        <span className='dip__vnd'>650.000 VNĐ</span>
        <span className='dip__vnd-18'>350.000 VNĐ</span>
      </div>
      <div className='dip__flex-row-c'>
        <div className='dip__n-19' />
        <div className='dip__n-1a' />
      </div>
      <div className='dip__flex-row-fff'>
        <span className='dip__nhe-nhang-1b'>Nhẹ nhàng</span>
        <span className='dip__nhe-nhang-1c'>Nhẹ nhàng</span>
      </div>
      <div className='dip__flex-row-ede'>
        <span className='dip__vnd-1d'>400.000 VNĐ</span>
        <span className='dip__vnd-1e'>480.000 VNĐ</span>
      </div>
      <div className='dip__flex-row-f'>
        <span className='dip__ve-chung-toi-1f'>VỀ CHÚNG TÔI</span>
        <span className='dip__dia-chi-cua-hang'>ĐỊA CHỈ CỬA HÀNG</span>
        <span className='dip__mang-xa-hoi'>MẠNG XÃ HỘI</span>
        <span className='dip__lien-he'>LIÊN HỆ</span>
      </div>
      <div className='dip__flex-row-bd'>
        <div className='dip__facebook' />
        <div className='dip__instagram' />
        <span className='dip__hoa-club'>hoa_club</span>
        <span className='dip__cau-chuyen-thuong-hieu'>Câu chuyện thương hiệu</span>
        <span className='dip__so-nguyen-hy-quang'>
          Số 6 Nguyễn Hy Quang,
          <br />
          Quận Đống Đa, Hà Nội
        </span>
        <span className='dip__email-hoaclub-tiepthi'>
          Email: hoaclub.tiepthi@gmail.com
        </span>
      </div>
      <div className='dip__flex-row-d'>
        <div className='dip__vector-20' />
        <span className='dip__huong-dan-mua-hang'>Hướng dẫn mua hàng</span>
        <span className='dip__hoa-club-21'>Hoa Club</span>
      </div>
      <div className='dip__footer' />
    </div>
  );
}

export default Dip;
