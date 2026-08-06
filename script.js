import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.112.1/+esm';

const SUPABASE_URL = 'https://gfmthahpoclieanvushr.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_zxmHOKWrv5-cCLiz8GMRmg_Kas4bBVC';
const GUESTBOOK_TABLE = 'guestbook';
const MESSAGE_TABLE = 'message';
const MAX_MESSAGES = 50;

const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const regions = [
  {
    id: 'haeundae',
    name: '해운대',
    summary: '바다와 함께 즐기는 부산 맛집',
    banner: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
    imageSource: 'Unsplash / Unsplash License',
    restaurants: [
      {
        name: '스탠다드브레드 해운대',
        menu: '브레드 / 베이커리류',
        address: '부산광역시 해운대구 해운대로 571',
        attractions: ['해운대 해수욕장', '동백섬', '더베이101'],
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: '건아로스트 (Gunamroast)',
        menu: '한국식 숯불구이 / 고기류',
        address: '부산광역시 해운대구 우동 일대',
        attractions: ['해운대 해수욕장', '해운대시장'],
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: '쇼미더고기 해운대',
        menu: '한국식 고기구이',
        address: '부산광역시 해운대구 중동1로17번길 11',
        attractions: ['해운대 해수욕장', '해운대시장'],
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Mipo-jib Haeundae Head Store',
        menu: '해산물 요리',
        address: '부산광역시 해운대구 달맞이길62번길 3',
        attractions: ['해운대 블루라인파크', '미포철길'],
        rating: 4.6,
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: '해운대 바다김밥',
        menu: '김밥 / 분식',
        address: '부산광역시 해운대구 중동1로 33-1',
        attractions: ['해운대 해수욕장', '해운대시장'],
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: '해운대 해물탕',
        menu: '해산물탕 / 전골',
        address: '부산광역시 해운대구 해운대해변로 214',
        attractions: ['해운대 해수욕장', '동백섬'],
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80'
      }
    ]
  },
  {
    id: 'gwangalli',
    name: '광안리',
    summary: '맛있는 음식과 부산의 밤',
    banner: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&h=600&q=80',
    imageSource: 'Unsplash / Unsplash License',
    restaurants: [
      {
        name: '석화연',
        menu: '한국식 고기구이',
        address: '부산광역시 수영구 광안해변로 199, 201호',
        attractions: ['광안리 해수욕장', '광안대교', '민락수변공원'],
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: '광안목',
        menu: '고기 요리',
        address: '부산광역시 수영구 광남로 156, 1층',
        attractions: ['광안리 해수욕장', '광안대교'],
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Pendejo',
        menu: '멕시칸 요리',
        address: '부산광역시 수영구 수영로582번길 36',
        attractions: ['광안리 해수욕장', '광안대교'],
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Bronx Brewing Co.',
        menu: '펍 / 서양식 음식',
        address: '부산광역시 수영구 광안해변로 217, 1층',
        attractions: ['광안리 해수욕장', '광안대교'],
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Gwangan Dazzi',
        menu: '해산물',
        address: '부산광역시 수영구 광안해변로344번길 17-20',
        attractions: ['광안리 해수욕장', '광안대교', '민락수변공원'],
        rating: 4.6,
        image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: '광안리 스시야',
        menu: '초밥 / 일식',
        address: '부산광역시 수영구 광안해변로 202',
        attractions: ['광안리 해수욕장', '광안대교'],
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=80'
      }
    ]
  },
  {
    id: 'seomyeon',
    name: '서면',
    summary: '부산의 중심에서 찾는 맛집',
    banner: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80',
    imageSource: 'Unsplash / Unsplash License',
    restaurants: [
      {
        name: 'Gojip Seomyeon Head Store',
        menu: '한국식 고기구이',
        address: '부산광역시 부산진구 부전로 64',
        attractions: ['서면 젊음의거리', '전포카페거리', '부전시장'],
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: '서면곱',
        menu: '곱창구이',
        address: '부산광역시 부산진구 가야대로784번길 7, 1층',
        attractions: ['서면 젊음의거리', '롯데백화점 부산본점'],
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: '신촌양푼이 서면',
        menu: '갈비 요리',
        address: '부산광역시 부산진구 서전로10번길 27-2',
        attractions: ['서면 젊음의거리', '전포카페거리'],
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Sulyamyeok Seomyeon',
        menu: '한국식 고기구이',
        address: '부산광역시 부산진구 서전로 25, 1층',
        attractions: ['전포카페거리', '서면 젊음의거리'],
        rating: 5.0,
        image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: '서면 바다회집',
        menu: '해산물 / 회',
        address: '부산광역시 부산진구 서전로 42, 2층',
        attractions: ['서면 젊음의거리', '전포카페거리'],
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: '서면 육개장',
        menu: '육개장 / 전골',
        address: '부산광역시 부산진구 서전로 10, 3층',
        attractions: ['서면 젊음의거리', '부전시장'],
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80'
      }
    ]
  },
  {
    id: 'jeonpo',
    name: '전포',
    summary: '맛집과 카페가 가득한 골목',
    banner: 'https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?auto=format&fit=crop&w=900&q=80',
    imageSource: 'Unsplash / Unsplash License',
    restaurants: [
      {
        name: '돈희극 부산 서면점',
        menu: '한국식 요리',
        address: '부산광역시 부산진구 전포제2동 일대',
        attractions: ['전포카페거리', '서면 젊음의거리'],
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'TAE TAE TAE',
        menu: '레스토랑 요리',
        address: '부산광역시 부산진구 서전로10번길 22-9',
        attractions: ['전포카페거리', '전포동 골목'],
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Gohasun',
        menu: '한국식 고기구이',
        address: '부산광역시 부산진구 서전로 38, 2층',
        attractions: ['전포카페거리', '서면 젊음의거리'],
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: '전포 브런치 바',
        menu: '브런치 / 카페',
        address: '부산광역시 부산진구 전포동 1-12',
        attractions: ['전포카페거리', '전포동 골목'],
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: '전포 바다집',
        menu: '해산물 / 요리',
        address: '부산광역시 부산진구 전포동 7-6',
        attractions: ['전포카페거리', '서면 젊음의거리'],
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: '전포 이탈리안',
        menu: '파스타 / 서양식',
        address: '부산광역시 부산진구 전포동 8-3',
        attractions: ['전포카페거리', '전포동 골목'],
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80'
      }
    ]
  }
];

