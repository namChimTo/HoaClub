import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

export default function ManhMe1() {
  return (
    <div className='manhMe1__main-container'>
      <div className='manhMe1__rectangle'>
        <div className='manhMe1__image' />
      </div>
      <div className='manhMe1__flex-row-fd'>
        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}  className='image-1'></Link>
        <div className='manhMe1__frame'>
          <div className='manhMe1__vector' />
          <div className='manhMe1__vector-2' />
          <div className='manhMe1__vector-3' />
        </div>
        <div className='manhMe1__vector-4' />
        <Link to='/thanhtoan' className='manhMe1__shopping-cart'>
          <div className='manhMe1__vector-5' />
          <div className='manhMe1__flex-row'>
            <div className='manhMe1__vector-6' />
            <div className='manhMe1__vector-7' />
          </div>
        </Link>
        <div className='manhMe1__rectangle-8'>
        <Link className='log-in-register' to='/dangNhap' style={{ textDecoration: 'none', }}>Log in/Register</Link>
        </div>
        <Link className='san-pham' to="/sanpham" style={{ textDecoration: 'none', color: 'inherit' }}>Sản phẩm</Link>
        <Link className='dip' to='/dip' style={{ textDecoration: 'none', color: 'inherit' }}>Dịp</Link>
        <Link className='workshop' to='/workshop' style={{ textDecoration: 'none', color: 'inherit' }} >Workshop</Link>
        <Link className='ve-chung-toi' to='/aboutus' style={{ textDecoration: 'none', color: 'inherit' }}>Về chúng tôi</Link>
        <div className='manhMe1__vector-a' />
      </div>
      <span className='manhMe1__san-pham-b'>Sản phẩm</span>
      <div className='manhMe1__flex-row-b'>
        <span className='manhMe1__tinh-cach'>Vui tinh </span>
        <div className='manhMe1__rectangle-c'>
          <div className='manhMe1__vector-d' />
        </div>
        <div className='manhMe1__rectangle-e'>
          <div className='manhMe1__vector-f' />
        </div>
        <span className='manhMe1__gia'>Giá</span>
      </div>
      <div className='manhMe1__flex-row-dbf'>
        <Link className='manhMe1__instagram-highlights-stories' to='/chiTietSanPham'></Link>
        <div className='manhMe1__instagram-highlights-stories-10' />
      </div>
      <div className='manhMe1__flex-row-c'>
        <div className='manhMe1__strong'>
          <Link className='manhMe1__strong-11' style={{ textDecoration: 'none', color: 'inherit' }} to ='/chiTietSanPham'>Mạnh mẽ</Link>
          <Link className='manhMe1__strong-12' style={{ textDecoration: 'none', color: 'inherit' }} to='/chiTietSanPham'> 1</Link>
        </div>
        <div className='manhMe1__strong-13'>
          <span className='manhMe1__strong-14'>Mạnh mẽ</span>
          <span className='manhMe1__strong-15'> 2</span>
        </div>
      </div>
      <div className='manhMe1__flex-row-cae'>
        <Link className='manhMe1__price' style={{ textDecoration: 'none', color: 'inherit' }} to ='/chiTietSanPham'>840.000 VNĐ</Link>
        <span className='manhMe1__price-16'>600.000 VNĐ</span>
      </div>
      <div className='manhMe1__flex-row-ce'>
        <div className='manhMe1__instagram-highlights-stories-17' />
        <div className='manhMe1__instagram-highlights-stories-18' />
      </div>
      <div className='manhMe1__flex-row-a'>
        <span className='manhMe1__text-f'>Mạnh mẽ 3</span>
        <div className='manhMe1__section-2'>
          <span className='manhMe1__text-10'>Mạnh mẽ</span>
          <span className='manhMe1__text-11'> 4</span>
        </div>
      </div>
      <div className='manhMe1__group-3'>
        <span className='manhMe1__text-12'>900.000 VNĐ</span>
        <span className='manhMe1__text-13'>900.000 VNĐ</span>
      </div>
      <div className='manhMe1__box-7'>
        <div className='manhMe1__img-a' />
        <div className='manhMe1__pic-9' />
      </div>
      <div className='manhMe1__wrapper-7'>
        <span className='manhMe1__text-14'>Mạnh mẽ 5</span>
        <span className='manhMe1__text-15'>Mạnh mẽ 6</span>
      </div>
      <div className='manhMe1__wrapper-8'>
        <span className='manhMe1__text-16'>840.000 VNĐ</span>
        <span className='manhMe1__text-17'>840.000 VNĐ</span>
      </div>
      <div className='manhMe1__box-8'>
        <span className='manhMe1__ve-chung-toi-19'>VỀ CHÚNG TÔI</span>
        <span className='manhMe1__dia-chi-cua-hang'>ĐỊA CHỈ CỬA HÀNG</span>
        <span className='manhMe1__mang-xa-hoi'>MẠNG XÃ HỘI</span>
        <span className='manhMe1__lien-he'>LIÊN HỆ</span>
      </div>
      <div className='manhMe1__flex-row-da'>
        <div className='manhMe1__facebook' />
        <div className='manhMe1__instagram' />
        <span className='manhMe1__hoa-club'>hoa_club</span>
        <span className='manhMe1__cau-chuyen-thuong-hieu'>Câu chuyện thương hiệu</span>
        <span className='manhMe1__so-nguyen-hy-quang'>
          Số 6 Nguyễn Hy Quang,
          <br />
          Quận Đống Đa, Hà Nội
        </span>
        <span className='manhMe1__email-hoaclub-tiepthi'>
          Email: hoaclub.tiepthi@gmail.com
        </span>
      </div>
      <div className='manhMe1__flex-row-d'>
        <div className='manhMe1__vector-1a' />
        <span className='manhMe1__huong-dan-mua-hang'>Hướng dẫn mua hàng</span>
        <span className='manhMe1__hoa-club-1b'>Hoa Club</span>
      </div>
      <div className='manhMe1__footer' />
    </div>
  );
}
