import React, { useEffect } from 'react';
import './index.css'; 
import { Link } from 'react-router-dom';


function Page() {
  useEffect(() => {
    document.title = "Trang chủ - Hoa Club";
  }, []);
  return (
    <div className='main-container'>
    
      <div className='rectangle'>
        <div className='image'></div>
      </div>
      <div className='flex-row-a'>
        <div className='image-1'></div> 
        <div className='frame'>
          <div className='vector'></div>
          <div className='vector-2'></div> 
          <div className='vector-3'></div> 
        </div>
        <div className='vector-4'></div>
        <Link className='shopping-cart' to='/thanhToan' >
          <div className='vector-5'></div> 
          <div className='flex-row-ca'>
            <div className='vector-6'></div>
            <div className='vector-7'></div> 
          </div>
        </Link>
        <div className='rectangle-8'>
          <Link className='log-in-register' to='/dangNhap' style={{ textDecoration: 'none', }}>Log in/Register</Link>
        </div>
        <Link className='san-pham' to="/sanpham" style={{ textDecoration: 'none', color: 'inherit' }}>Sản phẩm</Link>
        <Link to="/dip" className='dip' style={{ textDecoration: 'none', color: 'inherit' }}>Dịp</Link>
        <Link className='workshop' to='/workShop' style={{ textDecoration: 'none', color: 'inherit' }}>Workshop</Link>
        <Link className='ve-chung-toi' to='/aboutUs' style={{ textDecoration: 'none', color: 'inherit' }}>Về chúng tôi</Link>
        <div className='vector-9'></div>
      </div>
      <div className='flex-row-bd'>
        <div className='image-a'></div>
        <div className='image-b'></div>
        <div className='image-c'></div>
        <div className='image-d'></div>
        <div className='tagline'></div>
      </div>
      <div className='flex-row-f'>
        <div className='image-e'></div>
        <div className='image-f'></div>
        <div className='image-10'></div>
        <div className='image-11'></div>
      </div>
      <div className='flex-row-e'>
        <div className='image-12'></div>
        <div className='image-13'></div>
        <div className='image-14'></div>
        <div className='image-15'></div>
      </div>
      <div className='flex-row-16'>
        <span className='ve-chung-toi-17'>VỀ CHÚNG TÔI</span>
        <span className='dia-chi-cua-hang'>ĐỊA CHỈ CỬA HÀNG</span>
        <span className='mang-xa-hoi'>MẠNG XÃ HỘI</span>
        <span className='lien-he'>LIÊN HỆ</span>
      </div>
      <div className='flex-row-e-18'>
        <a href="https://www.facebook.com/hoaclub2022"  target="_blank"  style={{ textDecoration: 'none', }}  rel="noopener noreferrer" className='facebook'></a>
        <a href="https://www.instagram.com/hoa_club/?hl=vi"  target="_blank"  className='instagram' style={{ textDecoration: 'none', }}  rel="noopener noreferrer" ></a>
        <a href="https://www.instagram.com/hoa_club/?hl=vi"  target="_blank"  style={{ textDecoration: 'none', }}  rel="noopener noreferrer"  className='hoa-club'>hoa_club</a>
        <span className='brand-story'>Câu chuyện thương hiệu</span>
        <span className='address'>
          Số 6 Nguyễn Hy Quang,
          <br />
          Quận Đống Đa, Hà Nội
        </span>
        <span className='email'>Email: hoaclub.tiepthi@gmail.com</span>
      </div>
      <div className='flex-row-d'>
        <div className='vector-19'></div>
        <span className='buying-guide'>Hướng dẫn mua hàng</span>
        <span className='hoa-club-1a'>Hoa Club</span>
      </div>
      <div className='footer'></div>
    </div>
  );
}

export default Page;
