
// ─── STATIC DATA ─────────────────────────────────────────────────────────────
const DRIVERS = [
  { id:  1, name: 'M. Verstappen',  team: 'Red Bull',      price: 27.7, color: '#3671C6' },
  { id:  2, name: 'I. Hadjar',      team: 'Red Bull',      price: 15.1, color: '#3671C6' },
  { id:  3, name: 'L. Hamilton',    team: 'Ferrari',       price: 22.5, color: '#E8002D' },
  { id:  4, name: 'C. Leclerc',     team: 'Ferrari',       price: 22.8, color: '#E8002D' },
  { id:  5, name: 'L. Norris',      team: 'McLaren',       price: 27.2, color: '#FF8000' },
  { id:  6, name: 'O. Piastri',     team: 'McLaren',       price: 25.5, color: '#FF8000' },
  { id:  7, name: 'F. Alonso',      team: 'Aston Martin',  price: 10.0, color: '#229971' },
  { id:  8, name: 'L. Stroll',      team: 'Aston Martin',  price:  8.0, color: '#229971' },
  { id:  9, name: 'G. Russell',     team: 'Mercedes',      price: 27.4, color: '#27F4D2' },
  { id: 10, name: 'A. Antonelli',   team: 'Mercedes',      price: 23.2, color: '#27F4D2' },
  { id: 11, name: 'C. Sainz',       team: 'Williams',      price: 11.8, color: '#64C4FF' },
  { id: 12, name: 'A. Albon',       team: 'Williams',      price: 11.6, color: '#64C4FF' },
  { id: 13, name: 'N. Hülkenberg',  team: 'Audi',          price:  6.8, color: '#52E252' },
  { id: 14, name: 'G. Bortoleto',   team: 'Audi',          price:  6.4, color: '#52E252' },
  { id: 15, name: 'E. Ocon',        team: 'Haas',          price:  7.3, color: '#B6BABD' },
  { id: 16, name: 'O. Bearman',     team: 'Haas',          price:  7.4, color: '#B6BABD' },
  { id: 17, name: 'P. Gasly',       team: 'Alpine',        price: 12.0, color: '#cc00a7' },
  { id: 18, name: 'F. Colapinto',   team: 'Alpine',        price:  6.2, color: '#cc00a7' },
  { id: 19, name: 'A. Lindblad',    team: 'Racing Bulls',  price:  6.2, color: '#6692FF' },
  { id: 20, name: 'L. Lawson',      team: 'Racing Bulls',  price:  6.5, color: '#6692FF' },
  { id: 21, name: 'S. Perez',       team: 'Cadillac',      price:  6.0, color: '#66686e' },
  { id: 22, name: 'V. Bottas',      team: 'Cadillac',      price:  5.9, color: '#66686e' },
];

const CONSTRUCTORS = [
  { id: 101, name: 'Red Bull',      price: 28.2, color: '#3671C6' },
  { id: 102, name: 'Ferrari',       price: 23.3, color: '#E8002D' },
  { id: 103, name: 'McLaren',       price: 28.9, color: '#FF8000' },
  { id: 104, name: 'Aston Martin',  price: 10.3, color: '#229971' },
  { id: 105, name: 'Mercedes',      price: 29.3, color: '#27F4D2' },
  { id: 106, name: 'Williams',      price: 12.0, color: '#64C4FF' },
  { id: 107, name: 'Audi',          price:  6.6, color: '#52E252' },
  { id: 108, name: 'Haas',          price:  7.4, color: '#B6BABD' },
  { id: 109, name: 'Alpine',        price: 12.5, color: '#0093CC' },
  { id: 110, name: 'Racing Bulls',  price:  6.3, color: '#6692FF' },
  { id: 111, name: 'Cadillac',      price:  6.0, color: '#6692FF' },
];

// Full 2025 F1 calendar
const CALENDAR = [
  { round:  1, name: 'Australian GP',      circuit: 'Albert Park',     date: 'Mar 8'  },
  { round:  2, name: 'Chinese GP',         circuit: 'Shanghai',        date: 'Mar 15' },
  { round:  3, name: 'Japanese GP',        circuit: 'Suzuka Circuit',  date: 'Mar 29' },
  { round:  4, name: 'Bahrain GP',         circuit: 'Bahrain International Circuit',    date: 'Apr 12' },
  { round:  5, name: 'Saudi Arabian GP',   circuit: 'Jeddah Corniche Circuit',          date: 'Apr 19' },
  { round:  6, name: 'Miami GP',           circuit: 'Miami International Autodrome',    date: 'May 3'  },
  { round:  7, name: 'Canadian GP',        circuit: 'Circuit Gilles Villeneuve',        date: 'May 24' },
  { round:  8, name: 'Monaco GP',          circuit: 'Circuit de Monaco',                date: 'Jun 7'  },
  { round:  9, name: 'Spanish GP',         circuit: 'Circuit de Barcelona-Catalunya',   date: 'Jun 14' },
  { round: 10, name: 'Austrian GP',        circuit: 'Red Bull Ring',                    date: 'Jun 28' },
  { round: 11, name: 'British GP',         circuit: 'Silverstone Circuit',              date: 'Jul 5' },
  { round: 12, name: 'Belgian GP',         circuit: 'Spa',             date: 'Jul 19'  },
  { round: 13, name: 'Hungarian GP',       circuit: 'Hungaroring',     date: 'Jul 26' },
  { round: 14, name: 'Dutch GP',           circuit: 'Zanvoort Circuit',                 date: 'Aug 23'  },
  { round: 15, name: 'Italian GP',         circuit: 'Monza',           date: 'Sep 6' },
  { round: 16, name: 'Spanish GP',         circuit: 'Madring',         date: 'Sep 13'  },
  { round: 17, name: 'Azerbaijan GP',      circuit: 'Baku',            date: 'Sep 26' },
  { round: 18, name: 'Singapore GP',       circuit: 'Marina Bay Circuit',               date: 'Oct 11'  },
  { round: 19, name: 'United States GP',   circuit: 'Austin',          date: 'Oct 25' },
  { round: 20, name: 'Mexico City GP',     circuit: 'Mexico City',     date: 'Nov 1' },
  { round: 21, name: 'São Paulo GP',       circuit: 'São Paulo',       date: 'Nov 8'  },
  { round: 22, name: 'Las Vegas GP',       circuit: 'Las Vegas',       date: 'Nov 22' },
  { round: 23, name: 'Qatar GP',           circuit: 'Losail',          date: 'Nov 29' },
  { round: 24, name: 'Abu Dhabi GP',       circuit: 'Yas Marina',      date: 'Dec 6'  },
];

