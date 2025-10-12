import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './CustomerDashboard.css';

function CustomerDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('home');
  const [location] = useState('일곡동');

  const handleLocationClick = () => {
    console.log('위치 변경 모달 열기');
    // 추후 위치 변경 모달 구현
  };

  const dashboardCards = [
    {
      id: 'search',
      title: '검색 예약',
      icon: '🔍',
      subtitle: '식당, 메뉴 검색',
      color: '#FF6B35',
      route: '/customer/search'
    },
    {
      id: 'voice',
      title: '음성 예약',
      icon: '🎤',
      subtitle: '말로 간편하게',
      color: '#4ECDC4',
      route: '/customer/voice'
    },
    {
      id: 'special',
      title: '나의 올사람 보너스',
      icon: '🔥',
      subtitle: '내가 만난 사장님들, 내가 만난 보너스',
      color: '#FFD93D',
      route: '/customer/special'
    },
    {
      id: 'situation',
      title: '누구랑 갈까?',
      icon: '👥',
      subtitle: '상황별 추천',
      color: '#A28EED',
      route: '/customer/situation'
    },
    {
      id: 'nearby',
      title: '내 주변 맛집',
      icon: '📍',
      subtitle: '가까운 식당, 가까운 카페',
      color: '#6BCF7F',
      route: '/customer/nearby'
    },
    {
      id: 'reservations',
      title: '내 예약',
      icon: '📅',
      subtitle: '예약 내역',
      color: '#FF8C61',
      route: '/customer/my-reservations'
    }
  ];

  const handleCardClick = (route) => {
    console.log(`Navigating to: ${route}`);
    if (route === '/customer/voice' || route === '/customer/situation') {
      navigate(route);
    }
    // 다른 페이지는 추후 생성 후 활성화
  };

  return (
    <div className="customer-dashboard">
      {/* 상단바 */}
      <header className="customer-header">
        <h1 className="customer-logo" onClick={() => navigate('/')}>올사람 고객님</h1>
        <button className="location-button" onClick={handleLocationClick}>
          <span className="location-icon">📍</span>
          <span className="location-text">{location}</span>
          <span className="location-arrow">▼</span>
        </button>
        <button className="profile-button">
          <span className="profile-icon">👤</span>
        </button>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="customer-main">
        <div className="customer-container">
          {/* 인사말 */}
          <div className="greeting-section">
            <h2 className="greeting-main">오늘 뭐 먹을까? 고민 끝! 🍽️</h2>
            <p className="greeting-sub">올사람과 함께 맛있는 하루</p>
          </div>

          {/* 카드 그리드 */}
          <div className="dashboard-grid">
            {dashboardCards.map((card) => (
              <div
                key={card.id}
                className="dashboard-card"
                style={{ '--card-color': card.color }}
                onClick={() => handleCardClick(card.route)}
              >
                <div className="card-icon-wrapper">
                  <span className="card-icon">{card.icon}</span>
                </div>
                <div className="card-content">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-subtitle">{card.subtitle}</p>
                </div>
                <div className="card-footer">
                  <span className="card-link">자세히 보기 →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* 하단 탭바 */}
      <nav className="bottom-tabbar">
        <button
          className={`tab-item ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => setActiveTab('home')}
        >
          <span className="tab-icon">🏠</span>
          <span className="tab-label">홈</span>
        </button>
        <button
          className={`tab-item ${activeTab === 'reservations' ? 'active' : ''}`}
          onClick={() => setActiveTab('reservations')}
        >
          <span className="tab-icon">📅</span>
          <span className="tab-label">예약내역</span>
        </button>
        <button
          className={`tab-item special ${activeTab === 'share-order' ? 'active' : ''}`}
          onClick={() => setActiveTab('share-order')}
        >
          <span className="tab-icon">🎁</span>
          <span className="tab-label">공유주문</span>
        </button>
        <button
          className={`tab-item ${activeTab === 'coupons' ? 'active' : ''}`}
          onClick={() => setActiveTab('coupons')}
        >
          <span className="tab-icon">🎫</span>
          <span className="tab-label">쿠폰</span>
        </button>
        <button
          className={`tab-item ${activeTab === 'mypage' ? 'active' : ''}`}
          onClick={() => setActiveTab('mypage')}
        >
          <span className="tab-icon">👤</span>
          <span className="tab-label">마이</span>
        </button>
      </nav>
    </div>
  );
}

export default CustomerDashboard;
