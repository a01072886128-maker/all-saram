import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ReservationsToday.css';

function ReservationsToday() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('전체');
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [sendSMS, setSendSMS] = useState(true);
  const [rejectReason, setRejectReason] = useState('');
  const [toast, setToast] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);

  const itemsPerPage = 5;

  // Mock 예약 데이터
  const [reservations, setReservations] = useState([
    {
      id: 1,
      time: '12:00',
      people: 4,
      customerName: '김민준',
      phone: '010-1234-5678',
      request: '창가 자리 부탁드립니다',
      status: '대기'
    },
    {
      id: 2,
      time: '12:30',
      people: 2,
      customerName: '이서연',
      phone: '010-2345-6789',
      request: '아기 의자 필요합니다',
      status: '확정'
    },
    {
      id: 3,
      time: '13:00',
      people: 6,
      customerName: '박지훈',
      phone: '010-3456-7890',
      request: '단체석 예약',
      status: '대기'
    },
    {
      id: 4,
      time: '13:30',
      people: 3,
      customerName: '최수진',
      phone: '010-4567-8901',
      request: '',
      status: '확정'
    },
    {
      id: 5,
      time: '14:00',
      people: 2,
      customerName: '정현우',
      phone: '010-5678-9012',
      request: '조용한 자리로 부탁드립니다',
      status: '완료'
    },
    {
      id: 6,
      time: '14:30',
      people: 4,
      customerName: '강예은',
      phone: '010-6789-0123',
      request: '생일 케이크 준비 가능한가요?',
      status: '확정'
    },
    {
      id: 7,
      time: '15:00',
      people: 5,
      customerName: '윤도현',
      phone: '010-7890-1234',
      request: '',
      status: '노쇼'
    },
    {
      id: 8,
      time: '18:00',
      people: 2,
      customerName: '한지우',
      phone: '010-8901-2345',
      request: '루프탑 자리 요청',
      status: '대기'
    },
    {
      id: 9,
      time: '18:30',
      people: 4,
      customerName: '임채원',
      phone: '010-9012-3456',
      request: '주차 가능한가요?',
      status: '확정'
    },
    {
      id: 10,
      time: '19:00',
      people: 3,
      customerName: '오승민',
      phone: '010-0123-4567',
      request: '채식 메뉴 있나요?',
      status: '대기'
    }
  ]);

  const filters = ['전체', '대기', '확정', '완료', '노쇼'];

  // 필터링된 예약 목록
  const filteredReservations = activeFilter === '전체'
    ? reservations
    : reservations.filter(r => r.status === activeFilter);

  // 페이지네이션
  const totalPages = Math.ceil(filteredReservations.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentReservations = filteredReservations.slice(startIndex, startIndex + itemsPerPage);

  // 토스트 표시
  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  // 예약 상태 변경
  const updateReservationStatus = (id, newStatus) => {
    setReservations(reservations.map(r =>
      r.id === id ? { ...r, status: newStatus } : r
    ));
  };

  // 예약 승인
  const handleApprove = () => {
    updateReservationStatus(selectedReservation.id, '확정');
    const smsText = sendSMS ? ' (문자 발송됨)' : '';
    showToast(`${selectedReservation.customerName}님의 예약이 승인되었습니다${smsText}`, 'success');
    setShowConfirmModal(false);
    setSelectedReservation(null);
  };

  // 예약 거절
  const handleReject = () => {
    if (!rejectReason) {
      alert('거절 사유를 선택해주세요.');
      return;
    }
    // 거절 시 목록에서 제거하거나 상태 변경
    setReservations(reservations.filter(r => r.id !== selectedReservation.id));
    showToast(`${selectedReservation.customerName}님의 예약이 거절되었습니다`, 'error');
    setShowRejectModal(false);
    setSelectedReservation(null);
    setRejectReason('');
  };

  // 노쇼 표시
  const handleNoShow = () => {
    if (window.confirm('노쇼로 표시하시겠습니까?')) {
      updateReservationStatus(selectedReservation.id, '노쇼');
      showToast(`${selectedReservation.customerName}님이 노쇼로 표시되었습니다`, 'warning');
      setSelectedReservation(null);
    }
  };

  // 완료 처리
  const handleComplete = () => {
    if (window.confirm('방문 완료 처리하시겠습니까?')) {
      updateReservationStatus(selectedReservation.id, '완료');
      showToast(`${selectedReservation.customerName}님의 예약이 완료되었습니다`, 'success');
      setSelectedReservation(null);
    }
  };

  // 전화 걸기
  const handleCall = (phone) => {
    window.location.href = `tel:${phone}`;
  };

  // 상태별 스타일
  const getStatusClass = (status) => {
    const statusMap = {
      '대기': 'waiting',
      '확정': 'confirmed',
      '완료': 'completed',
      '노쇼': 'noshow'
    };
    return statusMap[status] || '';
  };

  const getStatusEmoji = (status) => {
    const emojiMap = {
      '대기': '⏳',
      '확정': '✅',
      '완료': '🎉',
      '노쇼': '❌'
    };
    return emojiMap[status] || '';
  };

  return (
    <div className={`reservations-today ${highContrast ? 'high-contrast' : ''} ${largeText ? 'large-text' : ''}`}>
      {/* 상단바 */}
      <header className="reservations-header">
        <button
          className="back-button"
          onClick={() => navigate('/owner/dashboard')}
          aria-label="대시보드로 돌아가기"
        >
          ← 뒤로가기
        </button>
        <h1 className="reservations-title">오늘 예약</h1>
        <div className="accessibility-controls">
          <button
            className={`accessibility-btn ${highContrast ? 'active' : ''}`}
            onClick={() => setHighContrast(!highContrast)}
            aria-label="고대비 모드 전환"
            title="고대비"
          >
            🎨
          </button>
          <button
            className={`accessibility-btn ${largeText ? 'active' : ''}`}
            onClick={() => setLargeText(!largeText)}
            aria-label="큰 글자 모드 전환"
            title="글자크기"
          >
            🔍
          </button>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="reservations-main">
        <div className="reservations-container">
          {/* 상단 통계 */}
          <div className="stats-summary">
            <div className="stat-item">
              <span className="stat-label">전체</span>
              <span className="stat-value">{reservations.length}건</span>
            </div>
            <div className="stat-item waiting">
              <span className="stat-label">대기</span>
              <span className="stat-value">{reservations.filter(r => r.status === '대기').length}건</span>
            </div>
            <div className="stat-item confirmed">
              <span className="stat-label">확정</span>
              <span className="stat-value">{reservations.filter(r => r.status === '확정').length}건</span>
            </div>
          </div>

          {/* 필터 버튼 */}
          <div className="filter-buttons" role="tablist" aria-label="예약 상태 필터">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => {
                  setActiveFilter(filter);
                  setCurrentPage(1);
                }}
                role="tab"
                aria-selected={activeFilter === filter}
                aria-label={`${filter} 예약 보기`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* 예약 목록 */}
          <div className="reservations-list" role="list">
            {currentReservations.length === 0 ? (
              <div className="empty-state">
                <span className="empty-icon">📭</span>
                <p className="empty-text">{activeFilter} 예약이 없습니다</p>
              </div>
            ) : (
              currentReservations.map((reservation) => (
                <div key={reservation.id} className="reservation-card" role="listitem">
                  <div className="reservation-left">
                    <div className="time-badge">
                      <span className="time-icon">⏰</span>
                      <span className="time-text">{reservation.time}</span>
                    </div>
                    <div className="reservation-info">
                      <h3 className="customer-name">{reservation.customerName}</h3>
                      <div className="reservation-meta">
                        <span className="people-info">
                          <span className="people-icon">👥</span>
                          {reservation.people}명
                        </span>
                        <span className="phone-info">📱 {reservation.phone}</span>
                      </div>
                    </div>
                  </div>

                  <div className="reservation-right">
                    <span className={`status-badge ${getStatusClass(reservation.status)}`}>
                      <span className="status-emoji">{getStatusEmoji(reservation.status)}</span>
                      {reservation.status}
                    </span>
                    <button
                      className="detail-button"
                      onClick={() => setSelectedReservation(reservation)}
                      aria-label={`${reservation.customerName}님 예약 자세히 보기`}
                    >
                      자세히 보기
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* 페이지네이션 */}
          {totalPages > 1 && (
            <div className="pagination" role="navigation" aria-label="페이지네이션">
              <button
                className="pagination-btn"
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                aria-label="이전 페이지"
              >
                ← 이전
              </button>
              <span className="page-info" aria-current="page">
                {currentPage} / {totalPages}
              </span>
              <button
                className="pagination-btn"
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                aria-label="다음 페이지"
              >
                다음 →
              </button>
            </div>
          )}
        </div>
      </main>

      {/* 상세 모달 */}
      {selectedReservation && !showConfirmModal && !showRejectModal && (
        <div className="modal-overlay" onClick={() => setSelectedReservation(null)}>
          <div className="modal-content detail-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-labelledby="modal-title">
            <div className="modal-header">
              <h2 id="modal-title">예약 상세 정보</h2>
              <button
                className="modal-close"
                onClick={() => setSelectedReservation(null)}
                aria-label="닫기"
              >
                ✕
              </button>
            </div>

            <div className="modal-body detail-body">
              <div className="detail-section">
                <div className="detail-row main">
                  <span className="detail-icon">⏰</span>
                  <span className="detail-value large">{selectedReservation.time}</span>
                </div>

                <div className="detail-row main">
                  <span className="detail-icon">👤</span>
                  <span className="detail-value large">{selectedReservation.customerName}</span>
                </div>

                <div className="detail-row">
                  <span className="detail-label">인원</span>
                  <span className="detail-value">
                    <span className="people-icon">👥</span>
                    {selectedReservation.people}명
                  </span>
                </div>

                <div className="detail-row">
                  <span className="detail-label">연락처</span>
                  <span className="detail-value">📱 {selectedReservation.phone}</span>
                </div>

                <div className="detail-row">
                  <span className="detail-label">상태</span>
                  <span className={`status-badge ${getStatusClass(selectedReservation.status)}`}>
                    <span className="status-emoji">{getStatusEmoji(selectedReservation.status)}</span>
                    {selectedReservation.status}
                  </span>
                </div>

                {selectedReservation.request && (
                  <div className="detail-row column">
                    <span className="detail-label">요청사항</span>
                    <p className="request-text">{selectedReservation.request}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="modal-footer action-footer">
              {/* 대기 상태 */}
              {selectedReservation.status === '대기' && (
                <>
                  <button
                    className="action-btn approve"
                    onClick={() => setShowConfirmModal(true)}
                    aria-label="예약 승인"
                  >
                    ✅ 승인
                  </button>
                  <button
                    className="action-btn reject"
                    onClick={() => setShowRejectModal(true)}
                    aria-label="예약 거절"
                  >
                    ❌ 거절
                  </button>
                </>
              )}

              {/* 확정 상태 */}
              {selectedReservation.status === '확정' && (
                <>
                  <button
                    className="action-btn complete"
                    onClick={handleComplete}
                    aria-label="방문 완료"
                  >
                    🎉 완료
                  </button>
                  <button
                    className="action-btn noshow"
                    onClick={handleNoShow}
                    aria-label="노쇼 표시"
                  >
                    ❌ 노쇼
                  </button>
                </>
              )}

              {/* 공통: 전화걸기 */}
              <button
                className="action-btn call"
                onClick={() => handleCall(selectedReservation.phone)}
                aria-label={`${selectedReservation.customerName}님에게 전화하기`}
              >
                📞 전화걸기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 승인 확인 모달 */}
      {showConfirmModal && (
        <div className="modal-overlay">
          <div className="modal-content confirm-modal" role="dialog" aria-labelledby="confirm-title">
            <div className="modal-header">
              <h2 id="confirm-title">예약 승인</h2>
              <button
                className="modal-close"
                onClick={() => setShowConfirmModal(false)}
                aria-label="닫기"
              >
                ✕
              </button>
            </div>

            <div className="modal-body">
              <p className="confirm-text">
                {selectedReservation.customerName}님의 예약을 승인하시겠습니까?
              </p>

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={sendSMS}
                  onChange={(e) => setSendSMS(e.target.checked)}
                  aria-label="문자 알림 발송"
                />
                <span>문자 알림을 보낼까요?</span>
              </label>
            </div>

            <div className="modal-footer">
              <button
                className="modal-btn cancel"
                onClick={() => setShowConfirmModal(false)}
              >
                취소
              </button>
              <button
                className="modal-btn submit"
                onClick={handleApprove}
              >
                승인하기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 거절 모달 */}
      {showRejectModal && (
        <div className="modal-overlay">
          <div className="modal-content reject-modal" role="dialog" aria-labelledby="reject-title">
            <div className="modal-header">
              <h2 id="reject-title">예약 거절</h2>
              <button
                className="modal-close"
                onClick={() => setShowRejectModal(false)}
                aria-label="닫기"
              >
                ✕
              </button>
            </div>

            <div className="modal-body">
              <p className="reject-text">
                거절 사유를 선택해주세요
              </p>

              <div className="reason-options" role="radiogroup" aria-label="거절 사유">
                {['예약이 마감되었습니다', '해당 시간대가 불가능합니다', '인원 수용이 어렵습니다', '기타'].map((reason) => (
                  <label key={reason} className="reason-option">
                    <input
                      type="radio"
                      name="reason"
                      value={reason}
                      checked={rejectReason === reason}
                      onChange={(e) => setRejectReason(e.target.value)}
                      aria-label={reason}
                    />
                    <span>{reason}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="modal-footer">
              <button
                className="modal-btn cancel"
                onClick={() => {
                  setShowRejectModal(false);
                  setRejectReason('');
                }}
              >
                취소
              </button>
              <button
                className="modal-btn submit reject"
                onClick={handleReject}
              >
                거절하기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 토스트 알림 */}
      {toast && (
        <div className={`toast ${toast.type}`} role="alert" aria-live="polite">
          <span className="toast-icon">
            {toast.type === 'success' && '✅'}
            {toast.type === 'error' && '❌'}
            {toast.type === 'warning' && '⚠️'}
          </span>
          <span className="toast-message">{toast.message}</span>
        </div>
      )}
    </div>
  );
}

export default ReservationsToday;