// ─── FRESH TEAM FACTORY ───────────────────────────────────────────────────────
function newTeam(name) {
  return {
    id: 'team_' + Date.now(),
    name: name || 'Team 1',
    drivers: [null, null, null, null, null],
    constructors: [null, null],
    captain: 0,
    drs: -1,
    races: {},
    transfers: [],
    transferLog: [],
    strategy: {},
    chips: {}
  };
}

// ─── STATE ────────────────────────────────────────────────────────────────────
let state = {
  teams: [newTeam('Team 1')],
  activeTeamIdx: 0,
  watchlist: [],
  notes: ''
};

// ─── PERSISTENCE ──────────────────────────────────────────────────────────────
function loadState() {
  try {
    const s = localStorage.getItem('f1fhq_v3');
    if (s) state = JSON.parse(s);
    state.teams.forEach(t => {
      if (!t.drivers || t.drivers.length !== 5)       t.drivers = [null,null,null,null,null];
      if (!t.constructors || t.constructors.length !== 2) t.constructors = [null,null];
      if (t.drs === undefined) t.drs = -1;
      if (!t.races || Array.isArray(t.races)) t.races = {};
      if (!t.transfers || Array.isArray(t.transfers)) t.transfers = {};
      if (!t.transferLog) t.transferLog = [];
      if (!t.strategy) t.strategy = {};
      if (!t.chips) t.chips = {};
    });
  } catch(e) { console.warn('State load failed', e); }
}
function saveState() {
  try { localStorage.setItem('f1fhq_v3', JSON.stringify(state)); } catch(e) {}
}
loadState();

function activeTeam() { return state.teams[state.activeTeamIdx]; }

// ─── PAGE NAV ─────────────────────────────────────────────────────────────────
function showPage(name, btn) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  btn.classList.add('active');
  if (name === 'results')   initResultsPage();
  if (name === 'standings') { renderStandingsTeamSelect(); renderStandings(); }
  if (name === 'strategy')  initStrategyPage();
}

// ─── TEAM TABS ────────────────────────────────────────────────────────────────
function renderTeamTabs() {
  const container = document.getElementById('team-tabs');
  container.innerHTML = '';
  state.teams.forEach((t, i) => {
    const btn = document.createElement('button');
    btn.className = 'team-tab' + (i === state.activeTeamIdx ? ' active' : '');
    btn.textContent = t.name;
    btn.onclick = () => switchTeam(i);
    container.appendChild(btn);
  });
}
function switchTeam(idx) {
  state.activeTeamIdx = idx;
  renderTeamTabs();
  renderTeamPage();
}

// ─── CREATE / DELETE TEAM ─────────────────────────────────────────────────────
function createTeam() {
  document.getElementById('new-team-name').value = '';
  document.getElementById('new-team-modal').classList.add('open');
}
function closeNewTeamModal() { document.getElementById('new-team-modal').classList.remove('open'); }
function confirmCreateTeam() {
  const name = document.getElementById('new-team-name').value.trim() || ('Team ' + (state.teams.length + 1));
  state.teams.push(newTeam(name));
  state.activeTeamIdx = state.teams.length - 1;
  saveState();
  closeNewTeamModal();
  renderTeamTabs();
  renderTeamPage();
}
function deleteCurrentTeam() {
  if (state.teams.length === 1) { alert('You need at least one team!'); return; }
  if (!confirm(`Delete "${activeTeam().name}"?`)) return;
  state.teams.splice(state.activeTeamIdx, 1);
  state.activeTeamIdx = Math.min(state.activeTeamIdx, state.teams.length - 1);
  saveState();
  renderTeamTabs();
  renderTeamPage();
}

// ─── RENDER TEAM PAGE ─────────────────────────────────────────────────────────
function renderTeamPage() {
  renderTeamTabs();
  renderDriverSlots();
  renderConstructorSlots();
  updateBudget();
  renderTransferPlanner();
}

