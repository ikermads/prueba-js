const mapSlug = new URLSearchParams(window.location.search).get("map");
const currentMap = window.valompositionsData?.maps.find((map) => map.slug === mapSlug);
const mapDetail = document.getElementById("mapDetail");
const mapNotFound = document.getElementById("mapNotFound");
const mapCompositionGrid = document.getElementById("mapCompositions");
const mapTeamSearch = document.getElementById("mapTeamSearch");
const mapCompositionEmpty = document.getElementById("mapCompositionEmpty");
const compositionDetail = document.getElementById("compositionDetail");
let mapCompositions = [];
let activeCompositionIndex = null;
let mapTeamQuery = "";

function renderMapCompositions() {
  const query = normalizeTeamQuery(mapTeamQuery);
  const filteredCompositions = mapCompositions
    .map((composition, index) => ({ composition, index }))
    .filter(({ composition }) => (
      !query || composition.teams.some((team) => normalizeTeamQuery(team).includes(query))
    ));

  mapCompositionGrid.innerHTML = filteredCompositions
    .map(({ composition, index }) => {
      const visibleTeams = composition.teams.filter(
        (team) => !query || normalizeTeamQuery(team).includes(query)
      );
      return `
        <article class="map-composition-card">
          <div class="map-detail-meta">
            <span>${composition.style}</span>
            <span>${composition.uses}/${composition.sampleSize} usos · ${Math.round((composition.uses / composition.sampleSize) * 100)}%</span>
          </div>
          <h3>${composition.name}</h3>
          <p>${composition.summary}</p>
          <div class="composition-team-list">
            <span>Equipos</span>
            <div class="team-badges">${renderTeamBadges(visibleTeams)}</div>
          </div>
          <div class="map-composition-agents" aria-label="Agentes de la composición">
            ${composition.agents.map((agent) => `<span>${agent}</span>`).join("")}
          </div>
          <button class="composition-open map-composition-open" type="button" data-composition-index="${index}" aria-expanded="false" aria-controls="compositionDetail">Ver agentes y plan</button>
        </article>
      `;
    })
    .join("");
  mapCompositionEmpty.hidden = filteredCompositions.length > 0;
  bindTeamLogoFallbacks(mapCompositionGrid);
}

function renderCompositionDetail(index, shouldScroll = true) {
  const composition = mapCompositions[index];
  if (!composition) return;

  activeCompositionIndex = index;
  document.getElementById("compositionDetailTitle").textContent = composition.name;
  document.getElementById("compositionDetailSummary").textContent = composition.summary;
  document.getElementById("compositionDetailUsage").textContent = `${composition.uses}/${composition.sampleSize} apariciones de equipo · ${Math.round((composition.uses / composition.sampleSize) * 100)}% · ${composition.teams.join(", ")}`;
  document.getElementById("compositionPlan").textContent = composition.plan;
  document.getElementById("compositionAttack").textContent = composition.attack;
  document.getElementById("compositionDefense").textContent = composition.defense;
  document.getElementById("compositionFocus").textContent = composition.playAround;
  document.querySelectorAll(".map-composition-open").forEach((button, buttonIndex) => {
    const isActive = Number(button.dataset.compositionIndex) === index;
    button.setAttribute("aria-expanded", String(isActive));
    button.textContent = isActive ? "Ficha abierta" : "Ver agentes y plan";
    button.closest(".map-composition-card").classList.toggle("is-active", isActive);
  });

  const agents = composition.agents
    .map((agentName) => window.valompositionsData.agents.find((agent) => agent.name === agentName))
    .filter(Boolean);

  document.getElementById("compositionRoster").innerHTML = agents.map((agent, agentIndex) => `
    <article class="composition-agent-card">
      <div class="composition-agent-visual">
        ${agent.image ? `<img src="${agent.image}" alt="Retrato de ${agent.name}" loading="lazy" decoding="async">` : ""}
        <span>${agent.icon}</span>
        <small>${String(agentIndex + 1).padStart(2, "0")}</small>
      </div>
      <div class="composition-agent-copy">
        <span class="role-badge ${getRoleToneClass(agent.role)}">${agent.role}</span>
        <h5>${agent.name}</h5>
        <strong>${agent.strength}</strong>
        <p>${agent.bio}</p>
        <span class="composition-agent-task">${agent.traits[0]}</span>
      </div>
    </article>
  `).join("");

  document.querySelectorAll(".composition-agent-visual img").forEach((image) => {
    image.addEventListener("load", () => image.parentElement.classList.add("has-image"), { once: true });
    image.addEventListener("error", () => image.remove(), { once: true });
  });

  compositionDetail.hidden = false;
  if (shouldScroll) {
    compositionDetail.scrollIntoView({ behavior: "smooth", block: "start" });
    compositionDetail.focus({ preventScroll: true });
  }
}

