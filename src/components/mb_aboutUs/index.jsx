import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

export default function AboutUs_mb() {
  return (
    <div className='mb_aboutUs_main-container'>
      <div className='mb_aboutUs_rectangle'>
        <div className='mb_aboutUs_image' />
      </div>
      <div className='mb_aboutUs_flex-row-adc'>
        <Link to='/' className='mb_aboutUs_image-1' />
        <div className='mb_aboutUs_frame'>
          <div className='mb_aboutUs_vector' />
          <div className='mb_aboutUs_vector-2' />
          <div className='mb_aboutUs_vector-3' />
        </div>
        <Link to='/dangNhap' className='mb_aboutUs_vector-4' />
        <Link to='/thanhToan' className='mb_aboutUs_shopping-cart'>
          <div className='mb_aboutUs_vector-5' />
          <div className='mb_aboutUs_flex-row-cb'>
            <div className='mb_aboutUs_vector-6' />
            <div className='mb_aboutUs_vector-7' />
          </div>
        </Link>
        <Link to='/sanPham' className='mb_aboutUs_san-pham' style={{ textDecoration: 'none', }}>Sản phẩm</Link>
        <Link to='/Dip' className='mb_aboutUs_dip' style={{ textDecoration: 'none', }}>Dịp</Link>
        <Link to='/workShop' className='mb_aboutUs_workshop' style={{ textDecoration: 'none', }}>Workshop</Link>
        <Link to='/aboutUs' className='mb_aboutUs_ve-chung-toi' style={{ textDecoration: 'none', }}>Về chúng tôi</Link>
        <Link to='/dangNhap' className='mb_aboutUs_vector-8' />
      </div>
      <div className='mb_aboutUs_flex-row-da'>
        <div className='mb_aboutUs_regroup'>
          <div className='mb_aboutUs_image-9' />
          <div className='mb_aboutUs_frame-a'>
            <div className='mb_aboutUs_vector-b' />
            <div className='mb_aboutUs_vector-c' />
            <div className='mb_aboutUs_vector-d' />
          </div>
        </div>
        <span className='mb_aboutUs_gioi-thieu'>Giới thiệu</span>
      </div>
      <div className='mb_aboutUs_rectangle-e'>
        <div className='mb_aboutUs_flex-column-ba'>
          <span className='mb_aboutUs_hoa-club'>
            HOA Club là website cung cấp các loại hoa tươi và dịch vụ trang trí
            hoa chuyên nghiệp. Tại HOA, chúng tôi tôn vinh vẻ đẹp tự nhiên, sự
            tinh tế trong từng bông hoa, mang đến cho khách hàng những bó hoa và
            lẵng hoa tuyệt đẹp phù hợp với mọi dịp. Sản phẩm của HOA Club không
            chỉ là những bông hoa tươi thắm mà còn là câu chuyện về sự yêu
            thương và sự kết nối với cảm xúc của mỗi người.
          </span>
          <span className='mb_aboutUs_trai-nghiem'>
            Hãy ghé thăm HOA Club để trải nghiệm sự tinh tế và vẻ đẹp tự nhiên
            trong từng bông hoa – nơi mà tình yêu và nghệ thuật gặp nhau.
          </span>
          <div className='mb_aboutUs_image-f' />
          <div className='mb_aboutUs_rectangle-10' />
          <div className='mb_aboutUs_collection-tet-am' />
          <span className='mb_aboutUs_selected-flowers'>
            Mỗi bó hoa đều được chọn lọc kỹ càng, từ màu sắc đến hình dáng, để
            mang đến sự hài hòa và phù hợp cho các dịp từ sinh nhật, lễ kỷ niệm
            đến các sự kiện quan trọng. HOA Club không ngừng sáng tạo để mang
            lại những thiết kế hoa độc đáo, thân thiện với môi trường và tôn
            trọng sở thích của mỗi khách hàng.
          </span>
        </div>
        <div className='mb_aboutUs_flex-column-e'>
          <div className='mb_aboutUs_gift-voucher' />
          <div className='mb_aboutUs_workshop-session' />
        </div>
      </div>
      <div className='mb_aboutUs_flex-row-a'>
        <span className='mb_aboutUs_about-us'>VỀ CHÚNG TÔI</span>
        <span className='mb_aboutUs_store-location'>ĐỊA CHỈ CỬA HÀNG</span>
        <div className='mb_aboutUs_regroup-11'>
          <span className='mb_aboutUs_social-media'>MẠNG XÃ HỘI</span>
          <span className='mb_aboutUs_lien-he'>LIÊN HỆ</span>
        </div>
      </div>
      <div className='mb_aboutUs_flex-row-aef'>
        <span className='mb_aboutUs_hoa-club-12'>Hoa Club</span>
        <div className='mb_aboutUs_instagram' />
        <span className='mb_aboutUs_cau-chuyen-thuong-hieu'>Câu chuyện thương hiệu</span>
        <span className='mb_aboutUs_email-hoaclub-tiepthi-gmail-com'>
          Email: hoaclub.tiepthi@gmail.com
        </span>
        <span className='mb_aboutUs_so-nguyen-hy-quang'>
          Số 6 Nguyễn Hy Quang,
          <br />
          Quận Đống Đa, Hà Nội
        </span>
        <span className='mb_aboutUs_huong-dan-mua-hang'>Hướng dẫn mua hàng</span>
        <span className='mb_aboutUs_hoa-club-13'>hoa_club</span>
        <div className='mb_aboutUs_vector-14' />
      </div>
      <div className='mb_aboutUs_footer' />
    </div>
  );
}