function renderDriverSlots() {
  const t = activeTeam();
  const container = document.getElementById('driver-slots');
  container.innerHTML = '';
  for (let i = 0; i < 5; i++) {
    const d = t.drivers[i];
    const slot = document.createElement('div');
    slot.className = 'team-slot' + (d ? ' filled' : '');
    if (d) {
      const isCap = i === t.captain;
      slot.innerHTML = `
        ${isCap ? '<div class="slot-captain-badge">✕2</div>' : ''}
        <button class="slot-remove" onclick="removeDriver(${i})">✕</button>
        <div class="slot-team-color" style="background:${d.color}"></div>
        <div class="slot-role">Driver ${i+1}</div>
        <div class="slot-name">${d.name}</div>
        <div class="slot-price">$${d.price}M</div>
        <div class="flex gap-1 mt-1">
          <button onclick="setCaptain(${i})" style="background:${isCap?'var(--gold)':'none'};border:1px solid var(--gold);color:${isCap?'#000':'var(--gold)'};font-size:0.58rem;padding:2px 5px;border-radius:3px;cursor:pointer;font-family:'Barlow Condensed',sans-serif">x2 Boost</button>
        </div>`;
    } else {
      slot.innerHTML = `<div class="slot-role">Driver ${i+1}</div><div style="font-size:1.5rem;color:var(--border)">+</div>`;
      slot.onclick = () => openPicker('driver', i);
    }
    container.appendChild(slot);
  }
}

function renderConstructorSlots() {
  const t = activeTeam();
  const container = document.getElementById('constructor-slots');
  container.innerHTML = '';
  for (let i = 0; i < 2; i++) {
    const c = t.constructors[i];
    const slot = document.createElement('div');
    slot.className = 'team-slot' + (c ? ' filled' : '');
    if (c) {
      slot.innerHTML = `
        <button class="slot-remove" onclick="removeConstructor(${i})">✕</button>
        <div class="slot-team-color" style="background:${c.color}"></div>
        <div class="slot-role">Constructor ${i+1}</div>
        <div class="slot-name">${c.name}</div>
        <div class="slot-price">$${c.price}M</div>`;
    } else {
      slot.innerHTML = `<div class="slot-role">Constructor ${i+1}</div><div style="font-size:1.5rem;color:var(--border)">+</div>`;
      slot.onclick = () => openPicker('constructor', i);
    }
    container.appendChild(slot);
  }
}

function updateBudget() {
  const t = activeTeam();
  const used = t.drivers.reduce((s,d)=>s+(d?d.price:0),0) + t.constructors.reduce((s,c)=>s+(c?c.price:0),0);
  const rem  = 100 - used;
  const pct  = Math.min((used/100)*100, 100);
  const el   = document.getElementById('budget-used');
  el.textContent = '$'+used.toFixed(1)+'M';
  el.className = 'budget-value'+(used>100?' over':used>90?' warn':' ok');
  document.getElementById('budget-fill').style.width = pct+'%';
  document.getElementById('budget-fill').style.background = used>100?'var(--red)':used>90?'var(--gold)':'var(--green)';
  document.getElementById('budget-meta').textContent = '$'+rem.toFixed(1)+'M remaining';
}

function renderTransferPlanner() {
  const t    = activeTeam();
  const list = document.getElementById('transfer-race-list');

  let totalPenalty = 0;
  list.innerHTML = '';

  // Header row
  const header = document.createElement('div');
  header.className = 'transfer-race-row transfer-race-header';
  header.innerHTML = ''
    + '<div class="tr-round"></div>'
    + '<div class="tr-name" style="font-size:0.65rem;text-transform:uppercase;letter-spacing:0.07em;color:var(--text-dim)">Race</div>'
    + '<div class="tr-col-label">Free</div>'
    + '<div class="tr-col-label">Used</div>'
    + '<div class="tr-col-label">Rolled Over</div>'
    + '<div class="tr-col-label">Penalty</div>';
  list.appendChild(header);

  let rolledOver = 0; // transfers carried into next race

  CALENDAR.forEach((race, idx) => {
    const isFirst = idx === 0;
    const saved   = t.transfers[race.round] || {};

    let free, used, penalty, rollForward;

    if (isFirst) {
      // R1: unlimited — just track how many they used for rollover purposes
      free        = '∞';
      used        = parseInt(saved.used) || 0;
      penalty     = 0;
      rollForward = 0; // no rollover from unlimited round
    } else {
      // R2+: 2 base + whatever rolled over, capped at 3
      const available = Math.min(3, 2 + rolledOver);
      free            = available;
      used            = parseInt(saved.used) != null && saved.used !== '' ? parseInt(saved.used) : '';
      const usedNum   = parseInt(used) || 0;
      const extra     = Math.max(0, usedNum - available);
      penalty         = extra * 10;
      totalPenalty   += penalty;
      // unused free transfers roll over (but can only bank 1 — next race max is 3 = 2 base + 1 banked)
      rollForward     = Math.min(1, Math.max(0, available - usedNum));
    }

    rolledOver = isFirst ? 0 : rollForward;

    // Build used selector: 0,1,2,3,4,5 options
    let usedSelector = '<select class="tr-used-select" onchange="saveUsedTransfer(' + race.round + ', this.value)">';
    if (isFirst) {
      usedSelector += '<option value="">—</option>';
      for (let i = 0; i <= 15; i++) {
        usedSelector += '<option value="' + i + '"' + (parseInt(saved.used) === i ? ' selected' : '') + '>' + i + '</option>';
      }
    } else {
      usedSelector += '<option value="">—</option>';
      for (let i = 0; i <= 10; i++) {
        usedSelector += '<option value="' + i + '"' + (parseInt(saved.used) === i ? ' selected' : '') + '>' + i + '</option>';
      }
    }
    usedSelector += '</select>';

    const rollDisplay = isFirst ? '—'
      : (rollForward > 0
          ? '<span style="color:var(--green)">+' + rollForward + '</span>'
          : '<span style="color:var(--text-dim)">0</span>');

    const penaltyDisplay = penalty > 0
      ? '<span style="color:var(--red)">-' + penalty + ' pts</span>'
      : '<span style="color:var(--text-dim)">—</span>';

    const freeDisplay = isFirst
      ? '<span style="color:var(--green)">∞</span>'
      : '<span style="color:' + (free === 3 ? 'var(--gold)' : 'var(--text)') + '">' + free + (free === 3 ? ' ★' : '') + '</span>';

    const row = document.createElement('div');
    row.className = 'transfer-race-row';
    row.innerHTML = ''
      + '<div class="tr-round">R' + race.round + '</div>'
      + '<div class="tr-name">' + race.name + '</div>'
      + '<div>' + freeDisplay + '</div>'
      + '<div>' + usedSelector + '</div>'
      + '<div>' + rollDisplay + '</div>'
      + '<div>' + penaltyDisplay + '</div>';
    list.appendChild(row);
  });

  document.getElementById('transfer-summary-label').textContent =
    totalPenalty > 0 ? 'Total penalty: -' + totalPenalty + ' pts' : 'No penalties';
}

