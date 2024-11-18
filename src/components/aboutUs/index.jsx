import React, {useEffect} from 'react';
import './index.css';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  useEffect(() => {
    document.title = "Về chúng tôi - Hoa Club";
  }, []);
  return (
    <div className='aboutUs__main-container'>
      <div className='aboutUs__rectangle'>
        <div className='aboutUs__image' />
      </div>
      <div className='aboutUs__flex-row-c'>
      <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}  className='image-1'></Link>
        <div className='aboutUs__frame'>
          <div className='aboutUs__vector' />
          <div className='aboutUs__vector-2' />
          <div className='aboutUs__vector-3' />
        </div>
        <div className='aboutUs__vector-4' />
        <Link to='/thanhtoan' className='aboutUs__shopping-cart'>
          <div className='aboutUs__vector-5' />
          <div className='aboutUs__flex-row'>
            <div className='aboutUs__vector-6' />
            <div className='aboutUs__vector-7' />
          </div>
        </Link>
        <div className='aboutUs__rectangle-8'>
        <Link className='log-in-register' to='/dangNhap' style={{ textDecoration: 'none', }}>Log in/Register</Link>
        </div>
        <Link className='san-pham' to="/sanpham" style={{ textDecoration: 'none', color: 'inherit' }}>Sản phẩm</Link>
        <Link className='dip' to='/dip' style={{ textDecoration: 'none', color: 'inherit' }}>Dịp</Link>
        <Link className='workshop' to='/workshop' style={{ textDecoration: 'none', color: 'inherit' }} >Workshop</Link>
        <Link className='ve-chung-toi' to='/aboutus' style={{ textDecoration: 'none', color: 'inherit' }}>Về chúng tôi</Link>
        <div className='aboutUs__vector-9' />
      </div>
      <span className='aboutUs__gioi-thieu'>Giới thiệu</span>
      <div className='aboutUs__rectangle-a'>
        <div className='aboutUs__flex-column'>
          <span className='aboutUs__hoa-club-intro'>
            HOA Club là website cung cấp các loại hoa tươi và dịch vụ trang trí
            hoa chuyên nghiệp. Tại HOA, chúng tôi tôn vinh vẻ đẹp tự nhiên, sự
            tinh tế trong từng bông hoa, mang đến cho khách hàng những bó hoa và
            lẵng hoa tuyệt đẹp phù hợp với mọi dịp. Sản phẩm của HOA Club không
            chỉ là những bông hoa tươi thắm mà còn là câu chuyện về sự yêu
            thương và sự kết nối với cảm xúc của mỗi người.
          </span>
          <span className='aboutUs__visit-hoa-club'>
            Hãy ghé thăm HOA Club để trải nghiệm sự tinh tế và vẻ đẹp tự nhiên
            trong từng bông hoa – nơi mà tình yêu và nghệ thuật gặp nhau.
          </span>
          <div className='aboutUs__image-b' />
          <div className='aboutUs__rectangle-c' />
          <div className='aboutUs__tet-collection' />
          <span className='aboutUs__hoa-selection'>
            Mỗi bó hoa đều được chọn lọc kỹ càng, từ màu sắc đến hình dáng, để
            mang đến sự hài hòa và phù hợp cho các dịp từ sinh nhật, lễ kỷ niệm
            đến các sự kiện quan trọng. HOA Club không ngừng sáng tạo để mang
            lại những thiết kế hoa độc đáo, thân thiện với môi trường và tôn
            trọng sở thích của mỗi khách hàng.
          </span>
        </div>
        <div className='aboutUs__flex-column-eecf'>
          <div className='aboutUs__hoa-club-promo' />
          <div className='aboutUs__workshop-info' />
        </div>
      </div>
      <div className='aboutUs__flex-row-dfbc'>
        <span className='aboutUs__about-us-d'>VỀ CHÚNG TÔI</span>
        <span className='aboutUs__store-address'>ĐỊA CHỈ CỬA HÀNG</span>
        <span className='aboutUs__social-media'>MẠNG XÃ HỘI</span>
        <span className='aboutUs__contact'>LIÊN HỆ</span>
      </div>
      <div className='aboutUs__flex-row-c-e'>
        <div className='aboutUs__facebook' />
        <div className='aboutUs__instagram' />
        <span className='aboutUs__hoa-club'>hoa_club</span>
        <span className='aboutUs__brand-story'>Câu chuyện thương hiệu</span>
        <span className='aboutUs__text-10'>
          Số 6 Nguyễn Hy Quang,
          <br />
          Quận Đống Đa, Hà Nội
        </span>
        <span className='aboutUs__text-11'>Email: hoaclub.tiepthi@gmail.com</span>
      </div>
      <div className='aboutUs__wrapper-3'>
        <div className='aboutUs__pic-a' />
        <span className='aboutUs__text-12'>Hướng dẫn mua hàng</span>
        <span className='aboutUs__text-13'>Hoa Club</span>
      </div>
      <div className='aboutUs__img-9' />
    </div>
  );
}
