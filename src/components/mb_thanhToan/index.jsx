import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

export default function ThanhToan_mb() {
  return (
    <div className='mb_thanhToan-main-container'>
      <div className='mb_thanhToan-rectangle'>
        <div className='mb_thanhToan-image' />
      </div>
      <div className='mb_thanhToan-flex-row-f'>
        <Link to='/' className='mb_thanhToan-image-1' />
        <div className='mb_thanhToan-frame'>
          <div className='mb_thanhToan-vector' />
          <div className='mb_thanhToan-vector-2' />
          <div className='mb_thanhToan-vector-3' />
        </div>
        <Link to='/dangNhap' style={{ textDecoration: 'none', }} className='mb_thanhToan-vector-4' />
        <Link to='/thanhToan' style={{ textDecoration: 'none', }} className='mb_thanhToan-shopping-cart'>
          <div className='mb_thanhToan-vector-5' />
          <div className='mb_thanhToan-flex-row-fae'>
            <div className='mb_thanhToan-vector-6' />
            <div className='mb_thanhToan-vector-7' />
          </div>
        </Link>
        <Link to='/sanPham' style={{ textDecoration: 'none', }} className='mb_thanhToan-san-pham'>Sản phẩm</Link>
        <Link to='/Dip' style={{ textDecoration: 'none', }} className='mb_thanhToan-dip'>Dịp</Link>
        <Link to='/workShop' style={{ textDecoration: 'none', }} className='mb_thanhToan-workshop'>Workshop</Link>
        <Link to='/aboutUs' style={{ textDecoration: 'none', }} className='mb_thanhToan-ve-chung-toi'>Về chúng tôi</Link>
        <Link to='/dangNhap' style={{ textDecoration: 'none', }} className='mb_thanhToan-vector-8' />
      </div>
      <div className='mb_thanhToan-flex-row-d'>
        <div className='mb_thanhToan-regroup'>
          <div className='mb_thanhToan-image-9' />
          <div className='mb_thanhToan-frame-a'>
            <div className='mb_thanhToan-vector-b' />
            <div className='mb_thanhToan-vector-c' />
            <div className='mb_thanhToan-vector-d' />
          </div>
        </div>
        <span className='mb_thanhToan-don-hang'>Đơn hàng</span>
      </div>
      <div className='mb_thanhToan-frame-e'>
        <span className='mb_thanhToan-thong-tin-nguoi-nhan-hang'>
          Thông tin người nhận hàng
        </span>
        <div className='mb_thanhToan-rectangle-f' />
        <span className='mb_thanhToan-ho-va-ten'>Họ và tên</span>
        <span className='mb_thanhToan-so-dien-thoai'>Số Điện thoại</span>
        <div className='mb_thanhToan-rectangle-10' />
        <span className='mb_thanhToan-e-mail'>E-mail</span>
        <div className='mb_thanhToan-rectangle-11' />
      </div>
      <div className='mb_thanhToan-frame-12'>
        <div className='mb_thanhToan-flex-column-bd'>
          <span className='mb_thanhToan-thong-tin-giao-hoa'>Thông tin giao hoa</span>
          <div className='mb_thanhToan-ho-ten'>
            <span className='mb_thanhToan-tinh-thanh-pho'>Tỉnh / Thành phố</span>
            <div className='mb_thanhToan-rectangle-13' />
            <input className='mb_thanhToan-ho-ten-input' />
          </div>
          <div className='mb_thanhToan-ho-ten-14'>
            <span className='mb_thanhToan-quan-huyen'>Quận / Huyện</span>
            <div className='mb_thanhToan-rectangle-15' />
            <input className='mb_thanhToan-ho-ten-input-16' />
          </div>
          <div className='mb_thanhToan-ho-ten-17'>
            <span className='mb_thanhToan-phuong-xa'>Phường / Xã</span>
            <div className='mb_thanhToan-rectangle-18' />
            <input className='mb_thanhToan-ho-ten-input-19' />
          </div>
          <div className='mb_thanhToan-ho-ten-1a'>
            <span className='mb_thanhToan-dia-chi-nhan-hang'>Địa chỉ nhận hàng</span>
            <div className='mb_thanhToan-rectangle-1b' />
            <input className='mb_thanhToan-ho-ten-input-1c' />
          </div>
          <span className='mb_thanhToan-ngay-giao-hang'>Ngày giao hàng</span>
          <div className='mb_thanhToan-ho-ten-1d'>
            <span className='mb_thanhToan-slash'>8/10/2024</span>
            <div className='mb_thanhToan-rectangle-1e' />
            <input className='mb_thanhToan-ho-ten-input-1f' />
          </div>
          <span className='mb_thanhToan-delivery-time'>Giờ giao hàng</span>
          <div className='mb_thanhToan-full-name'>
            <span className='mb_thanhToan-time-range'>7:00 - 9:00</span>
            <div className='mb_thanhToan-rectangle-20' />
            <input className='mb_thanhToan-full-name-input' />
          </div>
        </div>
        <div className='mb_thanhToan-calendar'>
          <div className='mb_thanhToan-icon' />
        </div>
      </div>
      <div className='mb_thanhToan-frame-21'>
        <div className='mb_thanhToan-flex-column-aa'>
          <span className='mb_thanhToan-payment-method'>Hình thức thanh toán</span>
          <span className='mb_thanhToan-cash-on-delivery'>Thanh toán khi nhận hàng </span>
          <span className='mb_thanhToan-atm-payment'>ATM / Thẻ thanh toán quốc tế</span>
          <span className='mb_thanhToan-paypal-payment'>Thanh toán quốc tế - PAYPAL</span>
        </div>
        <div className='mb_thanhToan-flex-column-be'>
          <div className='mb_thanhToan-empty' />
          <div className='mb_thanhToan-empty-22'>
            <div className='mb_thanhToan-ellipse' />
          </div>
          <div className='mb_thanhToan-empty-23'>
            <div className='mb_thanhToan-ellipse-24' />
          </div>
        </div>
      </div>
      <button className='mb_thanhToan-frame-25'>
        <span className='mb_thanhToan-dat-hang'>ĐẶT HÀNG</span>
      </button>
      <div className='mb_thanhToan-flex-row-a'>
        <span className='mb_thanhToan-ve-chung-toi-26'>VỀ CHÚNG TÔI</span>
        <span className='mb_thanhToan-dia-chi-cua-hang'>ĐỊA CHỈ CỬA HÀNG</span>
        <div className='mb_thanhToan-regroup-27'>
          <span className='mb_thanhToan-mang-xa-hoi'>MẠNG XÃ HỘI</span>
          <span className='mb_thanhToan-lien-he'>LIÊN HỆ</span>
        </div>
      </div>
      <div className='mb_thanhToan-flex-row-d-28'>
        <span className='mb_thanhToan-hoa-club'>Hoa Club</span>
        <div className='mb_thanhToan-instagram' />
        <span className='mb_thanhToan-cau-chuyen-thuong-hieu'>Câu chuyện thương hiệu</span>
        <span className='mb_thanhToan-email-hoaclub-tiepthi-gmail-com'>
          Email: hoaclub.tiepthi@gmail.com
        </span>
        <span className='mb_thanhToan-so-nguyen-hy-quang'>
          Số 6 Nguyễn Hy Quang,
          <br />
          Quận Đống Đa, Hà Nội
        </span>
        <span className='mb_thanhToan-huong-dan-mua-hang'>Hướng dẫn mua hàng</span>
        <span className='mb_thanhToan-hoa-club-29'>hoa_club</span>
        <div className='mb_thanhToan-vector-2a' />
      </div>
      <div className='mb_thanhToan-footer' />
    </div>
  );
}