function saveUsedTransfer(round, val) {
  const t = activeTeam();
  t.transfers[round] = { used: val === '' ? '' : parseInt(val) };
  saveState();
  renderTransferPlanner();
}

function removeDriver(i) {
  const t = activeTeam();
  t.drivers[i] = null;
  if (t.captain === i) t.captain = 0;
  renderDriverSlots(); updateBudget(); saveState();
}
function removeConstructor(i) { activeTeam().constructors[i]=null; renderConstructorSlots(); updateBudget(); saveState(); }
function setCaptain(i) { activeTeam().captain = i; renderDriverSlots(); saveState(); }
function clearTeam()   {
  if(!confirm('Clear all picks?')) return;
  const t=activeTeam(); t.drivers=[null,null,null,null,null]; t.constructors=[null,null]; t.captain=0; t.drs=-1;
  renderTeamPage(); saveState();
}
function saveTeam() {
  saveState();
  const btn=document.querySelector('#page-team .btn:not(.btn-ghost)');
  btn.textContent='✓ Saved!'; setTimeout(()=>btn.textContent='Save Team',1500);
}
function toggleChip(el) {
  if(el.classList.contains('used')) return;
  el.classList.toggle('active-chip');
  el.classList.toggle('available',!el.classList.contains('active-chip'));
}

// ─── PICKER ───────────────────────────────────────────────────────────────────
let pickerMode='driver', pickerSlot=0;
function openPicker(mode,slot) {
  pickerMode=mode; pickerSlot=slot;
  document.getElementById('picker-title').textContent=mode==='driver'?'Select Driver':'Select Constructor';
  const tabs=document.getElementById('picker-tabs');
  if(mode==='driver') {
    const teams=[...new Set(DRIVERS.map(d=>d.team))];
    tabs.innerHTML=`<button class="picker-tab active" onclick="filterPicker('all',this)">All</button>`+
      teams.map(t=>`<button class="picker-tab" onclick="filterPicker('${t}',this)">${t}</button>`).join('');
  } else { tabs.innerHTML=''; }
  renderPickerList('all');
  document.getElementById('picker-overlay').classList.add('open');
}
function filterPicker(team,btn) {
  document.querySelectorAll('.picker-tab').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active'); renderPickerList(team);
}
function renderPickerList(filter) {
  const t=activeTeam(), list=document.getElementById('picker-list');
  const items=pickerMode==='driver'?DRIVERS:CONSTRUCTORS;
  const picked=pickerMode==='driver'?t.drivers.filter(Boolean).map(d=>d.id):t.constructors.filter(Boolean).map(c=>c.id);
  list.innerHTML='';
  items.filter(x=>filter==='all'||x.team===filter).forEach(x=>{
    const div=document.createElement('div');
    div.className='picker-item'+(picked.includes(x.id)?' disabled':'');
    div.innerHTML=`<div class="picker-color-bar" style="background:${x.color}"></div>
      <div class="picker-item-info">
        <div class="picker-item-name">${x.name}</div>
        ${pickerMode==='driver'?`<div class="picker-item-team">${x.team}</div>`:''}
      </div><div class="picker-item-price">$${x.price}M</div>`;
    div.onclick=()=>selectItem(x); list.appendChild(div);
  });
}
function selectItem(x) {
  const t=activeTeam();
  if(pickerMode==='driver') t.drivers[pickerSlot]=x; else t.constructors[pickerSlot]=x;
  closePicker();
  if(pickerMode==='driver') renderDriverSlots(); else renderConstructorSlots();
  updateBudget(); saveState();
}
function closePicker() { document.getElementById('picker-overlay').classList.remove('open'); }

// ═══════════════════════════════════════════════════════════════════════════════
// RESULTS — redesigned
// ═══════════════════════════════════════════════════════════════════════════════

let resultsTeamIdx = 0;
let activeRound    = 1;  // which race is open in the detail panel

function initResultsPage() {
  renderResultsTeamSelect();
  renderCalendarList();
  renderRaceDetail(activeRound);
}

// Team pills at the top
function renderResultsTeamSelect() {
  const row = document.getElementById('results-team-select');
  row.innerHTML = '';
  state.teams.forEach((t,i) => {
    const pill = document.createElement('div');
    pill.className = 'team-select-pill'+(i===resultsTeamIdx?' active':'');
    pill.textContent = t.name;
    pill.onclick = () => { resultsTeamIdx=i; renderResultsTeamSelect(); renderCalendarList(); renderRaceDetail(activeRound); };
    row.appendChild(pill);
  });
}

