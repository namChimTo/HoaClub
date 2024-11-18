import React from 'react'; //ReactJS
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; //
import Page from './components/page/index.jsx'; 
import SanPham from './components/sanPham/index.jsx';
import Dip from './components/Dip/index.jsx';
import WorkShop from './components/workShop/index.jsx';
import AboutUs from './components/aboutUs/index.jsx';
import DangNhap from './components/dangNhap/index.jsx';
import DangKy from './components/dangKy/index.jsx';
import ThanhToan from './components/thanhToan/index.jsx';
import ManhMe1 from './components/manhMe1/index.jsx';
import ChiTietSanPham from './components/chiTietSanPham/index.jsx';
import Page_mb from './components/mb_page/index.jsx';
import DangNhap_mb from './components/mb_dangNhap/index.jsx';
import SanPham_mb from './components/mb_sanPham/index.jsx';
import ManhMe1_mb from './components/mb_manhMe1/index.jsx';
import Dip_mb from './components/mb_dip/index.jsx';
import WorkShop_mb from './components/mb_workShop/index.jsx';
import AboutUs_mb from './components/mb_aboutUs/index.jsx';
import DangKy_mb from './components/mb_dangKy/index.jsx';
import ThanhToan_mb from './components/mb_thanhToan/index.jsx';
import ChiTietSanPham_mb from './components/mb_chiTietSanPham/index.jsx';
import useWindowWidth from './hooks/useWindowWidth'; //hooks để chuyển page khi thu nhỏ trang

function App() {
  const width = useWindowWidth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={width < 930 ? <Page_mb /> : <Page />} />
        <Route path="/sanpham" element={width<930?<SanPham_mb />: <SanPham />} />
        <Route path="/dip" element={width<930?<Dip_mb />: <Dip />} />
        <Route path='/workShop' element={width<930?<WorkShop_mb />: <WorkShop />} />
        <Route path='/aboutUs' element={width<930?<AboutUs_mb />: <AboutUs />} />
        <Route path="/dangnhap" element={width < 930 ? <DangNhap_mb /> : <DangNhap />} />
        <Route path='/dangKy' element={width < 930 ? <DangKy_mb /> : <DangKy />} />
        <Route path='/thanhToan' element={width < 930 ? <ThanhToan_mb /> : <ThanhToan />} />

        {/* Sản Phẩm */}
        <Route path='/manhMe1' element={width<930?<ManhMe1_mb/>:<ManhMe1 />} />
        <Route path='/chiTietSanPham' element={width<930?<ChiTietSanPham_mb/>:<ChiTietSanPham />} />
      </Routes>
    </Router>
  );
}

export default App;
