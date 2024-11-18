import React, {useEffect} from 'react';
import './index.css';
import { Link } from 'react-router-dom';

function Workshop() {
  useEffect(() => {
    document.title = "Workshop - Hoa Club";
  }, []);
  return (
    <div className='workshop__main-container'>
      <div className='workshop__rectangle'>
        <div className='workshop__image' />
      </div>
      <div className='workshop__flex-row'>
        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}  className='image-1'></Link>
        <div className='workshop__frame'>
          <div className='workshop__vector' />
          <div className='workshop__vector-2' />
          <div className='workshop__vector-3' />
        </div>
        <div className='workshop__vector-4' />
        <Link to ='/thanhtoan' className='workshop__shopping-cart'>
          <div className='workshop__vector-5' />
          <div className='workshop__flex-row-e'>
            <div className='workshop__vector-6' />
            <div className='workshop__vector-7' />
          </div>
        </Link>
        <div className='workshop__rectangle-8'>
        <Link className='log-in-register' to='/dangNhap' style={{ textDecoration: 'none', }}>Log in/Register</Link>
        </div>
        <Link className='san-pham' to="/sanpham" style={{ textDecoration: 'none', color: 'inherit' }}>Sản phẩm</Link>
        <Link className='dip' to='/dip' style={{ textDecoration: 'none', color: 'inherit' }}>Dịp</Link>
        <Link className='workshop' to='/workshop' style={{ textDecoration: 'none', color: 'inherit' }} >Workshop</Link>
        <Link className='ve-chung-toi' to='/aboutus' style={{ textDecoration: 'none', color: 'inherit' }}>Về chúng tôi</Link>
        <div className='workshop__vector-a' />
      </div>
      <span className='workshop__workshop-b'>Workshop</span>
      <div className='workshop__flex-row-c'>
        <div className='workshop__group' />
        <div className='workshop__rectangle-d' />
        <div className='workshop__rectangle-e'>
          <span className='workshop__cap-sach-toi-truong'>Cắp sách tới trường</span>
          <span className='workshop__nao-ban-nao-ghe'>
            Nào bàn nào ghế nào sách nào vở Một nụ cười tươi như hoa để sẵn
            sàng cùng các bạn học sinh chào đón năm học mới với HOA CLUB nha
          </span>
        </div>
      </div>
      <div className='workshop__flex-row-a'>
        <div className='workshop__group-f' />
        <div className='workshop__rectangle-10'>
          <span className='workshop__duoc-thoa-suc'>
            Được thoả sức sáng tạo với hoa, được kết bạn mới, được mang về siêu
            nhiều ảnh xinh và quà bất ngờ tại HOA CLUB
          </span>
        </div>
        <span className='workshop__noi-vong-tay-lon'>Nối vòng tay lớn</span>
      </div>
      <div className='workshop__flex-row-ff'>
        <div className='workshop__group-11' />
        <div className='workshop__rectangle-12'>
          <span className='workshop__hoa-ban-hoa'>Hoa bán hoa</span>
          <span className='workshop__workshop-trai-nghiem'>
            Workshop trải nghiệm tự tạo ra những đóa hoa và giao bán nhằm mục
            đích từ thiện.
          </span>
        </div>
      </div>
      <div className='workshop__flex-row-c-13'>
        <span className='workshop__ve-chung-toi-14'>VỀ CHÚNG TÔI</span>
        <span className='workshop__dia-chi-cua-hang'>ĐỊA CHỈ CỬA HÀNG</span>
        <span className='workshop__mang-xa-hoi'>MẠNG XÃ HỘI</span>
        <span className='workshop__lien-he'>LIÊN HỆ</span>
      </div>
      <div className='workshop__flex-row-aef'>
        <div className='workshop__facebook' />
        <div className='workshop__instagram' />
        <span className='workshop__hoa-club'>hoa_club</span>
        <span className='workshop__story-brand'>Câu chuyện thương hiệu</span>
        <span className='workshop__address'>
          Số 6 Nguyễn Hy Quang,
          <br />
          Quận Đống Đa, Hà Nội
        </span>
        <span className='workshop__email'>Email: hoaclub.tiepthi@gmail.com</span>
      </div>
      <div className='workshop__flex-row-ff-15'>
        <div className='workshop__vector-16' />
        <span className='workshop__buy-guide'>Hướng dẫn mua hàng</span>
        <span className='workshop__hoa-club-17'>Hoa Club</span>
      </div>
      <div className='workshop__footer' />
    </div>
  );
}

export default Workshop; 