// Left sidebar: full calendar toggle list
function renderCalendarList() {
  const t   = state.teams[resultsTeamIdx];
  const ul  = document.getElementById('race-calendar-list');
  ul.innerHTML = '';
  CALENDAR.forEach(race => {
    const saved    = t.races[race.round];
    const hasPts   = saved && saved.totalPts != null;
    const li       = document.createElement('div');
    const isActive = race.round === activeRound;
    li.className   = 'cal-item' + (isActive?' active':'') + (hasPts?' has-data':'');
    li.innerHTML   = `
      <div class="cal-round">R${race.round}</div>
      <div class="cal-info">
        <div class="cal-name">${race.name}</div>
        <div class="cal-date">${race.circuit} · ${race.date}</div>
      </div>
      ${hasPts ? `<div class="cal-pts-badge">${saved.totalPts}<span>pts</span></div>` : '<div class="cal-pts-dot"></div>'}`;
    li.onclick = () => { activeRound=race.round; renderCalendarList(); renderRaceDetail(race.round); };
    ul.appendChild(li);
  });
}

// Right panel: clean 5-field race result form
function renderRaceDetail(round) {
  const race  = CALENDAR.find(r => r.round === round);
  const t     = state.teams[resultsTeamIdx];
  const saved = t.races[round] || {};
  const panel = document.getElementById('race-detail-panel');

  const isSaved   = saved.totalPts != null;
  const chips     = ['Wildcard','No Negative','x3 Boost','Autopilot','Limitless','Final Fix'];
  const chipUsed  = saved.chipUsed || '';

  panel.innerHTML = `
    <div class="race-detail-header">
      <div>
        <div class="race-detail-round">Round ${race.round} · ${race.date}</div>
        <div class="race-detail-name">${race.name}</div>
        <div class="race-detail-circuit">${race.circuit}</div>
      </div>
      <div class="race-status-badge ${isSaved ? 'status-saved' : 'status-pending'}">
        ${isSaved ? '✓ Saved' : '— Not entered'}
      </div>
    </div>

    <div class="result-fields">

      <div class="result-field-row">
        <div class="result-field-icon pts-icon">PTS</div>
        <div class="result-field-body">
          <div class="result-field-label">Points</div>
          <div class="result-field-sub">Your total fantasy points this race</div>
        </div>
        <input class="result-field-input" type="text" inputmode="numeric" id="rf-pts"
          placeholder="e.g. 87" value="${saved.totalPts != null ? saved.totalPts : ''}">
      </div>

      <div class="result-field-row">
        <div class="result-field-icon gain-icon">$+</div>
        <div class="result-field-body">
          <div class="result-field-label">Budget Gain</div>
          <div class="result-field-sub">Price rise of your picks after this race (in $M)</div>
        </div>
        <div class="result-field-prefix-wrap">
          <span class="result-field-prefix-sym">$</span>
          <input class="result-field-input prefix-input" type="text" inputmode="decimal" id="rf-bgain"
            placeholder="e.g. 2.5" value="${saved.budgetGain != null ? saved.budgetGain : ''}">
          <span class="result-field-prefix-sym">M</span>
        </div>
      </div>

      <div class="result-field-row">
        <div class="result-field-icon globe-icon">🌍</div>
        <div class="result-field-body">
          <div class="result-field-label">Global Rank</div>
          <div class="result-field-sub">Your worldwide rank after this race</div>
        </div>
        <div class="result-field-prefix-wrap">
          <span class="result-field-prefix-sym">#</span>
          <input class="result-field-input prefix-input" type="text" inputmode="numeric" id="rf-global"
            placeholder="e.g. 142500" value="${saved.globalRank != null ? saved.globalRank : ''}">
        </div>
      </div>

      <div class="result-field-row">
        <div class="result-field-icon mkd-icon">🇲🇰</div>
        <div class="result-field-body">
          <div class="result-field-label">Macedonia Rank</div>
          <div class="result-field-sub">Your rank within Macedonia</div>
        </div>
        <div class="result-field-prefix-wrap">
          <span class="result-field-prefix-sym">#</span>
          <input class="result-field-input prefix-input" type="text" inputmode="numeric" id="rf-mkd"
            placeholder="e.g. 12" value="${saved.mkdRank != null ? saved.mkdRank : ''}">
        </div>
      </div>

      <div class="result-field-row">
        <div class="result-field-icon chip-icon">⚡</div>
        <div class="result-field-body">
          <div class="result-field-label">Chip Used</div>
          <div class="result-field-sub">Did you play a chip this race?</div>
        </div>
        <select class="result-field-select" id="rf-chip">
          <option value="">None</option>
          ${chips.map(c=>`<option value="${c}" ${chipUsed===c?'selected':''}>${c}</option>`).join('')}
        </select>
      </div>

    </div>

    <div class="flex-between" style="margin-top:1.5rem;padding-top:1rem;border-top:1px solid var(--border)">
      <div>
        ${isSaved ? `<button class="btn btn-ghost" onclick="clearRaceResult(${round})">Clear</button>` : ''}
      </div>
      <button class="btn" onclick="saveRaceResult(${round})">Save Race</button>
    </div>`;
}