const regionGrid = document.querySelector('#regionGrid');
const regionDetails = document.querySelector('#regionDetails');
const themeToggle = document.querySelector('#themeToggle');
const contactForm = document.querySelector('#contactForm');
const guestbookStatus = document.querySelector('#guestbookStatus');
const guestbookList = document.querySelector('#guestbookList');
const chatForm = document.querySelector('#chatForm');
const chatStatus = document.querySelector('#chatStatus');
const chatList = document.querySelector('#chatList');

const sunIcon = `
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="4.2" stroke="currentColor" stroke-width="1.8"/>
    <path d="M12 2.5v2.4M12 19.1v2.4M21.5 12h-2.4M4.9 12H2.5M18.7 5.3l-1.7 1.7M7 17l-1.7 1.7M18.7 18.7l-1.7-1.7M7 7 5.3 5.3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
  </svg>
`;

const moonIcon = `
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M20 15.2A8.7 8.7 0 1 1 8.8 4a7 7 0 0 0 11.2 11.2Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

function applyTheme(theme) {
  document.body.dataset.theme = theme;
  localStorage.setItem('landing-theme', theme);

  const themeIcon = themeToggle.querySelector('.theme-icon');
  themeIcon.innerHTML = theme === 'dark' ? moonIcon : sunIcon;
  themeToggle.setAttribute('aria-label', theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환');
}

function initTheme() {
  const savedTheme = localStorage.getItem('landing-theme') || 'light';
  applyTheme(savedTheme);
}

function renderRegionCards() {
  regionGrid.innerHTML = regions.map(region => `
    <button class="region-card" data-region="${region.id}">
      <div class="region-thumb">
        <img src="${region.banner}" alt="${region.name} 대표 이미지" />
      </div>
      <h3>${region.name}</h3>
      <p>${region.summary}</p>
    </button>
  `).join('');

  document.querySelectorAll('.region-card').forEach(button => {
    button.addEventListener('click', () => {
      const target = document.getElementById(button.dataset.region);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function renderRegionPanels() {
  regionDetails.innerHTML = regions.map(region => `
    <section id="${region.id}" class="container region-panel">
      <div class="region-panel-header">
        <div>
          <h3>${region.name}</h3>
          <p>${region.summary}</p>
        </div>
        <div class="region-banner">
          <img src="${region.banner}" alt="${region.name} 지역 이미지" />
        </div>
      </div>
      <div class="restaurant-grid">
        ${region.restaurants.map(restaurant => `
          <article class="restaurant-card">
            <img src="${restaurant.image}" alt="${restaurant.name} 대표 이미지" />
            <div>
              <span class="rating-badge">평점 ${restaurant.rating}</span>
              <h4>${restaurant.name}</h4>
              <ul class="meta-list">
                <li><strong>대표 메뉴:</strong> ${restaurant.menu}</li>
                <li><strong>주소:</strong> ${restaurant.address}</li>
                <li><strong>주변 관광지:</strong> ${restaurant.attractions.join(', ')}</li>
              </ul>
              <div class="restaurant-actions">
                <button type="button" data-copy="${restaurant.address}">주소 복사</button>
                <button type="button" data-naver="${restaurant.address}">네이버지도</button>
              </div>
            </div>
          </article>
        `).join('')}
      </div>
    </section>
  `).join('');

  document.querySelectorAll('[data-copy]').forEach(button => {
    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(button.dataset.copy);
        alert('주소가 복사되었습니다.');
      } catch (error) {
        alert('주소 복사에 실패했습니다.');
      }
    });
  });

  document.querySelectorAll('[data-naver]').forEach(button => {
    button.addEventListener('click', () => {
      const query = encodeURIComponent(button.dataset.naver);
      window.open(`https://map.naver.com/v5/search/${query}`, '_blank', 'noopener');
    });
  });
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function setGuestbookStatus(message) {
  if (!guestbookStatus) return;
  guestbookStatus.textContent = message;
}

