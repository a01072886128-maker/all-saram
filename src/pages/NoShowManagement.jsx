import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './NoShowManagement.css';

function NoShowManagement() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('detection'); // detection, blacklist, patterns

  // 모의 데이터 - 실제로는 AI 머신러닝 API에서 가져올 데이터
  const suspiciousPatterns = [
    {
      id: 1,
      customerName: '김**',
      phone: '010-****-5678',
      riskScore: 87,
      riskLevel: 'high',
      patterns: ['동일 번호로 3회 이상 노쇼', '예약 후 30분 이내 취소 반복', '여러 식당에서 동시 예약'],
      lastNoShow: '2025-10-20',
      noShowCount: 4,
      aiConfidence: 92
    },
    {
      id: 2,
      customerName: '박**',
      phone: '010-****-1234',
      riskScore: 73,
      riskLevel: 'medium',
      patterns: ['주말 저녁 예약 후 미방문 2회', '예약 시간 직전 취소'],
      lastNoShow: '2025-10-18',
      noShowCount: 2,
      aiConfidence: 78
    },
    {
      id: 3,
      customerName: '이**',
      phone: '010-****-9999',
      riskScore: 95,
      riskLevel: 'critical',
      patterns: ['조직적 노쇼 의심', '5개 이상 매장에서 동일 패턴', '가상번호 사용 의심'],
      lastNoShow: '2025-10-22',
      noShowCount: 8,
      aiConfidence: 96
    }
  ];

  const blacklistedUsers = [
    {
      id: 1,
      customerName: '최**',
      phone: '010-****-7777',
      reason: '악의적 반복 노쇼',
      reportCount: 12,
      sharedBy: 15,
      dateAdded: '2025-10-15'
    },
    {
      id: 2,
      customerName: '정**',
      phone: '010-****-3333',
      reason: '조직적 노쇼 사기',
      reportCount: 23,
      sharedBy: 28,
      dateAdded: '2025-10-10'
    }
  ];

  const detectionStats = {
    todayDetections: 3,
    weeklyDetections: 18,
    preventedNoShows: 42,
    savedAmount: '2,840,000',
    accuracy: 94.5
  };

  const getRiskLevelColor = (level) => {
    switch (level) {
      case 'critical':
        return '#D32F2F';
      case 'high':
        return '#F57C00';
      case 'medium':
        return '#FBC02D';
      default:
        return '#388E3C';
    }
  };

  const getRiskLevelText = (level) => {
    switch (level) {
      case 'critical':
        return '매우 위험';
      case 'high':
        return '위험';
      case 'medium':
        return '주의';
      default:
        return '안전';
    }
  };

  return (
    <div className="noshow-management">
      {/* 상단바 */}
      <header className="noshow-header">
        <div className="header-left">
          <button className="back-button" onClick={() => navigate('/owner')}>
            ← 뒤로
          </button>
          <h1 className="header-title">AI 노쇼 패턴 탐지 시스템</h1>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="noshow-main">
        <div className="noshow-container">

          {/* AI 탐지 통계 대시보드 */}
          <div className="stats-section">
            <h2 className="section-title">실시간 AI 탐지 현황</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">🎯</div>
                <div className="stat-content">
                  <div className="stat-number">{detectionStats.todayDetections}</div>
                  <div className="stat-label">오늘 탐지</div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">📊</div>
                <div className="stat-content">
                  <div className="stat-number">{detectionStats.weeklyDetections}</div>
                  <div className="stat-label">이번 주 탐지</div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">🛡️</div>
                <div className="stat-content">
                  <div className="stat-number">{detectionStats.preventedNoShows}</div>
                  <div className="stat-label">노쇼 방지</div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">💰</div>
                <div className="stat-content">
                  <div className="stat-number">{detectionStats.savedAmount}원</div>
                  <div className="stat-label">절감 금액</div>
                </div>
              </div>
              <div className="stat-card highlight">
                <div className="stat-icon">🤖</div>
                <div className="stat-content">
                  <div className="stat-number">{detectionStats.accuracy}%</div>
                  <div className="stat-label">AI 정확도</div>
                </div>
              </div>
            </div>
          </div>

          {/* 탭 네비게이션 */}
          <div className="tab-navigation">
            <button
              className={`tab-button ${activeTab === 'detection' ? 'active' : ''}`}
              onClick={() => setActiveTab('detection')}
            >
              의심 패턴 탐지
            </button>
            <button
              className={`tab-button ${activeTab === 'blacklist' ? 'active' : ''}`}
              onClick={() => setActiveTab('blacklist')}
            >
              공유 블랙리스트
            </button>
            <button
              className={`tab-button ${activeTab === 'patterns' ? 'active' : ''}`}
              onClick={() => setActiveTab('patterns')}
            >
              패턴 분석
            </button>
          </div>

          {/* 의심 패턴 탐지 탭 */}
          {activeTab === 'detection' && (
            <div className="content-section">
              <div className="section-header">
                <h2 className="section-title">AI 기반 노쇼 의심 패턴 탐지</h2>
                <p className="section-description">
                  머신러닝 알고리즘이 실시간으로 예약 패턴을 분석하여 악의적 노쇼를 사전에 감지합니다.
                </p>
              </div>

              <div className="suspicious-list">
                {suspiciousPatterns.map((pattern) => (
                  <div key={pattern.id} className="suspicious-card">
                    <div className="card-header-row">
                      <div className="customer-info">
                        <h3 className="customer-name">{pattern.customerName}</h3>
                        <span className="customer-phone">{pattern.phone}</span>
                      </div>
                      <div
                        className="risk-badge"
                        style={{ backgroundColor: getRiskLevelColor(pattern.riskLevel) }}
                      >
                        {getRiskLevelText(pattern.riskLevel)}
                      </div>
                    </div>

                    <div className="risk-score-section">
                      <div className="score-label">AI 위험도 점수</div>
                      <div className="score-bar-container">
                        <div
                          className="score-bar"
                          style={{
                            width: `${pattern.riskScore}%`,
                            backgroundColor: getRiskLevelColor(pattern.riskLevel)
                          }}
                        />
                      </div>
                      <div className="score-value">{pattern.riskScore}/100 (AI 신뢰도: {pattern.aiConfidence}%)</div>
                    </div>

                    <div className="patterns-section">
                      <div className="patterns-label">감지된 의심 패턴</div>
                      <ul className="patterns-list">
                        {pattern.patterns.map((p, index) => (
                          <li key={index} className="pattern-item">
                            <span className="pattern-icon">⚠️</span>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="card-footer-row">
                      <div className="footer-info">
                        <span className="info-item">노쇼 횟수: {pattern.noShowCount}회</span>
                        <span className="info-item">최근: {pattern.lastNoShow}</span>
                      </div>
                      <div className="action-buttons">
                        <button className="btn-secondary">상세 분석</button>
                        <button className="btn-primary">블랙리스트 추가</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 공유 블랙리스트 탭 */}
          {activeTab === 'blacklist' && (
            <div className="content-section">
              <div className="section-header">
                <h2 className="section-title">소상공인 공유 블랙리스트</h2>
                <p className="section-description">
                  전국 소상공인들이 공유하는 악의적 노쇼 사용자 정보입니다.
                  예약 시 자동으로 확인되어 피해를 예방합니다.
                </p>
              </div>

              <div className="blacklist-grid">
                {blacklistedUsers.map((user) => (
                  <div key={user.id} className="blacklist-card">
                    <div className="blacklist-header">
                      <div className="blacklist-icon">🚫</div>
                      <div className="blacklist-info">
                        <h3 className="blacklist-name">{user.customerName}</h3>
                        <span className="blacklist-phone">{user.phone}</span>
                      </div>
                    </div>

                    <div className="blacklist-reason">
                      <strong>사유:</strong> {user.reason}
                    </div>

                    <div className="blacklist-stats">
                      <div className="blacklist-stat">
                        <span className="stat-label">신고 횟수</span>
                        <span className="stat-value">{user.reportCount}회</span>
                      </div>
                      <div className="blacklist-stat">
                        <span className="stat-label">공유 매장</span>
                        <span className="stat-value">{user.sharedBy}개</span>
                      </div>
                    </div>

                    <div className="blacklist-date">등록일: {user.dateAdded}</div>
                  </div>
                ))}
              </div>

              <div className="blacklist-info-box">
                <h3>블랙리스트 공유 안내</h3>
                <ul>
                  <li>악의적 노쇼가 확인된 고객은 자동으로 공유 블랙리스트에 등록됩니다.</li>
                  <li>개인정보는 마스킹 처리되며, 예약 확인 시에만 자동 매칭됩니다.</li>
                  <li>블랙리스트 등록 고객의 예약은 자동으로 경고 표시됩니다.</li>
                  <li>소상공인 커뮤니티 간 실시간 공유로 피해를 최소화합니다.</li>
                </ul>
              </div>
            </div>
          )}

          {/* 패턴 분석 탭 */}
          {activeTab === 'patterns' && (
            <div className="content-section">
              <div className="section-header">
                <h2 className="section-title">머신러닝 패턴 분석</h2>
                <p className="section-description">
                  AI가 학습한 노쇼 사기 패턴과 탐지 알고리즘 정보입니다.
                </p>
              </div>

              <div className="pattern-analysis-grid">
                <div className="analysis-card">
                  <h3 className="analysis-title">주요 탐지 패턴</h3>
                  <ul className="analysis-list">
                    <li>동일 번호로 여러 매장 동시 예약</li>
                    <li>예약 후 짧은 시간 내 반복 취소</li>
                    <li>주말/성수기 집중 예약 후 노쇼</li>
                    <li>가상번호 또는 일회용 번호 사용</li>
                    <li>타 매장 노쇼 이력 보유</li>
                    <li>예약 시간대 비정상 패턴</li>
                  </ul>
                </div>

                <div className="analysis-card">
                  <h3 className="analysis-title">AI 학습 데이터</h3>
                  <div className="learning-stats">
                    <div className="learning-item">
                      <span className="learning-label">학습된 예약 데이터</span>
                      <span className="learning-value">1,247,892건</span>
                    </div>
                    <div className="learning-item">
                      <span className="learning-label">노쇼 사례 분석</span>
                      <span className="learning-value">58,342건</span>
                    </div>
                    <div className="learning-item">
                      <span className="learning-label">참여 매장</span>
                      <span className="learning-value">3,542개</span>
                    </div>
                    <div className="learning-item">
                      <span className="learning-label">모델 업데이트</span>
                      <span className="learning-value">매일 자동</span>
                    </div>
                  </div>
                </div>

                <div className="analysis-card highlight-card">
                  <h3 className="analysis-title">알고리즘 성능</h3>
                  <div className="performance-grid">
                    <div className="performance-item">
                      <div className="performance-value">94.5%</div>
                      <div className="performance-label">정확도</div>
                    </div>
                    <div className="performance-item">
                      <div className="performance-value">92.1%</div>
                      <div className="performance-label">재현율</div>
                    </div>
                    <div className="performance-item">
                      <div className="performance-value">96.8%</div>
                      <div className="performance-label">정밀도</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}

export default NoShowManagement;