function saveRaceResult(round) {
  const t          = state.teams[resultsTeamIdx];
  const totalPts   = parseFloat(document.getElementById('rf-pts')?.value);
  const budgetGain = parseFloat(document.getElementById('rf-bgain')?.value);
  const globalRank = parseInt(document.getElementById('rf-global')?.value);
  const mkdRank    = parseInt(document.getElementById('rf-mkd')?.value);
  const chipUsed   = document.getElementById('rf-chip')?.value || '';

  t.races[round] = {
    totalPts:    isNaN(totalPts)   ? null : totalPts,
    budgetGain:  isNaN(budgetGain) ? null : budgetGain,
    globalRank:  isNaN(globalRank) ? null : globalRank,
    mkdRank:     isNaN(mkdRank)    ? null : mkdRank,
    chipUsed
  };
  _pendingChip = null;
  saveState();
  renderCalendarList();
  renderRaceDetail(round);
}

function clearRaceResult(round) {
  if (!confirm('Clear result for this race?')) return;
  delete state.teams[resultsTeamIdx].races[round];
  saveState();
  renderCalendarList();
  renderRaceDetail(round);
}

// ─── STANDINGS ────────────────────────────────────────────────────────────────
let activeStandingsTeamIdx = 0;

function renderStandingsTeamSelect() {
  const row = document.getElementById('standings-team-select');
  row.innerHTML = '';
  state.teams.forEach((t,i) => {
    const pill = document.createElement('div');
    pill.className = 'team-select-pill'+(i===activeStandingsTeamIdx?' active':'');
    pill.textContent = t.name;
    pill.onclick = () => { activeStandingsTeamIdx=i; renderStandingsTeamSelect(); renderStandings(); };
    row.appendChild(pill);
  });
}

function renderStandings() {
  const t     = state.teams[activeStandingsTeamIdx];
  const races = Object.values(t.races || {});

  const total = races.reduce((s,r)=>s+(r.totalPts||0),0);
  const best  = races.length ? Math.max(...races.map(r=>r.totalPts||0)) : 0;
  const avg   = races.length ? Math.round(total/races.length) : 0;

  document.getElementById('stat-total-pts').textContent = total;
  document.getElementById('stat-races').textContent     = races.length;
  document.getElementById('stat-avg').textContent       = avg;
  document.getElementById('stat-best').textContent      = best;

  // Points history chart — ordered by round
  const chart = document.getElementById('pts-chart');
  chart.innerHTML = '';
  const orderedRaces = CALENDAR
    .map(c => ({ cal: c, data: t.races[c.round] }))
    .filter(x => x.data && x.data.totalPts != null);
  if (orderedRaces.length) {
    const maxPts = Math.max(...orderedRaces.map(x=>x.data.totalPts), 1);
    orderedRaces.forEach(({ cal, data }) => {
      const bar = document.createElement('div');
      bar.className = 'mini-bar';
      bar.style.height = Math.max(4, Math.round((data.totalPts/maxPts)*100))+'%';
      bar.title = cal.name+': '+data.totalPts+' pts';
      bar.innerHTML = `<div class="mini-bar-label">R${cal.round}</div>`;
      chart.appendChild(bar);
    });
  } else {
    chart.innerHTML = '<div style="color:var(--text-dim);font-size:0.8rem;font-family:\'Barlow Condensed\',sans-serif">No race data yet</div>';
  }

  // Ranking history table
  const tbody = document.getElementById('rankings-body');
  if (!orderedRaces.length) {
    tbody.innerHTML = '<tr><td colspan="7" class="empty-state">No race data yet.</td></tr>';
    return;
  }

  tbody.innerHTML = orderedRaces.map(({ cal, data }, i) => {
    const prev = i > 0 ? orderedRaces[i-1].data : null;

    // Global rank trend
    let globalTrend = '';
    if (prev && prev.globalRank && data.globalRank) {
      const diff = prev.globalRank - data.globalRank; // positive = improved (lower rank number)
      if (diff > 0)      globalTrend = `<span class="rank-up">▲ ${diff.toLocaleString()}</span>`;
      else if (diff < 0) globalTrend = `<span class="rank-down">▼ ${Math.abs(diff).toLocaleString()}</span>`;
      else               globalTrend = `<span class="rank-same">—</span>`;
    }

    // MKD rank trend
    let mkdTrend = '';
    if (prev && prev.mkdRank && data.mkdRank) {
      const diff = prev.mkdRank - data.mkdRank;
      if (diff > 0)      mkdTrend = `<span class="rank-up">▲ ${diff}</span>`;
      else if (diff < 0) mkdTrend = `<span class="rank-down">▼ ${Math.abs(diff)}</span>`;
      else               mkdTrend = `<span class="rank-same">—</span>`;
    }

    const globalStr = data.globalRank != null
      ? `#${data.globalRank.toLocaleString()} ${globalTrend}` : '—';
    const mkdStr = data.mkdRank != null
      ? `#${data.mkdRank} ${mkdTrend}` : '—';
    const gainStr = data.budgetGain != null
      ? `<span style="color:${data.budgetGain>=0?'var(--green)':'var(--red)'}">${data.budgetGain>=0?'+':''}$${parseFloat(data.budgetGain).toFixed(1)}M</span>` : '—';
    const chipStr = data.chipUsed
      ? `<span class="chip-badge">${data.chipUsed}</span>` : '—';

    return `<tr>
      <td style="font-family:'Orbitron',sans-serif;font-size:0.65rem;color:var(--text-dim)">R${cal.round}</td>
      <td style="font-weight:500">${cal.name}</td>
      <td style="font-family:'Orbitron',sans-serif;color:var(--gold)">${data.totalPts != null ? data.totalPts : '—'}</td>
      <td>${globalStr}</td>
      <td>${mkdStr}</td>
      <td>${gainStr}</td>
      <td>${chipStr}</td>
    </tr>`;
  }).join('');
}