function setChatStatus(message) {
  if (chatStatus) chatStatus.textContent = message;
}

function formatDate(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? '' : date.toLocaleString('ko-KR');
}

function renderChatList(messages) {
  if (!chatList) return;
  if (!messages.length) {
    chatList.innerHTML = '<div class="chat-item"><p>아직 대화가 없습니다. 첫 메시지를 남겨 보세요.</p></div>';
    return;
  }

  chatList.innerHTML = messages.map(message => `
    <article class="chat-item">
      <header>
        <h3>${escapeHtml(message.nickname)}</h3>
        <span class="chat-time">${formatDate(message.created_at)}</span>
      </header>
      <p>${escapeHtml(message.message)}</p>
    </article>
  `).join('');
  chatList.scrollTop = chatList.scrollHeight;
}

async function loadChat() {
  if (!supabaseClient || !chatList) {
    setChatStatus('Supabase SDK 또는 연결 정보를 확인해 주세요.');
    return;
  }

  const { data, error } = await supabaseClient
    .from(MESSAGE_TABLE)
    .select('id, nickname, message, created_at')
    .order('created_at', { ascending: false })
    .limit(MAX_MESSAGES);

  if (error) {
    setChatStatus('채팅을 불러오지 못했습니다. message 테이블과 RLS SELECT 정책을 확인해 주세요.');
    console.error(error);
    return;
  }

  renderChatList((data || []).reverse());
  setChatStatus('실시간 채팅방에 연결되었습니다.');
}

async function submitChatMessage(nickname, message) {
  if (!supabaseClient) {
    setChatStatus('Supabase SDK 또는 연결 정보를 확인해 주세요.');
    return;
  }
  const submitButton = chatForm?.querySelector('.submit-button');
  if (submitButton) submitButton.disabled = true;

  const { error } = await supabaseClient.from(MESSAGE_TABLE).insert([{ nickname, message }]);
  if (submitButton) submitButton.disabled = false;

  if (error) {
    setChatStatus('메시지 전송에 실패했습니다. RLS INSERT 정책을 확인해 주세요.');
    console.error(error);
    return;
  }

  chatForm?.reset();
}

