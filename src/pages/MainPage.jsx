import { useNavigate } from 'react-router-dom';
import './MainPage.css';

function MainPage() {
  const navigate = useNavigate();

  return (
    <div className="main-page">
      {/* 상단 네비게이션 */}
      <nav className="main-nav">
        <div className="nav-container">
          <div className="nav-logo">올사람</div>
          <button className="nav-login">로그인</button>
        </div>
      </nav>

      {/* 히어로 섹션 */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </span>
              약속을 지키는 사람
            </div>
            <h1 className="hero-title">
              대한민국의 건강한<br />
              외식소비를 지키는 약속,<br />
              <span className="highlight">노쇼 없는 행복한 예약문화</span>
            </h1>
            <p className="hero-subtitle">
              성실한 예약이 만드는 새로운 소비문화,<br />
              당신의 약속이 지역 상권을 지킵니다.
            </p>
            <div className="hero-buttons">
              <button className="hero-btn primary" onClick={() => navigate('/signup')}>
                지금 시작하기
              </button>
              <button className="hero-btn secondary">
                서비스 알아보기
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image">
              <img src="/hero-image.png" alt="사장님과 손님이 함께 악수하는 따뜻한 장면" className="hero-main-image" />
            </div>
          </div>
        </div>
      </section>

      {/* 서비스 소개 섹션 */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-header">
            <span className="section-label">SERVICE</span>
            <h2 className="section-title">올사람은?</h2>
            <p className="section-description">
              무단노쇼로 인한 소상공인 피해를 예방하고,<br />
              약속을 지키는 소비자에게 보상을 제공하는<br />
              <strong>디지털 상생 예약 플랫폼</strong>입니다.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div className="feature-number">01</div>
              <h3 className="feature-title">신뢰할 수 있는 예약</h3>
              <p className="feature-text">보증금 시스템으로 노쇼를 방지합니다</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="8" r="7" />
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                </svg>
              </div>
              <div className="feature-number">02</div>
              <h3 className="feature-title">공정한 보상 제공</h3>
              <p className="feature-text">약속을 지키면 리워드를 받아요</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="feature-number">03</div>
              <h3 className="feature-title">지역 상권 보호</h3>
              <p className="feature-text">당신의 약속이 소상공인을 지킵니다</p>
            </div>
          </div>

          <div className="process-section">
            <h3 className="process-title">서비스 이용 프로세스</h3>
            <div className="process-flow">
              <div className="process-step">
                <div className="step-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <span className="step-label">예약</span>
              </div>
              <div className="process-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
              <div className="process-step">
                <div className="step-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="step-label">방문완료</span>
              </div>
              <div className="process-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
              <div className="process-step">
                <div className="step-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <span className="step-label">리워드 지급</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 리워드 정책 섹션 */}
      <section className="reward-section">
        <div className="reward-container">
          <div className="reward-header">
            <span className="section-label">REWARD POLICY</span>
            <h2 className="section-title">올사람 정책</h2>
            <p className="section-subtitle">약속을 지키는 모두가 보상받는 공정한 예약문화</p>
          </div>

          <div className="policy-grid">
            <div className="policy-card success">
              <div className="policy-top-line"></div>
              <div className="policy-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="policy-title">예약 방문 완료 시</h3>
              <p className="policy-desc">예약금 100% 환급 + 리워드 10%</p>
              <p className="policy-emotion">당신의 약속이 리워드로 돌아옵니다</p>
            </div>

            <div className="policy-card warning">
              <div className="policy-top-line"></div>
              <div className="policy-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="policy-title">24시간 전 취소 시</h3>
              <p className="policy-desc">전액 환불</p>
              <p className="policy-emotion">배려하는 마음이 상생을 만듭니다</p>
            </div>

            <div className="policy-card danger">
              <div className="policy-top-line"></div>
              <div className="policy-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
              </div>
              <h3 className="policy-title">무단 노쇼 시</h3>
              <p className="policy-desc">보증금 차감 및 알림 누적</p>
              <p className="policy-emotion">작은 약속이 소상공인을 지킵니다</p>
            </div>
          </div>

          <div className="policy-limits">
            <div className="limit-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              <span>최대 월 3회 리워드</span>
            </div>
            <div className="limit-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                <line x1="1" y1="10" x2="23" y2="10" />
              </svg>
              <span>최대 3만P 한도</span>
            </div>
          </div>

          <div className="strategy-section">
            <h3 className="strategy-title">올사람 차별화 포인트</h3>
            <p className="strategy-subtitle">소상공인과 고객이 함께 성장하는 예약문화의 혁신</p>

            <div className="strategy-grid">
              <div className="strategy-card blue">
                <div className="strategy-icon">
                  <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                </div>
                <h4 className="strategy-card-title">사장님을 위한 AI 예약 분석 대시보드</h4>
                <p className="strategy-card-desc">예약률·노쇼 패턴을 한눈에! 데이터 기반 매출 관리 지원</p>
              </div>

              <div className="strategy-card orange">
                <div className="strategy-icon">
                  <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6" />
                    <path d="M2 7h20v5H2z" />
                    <path d="M12 22V7" />
                    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                  </svg>
                </div>
                <h4 className="strategy-card-title">고객을 위한 리워드 & 우선대기권</h4>
                <p className="strategy-card-desc">예약을 지키면 포인트 리워드 지급, VIP 고객은 우선예약 혜택 부여</p>
              </div>

              <div className="strategy-card green">
                <div className="strategy-icon">
                  <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                  </svg>
                </div>
                <h4 className="strategy-card-title">모두를 위한 공정한 약속 문화</h4>
                <p className="strategy-card-desc">신뢰 기반 예약 시스템으로 모두가 혜택을 받는 상생 플랫폼</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">지금 시작해보세요</h2>
          <p className="cta-subtitle">
            약속을 지키는 당신에게<br />
            올사람이 특별한 혜택을 드립니다
          </p>
          <button className="cta-button" onClick={() => navigate('/signup')}>
            회원가입하고 시작하기
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="main-footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-logo">올사람</div>
            <p className="footer-text">약속을 지키는 사람들의 건강한 외식문화</p>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">© 2025 올사람. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainPage;