// ─── STRATEGY ─────────────────────────────────────────────────────────────────
// ─── STRATEGY ─────────────────────────────────────────────────────────────────
const ALL_CHIPS = ['Wildcard','No Negative','x3 Boost','Autopilot','Limitless','Final Fix'];
let activeStrategyTeamIdx = 0;

function initStrategyPage() {
  renderStrategyTeamSelect();
  populateStrategyGPDropdown();
  renderStrategyRacePlan();
  renderChipTracker();
  renderTransferLog();
  document.getElementById('strategy-notes').value = state.notes || '';}

function renderStrategyTeamSelect() {
  const row = document.getElementById('strategy-team-select');
  row.innerHTML = '';
  state.teams.forEach((t, i) => {
    const pill = document.createElement('div');
    pill.className = 'team-select-pill' + (i === activeStrategyTeamIdx ? ' active' : '');
    pill.textContent = t.name;
    pill.onclick = () => {
      activeStrategyTeamIdx = i;
      renderStrategyTeamSelect();
      renderStrategyRacePlan();
      renderChipTracker();
      renderTransferLog();
    };
    row.appendChild(pill);
  });
}

function populateStrategyGPDropdown() {
  const sel = document.getElementById('strategy-gp-select');
  const current = sel.value;
  sel.innerHTML = '<option value="">— Select Grand Prix —</option>';
  CALENDAR.forEach(r => {
    const opt = document.createElement('option');
    opt.value = r.round;
    opt.textContent = 'R' + r.round + ' · ' + r.name + ' (' + r.date + ')';
    sel.appendChild(opt);
  });
  if (current) sel.value = current;
}

function renderStrategyRacePlan() {
  const round  = parseInt(document.getElementById('strategy-gp-select').value);
  const panel  = document.getElementById('strategy-race-plan');
  const t      = state.teams[activeStrategyTeamIdx];

  if (!round) {
    panel.innerHTML = '<div class="empty-state" style="padding:2rem">Select a Grand Prix above to plan your strategy.</div>';
    return;
  }

  const race  = CALENDAR.find(r => r.round === round);
  if (!t.strategy) t.strategy = {};
  const saved = t.strategy[round] || {};

  const fields = [
    { key: 'ptsExpected',      label: 'Points Expected',       sub: 'How many fantasy points you expect to score',   prefix: '',  suffix: 'pts',  type: 'number' },
    { key: 'ptsGained',        label: 'Points Gained',         sub: 'Actual points you scored this race',            prefix: '',  suffix: 'pts',  type: 'number' },
    { key: 'budget',           label: 'Budget',                sub: 'Your team value heading into this race',        prefix: '$', suffix: 'M',    type: 'number', step: '0.1' },
    { key: 'priceChangeExp',   label: 'Price Change Expected', sub: 'How much you expect your team value to change', prefix: '$', suffix: 'M',    type: 'number', step: '0.1' },
    { key: 'priceGained',      label: 'Price Gained',          sub: 'Actual team value change after this race',      prefix: '$', suffix: 'M',    type: 'number', step: '0.1' },
  ];

  panel.innerHTML = '<div class="strategy-plan-header">'
    + '<div class="strategy-plan-round">Round ' + race.round + ' · ' + race.date + '</div>'
    + '<div class="strategy-plan-name">' + race.name + '</div>'
    + '<div class="strategy-plan-circuit">' + race.circuit + '</div>'
    + '</div>'
    + '<div class="strategy-fields">'
    + fields.map(f => {
        const val = saved[f.key] != null ? saved[f.key] : '';
        const inputHtml = '<div class="strat-input-wrap">'
          + (f.prefix ? '<span class="strat-sym">' + f.prefix + '</span>' : '')
          + '<input class="strat-input" type="' + f.type + '" '
          + (f.step ? 'step="' + f.step + '" ' : '')
          + 'placeholder="—" value="' + val + '" '
          + 'id="sf-' + f.key + '" oninput="autoSaveStrategyField(' + round + ')">'
          + (f.suffix ? '<span class="strat-sym">' + f.suffix + '</span>' : '')
          + '</div>';
        return '<div class="strategy-field-row">'
          + '<div class="strategy-field-body">'
          + '<div class="strategy-field-label">' + f.label + '</div>'
          + '<div class="strategy-field-sub">' + f.sub + '</div>'
          + '</div>'
          + inputHtml
          + '</div>';
      }).join('')
    + '</div>';
}

function autoSaveStrategyField(round) {
  const t = state.teams[activeStrategyTeamIdx];
  if (!t.strategy) t.strategy = {};
  if (!t.strategy[round]) t.strategy[round] = {};
  const keys = ['ptsExpected','ptsGained','budget','priceChangeExp','priceGained'];
  keys.forEach(k => {
    const el = document.getElementById('sf-' + k);
    if (!el) return;
    const v = parseFloat(el.value);
    t.strategy[round][k] = isNaN(v) ? null : v;
  });
  saveState();
}

function renderChipTracker() {
  const t = state.teams[activeStrategyTeamIdx];
  const usedChips = {};
  Object.entries(t.races || {}).forEach(([round, race]) => {
    if (race.chipUsed && race.chipUsed !== '') {
      const cal = CALENDAR.find(c => c.round == round);
      usedChips[race.chipUsed] = { raceName: cal ? cal.name : 'R' + round };
    }
  });

  document.getElementById('chip-tracker').innerHTML = ALL_CHIPS.map(chip => {
    const used    = usedChips[chip];
    const isUsed  = !!used;
    return '<div class="chip-track-row ' + (isUsed ? 'chip-track-used' : 'chip-track-avail') + '">'
      + '<div class="chip-track-dot ' + (isUsed ? 'dot-used' : 'dot-avail') + '"></div>'
      + '<div class="chip-track-name">' + chip + '</div>'
      + '<div class="chip-track-status">'
      + (isUsed
          ? '<span class="chip-track-label used-label">Used</span><span class="chip-track-detail">' + used.raceName + '</span>'
          : '<span class="chip-track-label avail-label">Available</span>')
      + '</div></div>';
  }).join('');
}