function subscribeToChat() {
  if (!supabaseClient || !chatList) return;

  supabaseClient
    .channel('public:message')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: MESSAGE_TABLE }, payload => {
      const emptyMessage = chatList.querySelector('.chat-item p')?.textContent?.startsWith('아직 대화가 없습니다');
      if (emptyMessage) chatList.innerHTML = '';
      chatList.insertAdjacentHTML('beforeend', `
        <article class="chat-item">
          <header>
            <h3>${escapeHtml(payload.new.nickname)}</h3>
            <span class="chat-time">${formatDate(payload.new.created_at)}</span>
          </header>
          <p>${escapeHtml(payload.new.message)}</p>
        </article>
      `);
      chatList.scrollTop = chatList.scrollHeight;
    })
    .subscribe(status => {
      if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT') {
        setChatStatus('실시간 연결에 실패했습니다. Supabase Realtime에서 message 테이블을 활성화해 주세요.');
      }
    });
}

function subscribeToGuestbook() {
  if (!supabaseClient || !guestbookList) return;
  supabaseClient
    .channel('public:guestbook')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: GUESTBOOK_TABLE }, () => loadGuestbook())
    .subscribe();
}

function renderGuestbookList(messages) {
  if (!guestbookList) return;

  if (!messages.length) {
    guestbookList.innerHTML = '<div class="guestbook-item"><p>아직 등록된 방명록이 없습니다.</p></div>';
    return;
  }

  guestbookList.innerHTML = messages.map(message => `
    <article class="guestbook-item">
      <header>
        <h3>${escapeHtml(message.nickname)}</h3>
        <span class="guestbook-time">${formatDate(message.created_at)}</span>
      </header>
      <p>${escapeHtml(message.message)}</p>
    </article>
  `).join('');
}

async function loadGuestbook() {
  if (!supabaseClient || !guestbookList) {
    setGuestbookStatus('Supabase SDK 또는 연결 정보를 확인해 주세요.');
    return;
  }

  setGuestbookStatus('방명록을 불러오는 중입니다...');

  const { data, error } = await supabaseClient
    .from(GUESTBOOK_TABLE)
    .select('id, nickname, message, created_at')
    .order('created_at', { ascending: false })
    .limit(50);

  if (error) {
    setGuestbookStatus('방명록 목록을 불러오지 못했습니다. 테이블과 RLS 정책을 확인하세요.');
    console.error(error);
    return;
  }

  renderGuestbookList(data || []);
  setGuestbookStatus(`최근 ${data?.length || 0}개의 메시지를 불러왔습니다.`);
}

async function submitGuestbookEntry(nickname, message) {
  if (!supabaseClient) {
    setGuestbookStatus('Supabase SDK 또는 연결 정보를 확인해 주세요.');
    return;
  }

  const submitButton = contactForm?.querySelector('.submit-button');
  if (submitButton) submitButton.disabled = true;

  const { error } = await supabaseClient.from(GUESTBOOK_TABLE).insert([
    { nickname, message }
  ]);

  if (submitButton) submitButton.disabled = false;

  if (error) {
    setGuestbookStatus('메시지 저장에 실패했습니다. 테이블과 RLS 정책을 다시 확인하세요.');
    console.error(error);
    return;
  }

  setGuestbookStatus('메시지가 저장되었습니다. 최신 목록을 다시 불러왔습니다.');
  contactForm?.reset();
  await loadGuestbook();
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const nextTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  });
}

if (contactForm) {
  let isFormDirty = false;

  contactForm.addEventListener('input', () => {
    isFormDirty = true;
  });

  contactForm.addEventListener('submit', async event => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const nickname = String(formData.get('nickname') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (!nickname || !message) {
      setGuestbookStatus('닉네임과 메시지를 모두 입력해 주세요.');
      return;
    }

    await submitGuestbookEntry(nickname, message);
    isFormDirty = false;
  });

  window.addEventListener('beforeunload', event => {
    if (!isFormDirty) return;
    event.preventDefault();
    event.returnValue = '';
  });
}

if (chatForm) {
  chatForm.addEventListener('submit', async event => {
    event.preventDefault();
    const formData = new FormData(chatForm);
    const nickname = String(formData.get('nickname') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (!nickname || !message) {
      setChatStatus('닉네임과 메시지를 모두 입력해 주세요.');
      return;
    }
    await submitChatMessage(nickname, message);
  });
}

initTheme();
renderRegionCards();
renderRegionPanels();
loadGuestbook();
subscribeToGuestbook();
loadChat();
subscribeToChat();
