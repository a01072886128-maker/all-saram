import { useNavigate } from 'react-router-dom';
import './SignupPage.css';

function SignupPage() {
  const navigate = useNavigate();

  const handleUserTypeSelect = (type) => {
    console.log(`${type} 선택됨`);
    if (type === '사장님') {
      navigate('/owner/dashboard');
    } else if (type === '고객') {
      navigate('/customer/dashboard');
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <button className="back-button" onClick={() => navigate('/')}>
          ← 뒤로가기
        </button>

        <div className="signup-header">
          <h1 className="signup-title">환영합니다!</h1>
          <p className="signup-description">
            어떤 서비스를 이용하시나요?
          </p>
        </div>

        <div className="user-type-cards">
          <div
            className="user-type-card owner-card"
            onClick={() => handleUserTypeSelect('사장님')}
          >
            <div className="card-icon">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <h2 className="card-title">사장님</h2>
            <p className="card-description">
              우리 가게 예약을<br />
              안전하게 관리하고 싶어요
            </p>
            <ul className="card-features">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                우리 가게
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                예약 관리
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                노쇼 방지
              </li>
            </ul>
            <button className="card-button">시작하기</button>
          </div>

          <div
            className="user-type-card customer-card"
            onClick={() => handleUserTypeSelect('고객')}
          >
            <div className="card-icon">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <h2 className="card-title">고객님</h2>
            <p className="card-description">
              뭐먹을까 고민 끝<br />
              편하게 예약하고 싶어요
            </p>
            <ul className="card-features">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                간편한 예약
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                내 주변 맛집 탐색
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                메뉴 고민 이제 끝!
              </li>
            </ul>
            <button className="card-button">시작하기</button>
          </div>
        </div>

        <div className="signup-footer">
          <p className="footer-text">
            계정이 있으신가요? <span className="login-link">로그인</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