function saveStrategy() {
  // Save notes
  state.notes = document.getElementById('strategy-notes').value;
  // Save any open race plan fields
  const round = parseInt(document.getElementById('strategy-gp-select').value);
  if (round) autoSaveStrategyField(round);
  saveState();
  const btn = document.getElementById('strategy-save-btn');
  btn.textContent = '✓ Saved!';
  setTimeout(() => btn.textContent = 'Save', 1500);
}

function renderTransferLog() {
  const t     = state.teams[activeStrategyTeamIdx];
  const log   = t.transferLog || [];
  const tList = document.getElementById('transfer-list');
  tList.innerHTML = log.length
    ? log.map((tr, i) =>
        '<div class="transfer-row">'
        + '<span class="transfer-round">R' + tr.round + '</span>'
        + '<span class="transfer-out">▼ ' + tr.out + '</span>'
        + '<span class="transfer-arrow">→</span>'
        + '<span class="transfer-in">▲ ' + tr.inn + '</span>'
        + '<button onclick="deleteTransfer(' + i + ')" style="background:none;border:none;color:var(--text-dim);cursor:pointer;font-size:0.7rem;margin-left:auto">✕</button>'
        + '</div>'
      ).join('')
    : '<div class="empty-state" style="padding:1rem 0">No transfers for this team yet.</div>';
  document.getElementById('transfer-count').textContent = log.length + ' transfer' + (log.length !== 1 ? 's' : '');
}

function deleteTransfer(i) {
  state.teams[activeStrategyTeamIdx].transferLog.splice(i, 1);
  saveState();
  renderTransferLog();
}

function openTransferModal() {
  const t = state.teams[activeStrategyTeamIdx];

  // Race dropdown
  const roundSel = document.getElementById('t-round');
  roundSel.innerHTML = '<option value="">— Select Race —</option>';
  CALENDAR.forEach(r => {
    const opt = document.createElement('option');
    opt.value = r.round;
    opt.textContent = 'R' + r.round + ' · ' + r.name;
    roundSel.appendChild(opt);
  });

  // Out: current team's drivers + constructors
  const teamRoster = [
    ...t.drivers.filter(Boolean).map(d => d.name + ' (' + d.team + ')'),
    ...t.constructors.filter(Boolean).map(c => c.name + ' (Constructor)'),
  ];
  const outSel = document.getElementById('t-out');
  outSel.innerHTML = '<option value="">— Player Out —</option>';
  (teamRoster.length ? teamRoster : ['(No players in team yet)']).forEach(label => {
    const opt = document.createElement('option');
    const val = label.split(' (')[0];
    opt.value = val; opt.textContent = label;
    if (label === '(No players in team yet)') opt.disabled = true;
    outSel.appendChild(opt);
  });

  // In: all drivers + constructors
  const inSel = document.getElementById('t-in');
  inSel.innerHTML = '<option value="">— Player In —</option>';
  const separator1 = document.createElement('option');
  separator1.disabled = true; separator1.textContent = '── Drivers ──';
  inSel.appendChild(separator1);
  DRIVERS.forEach(d => {
    const opt = document.createElement('option');
    opt.value = d.name; opt.textContent = d.name + ' (' + d.team + ') · $' + d.price + 'M';
    inSel.appendChild(opt);
  });
  const separator2 = document.createElement('option');
  separator2.disabled = true; separator2.textContent = '── Constructors ──';
  inSel.appendChild(separator2);
  CONSTRUCTORS.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.name; opt.textContent = c.name + ' · $' + c.price + 'M';
    inSel.appendChild(opt);
  });

  document.getElementById('transfer-modal').classList.add('open');
}

function closeTransferModal() { document.getElementById('transfer-modal').classList.remove('open'); }

function saveTransfer() {
  const round = document.getElementById('t-round').value;
  const out   = document.getElementById('t-out').value;
  const inn   = document.getElementById('t-in').value;
  if (!round || !out || !inn) return;
  const t   = state.teams[activeStrategyTeamIdx];
  const cal = CALENDAR.find(r => r.round == round);
  if (!t.transferLog) t.transferLog = [];
  t.transferLog.push({ round: parseInt(round), raceName: cal ? cal.name : 'R' + round, out, inn });
  saveState();
  closeTransferModal();
  renderTransferLog();
}

function openWatchlistModal()  { document.getElementById('watchlist-modal').classList.add('open'); }
function closeWatchlistModal() { document.getElementById('watchlist-modal').classList.remove('open'); }
function saveWatchlist() {
  const name   = document.getElementById('w-name').value.trim();
  const reason = document.getElementById('w-reason').value.trim();
  if (!name) return;
  state.watchlist.push({ name, reason });
  saveState();
  closeWatchlistModal();
  ['w-name','w-reason'].forEach(id => document.getElementById(id).value = '');
}
function removeWatchlist(i) { state.watchlist.splice(i, 1); saveState(); }

// ─── INIT ─────────────────────────────────────────────────────────────────────
renderTeamPage();