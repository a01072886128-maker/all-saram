import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MenuManagement.css';

function MenuManagement() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [isAIProcessing, setIsAIProcessing] = useState(false);
  const [editingMenu, setEditingMenu] = useState(null);

  // 가상 메뉴 데이터
  const [menus, setMenus] = useState([
    { id: 1, name: '김치찌개', price: 8000, status: 'available', image: null },
    { id: 2, name: '된장찌개', price: 8000, status: 'available', image: null },
    { id: 3, name: '제육볶음', price: 9000, status: 'available', image: null },
    { id: 4, name: '불고기', price: 12000, status: 'soldout', image: null },
  ]);

  // 폼 상태
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    status: 'available',
    image: null
  });

  // AI 메뉴명 인식 시뮬레이션 (실제로는 API 호출)
  const aiMenuRecognition = (file) => {
    const menuSuggestions = [
      '비빔밥', '불고기', '김치찌개', '된장찌개', '갈비탕',
      '냉면', '삼겹살', '제육볶음', '순두부찌개', '떡볶이',
      '파스타', '피자', '스테이크', '초밥', '라면'
    ];

    return new Promise((resolve) => {
      setTimeout(() => {
        const randomMenu = menuSuggestions[Math.floor(Math.random() * menuSuggestions.length)];
        resolve(randomMenu);
      }, 1500); // 1.5초 후 결과 반환 (AI 처리 시뮬레이션)
    });
  };

  // 이미지 업로드 핸들러
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // 이미지 미리보기
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData(prev => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);

    // AI 인식 시작
    setIsAIProcessing(true);
    try {
      const recognizedName = await aiMenuRecognition(file);
      setFormData(prev => ({ ...prev, name: recognizedName }));
    } catch (error) {
      console.error('AI 인식 실패:', error);
    } finally {
      setIsAIProcessing(false);
    }
  };

  // 메뉴 추가
  const handleAddMenu = () => {
    if (!formData.name || !formData.price) {
      alert('메뉴명과 가격을 입력해주세요.');
      return;
    }

    const newMenu = {
      id: Date.now(),
      name: formData.name,
      price: parseInt(formData.price),
      status: formData.status,
      image: formData.image
    };

    setMenus([...menus, newMenu]);
    resetForm();
    setShowModal(false);
  };

  // 메뉴 수정
  const handleEditMenu = (menu) => {
    setEditingMenu(menu.id);
    setFormData({
      name: menu.name,
      price: menu.price,
      status: menu.status,
      image: menu.image
    });
    setShowModal(true);
  };

  // 메뉴 업데이트
  const handleUpdateMenu = () => {
    if (!formData.name || !formData.price) {
      alert('메뉴명과 가격을 입력해주세요.');
      return;
    }

    setMenus(menus.map(menu =>
      menu.id === editingMenu
        ? { ...menu, name: formData.name, price: parseInt(formData.price), status: formData.status, image: formData.image }
        : menu
    ));

    resetForm();
    setShowModal(false);
    setEditingMenu(null);
  };

  // 메뉴 삭제
  const handleDeleteMenu = (id) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      setMenus(menus.filter(menu => menu.id !== id));
    }
  };

  // 상태 토글
  const toggleStatus = (id) => {
    setMenus(menus.map(menu =>
      menu.id === id
        ? { ...menu, status: menu.status === 'available' ? 'soldout' : 'available' }
        : menu
    ));
  };

  // 폼 리셋
  const resetForm = () => {
    setFormData({
      name: '',
      price: '',
      status: 'available',
      image: null
    });
    setEditingMenu(null);
  };

  // 모달 닫기
  const handleCloseModal = () => {
    setShowModal(false);
    resetForm();
  };

  return (
    <div className="menu-management">
      {/* 상단바 */}
      <header className="menu-header">
        <button className="back-button" onClick={() => navigate('/owner/dashboard')}>
          ← 뒤로가기
        </button>
        <h1 className="menu-title">메뉴 관리</h1>
        <div className="header-spacer"></div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="menu-main">
        <div className="menu-container">
          {/* 상단 정보 */}
          <div className="menu-summary">
            <div className="summary-card">
              <span className="summary-label">전체 메뉴</span>
              <span className="summary-value">{menus.length}개</span>
            </div>
            <div className="summary-card">
              <span className="summary-label">판매 중</span>
              <span className="summary-value available">{menus.filter(m => m.status === 'available').length}개</span>
            </div>
            <div className="summary-card">
              <span className="summary-label">품절</span>
              <span className="summary-value soldout">{menus.filter(m => m.status === 'soldout').length}개</span>
            </div>
          </div>

          {/* 메뉴 추가 버튼 */}
          <button className="add-menu-button" onClick={() => setShowModal(true)}>
            <span className="add-icon">➕</span>
            새 메뉴 등록
          </button>

          {/* 메뉴 목록 */}
          <div className="menu-list">
            {menus.map((menu) => (
              <div key={menu.id} className="menu-item">
                <div className="menu-item-left">
                  {menu.image ? (
                    <img src={menu.image} alt={menu.name} className="menu-image" />
                  ) : (
                    <div className="menu-image-placeholder">🍽️</div>
                  )}
                  <div className="menu-info">
                    <h3 className="menu-name">{menu.name}</h3>
                    <p className="menu-price">{menu.price.toLocaleString()}원</p>
                  </div>
                </div>

                <div className="menu-item-right">
                  <button
                    className={`status-badge ${menu.status}`}
                    onClick={() => toggleStatus(menu.id)}
                  >
                    {menu.status === 'available' ? '판매중' : '품절'}
                  </button>
                  <button
                    className="menu-action-btn edit"
                    onClick={() => handleEditMenu(menu)}
                  >
                    수정
                  </button>
                  <button
                    className="menu-action-btn delete"
                    onClick={() => handleDeleteMenu(menu.id)}
                  >
                    삭제
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* 메뉴 등록/수정 모달 */}
      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{editingMenu ? '메뉴 수정' : '새 메뉴 등록'}</h2>
              <button className="modal-close" onClick={handleCloseModal}>✕</button>
            </div>

            <div className="modal-body">
              {/* 이미지 업로드 */}
              <div className="form-group">
                <label className="form-label">
                  메뉴 사진 {isAIProcessing && <span className="ai-badge">🤖 AI 분석 중...</span>}
                </label>
                <div className="image-upload-area">
                  {formData.image ? (
                    <div className="image-preview">
                      <img src={formData.image} alt="Preview" />
                      <button
                        className="image-remove"
                        onClick={() => setFormData(prev => ({ ...prev, image: null }))}
                      >
                        ✕
                      </button>
                    </div>
                  ) : (
                    <label className="image-upload-label">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="image-input"
                      />
                      <div className="upload-placeholder">
                        <span className="upload-icon">📷</span>
                        <p>사진을 업로드하면 AI가 메뉴를 인식해요</p>
                        <span className="upload-hint">클릭하여 이미지 선택</span>
                      </div>
                    </label>
                  )}
                </div>
              </div>

              {/* 메뉴명 입력 */}
              <div className="form-group">
                <label className="form-label">메뉴명</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="메뉴 이름을 입력하세요"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>

              {/* 가격 입력 */}
              <div className="form-group">
                <label className="form-label">가격</label>
                <input
                  type="number"
                  className="form-input"
                  placeholder="가격을 입력하세요"
                  value={formData.price}
                  onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                />
              </div>

              {/* 상태 선택 */}
              <div className="form-group">
                <label className="form-label">판매 상태</label>
                <div className="status-options">
                  <label className="status-option">
                    <input
                      type="radio"
                      name="status"
                      value="available"
                      checked={formData.status === 'available'}
                      onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value }))}
                    />
                    <span>판매중</span>
                  </label>
                  <label className="status-option">
                    <input
                      type="radio"
                      name="status"
                      value="soldout"
                      checked={formData.status === 'soldout'}
                      onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value }))}
                    />
                    <span>품절</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button className="modal-btn cancel" onClick={handleCloseModal}>
                취소
              </button>
              <button
                className="modal-btn submit"
                onClick={editingMenu ? handleUpdateMenu : handleAddMenu}
              >
                {editingMenu ? '수정하기' : '등록하기'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuManagement;
