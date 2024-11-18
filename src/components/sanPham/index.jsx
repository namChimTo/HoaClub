import React, {useEffect} from 'react';
import './index.css';
import { Link } from 'react-router-dom';

function SanPham() {
  useEffect(() => {
    document.title = "Sản phẩm - Hoa Club";
  }, []);
  return (
    <div className='main-container'>
      <div className='rectangle'>
        <div className='image'></div> 
      </div>
      <div className='flex-row-a'>
        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}  className='image-1'></Link> 
        <div className='frame'>
          <div className='vector'></div> 
          <div className='vector-2'></div> 
          <div className='vector-3'></div> 
        </div>
        <div className='vector-4'></div> 
        <Link className='shopping-cart' to='/thanhtoan'>
          <div className='vector-5'></div> 
          <div className='flex-row-ca'>
            <div className='vector-6'></div> 
            <div className='vector-7'></div> 
          </div>
        </Link>
        <Link to='/dangNhap' className='rectangle-8'>
          <span className='log-in-register'>Log in/Register</span>
        </Link>
        <Link className='san-pham' to="/sanpham" style={{ textDecoration: 'none', color: 'inherit' }}>Sản phẩm</Link>
        <Link className='dip' to='/dip' style={{ textDecoration: 'none', color: 'inherit' }}>Dịp</Link>
        <Link className='workshop' to='/workshop' style={{ textDecoration: 'none', color: 'inherit' }} >Workshop</Link>
        <Link className='ve-chung-toi' to='/aboutus' style={{ textDecoration: 'none', color: 'inherit' }}>Về chúng tôi</Link>
        <div className='vector-a'></div> 
      </div>
      <span className='san-pham-b'>Sản phẩm</span>
      <div className='flex-row-dc'>
        <span className='personality'>Tính cách</span>
        <div className='rectangle-c'>
          <div className='vector-d'></div> 
        </div>
        <div className='rectangle-e'>
          <div className='vector-f'></div> 
        </div>
        <span className='price'>Giá</span>
      </div>
      <div className='flex-row'>
        <Link className='rectangle-10' to='/manhMe1'></Link> 
        <div className='instagram-highlights-stories'>
          <span className='funny'>Mạnh mẽ</span>
          <div className='line'></div> 
        </div>
        <div className='instagram-highlights-stories-11'></div> 
      </div>
      <div className='flex-row-c'>
        <div className='instagram-highlights-stories-12'></div> 
        <div className='rectangle-13'>
          <div className='instagram-highlights-stories-14'>
            <span className='vui-tinh'>Vui tính</span>
            <div className='line-15'></div> 
          </div>
        </div>
      </div>
      <div className='flex-row-fab'>
        <span className='ve-chung-toi-16'>VỀ CHÚNG TÔI</span>
        <span className='dia-chi-cua-hang'>ĐỊA CHỈ CỬA HÀNG</span>
        <span className='mang-xa-hoi'>MẠNG XÃ HỘI</span>
        <span className='lien-he'>LIÊN HỆ</span>
      </div>
      <div className='flex-row-ec'>
        <div className='facebook'></div> 
        <div className='instagram'></div> 
        <span className='hoa-club'>hoa_club</span>
        <span className='brand-story'>Câu chuyện thương hiệu</span>
        <span className='address'>
          Số 6 Nguyễn Hy Quang,
          <br />
          Quận Đống Đa, Hà Nội
        </span>
        <span className='email'>Email: hoaclub.tiepthi@gmail.com</span>
      </div>
      <div className='flex-row-d'>
        <div className='vector-17'></div> 
        <span className='buy-guide'>Hướng dẫn mua hàng</span>
        <span className='hoa-club-18'>Hoa Club</span>
      </div>
      <div className='footer'></div> 
    </div>
  );
}

export default SanPham;
