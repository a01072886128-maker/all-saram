import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './OwnerDashboard.css';

function OwnerDashboard() {
  const navigate = useNavigate();
  const [ownerName] = useState('김사장'); // 추후 로그인 정보에서 가져올 데이터

  const dashboardCards = [
    {
      id: 'reservations',
      title: '오늘 예약',
      icon: '📅',
      mainNumber: '12',
      unit: '건',
      description: '확인 대기 2건',
      color: '#FF6B35',
      route: '/owner/reservations'
    },
    {
      id: 'menu',
      title: '메뉴 관리',
      icon: '🍽️',
      mainNumber: '24',
      unit: '개',
      description: '등록된 메뉴',
      color: '#4ECDC4',
      route: '/owner/menu'
    },
    {
      id: 'reviews',
      title: '새 리뷰',
      icon: '⭐',
      mainNumber: '5',
      unit: '개',
      description: '답변 대기 중',
      color: '#FFD93D',
      route: '/owner/reviews'
    },
    {
      id: 'sales',
      title: '오늘 매출',
      icon: '💰',
      mainNumber: '850,000',
      unit: '원',
      description: '전일 대비 +12%',
      color: '#6BCF7F',
      route: '/owner/sales'
    },
    {
      id: 'store',
      title: '상점 관리',
      icon: '🏪',
      mainNumber: '',
      unit: '',
      description: '영업시간, 휴무일 설정',
      color: '#A28EED',
      route: '/owner/store'
    },
    {
      id: 'settings',
      title: '약속 지킴 보너스',
      icon: '💝',
      mainNumber: '',
      unit: '',
      description: '계정 및 알림 설정',
      color: '#95A5A6',
      route: '/owner/settings'
    }
  ];

  const handleCardClick = (route) => {
    console.log(`Navigating to: ${route}`);
    if (route === '/owner/menu' || route === '/owner/reservations') {
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
            <p className="greeting-hello">안녕하세요, {ownerName}님! 👋</p>
            <h2 className="greeting-main">오늘도 열심히 운영하시는 사장님을 응원합니다!</h2>
            <p className="greeting-sub">노쇼 걱정 없는 건강한 예약문화를 올사람과 함께 지켜나가요</p>
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
                <div className="card-header">
                  <span className="card-icon">{card.icon}</span>
                  <h3 className="card-title">{card.title}</h3>
                </div>

                <div className="card-body">
                  {card.mainNumber && (
                    <div className="card-number">
                      <span className="number">{card.mainNumber}</span>
                      <span className="unit">{card.unit}</span>
                    </div>
                  )}
                  <p className="card-description">{card.description}</p>
                </div>

                <div className="card-footer">
                  <span className="card-link">자세히 보기 →</span>
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
