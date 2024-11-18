import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

export default function ManhMe1_mb() {
  return (
    <div className='mb_manhMe1_main-container'>
      <div className='mb_manhMe1_rectangle'>
        <div className='mb_manhMe1_image' />
      </div>
      <div className='mb_manhMe1_flex-row-aeab'>
        <Link to='/' className='mb_manhMe1_image-1' />
        <div className='mb_manhMe1_frame'>
          <div className='mb_manhMe1_vector' />
          <div className='mb_manhMe1_vector-2' />
          <div className='mb_manhMe1_vector-3' />
        </div>
        <Link to='/dangNhap' className='mb_manhMe1_vector-4' />
        <Link to='/thanhToan' style={{ textDecoration: 'none', }} className='mb_manhMe1_shopping-cart'>
          <div className='mb_manhMe1_vector-5' />
          <div className='mb_manhMe1_flex-row-bec'>
            <div className='mb_manhMe1_vector-6' />
            <div className='mb_manhMe1_vector-7' />
          </div>
        </Link>
        <Link to='/sanPham' style={{ textDecoration: 'none', }} className='mb_manhMe1_san-pham'>Sản phẩm</Link>
        <Link to='/Dip' style={{ textDecoration: 'none', }} className='mb_manhMe1_dip'>Dịp</Link>
        <Link to='/workShop' style={{ textDecoration: 'none', }} className='mb_manhMe1_workshop'>Workshop</Link>
        <Link to='/aboutUs' style={{ textDecoration: 'none', }} className='mb_manhMe1_ve-chung-toi'>Về chúng tôi</Link>
        <Link to ='/dangNhap' className='mb_manhMe1_vector-8' />
      </div>
      <span className='mb_manhMe1_san-pham-9'>Sản phẩm</span>
      <div className='mb_manhMe1_flex-row-be'>
        <div className='mb_manhMe1_rectangle-a'>
          <span className='mb_manhMe1_tinh-cach'>Mạnh mẽ</span>
          <div className='mb_manhMe1_vector-b' />
        </div>
        <div className='mb_manhMe1_rectangle-c'>
          <div className='mb_manhMe1_vector-d' />
        </div>
        <span className='mb_manhMe1_gia'>Giá</span>
      </div>
      <div className='mb_manhMe1_flex-row-d'>
        <div className='mb_manhMe1_rectangle-e' />
        <div className='mb_manhMe1_rectangle-f' />
        <div className='mb_manhMe1_instagram-highlights-stories' />
        <div  className='mb_manhMe1_instagram-highlights-stories-10'></div>
      </div>
      <div className='mb_manhMe1_flex-row-a'>
        <Link to='/chiTietSanPham' className='mb_manhMe1_strong'  style={{ textDecoration: 'none', color: 'inherit' }}>
          <span className='mb_manhMe1_strong-11'>Mạnh mẽ</span>
          <span className='mb_manhMe1_strong-12'> 1</span>
        </Link>
        <div className='mb_manhMe1_strong-13'>
          <span className='mb_manhMe1_strong-14'>Mạnh mẽ</span>
          <span className='mb_manhMe1_strong-15'> 2</span>
        </div>
        <span className='mb_manhMe1_price'>600.000 VNĐ</span>
        <span className='mb_manhMe1_price-16'>840.000 VNĐ</span>
      </div>
      <div className='mb_manhMe1_flex-row-eedf'>
        <div className='mb_manhMe1_instagram-highlights-stories-17' />
        <div className='mb_manhMe1_instagram-highlights-stories-18' />
      </div>
      <div className='mb_manhMe1_flex-row-f'>
        <span className='mb_manhMe1_strong-19'>Mạnh mẽ 3</span>
        <div className='mb_manhMe1_strong-1a'>
          <span className='mb_manhMe1_text-f'>Mạnh mẽ</span>
          <span className='mb_manhMe1_text-10'> 4</span>
        </div>
      </div>
      <div className='mb_manhMe1_group-7'>
        <span className='mb_manhMe1_text-11'>900.000 VNĐ</span>
        <span className='mb_manhMe1_text-12'>900.000 VNĐ</span>
      </div>
      <div className='mb_manhMe1_wrapper-6'>
        <div className='mb_manhMe1_img-b' />
        <div className='mb_manhMe1_pic-9' />
      </div>
      <div className='mb_manhMe1_section-4'>
        <span className='mb_manhMe1_text-13'>Mạnh mẽ 5</span>
        <span className='mb_manhMe1_text-14'>Mạnh mẽ 6</span>
      </div>
      <div className='mb_manhMe1_group-8'>
        <span className='mb_manhMe1_text-15'>840.000 VNĐ</span>
        <span className='mb_manhMe1_text-16'>840.000 VNĐ</span>
      </div>
      <div className='mb_manhMe1_box-2'>
        <span className='mb_manhMe1_text-17'>VỀ CHÚNG TÔI</span>
        <span className='mb_manhMe1_dia-chi-cua-hang'>ĐỊA CHỈ CỬA HÀNG</span>
        <div className='mb_manhMe1_regroup'>
          <span className='mb_manhMe1_mang-xa-hoi'>MẠNG XÃ HỘI</span>
          <span className='mb_manhMe1_lien-he'>LIÊN HỆ</span>
        </div>
      </div>
      <div className='mb_manhMe1_flex-row-bb'>
        <span className='mb_manhMe1_hoa-club'>Hoa Club</span>
        <div className='mb_manhMe1_instagram' />
        <span className='mb_manhMe1_cau-chuyen-thuong-hieu'>Câu chuyện thương hiệu</span>
        <span className='mb_manhMe1_email-hoaclub-tiepthi-gmail-com'>
          Email: hoaclub.tiepthi@gmail.com
        </span>
        <span className='mb_manhMe1_so-nguyen-hy-quang-quan-dong-da-ha-noi'>
          Số 6 Nguyễn Hy Quang,
          <br />
          Quận Đống Đa, Hà Nội
        </span>
        <span className='mb_manhMe1_huong-dan-mua-hang'>Hướng dẫn mua hàng</span>
        <span className='mb_manhMe1_hoa-club-1b'>hoa_club</span>
        <div className='mb_manhMe1_vector-1c' />
      </div>
      <div className='mb_manhMe1_footer' />
    </div>
  );
}
