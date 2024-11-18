import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

export default function Page_mb() {
  return (
    <div className='mb_page-main-container'>
      <div className='mb_page-rectangle'>
        <div className='mb_page-image' />
      </div>
      <div className='mb_page-flex-row-bf'>
        <div className='mb_page-image-1' />
        <div className='mb_page-frame'>
          <div className='mb_page-vector' />
          <div className='mb_page-vector-2' />
          <div className='mb_page-vector-3' />
        </div>
        <Link className='mb_page-vector-4' to='/dangNhap' style={{ textDecoration: 'none', }} />
        <div className='mb_page-shopping-cart'>
          <div className='mb_page-vector-5' />
          <div className='mb_page-flex-row'>
            <div className='mb_page-vector-6' />
            <div className='mb_page-vector-7' />
          </div>
        </div>
        <div className='mb_page-rectangle-8'>
          <span className='mb_page-log-in-register' to='/mb_dangNhap'>Log in/Register</span>
        </div>
        <Link to='/thanhToan' className='mb_page-shopping-cart-9'>
          <div className='mb_page-vector-a' />
          <div className='mb_page-flex-row-b'>
            <div className='mb_page-vector-c' />
            <div className='mb_page-vector-d' />
          </div>
        </Link>
        <Link className='mb_page-san-pham' to='/sanPham' style={{ textDecoration: 'none', }}>Sản phẩm</Link>
        <Link to ='/Dip' className='mb_page-dip' style={{ textDecoration: 'none', }}>Dịp</Link>
        <Link to ='/workShop' className='mb_page-workshop' style={{ textDecoration: 'none', }}>Workshop</Link>
        <Link to='/aboutUs' className='mb_page-ve-chung-toi' style={{ textDecoration: 'none', }}>Về chúng tôi</Link>
        <Link className='mb_page-vector-e' style={{ textDecoration: 'none', }} to='/dangNhap' />
      </div>
      <div className='mb_page-flex-row-f'>
        <div className='mb_page-image-10' />
        <div className='mb_page-image-11' />
        <div className='mb_page-image-12' />
        <div className='mb_page-image-13' />
        <div className='mb_page-tagline' />
      </div>
      <div className='mb_page-flex-row-c'>
        <div className='mb_page-image-14' />
        <div className='mb_page-image-15' />
        <div className='mb_page-image-16' />
        <div className='mb_page-image-17' />
      </div>
      <div className='mb_page-flex-row-fe'>
        <div className='mb_page-image-18' />
        <div className='mb_page-image-19' />
        <div className='mb_page-image-1a' />
        <div className='mb_page-image-1b' />
      </div>
      <div className='mb_page-flex-row-d'>
        <span className='mb_page-ve-chung-toi-1c'>VỀ CHÚNG TÔI</span>
        <span className='mb_page-ve-chung-toi-1d'>VỀ CHÚNG TÔI</span>
        <span className='mb_page-dia-chi-cua-hang'>ĐỊA CHỈ CỬA HÀNG</span>
        <span className='mb_page-dia-chi-cua-hang-1e'>ĐỊA CHỈ CỬA HÀNG</span>
        <span className='mb_page-mang-xa-hoi'>MẠNG XÃ HỘI</span>
        <span className='mb_page-mang-xa-hoi-1f'>MẠNG XÃ HỘI</span>
        <span className='mb_page-lien-he'>LIÊN HỆ</span>
      </div>
      <div className='mb_page-flex-row-bbd'>
        <span className='mb_page-hoa-club'>Hoa Club</span>
        <span className='mb_page-hoa-club-20'>Hoa Club</span>
        <div className='mb_page-instagram'>
          <div className='mb_page-instagram-21' />
        </div>
        <span className='mb_page-story-brand'>Câu chuyện thương hiệu</span>
        <span className='mb_page-story-brand-22'>Câu chuyện thương hiệu</span>
        <span className='mb_page-email-contact'>Email: hoaclub.tiepthi@gmail.com</span>
        <span className='mb_page-address'>
          Số 6 Nguyễn Hy Quang,
          <br />
          Quận Đống Đa, Hà Nội
        </span>
        <span className='mb_page-address-23'>
          Số 6 Nguyễn Hy Quang,
          <br />
          Quận Đống Đa, Hà Nội
        </span>
        <span className='mb_page-buy-guide'>Hướng dẫn mua hàng</span>
        <span className='mb_page-buy-guide-24'>Hướng dẫn mua hàng</span>
        <span className='mb_page-hoa-club-25'>hoa_club</span>
        <span className='mb_page-hoa-club-26'>hoa_club</span>
        <div className='mb_page-vector-27'>
          <div className='mb_page-vector-28' />
        </div>
      </div>
      <div className='mb_page-footer' />
      <div className='mb_page-footer-29' />
      <div className='mb_page-footer-2a' />
    </div>
  );
}
