import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

export default function Dip_mb() {
  return (
    <div className='mb_dip_main-container'>
      <div className='mb_dip_rectangle'>
        <div className='mb_dip_image' />
      </div>
      <div className='mb_dip_flex-row-d'>
        <Link to='/' className='mb_dip_image-1' />
        <div className='mb_dip_frame'>
          <div className='mb_dip_vector' />
          <div className='mb_dip_vector-2' />
          <div className='mb_dip_vector-3' />
        </div>
        <Link to='/dangNhap' className='mb_dip_vector-4' />
        <Link to='/thanhToan'  className='mb_dip_shopping-cart'>
          <div className='mb_dip_vector-5' />
          <div className='mb_dip_flex-row-b'>
            <div className='mb_dip_vector-6' />
            <div className='mb_dip_vector-7' />
          </div>
        </Link>
        <Link to='/sanPham' style={{ textDecoration: 'none', }} className='mb_dip_san-pham'>Sản phẩm</Link>
        <Link to='/Dip' style={{ textDecoration: 'none', }} className='mb_dip_dip'>Dịp</Link>
        <Link to='/workShop' style={{ textDecoration: 'none', }} className='mb_dip_workshop'>Workshop</Link>
        <Link to='/aboutUs' style={{ textDecoration: 'none', }} className='mb_dip_ve-chung-toi'>Về chúng tôi</Link>
        <Link to='/dangNhap' className='mb_dip_vector-8' />
      </div>
      <div className='mb_dip_flex-row-d-9'>
        <div className='mb_dip_frame-a'>
          <div className='mb_dip_vector-b' />
          <div className='mb_dip_vector-c' />
          <div className='mb_dip_vector-d' />
        </div>
        <div className='mb_dip_image-e' />
      </div>
      <span className='mb_dip_dip-f'>Dịp</span>
      <div className='mb_dip_flex-row-e'>
        <span className='mb_dip_sinh-nhat'>Sinh nhật</span>
        <button className='mb_dip_rectangle-10'>
          <div className='mb_dip_vector-11' />
        </button>
        <button className='mb_dip_rectangle-12'>
          <div className='mb_dip_vector-13' />
        </button>
        <span className='mb_dip_gia'>Giá</span>
      </div>
      <div className='mb_dip_flex-row-e-14'>
        <div className='mb_dip_rectangle-15' />
        <div className='mb_dip_rectangle-16' />
      </div>
      <div className='mb_dip_flex-row-ff'>
        <div className='mb_dip_img' />
        <div className='mb_dip_n' />
      </div>
      <div className='mb_dip_flex-row-af'>
        <span className='mb_dip_coc-hoa'>Cốc HOA</span>
        <span className='mb_dip_vui-tinh'>Vui tính</span>
      </div>
      <div className='mb_dip_flex-row-bf'>
        <span className='mb_dip_vnd'>190.000 VNĐ</span>
        <span className='mb_dip_text-b'>380.000 VNĐ</span>
      </div>
      <div className='mb_dip_flex-row-aae'>
        <div className='mb_dip_n-17' />
        <div className='mb_dip_img-18' />
      </div>
      <div className='mb_dip_flex-row-e-19'>
        <span className='mb_dip_bo-size-m'>Bó size M</span>
        <span className='mb_dip_gio-hoa-hinh-tron'>giỏ HOA hình tròn</span>
      </div>
      <div className='mb_dip_flex-row-e-1a'>
        <span className='mb_dip_text-e'>450.000 VNĐ</span>
        <span className='mb_dip_text-f'>650.000 VNĐ</span>
      </div>
      <div className='mb_dip_flex-row-b-1b'>
        <span className='mb_dip_ve-chung-toi-1c'>VỀ CHÚNG TÔI</span>
        <span className='mb_dip_dia-chi-cua-hang'>ĐỊA CHỈ CỬA HÀNG</span>
        <div className='mb_dip_wrapper-9'>
          <span className='mb_dip_mang-xa-hoi'>MẠNG XÃ HỘI</span>
          <span className='mb_dip_lien-he'>LIÊN HỆ</span>
        </div>
      </div>
      <div className='mb_dip_flex-row-bfc'>
        <span className='mb_dip_hoa-club'>Hoa Club</span>
        <div className='mb_dip_instagram' />
        <span className='mb_dip_cau-chuyen-thuong-hieu'>Câu chuyện thương hiệu</span>
        <span className='mb_dip_email-hoaclub-tiepthi'>
          Email: hoaclub.tiepthi@gmail.com
        </span>
        <span className='mb_dip_so-nguyen-hy-quang'>
          Số 6 Nguyễn Hy Quang,
          <br />
          Quận Đống Đa, Hà Nội
        </span>
        <span className='mb_dip_huong-dan-mua-hang'>Hướng dẫn mua hàng</span>
        <span className='mb_dip_hoa-club-1d'>hoa_club</span>
        <div className='mb_dip_vector-1e' />
      </div>
      <div className='mb_dip_footer' />
    </div>
  );
}
