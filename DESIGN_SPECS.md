# 올사람 디자인 스펙 문서

## 🎨 컬러 시스템

### Primary Colors
- **주황색 (Primary)**: `#FF6B35`
- **밝은 주황색**: `#FF8C61`
- **연한 주황색**: `#FFA07A`

### Secondary Colors
- **청록색**: `#4ECDC4`
- **노란색**: `#FFD93D`
- **보라색**: `#A28EED`
- **초록색**: `#6BCF7F`

### Neutral Colors
- **배경**: `#F8F9FA`
- **흰색**: `#FFFFFF`
- **다크 그레이**: `#3D4148`
- **진한 텍스트**: `#2D3436`
- **중간 텍스트**: `#636E72`
- **연한 텍스트**: `#95A5A6`
- **테두리**: `#E9ECEF`

## 📐 타이포그래피

### Font Family
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
             'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif;
```

### Font Sizes
- **대제목**: 32px (weight: 700)
- **중제목**: 28px (weight: 700)
- **소제목**: 24px (weight: 700)
- **섹션 제목**: 20px (weight: 700)
- **본문**: 16px (weight: 400)
- **작은 텍스트**: 14px (weight: 500)
- **캡션**: 12px (weight: 600)

## 🔘 컴포넌트

### 버튼
```css
/* Primary Button */
background: linear-gradient(135deg, #FF6B35 0%, #FF8C61 100%);
border-radius: 16px;
padding: 18px 32px;
font-size: 18px;
font-weight: 600;
color: white;
box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
```

```css
/* 위치 버튼 (다크 캡슐) */
background: #3D4148;
color: white;
border-radius: 24px;
padding: 8px 16px;
font-size: 14px;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
```

### 카드
```css
background: white;
border-radius: 20px;
padding: 28px;
box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
min-height: 220px;
```

### 입력창
```css
height: 60px;
padding: 0 24px;
border: 2px solid #E9ECEF;
border-radius: 16px;
background: #F8F9FA;
```

## 📱 레이아웃

### 상단바 (Header)
- **높이**: 64px (모바일: 56px)
- **배경**: white
- **그림자**: `0 2px 8px rgba(0, 0, 0, 0.06)`

### 하단 탭바 (Bottom Tab Bar)
- **높이**: 70px
- **배경**: white
- **그림자**: `0 -2px 12px rgba(0, 0, 0, 0.08)`

### 그리드
- **데스크톱**: 3열 (repeat(3, 1fr))
- **태블릿**: 2열 (repeat(2, 1fr))
- **모바일**: 1열
- **간격**: 24px

### 여백
- **큰 여백**: 48px
- **중간 여백**: 32px
- **작은 여백**: 16px

## 🎭 애니메이션

### Fade In Down
```css
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
animation: fadeInDown 0.6s ease-out;
```

### Fade In Up
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
animation: fadeInUp 0.8s ease-out;
```

### Hover Effects
- **카드**: `transform: translateY(-6px)`
- **버튼**: `transform: translateY(-2px)`
- **지속 시간**: `0.3s ease`

## 📄 페이지 구성

### 1. 메인 페이지 (/)
- 로고: "올사람" + "ALL:SARAM"
- 메인 타이틀: "뭐 먹을까? 고민 끝!"
- 서브 타이틀: "예약부터 메뉴선택까지 빠르고 확실하게"
- 시작하기 버튼
- 특징 아이콘 3개

### 2. 회원가입 선택 페이지 (/signup)
- 2개 카드 (사장님 / 고객)
- 각 카드: 아이콘 80px, 타이틀 36px
- 특징 리스트 3개

### 3. 사장님 대시보드 (/owner/dashboard)
- 상단바: 로고 (클릭 시 메인)
- 인사말 섹션
- 6개 카드 (3x2 그리드)
  1. 오늘 예약 (📅)
  2. 메뉴 관리 (🍽️)
  3. 새 리뷰 (⭐)
  4. 오늘 매출 (💰)
  5. 상점 관리 (🏪)
  6. 설정 (⚙️)

### 4. 고객 대시보드 (/customer/dashboard)
- 상단바: 로고, 위치(다크 캡슐), 프로필
- 인사말 섹션
- 6개 카드 (3x2 그리드)
  1. 검색 예약 (🔍)
  2. 음성 예약 (🎤)
  3. 오늘의 특가 (🔥)
  4. 누구랑 갈까? (👥)
  5. 내 주변 맛집 (📍)
  6. 내 예약 (📅)
- 하단 탭바 (5개 탭)

## 📊 반응형 브레이크포인트

- **데스크톱**: 1200px 이상
- **태블릿**: 768px ~ 1199px
- **모바일**: 767px 이하
- **작은 모바일**: 480px 이하

## 🎯 사용자 경험 (UX)

### 인터랙션
- 모든 클릭 가능한 요소에 `cursor: pointer`
- 호버 시 시각적 피드백 (색상/위치 변화)
- 부드러운 전환 효과 (0.3s ease)

### 접근성
- 충분한 색상 대비
- 터치 타겟 최소 44px
- 명확한 아이콘과 라벨

### 성능
- 애니메이션 지속시간: 0.3s ~ 0.8s
- 그림자 최소화
- 최적화된 이미지 사용
