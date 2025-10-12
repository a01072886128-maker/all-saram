import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WhoWith.css';

function WhoWith() {
  const navigate = useNavigate();
  const [selectedSituation, setSelectedSituation] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [recommendationCount, setRecommendationCount] = useState(0);

  // 상황 목록
  const situations = [
    {
      id: 'family',
      icon: '👨‍👩‍👧‍👦',
      name: '가족과 함께',
      description: '온 가족이 즐거운 식사',
      subtitle: '넓고 편안한 분위기'
    },
    {
      id: 'friends',
      icon: '🗣️',
      name: '친구와 수다',
      description: '시끌벅적한 즐거움',
      subtitle: '캐주얼하고 활기찬 곳'
    },
    {
      id: 'couple',
      icon: '💕',
      name: '연인과 데이트',
      description: '특별한 시간을 위해',
      subtitle: '분위기 좋은 한식집 추천'
    },
    {
      id: 'alone',
      icon: '🍜',
      name: '혼밥/혼술',
      description: '나만의 여유',
      subtitle: '편하게 즐기는 식사'
    },
    {
      id: 'work',
      icon: '👔',
      name: '직장 회식',
      description: '모두가 만족할 수 있는',
      subtitle: '단체석이 편한 곳'
    }
  ];

  // Mock 추천 데이터
  const mockRecommendations = {
    family: [
      {
        id: 1,
        name: '온가족한정식',
        image: '🏠',
        rating: 4.7,
        description: '넓은 룸과 키즈존이 있는 한식집',
        tags: ['룸있음', '주차가능', '키즈존']
      },
      {
        id: 2,
        name: '할머니손맛',
        image: '🍲',
        rating: 4.6,
        description: '세대를 아우르는 편안한 메뉴',
        tags: ['한식', '푸짐한상차림', '주차가능']
      },
      {
        id: 3,
        name: '가족식탁',
        image: '🍱',
        rating: 4.5,
        description: '어린이 메뉴부터 어르신 메뉴까지',
        tags: ['가족단위', '넓은좌석', '친절']
      }
    ],
    friends: [
      {
        id: 4,
        name: '왁자지껄포차',
        image: '🍻',
        rating: 4.8,
        description: '시끌벅적 떠들기 좋은 분위기',
        tags: ['포차', '안주풍성', '시끄러워도OK']
      },
      {
        id: 5,
        name: '치맥스토리',
        image: '🍗',
        rating: 4.6,
        description: '치킨과 맥주, 그리고 수다',
        tags: ['치킨', '맥주맛집', '단체석']
      },
      {
        id: 6,
        name: '삼겹살파티',
        image: '🥓',
        rating: 4.7,
        description: '친구들과 고기 파티하기 좋아요',
        tags: ['고기맛집', '소주안주', '왁자지껄']
      }
    ],
    couple: [
      {
        id: 7,
        name: '로맨틱 파스타하우스',
        image: '🍝',
        rating: 4.8,
        description: '조용한 분위기와 감성적인 플레이팅',
        tags: ['데이트', '조용함', '분위기']
      },
      {
        id: 8,
        name: '달빛정식당',
        image: '🌙',
        rating: 4.6,
        description: '야경 좋은 한식집',
        tags: ['야경맛집', '한식', '프라이빗']
      },
      {
        id: 9,
        name: '카페블룸',
        image: '☕',
        rating: 4.7,
        description: '디저트로 마무리하기 좋아요',
        tags: ['디저트', '커피', '분위기좋음']
      }
    ],
    alone: [
      {
        id: 10,
        name: '혼밥천국',
        image: '🍚',
        rating: 4.5,
        description: '1인석이 편안한 곳',
        tags: ['1인석', '빠른식사', '혼밥']
      },
      {
        id: 11,
        name: '솔로바',
        image: '🍷',
        rating: 4.7,
        description: '혼자 와도 편한 분위기',
        tags: ['바', '혼술', '조용함']
      },
      {
        id: 12,
        name: '나홀로라면',
        image: '🍜',
        rating: 4.4,
        description: '든든한 한 끼 해결',
        tags: ['라면', '간단식사', '혼밥OK']
      }
    ],
    work: [
      {
        id: 13,
        name: '회식전문점',
        image: '🍖',
        rating: 4.6,
        description: '단체 예약 가능한 넓은 홀',
        tags: ['단체석', '주차가능', '회식']
      },
      {
        id: 14,
        name: '갈비명가',
        image: '🥩',
        rating: 4.8,
        description: '품격있는 회식 장소',
        tags: ['고급', '접대', '룸있음']
      },
      {
        id: 15,
        name: '소주한잔',
        image: '🍶',
        rating: 4.5,
        description: '부담없는 가격, 푸짐한 안주',
        tags: ['가성비', '안주풍성', '회식추천']
      }
    ]
  };

  // 상황 선택
  const handleSituationSelect = (situationId) => {
    setSelectedSituation(situationId);
    setRecommendations(mockRecommendations[situationId]);
    setRecommendationCount(1);
  };

  // 재추천
  const handleReRecommend = () => {
    if (!selectedSituation) return;

    // 같은 데이터를 섞어서 보여주기 (실제로는 새로운 추천)
    const current = [...mockRecommendations[selectedSituation]];
    const shuffled = current.sort(() => Math.random() - 0.5);
    setRecommendations(shuffled);
    setRecommendationCount(prev => prev + 1);
  };

  // 식당 상세 이동
  const handleRestaurantClick = (restaurant) => {
    console.log('식당 상세:', restaurant.name);
    // 추후 식당 상세 페이지 구현
    alert(`${restaurant.name} 상세 페이지는 준비중입니다.`);
  };

  // 선택된 상황 정보 가져오기
  const getSelectedSituationInfo = () => {
    return situations.find(s => s.id === selectedSituation);
  };

  return (
    <div className="who-with">
      {/* 상단바 */}
      <header className="who-with-header">
        <button
          className="back-button"
          onClick={() => navigate('/customer/dashboard')}
          aria-label="대시보드로 돌아가기"
        >
          ← 뒤로가기
        </button>
        <h1 className="who-with-title">🤝 누구랑 갈까?</h1>
        <div className="header-spacer"></div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="who-with-main">
        <div className="who-with-container">
          {/* 안내 문구 */}
          <div className="guide-section">
            <h2 className="guide-title">오늘의 동반자에게<br />어울리는 식당을 찾아드릴게요</h2>
            <p className="guide-subtitle">
              상황을 선택하면 어울리는 맛집을 추천해드릴게요.
            </p>
          </div>

          {/* 상황 선택 카드 */}
          <div className="situations-grid">
            {situations.map((situation) => (
              <button
                key={situation.id}
                className={`situation-card ${selectedSituation === situation.id ? 'active' : ''}`}
                onClick={() => handleSituationSelect(situation.id)}
                aria-label={`${situation.name} 선택`}
              >
                <span className="situation-icon">{situation.icon}</span>
                <div className="situation-content">
                  <h3 className="situation-name">{situation.name}</h3>
                  <p className="situation-description">{situation.description}</p>
                  <span className="situation-subtitle">{situation.subtitle}</span>
                </div>
              </button>
            ))}
          </div>

          {/* 추천 결과 */}
          {recommendations.length > 0 && (
            <div className="recommendations-section">
              {/* 추천 헤더 */}
              <div className="recommendations-header">
                <div className="header-content">
                  <h2 className="recommendations-title">
                    {getSelectedSituationInfo()?.icon} 이 상황엔 이런 곳 어때요?
                  </h2>
                  <p className="recommendations-subtitle">
                    {getSelectedSituationInfo()?.name}에 어울리는 맛집을 찾았어요
                  </p>
                </div>
                <button
                  className="re-recommend-btn"
                  onClick={handleReRecommend}
                  aria-label="다시 추천받기"
                >
                  🔁 다시 추천
                </button>
              </div>

              {/* 추천 카운트 */}
              <div className="recommendation-count">
                {recommendationCount}번째 추천
              </div>

              {/* 식당 카드 리스트 */}
              <div className="restaurants-grid">
                {recommendations.map((restaurant) => (
                  <div
                    key={restaurant.id}
                    className="restaurant-card"
                    onClick={() => handleRestaurantClick(restaurant)}
                  >
                    <div className="restaurant-image">
                      <span className="restaurant-emoji">{restaurant.image}</span>
                      <div className="restaurant-rating">
                        <span className="rating-star">⭐</span>
                        <span className="rating-value">{restaurant.rating}</span>
                      </div>
                    </div>

                    <div className="restaurant-info">
                      <h3 className="restaurant-name">{restaurant.name}</h3>
                      <p className="restaurant-description">{restaurant.description}</p>

                      <div className="restaurant-tags">
                        {restaurant.tags.map((tag, index) => (
                          <span key={index} className="tag">#{tag}</span>
                        ))}
                      </div>

                      <button className="restaurant-detail-btn">
                        자세히 보기 →
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* 하단 안내 */}
              <div className="recommendation-footer">
                <p className="footer-text">
                  추천이 마음에 안 드나요?
                </p>
                <button
                  className="footer-re-recommend-btn"
                  onClick={handleReRecommend}
                >
                  🔁 다시 추천받기
                </button>
              </div>
            </div>
          )}

          {/* 선택 안내 (결과 없을 때) */}
          {!selectedSituation && (
            <div className="empty-state">
              <span className="empty-icon">🍽️</span>
              <p className="empty-text">위에서 상황을 선택해주세요</p>
              <p className="empty-subtext">오늘 누구와 함께 식사하시나요?</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default WhoWith;