if (currentMap) {
  mapCompositions = window.valompositionsData.compositions.filter(
    (composition) => composition.map === currentMap.name
  );

  document.title = `${currentMap.name}: análisis y composiciones | Valompositions`;
  document.getElementById("mapTitle").textContent = currentMap.name;
  document.getElementById("mapOverview").textContent = currentMap.overview;
  const mapBackground = document.getElementById("mapBackground");
  mapBackground.src = currentMap.backgroundImage;
  mapBackground.alt = `Imagen de fondo del mapa ${currentMap.name}`;
  document.getElementById("mapHeading").textContent = currentMap.name;
  document.getElementById("mapTempo").textContent = currentMap.tempo;
  document.getElementById("mapAttack").textContent = currentMap.attack;
  document.getElementById("mapDefense").textContent = currentMap.defense;
  document.getElementById("mapSolo").textContent = currentMap.solo;
  document.getElementById("mapPremade").textContent = currentMap.premade;
  document.getElementById("mapMistake").textContent = currentMap.mistake;
  document.getElementById("mapMeta").innerHTML = `
    <span>Mapa · ${currentMap.name}</span>
    <span>${mapCompositions.length} composiciones</span>
    <span>${compositionSource.name} · ${compositionSource.sample} mapas</span>
    <a href="${compositionSource.url}" target="_blank" rel="noreferrer">Fuente VLR.gg</a>
  `;
  document.getElementById("mapAreas").innerHTML = currentMap.areas
    .map((area) => `<span>${area}</span>`)
    .join("");
  renderMapCompositions();

  mapCompositionGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-composition-index]");
    if (!button) return;
    const selectedIndex = Number(button.dataset.compositionIndex);
    if (activeCompositionIndex === selectedIndex) {
      activeCompositionIndex = null;
      compositionDetail.hidden = true;
      button.setAttribute("aria-expanded", "false");
      button.textContent = "Ver agentes y plan";
      button.closest(".map-composition-card").classList.remove("is-active");
      return;
    }
    renderCompositionDetail(selectedIndex);
  });

  mapTeamSearch.addEventListener("input", () => {
    mapTeamQuery = mapTeamSearch.value;
    activeCompositionIndex = null;
    compositionDetail.hidden = true;
    renderMapCompositions();
  });

  document.getElementById("compositionDetailClose").addEventListener("click", () => {
    compositionDetail.hidden = true;
    activeCompositionIndex = null;
    mapCompositionGrid.querySelectorAll(".map-composition-open").forEach((button) => {
      button.setAttribute("aria-expanded", "false");
      button.textContent = "Ver agentes y plan";
      button.closest(".map-composition-card").classList.remove("is-active");
    });
  });

  window.addEventListener("agentportraitsloaded", () => {
    if (activeCompositionIndex !== null) renderCompositionDetail(activeCompositionIndex, false);
  });

  mapDetail.hidden = false;
} else {
  mapNotFound.hidden = false;
  document.querySelector(".map-detail-hero").hidden = true;
}
