import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

export default function SanPham_mb() {
  return (
    <div className='mb_sanPham_main-container'>
      <div className='mb_sanPham_flex-row-cba'>
        <div className='mb_sanPham_rectangle' />
        <div className='mb_sanPham_image' />
      </div>
      <div className='mb_sanPham_flex-row'>
        <div className='mb_sanPham_image-1' />
        <div className='mb_sanPham_frame'>
          <div className='mb_sanPham_vector' />
          <div className='mb_sanPham_vector-2' />
          <div className='mb_sanPham_vector-3' />
        </div>
        <Link to='/dangNhap' className='mb_sanPham_vector-4' />
        <Link to='/thanhToan' className='mb_sanPham_shopping-cart'>
          <div className='mb_sanPham_vector-5' />
          <div className='mb_sanPham_flex-row-ce'>
            <div className='mb_sanPham_vector-6' />
            <div className='mb_sanPham_vector-7' />
          </div>
        </Link>
        <Link to='/sanPham' style={{ textDecoration: 'none', }} className='mb_sanPham_san-pham'>Sản phẩm</Link>
        <Link to='/Dip' style={{ textDecoration: 'none', }} className='mb_sanPham_dip'>Dịp</Link>
        <Link to='/workShop' style={{ textDecoration: 'none', }} className='mb_sanPham_workshop'>Workshop</Link>
        <Link to='/aboutUs' style={{ textDecoration: 'none', }} className='mb_sanPham_ve-chung-toi'>Về chúng tôi</Link>
        <Link to='/dangNhap' className='mb_sanPham_vector-8' />
      </div>
      <div className='mb_sanPham_flex-row-c'>
        <div className='mb_sanPham_frame-9'>
          <div className='mb_sanPham_vector-a' />
          <div className='mb_sanPham_vector-b' />
          <div className='mb_sanPham_vector-c' />
        </div>
        <div className='mb_sanPham_image-d' />
      </div>
      <span className='mb_sanPham_san-pham-e'>Sản phẩm</span>
      <div className='mb_sanPham_flex-row-dbd'>
        <div className='mb_sanPham_rectangle-f'>
          <span className='mb_sanPham_tinh-cach'>Tính cách</span>
          <div className='mb_sanPham_vector-10' />
        </div>
        <div className='mb_sanPham_rectangle-11'>
          <span className='mb_sanPham_gia'>Giá</span>
          <div className='mb_sanPham_vector-12' />
        </div>
      </div>
      <div className='mb_sanPham_flex-row-13'>
        <div className='mb_sanPham_rectangle-14' />
        <div className='mb_sanPham_rectangle-15' />
        <div className='mb_sanPham_instagram-highlights-stories'>
          <div className='mb_sanPham_rectangle-16'  >
            <Link to='/manhMe1' className='mb_sanPham_span-manh-me' style={{ textDecoration: 'none', }}>Mạnh mẽ</Link>
            <div className='mb_sanPham_line' />
          </div>
        </div>
        <div className='mb_sanPham_instagram-highlights-stories-17' />
      </div>
      <div className='mb_sanPham_flex-row-cd'>
        <div className='mb_sanPham_instagram-highlights-stories-18' />
        <div className='mb_sanPham_instagram-highlights-stories-19'>
          <div className='mb_sanPham_rectangle-1a'>
            <span className='mb_sanPham_span-vui-tinh'>Vui tính</span>
            <div className='mb_sanPham_line-1b' />
          </div>
        </div>
      </div>
      <div className='mb_sanPham_flex-row-b'>
        <span className='mb_sanPham_span-ve-chung-toi'>VỀ CHÚNG TÔI</span>
        <span className='mb_sanPham_span-dia-chi-cua-hang'>ĐỊA CHỈ CỬA HÀNG</span>
        <div className='mb_sanPham_regroup'>
          <span className='mb_sanPham_social-media'>MẠNG XÃ HỘI</span>
          <span className='mb_sanPham_contact'>LIÊN HỆ</span>
        </div>
      </div>
      <div className='mb_sanPham_flex-row-a'>
        <span className='mb_sanPham_hoa-club'>Hoa Club</span>
        <div className='mb_sanPham_instagram' />
        <span className='mb_sanPham_brand-story'>Câu chuyện thương hiệu</span>
        <span className='mb_sanPham_email'>Email: hoaclub.tiepthi@gmail.com</span>
        <span className='mb_sanPham_address'>
          Số 6 Nguyễn Hy Quang,
          <br />
          Quận Đống Đa, Hà Nội
        </span>
        <span className='mb_sanPham_purchase-guide'>Hướng dẫn mua hàng</span>
        <span className='mb_sanPham_hoa-club-1c'>hoa_club</span>
        <div className='mb_sanPham_vector-1d' />
      </div>
      <div className='mb_sanPham_footer' />
    </div>
  );
}
