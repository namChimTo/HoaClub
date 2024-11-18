import React, {useEffect} from 'react';
import './index.css';
import { Link } from 'react-router-dom';

export default function ThanhToan() {
  useEffect(() => {
    document.title = "Thanh Toán - Hoa Club";
  }, []);
  return (
    <div className='thanhToan__main-container'>
      <div className='thanhToan__clip-path-group'>
        <div className='thanhToan__group'>
          <div className='thanhToan__vector' />
          <div className='thanhToan__flex-row-bf'>
            <Link className='thanhToan__vector-1' to='/' />
            <div className='thanhToan__vector-2' />
            <div className='thanhToan__clip-path-group-3'>
              <div className='thanhToan__group-4'>
                <div className='thanhToan__vector-5' />
                <div className='thanhToan__flex-row-f'>
                  <div className='thanhToan__vector-6' />
                  <div className='thanhToan__vector-7' />
                </div>
              </div>
            </div>
            <button className='thanhToan__vector-8' />
            <div className='thanhToan__vector-9' />
            <Link className='thanhToan__vector-a' to ='/sanpham'/>
            <Link className='thanhToan__vector-b' to ='/aboutus'/>
            <div className='thanhToan__vector-c' />
            <Link className='thanhToan__vector-d' to='/dip'/>
            <Link className='thanhToan__vector-e' to='/workshop'/>
            <div className='thanhToan__vector-f' />
            <div className='thanhToan__vector-10' />
            <div className='thanhToan__vector-11' />
          </div>
          <div className='thanhToan__flex-row-bf-12'>
            <div className='thanhToan__vector-13' />
            <div className='thanhToan__vector-14' />
            <div className='thanhToan__vector-15' />
            <div className='thanhToan__vector-16' />
            <div className='thanhToan__vector-17' />
            <div className='thanhToan__vector-18' />
            <div className='thanhToan__vector-19' />
            <div className='thanhToan__vector-1a' />
            <div className='thanhToan__vector-1b' />
            <div className='thanhToan__vector-1c' />
            <div className='thanhToan__vector-1d' />
            <div className='thanhToan__vector-1e' />
            <div className='thanhToan__vector-1f' />
            <div className='thanhToan__vector-20' />
            <div className='thanhToan__vector-21' />
            <div className='thanhToan__vector-22' />
          </div>
          <div className='thanhToan__vector-23' />
          <div className='thanhToan__vector-24' />
        </div>
        <span className='thanhToan__don-hang'>Đơn hàng</span>
        <div className='thanhToan__frame'>
          <span className='thanhToan__thong-tin-nguoi-nhan'>
            Thông tin người nhận hàng
          </span>
          <div className='thanhToan__ho-ten'>
            <span className='thanhToan__ho-va-ten'>Họ và tên</span>
            <div className='thanhToan__rectangle' />
            <input className='thanhToan__ho-ten-input' />
          </div>
          <div className='thanhToan__rectangle-25' />
          <span className='thanhToan__so-dien-thoai'>Số Điện thoại</span>
          <div className='thanhToan__rectangle-26' />
          <span className='thanhToan__email'>E-mail</span>
        </div>
        <div className='thanhToan__frame-27'>
          <span className='thanhToan__thong-tin-giao-hoa'>Thông tin giao hoa</span>
          <div className='thanhToan__ho-ten-28'>
            <span className='thanhToan__tinh-thanh-pho'>Tình / Thành phố</span>
            <div className='thanhToan__rectangle-29' />
          </div>
          <div className='thanhToan__ho-ten-2a'>
            <span className='thanhToan__quan-huyen'>Quận / Huyện</span>
            <div className='thanhToan__rectangle-2b' />
          </div>
          <div className='thanhToan__ho-ten-2c'>
            <span className='thanhToan__phuong-xa'>Phường / Xã</span>
            <div className='thanhToan__rectangle-2d' />
          </div>
          <div className='thanhToan__ho-ten-2e'>
            <span className='thanhToan__dia-chi-nhan-hang'>Địa chỉ nhận hàng</span>
            <div className='thanhToan__rectangle-2f' />
            <input className='thanhToan__ho-ten_input' />
          </div>
          <span className='thanhToan__ngay-giao-hang'>Ngày giao hàng </span>
          <span className='thanhToan__gio-giao-hang'>Giờ giao hàng</span>
          <div className='thanhToan__ho-ten-30'>
            <span className='thanhToan__time-range'>7 : 00 - 9 : 00</span>
            <div className='thanhToan__rectangle-31' />
          </div>
          <div className='thanhToan__calendar'>
            <div className='thanhToan__icon' />
          </div>
          <div className='thanhToan__ho-ten-32'>
            <span className='thanhToan__date'>8/10/2024</span>
            <div className='thanhToan__rectangle-33' />
            <input className='thanhToan__ho-ten_input-34' />
          </div>
          <div className='thanhToan__line' />
        </div>
        <div className='thanhToan__polygon' />
        <div className='thanhToan__polygon-35' />
        <div className='thanhToan__polygon-36' />
        <div className='thanhToan__polygon-37' />
        <div className='thanhToan__frame-38'>
          <div className='thanhToan__flex-column-fcac'>
            <span className='thanhToan__hinh-thuc-thanh-toan'>Hình thức thanh toán</span>
            <span className='thanhToan__thanh-toan-khi-nhan-hang'>
              Thanh toán khi nhận hàng
            </span>
            <span className='thanhToan__atm-the-thanh-toan-quoc-te'>
              ATM / Thẻ thanh toán quốc tế
            </span>
            <span className='thanhToan__thanh-toan-quoc-te-paypal'>
              Thanh toán quốc tế - PAYPAL
            </span>
          </div>
          <div className='thanhToan__flex-column-e'>
            <div className='thanhToan__pic-13' />
            <div className='thanhToan__wrapper-8'>
              <div className='thanhToan__ellipse' />
            </div>
            <div className='thanhToan__box-9'>
              <div className='thanhToan__ellipse-39' />
            </div>
          </div>
        </div>
        <button className='thanhToan__frame-3a'>
          <span className='thanhToan__dat-hang'>ĐẶT HÀNG</span>
        </button>
      </div>
    </div>
  );
}
