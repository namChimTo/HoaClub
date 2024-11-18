import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

export default function ChiTietSanPham_mb() {
  return (
    <div className='mb_chiTiet-main-container'>
      <div className='mb_chiTiet-rectangle'>
        <div className='mb_chiTiet-image' />
      </div>
      <div className='mb_chiTiet-flex-row-ac'>
        <Link to='/' style={{ textDecoration: 'none', }} className='mb_chiTiet-image-1' />
        <div className='mb_chiTiet-frame'>
          <div className='mb_chiTiet-vector' />
          <div className='mb_chiTiet-vector-2' />
          <div className='mb_chiTiet-vector-3' />
        </div>
        <Link to='/dangNhap' style={{ textDecoration: 'none', }} className='mb_chiTiet-vector-4' />
        <Link to='/thanhToan' style={{ textDecoration: 'none', }} className='mb_chiTiet-shopping-cart'>
          <div className='mb_chiTiet-vector-5' />
          <div className='mb_chiTiet-flex-row-ac-6'>
            <div className='mb_chiTiet-vector-7' />
            <div className='mb_chiTiet-vector-8' />
          </div>
        </Link>
        <Link to='/sanPham' style={{ textDecoration: 'none', }} className='mb_chiTiet-san-pham'>Sản phẩm</Link>
        <Link to='/Dip' style={{ textDecoration: 'none', }} className='mb_chiTiet-dip'>Dịp</Link>
        <Link to='/workShop' style={{ textDecoration: 'none', }} className='mb_chiTiet-workshop'>Workshop</Link>
        <Link to='/aboutUs' style={{ textDecoration: 'none', }} className='mb_chiTiet-ve-chung-toi'>Về chúng tôi</Link>
        <Link className='mb_chiTiet-vector-9' to='/dangNhap'style={{ textDecoration: 'none', }} />
      </div>
      <div className='mb_chiTiet-flex-row-ec'>
        <span className='mb_chiTiet-san-pham-a'>Sản phẩm</span>
        <span className='mb_chiTiet-san-pham-b'>Sản phẩm</span>
      </div>
      <div className='mb_chiTiet-flex-row-be'>
        <div className='mb_chiTiet-rectangle-c'>
          <div className='mb_chiTiet-rectangle-d'>
            <span className='mb_chiTiet-tinh-cach'>Mạnh mẽ</span>
            <div className='mb_chiTiet-vector-e' />
          </div>
        </div>
        <div className='mb_chiTiet-rectangle-f'>
          <div className='mb_chiTiet-rectangle-10'>
            <span className='mb_chiTiet-gia'>Giá</span>
            <div className='mb_chiTiet-vector-11' />
          </div>
        </div>
      </div>
      <div className='mb_chiTiet-flex-row-ef'>
        <div className='mb_chiTiet-rectangle-14'>
          <div className='mb_chiTiet-rectangle-15' />
        </div>
        <div className='mb_chiTiet-rectangle-16'>
          <div className='mb_chiTiet-rectangle-17' />
        </div>
      </div>
      <div className='mb_chiTiet-flex-row-d'>
        <span className='mb_chiTiet-manh-me'>Mạnh mẽ 1</span>
        <span className='mb_chiTiet-manh-me-18'>Mạnh mẽ 1</span>
        <div className='mb_chiTiet-instagram-highlights-stories'>
          <div className='mb_chiTiet-instagram-highlights-stories-19' />
        </div>
        <span className='mb_chiTiet-vnd'>840.000 VNĐ</span>
        <span className='mb_chiTiet-vnd-1a'>840.000 VNĐ</span>
        <span className='mb_chiTiet-chon-size'>Chọn size</span>
        <span className='mb_chiTiet-chon-size-1b'>Chọn size</span>
        <button className='mb_chiTiet-rectangle-1c'>
          <div className='mb_chiTiet-rectangle-1d'>
            <span className='mb_chiTiet-s'>S</span>
            <span className='mb_chiTiet-s-1e'>S</span>
          </div>
        </button>
        <button className='mb_chiTiet-rectangle-1f'>
          <div className='mb_chiTiet-rectangle-20'>
            <span className='mb_chiTiet-text-m'>M</span>
          </div>
        </button>
        <div className='mb_chiTiet-div-rectangle'>
          <div className='mb_chiTiet-div-rectangle-21'>
            <span className='mb_chiTiet-text-l'>L</span>
          </div>
        </div>
        <button className='mb_chiTiet-button-rectangle'>
          <div className='mb_chiTiet-div-rectangle-22' />
        </button>
        <span className='mb_chiTiet-text-thanh-toan'>Thanh toán</span>
        <span className='mb_chiTiet-text-thanh-toan-23'>Thanh toán</span>
      </div>
      <button className='mb_chiTiet-button-rectangle-24'>
        <div className='mb_chiTiet-div-rectangle-25'>
          <span className='mb_chiTiet-text-them-vao-gio-hang'>Thêm vào giỏ hàng</span>
          <span className='mb_chiTiet-text-them-vao-gio-hang-26'>Thêm vào giỏ hàng</span>
        </div>
      </button>
      <div className='mb_chiTiet-div-flex-row-f'>
        <span className='mb_chiTiet-text-danh-gia'>Đánh giá (3)</span>
        <span className='mb_chiTiet-text-danh-gia-27'>Đánh giá (3)</span>
        <div className='mb_chiTiet-div-star' />
        <div className='mb_chiTiet-div-star-28' />
        <div className='mb_chiTiet-div-star-29' />
        <div className='mb_chiTiet-div-star-2a' />
        <div className='mb_chiTiet-div-star-2b' />
        <div className='mb_chiTiet-div-star-2c' />
        <div className='mb_chiTiet-div-star-2d' />
        <div className='mb_chiTiet-div-star-2e' />
        <div className='mb_chiTiet-div-star-2f' />
        <div className='mb_chiTiet-div-star-30' />
      </div>
      <div className='mb_chiTiet-div-flex-row-fb'>
        <div className='mb_chiTiet-div-line' />
        <div className='mb_chiTiet-line' />
      </div>
      <div className='mb_chiTiet-flex-row-eaa'>
        <div className='mb_chiTiet-b-edcc' />
        <div className='mb_chiTiet-b-edcc-31' />
        <span className='mb_chiTiet-i-love-cheeseball'>Ilovecheeseball</span>
        <span className='mb_chiTiet-i-love-cheeseball-32'>Ilovecheeseball</span>
        <div className='mb_chiTiet-star' />
        <div className='mb_chiTiet-star-33' />
        <div className='mb_chiTiet-star-34' />
        <div className='mb_chiTiet-star-35' />
        <div className='mb_chiTiet-star-36' />
        <div className='mb_chiTiet-star-37' />
        <div className='mb_chiTiet-star-38' />
        <div className='mb_chiTiet-star-39' />
      </div>
      <div className='mb_chiTiet-flex-row-fbbf'>
        <div className='mb_chiTiet-cba-a-ba'>
          <div className='mb_chiTiet-cba-a-ba-3a' />
        </div>
        <span className='mb_chiTiet-son-tung-shopee'>ST Shopee</span>
        <span className='mb_chiTiet-son-tung-shopee-3b'>ST Shopee</span>
        <div className='mb_chiTiet-star-3c' />
        <div className='mb_chiTiet-star-3d' />
        <div className='mb_chiTiet-star-3e' />
        <div className='mb_chiTiet-star-3f' />
        <div className='mb_chiTiet-star-40' />
        <div className='mb_chiTiet-star-41' />
      </div>
      <div className='mb_chiTiet-flex-row-c'>
        <div className='mb_chiTiet-bd-b-fcca'>
          <div className='mb_chiTiet-bd-b-fcca-42' />
        </div>
        <span className='mb_chiTiet-mt-nem'>MT Nem</span>
        <span className='mb_chiTiet-mt-nem-43'>MT Nem</span>
        <div className='mb_chiTiet-star-44' />
        <div className='mb_chiTiet-star-45' />
        <div className='mb_chiTiet-star-46' />
        <div className='mb_chiTiet-star-47' />
        <div className='mb_chiTiet-star-48' />
        <div className='mb_chiTiet-star-49' />
      </div>
      <div className='mb_chiTiet-flex-row-d-4a'>
        <span className='mb_chiTiet-ve-chung-toi-4b'>VỀ CHÚNG TÔI</span>
        <span className='mb_chiTiet-dia-chi-cua-hang'>ĐỊA CHỈ CỬA HÀNG</span>
        <div className='mb_chiTiet-regroup'>
          <span className='mb_chiTiet-mang-xa-hoi'>MẠNG XÃ HỘI</span>
          <span className='mb_chiTiet-lien-he'>LIÊN HỆ</span>
        </div>
      </div>
      <div className='mb_chiTiet-flex-row-b'>
        <span className='mb_chiTiet-hoa-club'>Hoa Club</span>
        <div className='mb_chiTiet-instagram' />
        <span className='mb_chiTiet-cau-chuyen-thuong-hieu'>Câu chuyện thương hiệu</span>
        <span className='mb_chiTiet-email-hoaclub-tiepthi-gmail-com'>
          Email: hoaclub.tiepthi@gmail.com
        </span>
        <span className='mb_chiTiet-so-nguyen-hy-quang-quan-dong-da-ha-noi'>
          Số 6 Nguyễn Hy Quang,
          <br />
          Quận Đống Đa, Hà Nội
        </span>
        <span className='mb_chiTiet-huong-dan-mua-hang'>Hướng dẫn mua hàng</span>
        <span className='mb_chiTiet-hoa-club-4c'>hoa_club</span>
        <div className='mb_chiTiet-vector-4d' />
      </div>
      <div className='mb_chiTiet-footer' />
    </div>
  );
}
