import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './VoiceReservation.css';

function VoiceReservation() {
  const navigate = useNavigate();
  const [status, setStatus] = useState('idle'); // idle, listening, processing, result, confirmed
  const [recognizedText, setRecognizedText] = useState('');
  const [parsedInfo, setParsedInfo] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [toast, setToast] = useState(null);

  // Mock STT 시뮬레이션
  const mockRecognitionResults = [
    {
      text: "오늘 저녁 7시에 올리브분식 2명 예약할게요",
      restaurant: "올리브분식",
      time: "오늘 저녁 7시",
      people: 2
    },
    {
      text: "내일 점심 12시 30분에 김사장 닭갈비 4명이요",
      restaurant: "김사장 닭갈비",
      time: "내일 점심 12시 30분",
      people: 4
    },
    {
      text: "오늘 6시에 홍대 파스타집 3명 예약해주세요",
      restaurant: "홍대 파스타집",
      time: "오늘 6시",
      people: 3
    }
  ];

  // 토스트 표시
  const showToast = (message, type = 'info') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  // 음성 녹음 시작
  const handleStartRecording = () => {
    if (status === 'listening') return;

    setStatus('listening');
    setRecognizedText('');
    setParsedInfo(null);

    // 2초 후 processing으로 변경
    setTimeout(() => {
      setStatus('processing');

      // 1.5초 후 결과 표시 (Mock STT)
      setTimeout(() => {
        const randomResult = mockRecognitionResults[Math.floor(Math.random() * mockRecognitionResults.length)];
        setRecognizedText(randomResult.text);
        setParsedInfo({
          restaurant: randomResult.restaurant,
          time: randomResult.time,
          people: randomResult.people
        });
        setStatus('result');
        showToast('음성이 성공적으로 인식되었습니다!', 'success');
      }, 1500);
    }, 2000);
  };

  // 텍스트 직접 수정
  const handleTextEdit = (newText) => {
    setRecognizedText(newText);
    // 간단한 파싱 (실제로는 더 정교한 NLP 필요)
    // 여기서는 기존 parsedInfo 유지
  };

  // 예약 요청
  const handleReservationRequest = () => {
    if (!parsedInfo) {
      showToast('예약 정보를 인식할 수 없습니다. 다시 시도해주세요.', 'error');
      return;
    }

    setStatus('confirmed');
    showToast('예약 요청이 완료되었습니다!', 'success');

    // 2초 후 대시보드로 이동
    setTimeout(() => {
      navigate('/customer/dashboard');
    }, 2000);
  };

  // 다시 시도
  const handleRetry = () => {
    setStatus('idle');
    setRecognizedText('');
    setParsedInfo(null);
    setIsEditing(false);
  };

  return (
    <div className="voice-reservation">
      {/* 상단바 */}
      <header className="voice-header">
        <button
          className="back-button"
          onClick={() => navigate('/customer/dashboard')}
          aria-label="대시보드로 돌아가기"
        >
          ← 뒤로가기
        </button>
        <h1 className="voice-title">🎙️ 음성 예약</h1>
        <div className="header-spacer"></div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="voice-main">
        <div className="voice-container">
          {/* 안내 문구 */}
          <div className="guide-section">
            <h2 className="guide-title">올사람이 당신의 말을 이해하고<br />예약을 도와드릴게요</h2>
            <p className="guide-subtitle">
              정확한 예약을 위해 장소 이름과 시간, 인원수를 함께 말해주세요.
            </p>
          </div>

          {/* 메인 카드 */}
          <div className="recording-card">
            {/* 마이크 버튼 */}
            <div className="mic-section">
              <button
                className={`mic-button ${status}`}
                onClick={handleStartRecording}
                disabled={status === 'listening' || status === 'processing' || status === 'confirmed'}
                aria-label={status === 'listening' ? '듣고 있어요' : '음성 녹음 시작'}
              >
                <span className="mic-icon">🎤</span>
                {status === 'listening' && (
                  <div className="wave-animation">
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                  </div>
                )}
              </button>

              {/* 상태 텍스트 */}
              <p className="status-text">
                {status === 'idle' && '눌러서 말씀해주세요'}
                {status === 'listening' && '듣고 있어요...'}
                {status === 'processing' && '음성을 분석하고 있어요...'}
                {status === 'result' && '인식이 완료되었습니다!'}
                {status === 'confirmed' && '예약 요청 중...'}
              </p>

              {/* 녹음 중 점 애니메이션 */}
              {(status === 'listening' || status === 'processing') && (
                <div className="recording-indicator">
                  <span className="recording-dot"></span>
                  <span className="recording-label">REC</span>
                </div>
              )}
            </div>

            {/* 인식된 텍스트 */}
            {recognizedText && (
              <div className="recognized-section">
                <h3 className="section-title">인식된 내용</h3>
                {isEditing ? (
                  <div className="edit-section">
                    <textarea
                      className="text-editor"
                      value={recognizedText}
                      onChange={(e) => handleTextEdit(e.target.value)}
                      rows={3}
                    />
                    <button
                      className="edit-done-btn"
                      onClick={() => setIsEditing(false)}
                    >
                      수정 완료
                    </button>
                  </div>
                ) : (
                  <div className="text-display">
                    <p className="recognized-text">{recognizedText}</p>
                    <button
                      className="edit-btn"
                      onClick={() => setIsEditing(true)}
                      aria-label="텍스트 수정"
                    >
                      ✏️ 수정
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* 예약 정보 요약 */}
            {parsedInfo && (
              <div className="info-summary">
                <h3 className="section-title">예약 정보</h3>
                <div className="info-grid">
                  <div className="info-item">
                    <span className="info-icon">🏪</span>
                    <div className="info-content">
                      <span className="info-label">식당</span>
                      <span className="info-value">{parsedInfo.restaurant}</span>
                    </div>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">⏰</span>
                    <div className="info-content">
                      <span className="info-label">시간</span>
                      <span className="info-value">{parsedInfo.time}</span>
                    </div>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">👥</span>
                    <div className="info-content">
                      <span className="info-label">인원</span>
                      <span className="info-value">{parsedInfo.people}명</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 액션 버튼 */}
            <div className="action-section">
              {status === 'result' && (
                <>
                  <button
                    className="action-btn primary"
                    onClick={handleReservationRequest}
                  >
                    ✅ 예약 요청하기
                  </button>
                  <button
                    className="action-btn secondary"
                    onClick={handleRetry}
                  >
                    🔄 다시 말하기
                  </button>
                </>
              )}

              {status === 'confirmed' && (
                <div className="confirmed-message">
                  <span className="confirmed-icon">🎉</span>
                  <p className="confirmed-text">예약 요청이 완료되었습니다!</p>
                </div>
              )}
            </div>
          </div>

          {/* 하단 팁 */}
          <div className="tips-section">
            <h3 className="tips-title">💡 음성 예약 팁</h3>
            <ul className="tips-list">
              <li>조용한 곳에서 명확하게 말씀해주세요</li>
              <li>예: "내일 저녁 7시에 김사장 닭갈비 4명이요"</li>
              <li>식당 이름, 시간, 인원수를 함께 말씀해주세요</li>
              <li>인식이 잘못되었다면 수정 버튼을 눌러 직접 수정할 수 있어요</li>
            </ul>
          </div>
        </div>
      </main>

      {/* 토스트 알림 */}
      {toast && (
        <div className={`toast ${toast.type}`} role="alert" aria-live="polite">
          <span className="toast-icon">
            {toast.type === 'success' && '✅'}
            {toast.type === 'error' && '❌'}
            {toast.type === 'info' && 'ℹ️'}
          </span>
          <span className="toast-message">{toast.message}</span>
        </div>
      )}
    </div>
  );
}

export default VoiceReservation;
