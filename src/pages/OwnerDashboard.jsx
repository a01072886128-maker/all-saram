import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './OwnerDashboard.css';

function OwnerDashboard() {
  const navigate = useNavigate();
  const [ownerName] = useState('김사장'); // 추후 로그인 정보에서 가져올 데이터

  const dashboardCards = [
    {
      id: 'reservations',
      title: '예약 현황',
      icon: '📋',
      description: '오늘/내일 예약 고객 리스트',
      color: '#27AE60',
      route: '/owner/reservations'
    },
    {
      id: 'menu',
      title: '메뉴 등록',
      icon: '🍽️',
      description: '메뉴 추가/수정',
      color: '#27AE60',
      route: '/owner/menu'
    },
    {
      id: 'noshow',
      title: '노쇼 관리',
      icon: '🪑',
      description: '테이블 배치도 설정',
      color: '#27AE60',
      route: '/owner/noshow'
    },
    {
      id: 'store',
      title: '영업시간 관리',
      icon: '🕐',
      description: '영업시간 설정',
      color: '#27AE60',
      route: '/owner/store'
    }
  ];

  const handleCardClick = (route) => {
    console.log(`Navigating to: ${route}`);
    if (route === '/owner/menu' || route === '/owner/reservations' || route === '/owner/noshow') {
      navigate(route);
    }
    // 다른 페이지는 추후 생성 후 활성화
  };

  return (
    <div className="owner-dashboard">
      {/* 상단바 */}
      <header className="dashboard-header">
        <div className="header-left">
          <h1 className="header-title" onClick={() => navigate('/')}>올사람 사장님</h1>
        </div>
        <div className="header-right">
          <button className="icon-button notification-button">
            <span className="icon">🔔</span>
            <span className="notification-badge">3</span>
          </button>
          <button className="icon-button settings-button">
            <span className="icon">⚙️</span>
          </button>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="dashboard-main">
        <div className="dashboard-container">
          {/* 인사말 */}
          <div className="greeting-section">
            <h2 className="greeting-main">사장님 관리 페이지</h2>
          </div>

          {/* 대시보드 카드 그리드 */}
          <div className="dashboard-grid">
            {dashboardCards.map((card) => (
              <div
                key={card.id}
                className="dashboard-card"
                style={{ '--card-color': card.color }}
                onClick={() => handleCardClick(card.route)}
              >
                <div className="card-content">
                  <div className="card-icon">{card.icon}</div>
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-description">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default OwnerDashboard;
