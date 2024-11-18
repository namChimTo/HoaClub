import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

export default function WorkShop_mb() {
  return (
    <div className='mb_workShop_main-container'>
      <div className='mb_workShop_rectangle'>
        <div className='mb_workShop_image' />
      </div>
      <div className='mb_workShop_flex-row-f'>
        <Link to='/' className='mb_workShop_image-1' />
        <div className='mb_workShop_frame'>
          <div className='mb_workShop_vector' />
          <div className='mb_workShop_vector-2' />
          <div className='mb_workShop_vector-3' />
        </div>
        <Link to='/dangNhap'style={{ textDecoration: 'none', }} className='mb_workShop_vector-4' />
        <Link to='/thanhToan' style={{ textDecoration: 'none', }} className='mb_workShop_shopping-cart'>
          <div className='mb_workShop_vector-5' />
          <div className='mb_workShop_flex-row'>
            <div className='mb_workShop_vector-6' />
            <div className='mb_workShop_vector-7' />
          </div>
        </Link>
        <Link to='/sanPham' style={{ textDecoration: 'none', }} className='mb_workShop_san-pham'>Sản phẩm</Link>
        <Link to='/Dip' style={{ textDecoration: 'none', }} className='mb_workShop_dip'>Dịp</Link>
        <Link to='/workShop' style={{ textDecoration: 'none', }} className='mb_workShop_workshop'>Workshop</Link>
        <Link to='/aboutUs' style={{ textDecoration: 'none', }} className='mb_workShop_ve-chung-toi'>Về chúng tôi</Link>
        <Link to='/dangNhap' className='mb_workShop_vector-8' />
      </div>
      <div className='mb_workShop_flex-row-bca'>
        <div className='mb_workShop_frame-9'>
          <div className='mb_workShop_vector-a' />
          <div className='mb_workShop_vector-b' />
          <div className='mb_workShop_vector-c' />
        </div>
        <div className='mb_workShop_image-d' />
      </div>
      <span className='mb_workShop_workshop-e'>Workshop</span>
      <div className='mb_workShop_flex-row-ae'>
        <div className='mb_workShop_nao-ban-nao' />
        <div className='mb_workShop_image-f' />
        <div className='mb_workShop_nao-ban-nao-10' />
        <div className='mb_workShop_rectangle-11' />
        <div className='mb_workShop_rectangle-12'>
          <span className='mb_workShop_cap-sach-toi-truong'>Cắp sách tới trường</span>
          <span className='mb_workShop_nao-ban-nao-13'>
            Nào bàn nào ghế nào sách nào vở. Một nụ cười tươi như hoa để sẵn
            sàng cùng các bạn học sinh chào đón năm học mới với HOA CLUB nha
          </span>
        </div>
      </div>
      <div className='mb_workShop_flex-row-14'>
        <div className='mb_workShop_group' />
        <div className='mb_workShop_rectangle-15'>
          <span className='mb_workShop_duoc-thoa-suc'>
            Được thoả sức sáng tạo với hoa, được kết bạn mới, được mang về siêu
            nhiều ảnh xinh và quà bất ngờ tại HOA CLUB
          </span>
        </div>
        <span className='mb_workShop_noi-vong-tay-lon'>Nối vòng tay lớn</span>
      </div>
      <div className='mb_workShop_flex-row-b'>
        <div className='mb_workShop_group-16' />
        <div className='mb_workShop_rectangle-17'>
          <span className='mb_workShop_hoa-ban-hoa'>Hoa bán hoa</span>
          <span className='mb_workShop_workshop-trai-nghiem'>
            Workshop trải nghiệm tự tạo ra những đóa hoa và giao bán nhằm mục
            đích từ thiện.
          </span>
        </div>
      </div>
      <div className='mb_workShop_flex-row-f-18'>
        <span className='mb_workShop_ve-chung-toi-19'>VỀ CHÚNG TÔI</span>
        <span className='mb_workShop_dia-chi-cua-hang'>ĐỊA CHỈ CỬA HÀNG</span>
        <div className='mb_workShop_regroup'>
          <span className='mb_workShop_mang-xa-hoi'>MẠNG XÃ HỘI</span>
          <span className='mb_workShop_lien-he'>LIÊN HỆ</span>
        </div>
      </div>
      <div className='mb_workShop_flex-row-1a'>
        <span className='mb_workShop_hoa-club'>Hoa Club</span>
        <div className='mb_workShop_instagram' />
        <span className='mb_workShop_brand-story'>Câu chuyện thương hiệu</span>
        <span className='mb_workShop_email'>Email: hoaclub.tiepthi@gmail.com</span>
        <span className='mb_workShop_address'>
          Số 6 Nguyễn Hy Quang,
          <br />
          Quận Đống Đa, Hà Nội
        </span>
        <span className='mb_workShop_purchase-guide'>Hướng dẫn mua hàng</span>
        <span className='mb_workShop_hoa-club-1b'>hoa_club</span>
        <div className='mb_workShop_vector-1c' />
      </div>
      <div className='mb_workShop_footer' />
    </div>
  );
}
