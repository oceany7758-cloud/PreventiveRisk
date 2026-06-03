const subjects = [
  {
    id: 1,
    name: "上海启明科技有限公司",
    credit: "91310115MA1H7X8K9P",
    subjectType: "外部企业",
    role: "供应商",
    blackStatus: "黑名单",
    jyyc: "有",
    yzwf: "有",
    zdsswf: "有",
    latestStatus: "SUCCESS",
    latestQueryTime: "2026-06-02 10:24:18",
    latestUser: "王风控",
    createdAt: "2026-05-21 16:08:43",
    createdBy: "李运营",
    remark: "核心供应商准入复核",
    apiName: "POST /v1/HMD/isHmdxx",
    reqId: "QXY20260602102418001",
    apiTime: "842ms",
    org: "",
    baseInfo: {
      dqdm: "310115",
      qyName: "上海启明科技有限公司",
      nsrsbh: "91310115MA1H7X8K9P",
      startDate: "2017-04-18",
      operName: "赵明",
      econKind: "有限责任公司",
      econKindCode: "1100",
      registCapi: "3000 万人民币",
      tags: "17",
      scope: "技术服务、软件开发、供应链管理服务",
      status: "存续",
      title: "执行董事",
      address: "上海市浦东新区张江路 88 号",
      belongOrg: "上海市浦东新区市场监督管理局",
      historyNames: "上海启明信息技术有限公司",
      termStart: "2017-04-18",
      checkDate: "2025-11-12",
      actualCapi: "1200 万人民币",
      termEnd: "长期",
      revokeDate: "-",
      endDate: "-",
      revokeReason: "-",
      orgNo: "MA1H7X8K9",
      type: "01"
    },
    risks: {
      jyyc: [
        ["2025-09-12", "通过登记住所无法联系", "-", "-", "浦东新区市场监督管理局", "上海", "310115000987654", "当前公示信息"]
      ],
      yzwf: [
        ["未按规定履行相关义务被列入严重违法失信企业名单", "2026-02-18", "上海市浦东新区市场监督管理局", "-", "-", "-", "当前公示信息"]
      ],
      zdsswf: [
        [
          "上海启明科技有限公司",
          "91310115MA1H7X8K9P",
          "MA1H7X8K9",
          "上海市浦东新区张江路 88 号",
          "赵明",
          "钱敏",
          "上海明衡税务师事务所 / 张会计",
          "偷税",
          "少缴增值税及附加税费",
          "追缴税款并处罚款",
          "https://tax.example.gov/case/001",
          "2026-01-15 09:30:00",
          "2026-01-16 10:15:22",
          "2026-01-10",
          "当前公示信息"
        ]
      ]
    },
    history: [
      {
        time: "2026-06-02 10:24:18",
        user: "王风控",
        type: "MANUAL_UPDATE",
        result: "SUCCESS",
        isHmd: "是",
        risk: "经营异常：有 / 严重违法：有 / 重大税收违法：有",
        reqId: "QXY20260602102418001",
        apiTime: "842ms",
        error: "-",
        raw: { success: true, isHmd: true, jyycFlag: 1, yzwfFlag: 1, zdsswfFlag: 1 }
      },
      {
        time: "2026-05-21 16:08:43",
        user: "李运营",
        type: "CREATE_QUERY",
        result: "FAILED",
        isHmd: "-",
        risk: "未知",
        reqId: "QXY20260521160843009",
        apiTime: "3000ms",
        error: "接口调用超时",
        raw: { success: false, errorCode: "TIMEOUT", errorMessage: "接口调用超时" }
      }
    ]
  },
  {
    id: 2,
    name: "华东采购中心",
    credit: "91310000MA1K38AB2C",
    subjectType: "内部组织",
    role: "",
    blackStatus: "非黑名单",
    jyyc: "无",
    yzwf: "无",
    zdsswf: "无",
    latestStatus: "SUCCESS",
    latestQueryTime: "2026-06-01 14:13:02",
    latestUser: "陈管理员",
    createdAt: "2026-06-01 14:13:02",
    createdBy: "陈管理员",
    remark: "内部组织例行监控",
    apiName: "POST /v1/HMD/isHmdxx",
    reqId: "QXY20260601141302031",
    apiTime: "615ms",
    org: "集团总部 / 采购条线",
    baseInfo: {
      dqdm: "310000",
      qyName: "华东采购中心",
      nsrsbh: "91310000MA1K38AB2C",
      startDate: "2019-08-30",
      operName: "周岚",
      econKind: "分支机构",
      econKindCode: "4310",
      registCapi: "-",
      tags: null,
      scope: "采购管理、招投标服务、供应链协同",
      status: "存续",
      title: "负责人",
      address: "上海市黄浦区中山东路 100 号",
      belongOrg: "上海市市场监督管理局",
      historyNames: "-",
      termStart: "2019-08-30",
      checkDate: "2026-01-06",
      actualCapi: "-",
      termEnd: "长期",
      revokeDate: "-",
      endDate: "-",
      revokeReason: "-",
      orgNo: "MA1K38AB2",
      type: "01"
    },
    risks: { jyyc: [], yzwf: [], zdsswf: [] },
    history: [
      {
        time: "2026-06-01 14:13:02",
        user: "陈管理员",
        type: "CREATE_QUERY",
        result: "SUCCESS",
        isHmd: "否",
        risk: "经营异常：无 / 严重违法：无 / 重大税收违法：无",
        reqId: "QXY20260601141302031",
        apiTime: "615ms",
        error: "-",
        raw: { success: true, isHmd: false, jyycFlag: 0, yzwfFlag: 0, zdsswfFlag: 0 }
      }
    ]
  },
  {
    id: 3,
    name: "北京恒信商贸有限公司",
    credit: "91110108MA02C6P71X",
    subjectType: "外部企业",
    role: "客户",
    blackStatus: "查询失败",
    jyyc: "未知",
    yzwf: "未知",
    zdsswf: "未知",
    latestStatus: "FAILED",
    latestQueryTime: "2026-05-30 09:45:11",
    latestUser: "王风控",
    createdAt: "2026-05-12 11:21:49",
    createdBy: "李运营",
    remark: "最近一次失败，详情展示历史成功结果",
    apiName: "POST /v1/HMD/isHmdxx",
    reqId: "QXY20260530094511022",
    apiTime: "3000ms",
    org: "",
    baseInfo: {
      dqdm: "110108",
      qyName: "北京恒信商贸有限公司",
      nsrsbh: "91110108MA02C6P71X",
      startDate: "2020-03-11",
      operName: "刘洋",
      econKind: "有限责任公司",
      econKindCode: "1100",
      registCapi: "800 万人民币",
      tags: null,
      scope: "贸易代理、技术咨询、企业管理服务",
      status: "存续",
      title: "法定代表人",
      address: "北京市海淀区上地十街 12 号",
      belongOrg: "北京市海淀区市场监督管理局",
      historyNames: "-",
      termStart: "2020-03-11",
      checkDate: "2025-07-18",
      actualCapi: "800 万人民币",
      termEnd: "2040-03-10",
      revokeDate: "-",
      endDate: "-",
      revokeReason: "-",
      orgNo: "MA02C6P71",
      type: "01"
    },
    risks: { jyyc: [], yzwf: [], zdsswf: [] },
    history: [
      {
        time: "2026-05-30 09:45:11",
        user: "王风控",
        type: "LIST_UPDATE",
        result: "FAILED",
        isHmd: "-",
        risk: "未知",
        reqId: "QXY20260530094511022",
        apiTime: "3000ms",
        error: "未查询到企业信息",
        raw: { success: false, errorCode: "NOT_FOUND", errorMessage: "未查询到企业信息" }
      },
      {
        time: "2026-05-12 11:21:49",
        user: "李运营",
        type: "CREATE_QUERY",
        result: "SUCCESS",
        isHmd: "否",
        risk: "经营异常：无 / 严重违法：无 / 重大税收违法：无",
        reqId: "QXY20260512112149007",
        apiTime: "591ms",
        error: "-",
        raw: { success: true, isHmd: false, jyycFlag: 0, yzwfFlag: 0, zdsswfFlag: 0 }
      }
    ]
  },
  {
    id: 4,
    name: "杭州云程服务有限公司",
    credit: "91330110MA2J4LM8Q6",
    subjectType: "外部企业",
    role: "服务商",
    blackStatus: "未查询",
    jyyc: "未知",
    yzwf: "未知",
    zdsswf: "未知",
    latestStatus: "NOT_QUERIED",
    latestQueryTime: "-",
    latestUser: "-",
    createdAt: "2026-05-29 10:16:32",
    createdBy: "镇多余",
    remark: "待首次查询",
    apiName: "POST /v1/HMD/isHmdxx",
    reqId: "-",
    apiTime: "-",
    org: "",
    baseInfo: {},
    risks: { jyyc: [], yzwf: [], zdsswf: [] },
    history: []
  }
];

let currentType = "内部组织";
let currentSubject = subjects[0];
let pendingUpdateId = null;
let selectedSubjectIds = new Set();
let latestRiskQuery = null;
const currentUserName = "镇多余";
const pageMeta = {
  listPage: "黑名单管理",
  riskQueryPage: "黑名单查询",
  monitorSettingsPage: "监控设置",
  operationLogsPage: "操作日志"
};
let openedTabs = ["listPage"];
let activePageId = "listPage";
let riskQueryRecords = [
  {
    time: "2026-06-02 11:18:35",
    name: "宁波海川贸易有限公司",
    credit: "91330206MA2AJ7WQ9D",
    blackStatus: "非黑名单",
    jyyc: "无",
    yzwf: "无",
    zdsswf: "无",
    operator: "王风控",
    purpose: "供应商准入",
    reqId: "QXY20260602111835016",
    apiTime: "702ms"
  },
  {
    time: "2026-06-01 17:42:09",
    name: "深圳瑞合科技有限公司",
    credit: "91440300MA5F0R1X2Q",
    blackStatus: "黑名单",
    jyyc: "有",
    yzwf: "无",
    zdsswf: "无",
    operator: "李运营",
    purpose: "客户合作审核",
    reqId: "QXY20260601174209028",
    apiTime: "831ms"
  }
];

let operationLogs = [
  {
    id: 1,
    time: "2026-06-02 10:24:18",
    operator: "王风控",
    actionType: "手动更新",
    target: "上海启明科技有限公司",
    credit: "91310115MA1H7X8K9P",
    result: "成功",
    desc: "更新黑名单信息，命中黑名单并发现重大税收违法。"
  },
  {
    id: 2,
    time: "2026-06-01 14:13:02",
    operator: "陈管理员",
    actionType: "添加监控",
    target: "华东采购中心",
    credit: "91310000MA1K38AB2C",
    result: "成功",
    desc: "从组织管理选择内部组织并立即查询。"
  },
  {
    id: 3,
    time: "2026-05-30 09:45:11",
    operator: "王风控",
    actionType: "手动更新",
    target: "北京恒信商贸有限公司",
    credit: "91110108MA02C6P71X",
    result: "失败",
    desc: "接口返回未查询到企业信息，未覆盖最近一次成功结果。"
  },
  {
    id: 4,
    time: "2026-05-28 15:20:40",
    operator: "陈管理员",
    actionType: "保存设置",
    target: "监控设置",
    credit: "-",
    result: "成功",
    desc: "开启每周自动更新和风险变化提醒。"
  }
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const baseInfoFields = [
  ["qyName", "企业全名"],
  ["nsrsbh", "纳税人识别号"],
  ["dqdm", "地区代码"],
  ["startDate", "企业成立日期"],
  ["operName", "企业法人"],
  ["econKind", "企业类型"],
  ["econKindCode", "企业类型代码"],
  ["registCapi", "注册资本"],
  ["tags", "企业标签"],
  ["scope", "经营范围"],
  ["status", "经营状态"],
  ["title", "公司代表人职务"],
  ["address", "地址"],
  ["belongOrg", "所属工商局"],
  ["historyNames", "历史名称"],
  ["termStart", "营业开始日期"],
  ["checkDate", "核准日期"],
  ["actualCapi", "实缴资本"],
  ["termEnd", "营业结束日期"],
  ["revokeDate", "吊销日期"],
  ["endDate", "注销日期"],
  ["revokeReason", "吊销原因"],
  ["orgNo", "组织机构号"],
  ["type", "企业大类"]
];

const tagTextMap = {
  "1": "新三板",
  "6": "主板上市公司",
  "40": "暂停上市",
  "41": "终止上市",
  "9": "香港上市",
  "17": "高新企业"
};

const enterpriseTypeMap = {
  "01": "大陆企业",
  "02": "社会组织",
  "03": "机关及事业单位",
  "04": "港澳台及国外企业",
  "05": "律所及其他组织机构"
};

function padNumber(value) {
  return String(value).padStart(2, "0");
}

function formatDateTime(date = new Date()) {
  return `${date.getFullYear()}-${padNumber(date.getMonth() + 1)}-${padNumber(date.getDate())} ${padNumber(date.getHours())}:${padNumber(date.getMinutes())}:${padNumber(date.getSeconds())}`;
}

function statusTag(value) {
  const map = {
    黑名单: "danger",
    命中黑名单: "danger",
    查询失败: "warning",
    查询成功: "success",
    非黑名单: "success",
    未命中黑名单: "success",
    未查询: "gray",
    是: "danger",
    否: "success",
    有: "danger",
    无: "success",
    未知: "gray"
  };
  return `<span class="tag ${map[value] || ""}">${value}</span>`;
}

function queryStatusLabel(item) {
  const map = {
    SUCCESS: "查询成功",
    FAILED: "查询失败",
    NOT_QUERIED: "未查询"
  };
  return map[item.latestStatus] || "未查询";
}

function isBlacklistLabel(item) {
  if (item.latestStatus !== "SUCCESS") return "未知";
  if (item.blackStatus === "黑名单") return "是";
  if (item.blackStatus === "非黑名单") return "否";
  return "未知";
}

function latestErrorReason(item) {
  const failedRecord = item.history?.find((record) => record.result === "FAILED");
  return failedRecord?.error || "查询失败，未返回明确原因";
}

function queryStatusCell(item) {
  const label = queryStatusLabel(item);
  if (label !== "查询失败") return statusTag(label);
  return `<span class="status-with-tip">${statusTag(label)}<span class="tip-dot">?</span><span class="tip-bubble">${latestErrorReason(item)}</span></span>`;
}

function filteredSubjects() {
  const data = Object.fromEntries(new FormData($("#filterForm")).entries());
  return subjects.filter((item) => {
    return (
      (!data.name || item.name.includes(data.name)) &&
      (!data.credit || item.credit.includes(data.credit.toUpperCase())) &&
      (!data.subjectType || item.subjectType === data.subjectType) &&
      (!data.role || item.role === data.role) &&
      (!data.queryStatus || queryStatusLabel(item) === data.queryStatus) &&
      (!data.isBlacklist || isBlacklistLabel(item) === data.isBlacklist) &&
      (!data.jyyc || item.jyyc === data.jyyc) &&
      (!data.yzwf || item.yzwf === data.yzwf) &&
      (!data.zdsswf || item.zdsswf === data.zdsswf)
    );
  });
}

function renderMetrics() {
  $("#metricTotal").textContent = subjects.length;
  $("#metricBlack").textContent = subjects.filter((item) => item.blackStatus === "黑名单").length;
  $("#metricRisk").textContent = subjects.filter((item) => ["有"].includes(item.jyyc) || ["有"].includes(item.yzwf) || ["有"].includes(item.zdsswf)).length;
  $("#metricFailed").textContent = subjects.filter((item) => queryStatusLabel(item) === "查询失败").length;
}

function renderRows() {
  const rows = filteredSubjects();
  const visibleIds = new Set(rows.map((item) => item.id));
  selectedSubjectIds = new Set([...selectedSubjectIds].filter((id) => visibleIds.has(id)));
  $("#emptyList").classList.toggle("hidden", rows.length > 0);
  $("#subjectRows").innerHTML = rows
    .map(
      (item) => `
        <tr class="${selectedSubjectIds.has(item.id) ? "selected-row" : ""}">
          <td class="select-col">
            <input type="checkbox" class="subject-check" data-subject-check="${item.id}" aria-label="选择 ${item.name}" ${selectedSubjectIds.has(item.id) ? "checked" : ""} />
          </td>
          <td class="name-cell">${item.name}</td>
          <td class="code">${item.credit}</td>
          <td>${statusTag(item.subjectType)}</td>
          <td>${item.role || "-"}</td>
          <td>${queryStatusCell(item)}</td>
          <td>${statusTag(isBlacklistLabel(item))}</td>
          <td>${statusTag(item.jyyc)}</td>
          <td>${statusTag(item.yzwf)}</td>
          <td>${statusTag(item.zdsswf)}</td>
          <td>${item.latestQueryTime}</td>
          <td>${item.latestUser}</td>
          <td>${item.createdAt || "-"}</td>
          <td>${item.createdBy || "-"}</td>
          <td>
            <div class="row-actions">
              <button data-action="detail" data-id="${item.id}">详情</button>
              <button data-action="update" data-id="${item.id}">更新</button>
              <button data-action="edit" data-id="${item.id}">编辑</button>
              <button class="danger-action" data-action="remove" data-id="${item.id}">移除</button>
            </div>
          </td>
        </tr>
      `
    )
    .join("");
  syncSelectionControls(rows);
}

function renderList() {
  renderMetrics();
  renderRows();
}

function syncSelectionControls(rows = filteredSubjects()) {
  const selectAll = $("#selectAllSubjects");
  if (!selectAll) return;
  const visibleIds = rows.map((item) => item.id);
  const selectedVisibleCount = visibleIds.filter((id) => selectedSubjectIds.has(id)).length;
  selectAll.checked = visibleIds.length > 0 && selectedVisibleCount === visibleIds.length;
  selectAll.indeterminate = selectedVisibleCount > 0 && selectedVisibleCount < visibleIds.length;
  $("#batchBtn").textContent = selectedSubjectIds.size ? `批量更新(${selectedSubjectIds.size})` : "批量更新";
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.remove("hidden");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.add("hidden"), 2600);
}

function openModal(id) {
  $(`#${id}`).classList.remove("hidden");
  $(`#${id}`).setAttribute("aria-hidden", "false");
}

function closeModal(id) {
  $(`#${id}`).classList.add("hidden");
  $(`#${id}`).setAttribute("aria-hidden", "true");
}

function syncAutoUpdateConfig() {
  const autoUpdate = document.querySelector('#monitorSettingsForm input[name="autoUpdate"]');
  const config = $("#autoUpdateConfig");
  if (!autoUpdate || !config) return;
  config.classList.toggle("hidden", !autoUpdate.checked);
}

function switchPage(page) {
  $$(".page").forEach((node) => node.classList.remove("active"));
  $(`#${page}`).classList.add("active");
  activePageId = page;
  syncNav(page);
  renderPageTabs();
  if (page === "operationLogsPage") renderOperationLogs();
}

function openPageTab(page) {
  if (!openedTabs.includes(page)) openedTabs.push(page);
  switchPage(page);
}

function closePageTab(page) {
  if (openedTabs.length === 1) return;
  const closingActive = activePageId === page;
  openedTabs = openedTabs.filter((item) => item !== page);
  if (closingActive) switchPage(openedTabs[openedTabs.length - 1]);
  renderPageTabs();
}

function renderPageTabs() {
  $("#pageTabs").innerHTML = openedTabs
    .map(
      (page) => `
        <button class="page-tab ${page === activePageId ? "active" : ""}" data-tab-page="${page}">
          <span>${pageMeta[page]}</span>
          ${openedTabs.length > 1 ? `<span class="page-tab-close" data-close-tab="${page}">×</span>` : ""}
        </button>
      `
    )
    .join("");
}

function syncNav(page) {
  $$(".nav-item").forEach((node) => node.classList.toggle("active", node.dataset.page === page));
}

function activateNav(button) {
  openPageTab(button.dataset.page);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openDetail(id) {
  currentSubject = subjects.find((item) => item.id === Number(id));
  renderDetail();
  openModal("detailPage");
}

function riskLabel(item) {
  if (item.blackStatus === "黑名单") return "命中黑名单";
  if (item.blackStatus === "非黑名单") return "未命中黑名单";
  return item.blackStatus;
}

function normalizeBaseValue(key, value) {
  if (value === null || value === undefined || value === "") return "-";
  if (key === "tags") {
    return String(value)
      .split(/[,\s]+/)
      .filter(Boolean)
      .map((code) => tagTextMap[code] || code)
      .join("、") || "-";
  }
  if (key === "type") return enterpriseTypeMap[value] || value;
  return value;
}

function renderBaseInfo(info) {
  if (!Object.keys(info).length) {
    return `<div class="info-item"><span>提示</span><strong>该对象尚未完成成功查询，暂无企业基础信息。</strong></div>`;
  }
  return baseInfoFields
    .map(([key, label]) => `<div class="info-item"><span>${label}</span><strong>${normalizeBaseValue(key, info[key])}</strong></div>`)
    .join("");
}

function renderDetail() {
  const item = currentSubject;
  $("#detailName").textContent = item.name;
  $("#detailMeta").textContent = `${item.credit} · ${item.subjectType}${item.role ? ` · ${item.role}` : ""}${item.org ? ` · ${item.org}` : ""} · 最近查询：${item.latestQueryTime} · ${item.latestUser}`;
  const notice = $("#detailNotice");
  notice.classList.toggle("hidden", item.latestStatus !== "FAILED");
  notice.textContent = "最近一次查询失败，页面继续展示最近一次成功查询结果，失败记录已写入查询历史。";
  $("#riskCards").innerHTML = [
    ["经营异常", item.jyyc === "有" ? "有风险" : item.jyyc === "无" ? "无风险" : "未知"],
    ["严重违法", item.yzwf === "有" ? "有风险" : item.yzwf === "无" ? "无风险" : "未知"],
    ["重大税收违法", item.zdsswf === "有" ? "有风险" : item.zdsswf === "无" ? "无风险" : "未知"]
  ]
    .map(([title, value]) => `<div class="risk-card ${value.includes("命中") || value.includes("有风险") ? "danger" : ""}"><span>${title}</span><strong>${value}</strong></div>`)
    .join("");

  $("#baseInfo").innerHTML = renderBaseInfo(item.baseInfo);

  renderRiskDetails(item, {
    jyyc: "#jyycDetail",
    yzwf: "#yzwfDetail",
    zdsswf: "#zdsswfDetail"
  });
}

function tableHtml(headers, rows, emptyText) {
  if (!rows.length) return `<div class="empty">${emptyText}</div>`;
  return `
    <div class="table-wrap">
      <table>
        <thead><tr>${headers.map((item) => `<th>${item}</th>`).join("")}</tr></thead>
        <tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody>
      </table>
    </div>
  `;
}

function renderRiskDetails(item, targets) {
  $(targets.jyyc).innerHTML = tableHtml(
    ["列入日期", "列入原因", "移出日期", "移出原因", "作出决定机关", "省份", "注册号", "状态"],
    item.risks.jyyc,
    "暂无经营异常记录"
  );
  $(targets.yzwf).innerHTML = tableHtml(
    ["列入严重违法失信企业名单（黑名单）原因", "列入日期", "作出决定机关（列入）", "移出严重违法失信企业名单（黑名单）原因", "移除日期", "作出决定机关（移出）", "状态"],
    item.risks.yzwf,
    "暂无严重违法记录"
  );
  $(targets.zdsswf).innerHTML = tableHtml(
    ["纳税人名称", "纳税人识别号", "组织机构代码", "注册地址", "法定代表人或负责人", "直接责任财务服务则", "直接责任中介机构信息及其从业人员", "案件性质", "主要违法事实", "相关依据或处罚情况", "原文链接", "创建时间", "更新时间", "发生时间", "状态"],
    item.risks.zdsswf,
    "暂无重大税收违法记录"
  );
}

function openHistory(index) {
  const record = currentSubject.history[Number(index)];
  $("#historyDrawer .drawer-head h2").textContent = "历史查询详情";
  $("#drawerSub").textContent = `${record.time} · ${record.user} · ${record.type}`;
  $("#drawerBody").innerHTML = `
    <section class="drawer-section">
      <h3>查询信息</h3>
      <div class="info-grid">
        <div class="info-item"><span>查询时间</span><strong>${record.time}</strong></div>
        <div class="info-item"><span>查询人</span><strong>${record.user}</strong></div>
        <div class="info-item"><span>查询方式</span><strong>${record.type}</strong></div>
        <div class="info-item"><span>请求参数</span><strong>{"qyName":"${currentSubject.credit}"}</strong></div>
      </div>
    </section>
    <section class="drawer-section">
      <h3>接口信息</h3>
      <div class="info-grid">
        <div class="info-item"><span>接口名称</span><strong>${currentSubject.apiName}</strong></div>
        <div class="info-item"><span>接口流水号</span><strong>${record.reqId}</strong></div>
        <div class="info-item"><span>接口耗时</span><strong>${record.apiTime}</strong></div>
        <div class="info-item"><span>是否成功</span><strong>${record.result}</strong></div>
      </div>
    </section>
    <section class="drawer-section">
      <h3>查询结论</h3>
      <div class="info-grid">
        <div class="info-item"><span>是否黑名单</span><strong>${record.isHmd}</strong></div>
        <div class="info-item"><span>三类风险标识</span><strong>${record.risk}</strong></div>
        <div class="info-item"><span>失败原因</span><strong>${record.error}</strong></div>
      </div>
    </section>
    <section class="drawer-section">
      <h3>原始响应</h3>
      <pre>${JSON.stringify(record.raw, null, 2)}</pre>
    </section>
  `;
  $("#historyDrawer").classList.remove("hidden");
}

function validateCredit(value) {
  return /^[0-9A-Z]{18}$/.test(value);
}

function submitAdd(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = Object.fromEntries(new FormData(form).entries());
  const error = $("#addError");
  error.classList.add("hidden");

  let name;
  let credit;
  let role = "";
  let remark = "";
  let subjectType = currentType;

  if (currentType === "内部组织") {
    if (!data.org) return showFormError("请选择内部组织");
    [name, credit] = data.org.split("|");
    if (!credit) return showFormError("该内部组织无纳税人识别号，请先补充组织信息");
    remark = data.internalRemark || "";
  } else {
    name = (data.enterpriseName || "").trim();
    credit = (data.enterpriseCredit || "").trim().toUpperCase();
    role = data.enterpriseRole || "";
    remark = data.externalRemark || "";
    if (!name) return showFormError("请输入企业名称");
    if (!credit) return showFormError("请输入纳税人识别号");
    if (!validateCredit(credit)) return showFormError("请输入正确的纳税人识别号");
  }

  if (subjects.some((item) => item.credit === credit)) return showFormError("该企业已纳入黑名单监控");

  const queryNow = form.queryNow.checked;
  const newItem = createSubject({ name, credit, role, remark, subjectType, queryNow });
  subjects.unshift(newItem);
  closeModal("addModal");
  form.reset();
  renderList();
  addOperationLog({
    actionType: "添加监控",
    target: newItem.name,
    credit: newItem.credit,
    result: "成功",
    desc: `${newItem.subjectType}已纳入监控${queryNow ? "，并完成立即查询" : "，暂未查询"}。`
  });
  showToast(queryNow ? "监控对象已添加，并完成模拟查询" : "监控对象已添加，当前状态为未查询");
}

function showFormError(message) {
  $("#addError").textContent = message;
  $("#addError").classList.remove("hidden");
}

function openEditModal(id) {
  const item = subjects.find((subject) => subject.id === Number(id));
  if (!item) return;
  const form = $("#editForm");
  form.id.value = item.id;
  const isInternal = item.subjectType === "内部组织";
  $("#editInternalType").classList.toggle("active", isInternal);
  $("#editExternalType").classList.toggle("active", !isInternal);
  $("#editInternalForm").classList.toggle("hidden", !isInternal);
  $("#editExternalForm").classList.toggle("hidden", isInternal);

  if (isInternal) {
    form.orgName.value = item.name;
    form.internalCredit.value = item.credit;
    form.internalRemark.value = item.remark || "";
  } else {
    form.enterpriseName.value = item.name;
    form.enterpriseCredit.value = item.credit;
    form.enterpriseRole.value = item.role || "其他";
    form.externalRemark.value = item.remark || "";
  }

  openModal("editModal");
}

function submitEdit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const item = subjects.find((subject) => subject.id === Number(form.id.value));
  if (!item) return;
  const oldRemark = item.remark || "";
  item.remark = item.subjectType === "内部组织" ? form.internalRemark.value : form.externalRemark.value;
  closeModal("editModal");
  renderList();
  if (currentSubject?.id === item.id) {
    currentSubject = item;
    renderDetail();
  }
  addOperationLog({
    actionType: "编辑监控",
    target: item.name,
    credit: item.credit,
    result: "成功",
    desc: `备注由“${oldRemark || "-"}”修改为“${item.remark || "-"}”。`
  });
  showToast("备注已保存");
}

function addOperationLog({ actionType, target, credit, result, desc }) {
  operationLogs.unshift({
    id: Date.now(),
    time: formatDateTime(),
    operator: currentUserName,
    actionType,
    target,
    credit,
    result,
    desc
  });
  renderOperationLogs();
}

function createSubject({ name, credit, role, remark, subjectType, queryNow }) {
  const time = formatDateTime();
  const success = queryNow;
  return {
    id: Date.now(),
    name,
    credit,
    subjectType,
    role,
    blackStatus: success ? "非黑名单" : "未查询",
    jyyc: success ? "无" : "未知",
    yzwf: success ? "无" : "未知",
    zdsswf: success ? "无" : "未知",
    latestStatus: success ? "SUCCESS" : "NOT_QUERIED",
    latestQueryTime: success ? time : "-",
    latestUser: success ? currentUserName : "-",
    createdAt: time,
    createdBy: currentUserName,
    remark,
    apiName: "POST /v1/HMD/isHmdxx",
    reqId: success ? `QXY${Date.now()}` : "-",
    apiTime: success ? "688ms" : "-",
    org: subjectType === "内部组织" ? "组织管理" : "",
    baseInfo: success
      ? {
          dqdm: "-",
          qyName: name,
          nsrsbh: credit,
          startDate: "-",
          operName: "-",
          econKind: subjectType === "内部组织" ? "内部组织" : "外部企业",
          econKindCode: "-",
          registCapi: "-",
          tags: null,
          scope: "-",
          status: "存续",
          title: "-",
          address: "-",
          belongOrg: "-",
          historyNames: "-",
          termStart: "-",
          checkDate: "-",
          actualCapi: "-",
          termEnd: "-",
          revokeDate: "-",
          endDate: "-",
          revokeReason: "-",
          orgNo: "-",
          type: subjectType === "内部组织" ? "03" : "01"
        }
      : {},
    risks: { jyyc: [], yzwf: [], zdsswf: [] },
    history: success
      ? [
          {
            time,
            user: currentUserName,
            type: "CREATE_QUERY",
            result: "SUCCESS",
            isHmd: "否",
            risk: "经营异常：无 / 严重违法：无 / 重大税收违法：无",
            reqId: `QXY${Date.now()}`,
            apiTime: "688ms",
            error: "-",
            raw: { success: true, isHmd: false, jyycFlag: 0, yzwfFlag: 0, zdsswfFlag: 0 }
          }
        ]
      : []
  };
}

function requestUpdate(id) {
  pendingUpdateId = Number(id);
  const item = subjects.find((subject) => subject.id === pendingUpdateId);
  $("#confirmText").textContent = `确认重新查询“${item.name}”最新黑名单信息？`;
  openModal("confirmModal");
}

function performUpdate() {
  const item = subjects.find((subject) => subject.id === pendingUpdateId);
  const button = $("#confirmUpdate");
  button.disabled = true;
  button.textContent = "更新中...";
  setTimeout(() => {
    applyQuerySuccess(item, "MANUAL_UPDATE");
    closeModal("confirmModal");
    button.disabled = false;
    button.textContent = "确认更新";
    renderList();
    if (!$("#detailPage").classList.contains("hidden")) renderDetail();
    addOperationLog({
      actionType: "手动更新",
      target: item.name,
      credit: item.credit,
      result: "成功",
      desc: "手动调用企享云接口刷新黑名单状态。"
    });
    showToast("更新成功，已新增查询历史并刷新最新状态");
  }, 850);
}

function applyQuerySuccess(item, queryType = "MANUAL_UPDATE") {
  const time = formatDateTime();
  item.blackStatus = "非黑名单";
  item.jyyc = "无";
  item.yzwf = "无";
  item.zdsswf = "无";
  item.latestStatus = "SUCCESS";
  item.latestQueryTime = time;
  item.latestUser = currentUserName;
  item.reqId = `QXY${Date.now()}${Math.floor(Math.random() * 100)}`;
  item.apiTime = `${580 + Math.floor(Math.random() * 240)}ms`;
  item.history.unshift({
    time,
    user: currentUserName,
    type: queryType,
    result: "SUCCESS",
    isHmd: "否",
    risk: "经营异常：无 / 严重违法：无 / 重大税收违法：无",
    reqId: item.reqId,
    apiTime: item.apiTime,
    error: "-",
    raw: { success: true, isHmd: false, jyycFlag: 0, yzwfFlag: 0, zdsswfFlag: 0 }
  });
}

function batchUpdateSelected() {
  if (!selectedSubjectIds.size) {
    showToast("请先勾选需要批量更新的监控对象");
    return;
  }
  const selectedItems = subjects.filter((item) => selectedSubjectIds.has(item.id));
  $("#batchBtn").disabled = true;
  $("#batchBtn").textContent = "批量更新中...";
  setTimeout(() => {
    selectedItems.forEach((item) => applyQuerySuccess(item, "LIST_UPDATE"));
    addOperationLog({
      actionType: "手动更新",
      target: `${selectedItems.length} 个监控对象`,
      credit: "-",
      result: "成功",
      desc: `批量更新：${selectedItems.map((item) => item.name).join("、")}。`
    });
    selectedSubjectIds.clear();
    renderList();
    $("#batchBtn").disabled = false;
    showToast(`已完成 ${selectedItems.length} 个监控对象的批量更新`);
  }, 900);
}

function simulateRiskQuery({ queryValue, purpose }) {
  const normalized = queryValue.trim().toUpperCase();
  const matched = subjects.find((item) => item.credit === normalized || item.name.includes(queryValue.trim()));
  const isRisky = matched ? matched.blackStatus === "黑名单" : normalized.endsWith("X") || queryValue.includes("瑞合");
  const now = formatDateTime();
  const name = matched?.name || queryValue.trim();
  const credit = matched?.credit || (validateCredit(normalized) ? normalized : "91310000SIMULATE1A");
  const queryPurpose = purpose || "黑名单查询";
  return {
    time: now,
    name,
    credit,
    blackStatus: isRisky ? "黑名单" : "非黑名单",
    jyyc: isRisky ? "有" : "无",
    yzwf: "无",
    zdsswf: isRisky ? "有" : "无",
    operator: currentUserName,
    purpose: queryPurpose,
    reqId: `QXY${Date.now()}`,
    apiTime: `${620 + Math.floor(Math.random() * 260)}ms`
  };
}

function buildQuerySubject(record) {
  const matched = subjects.find((item) => item.credit === record.credit || item.name === record.name);
  if (matched) {
    return {
      ...matched,
      latestQueryTime: record.time,
      latestUser: record.operator,
      reqId: record.reqId,
      apiTime: record.apiTime
    };
  }
  return {
    id: `query-${Date.now()}`,
    name: record.name,
    credit: record.credit,
    subjectType: "外部企业",
    role: "其他",
    blackStatus: record.blackStatus,
    jyyc: record.jyyc,
    yzwf: record.yzwf,
    zdsswf: record.zdsswf,
    latestStatus: "SUCCESS",
    latestQueryTime: record.time,
    latestUser: record.operator,
    remark: "单次黑名单查询结果",
    reqId: record.reqId,
    apiTime: record.apiTime,
    baseInfo: {
      dqdm: "-",
      qyName: record.name,
      nsrsbh: record.credit,
      startDate: "-",
      operName: "-",
      econKind: "外部企业",
      econKindCode: "-",
      registCapi: "-",
      tags: null,
      scope: "-",
      status: "存续",
      title: "-",
      address: "-",
      belongOrg: "-",
      historyNames: "-",
      termStart: "-",
      checkDate: "-",
      actualCapi: "-",
      termEnd: "-",
      revokeDate: "-",
      endDate: "-",
      revokeReason: "-",
      orgNo: "-",
      type: "01"
    },
    risks: { jyyc: [], yzwf: [], zdsswf: [] },
    history: []
  };
}

function renderRiskQuery(subject) {
  latestRiskQuery = subject;
  $("#riskQueryEmpty").classList.add("hidden");
  $("#riskQueryDetail").classList.remove("hidden");
  $("#queryDetailName").textContent = subject.name;
  $("#queryDetailMeta").textContent = `${subject.credit} · ${subject.subjectType}${subject.role ? ` · ${subject.role}` : ""} · 最近查询：${subject.latestQueryTime} · ${subject.latestUser}`;
  const notice = $("#queryDetailNotice");
  notice.classList.toggle("hidden", subject.latestStatus !== "FAILED");
  notice.textContent = "最近一次查询失败，页面继续展示最近一次成功查询结果，失败记录已写入查询历史。";
  $("#queryRiskCards").innerHTML = [
    ["经营异常", subject.jyyc === "有" ? "有风险" : subject.jyyc === "无" ? "无风险" : "未知"],
    ["严重违法", subject.yzwf === "有" ? "有风险" : subject.yzwf === "无" ? "无风险" : "未知"],
    ["重大税收违法", subject.zdsswf === "有" ? "有风险" : subject.zdsswf === "无" ? "无风险" : "未知"]
  ]
    .map(([title, value]) => `<div class="risk-card ${value.includes("命中") || value.includes("有风险") ? "danger" : ""}"><span>${title}</span><strong>${value}</strong></div>`)
    .join("");
  $("#queryBaseInfo").innerHTML = renderBaseInfo(subject.baseInfo);
  renderRiskDetails(subject, {
    jyyc: "#queryJyycDetail",
    yzwf: "#queryYzwfDetail",
    zdsswf: "#queryZdsswfDetail"
  });
}

function renderRiskQueryHistory() {
  if (!$("#riskQueryHistory")) return;
  $("#riskQueryHistory").innerHTML = tableHtml(
    ["查询时间", "企业名称", "纳税人识别号", "查询用途", "黑名单状态", "经营异常", "严重违法", "重大税收违法", "接口流水号"],
    riskQueryRecords.map((record) => [
      record.time,
      record.name,
      `<span class="code">${record.credit}</span>`,
      record.purpose,
      statusTag(record.blackStatus),
      statusTag(record.jyyc),
      statusTag(record.yzwf),
      statusTag(record.zdsswf),
      record.reqId
    ]),
    "暂无单次查询记录"
  );
}

function submitRiskQuery(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = Object.fromEntries(new FormData(form).entries());
  const value = (data.queryValue || "").trim();
  const error = $("#riskQueryError");
  error.classList.add("hidden");
  if (!value) {
    error.textContent = "请输入查询内容";
    error.classList.remove("hidden");
    return;
  }

  const button = $("#riskQueryBtn");
  button.disabled = true;
  button.textContent = "查询中...";
  setTimeout(() => {
    const record = simulateRiskQuery(data);
    const subject = buildQuerySubject(record);
    riskQueryRecords.unshift(record);
    renderRiskQuery(subject);
    addOperationLog({
      actionType: "单次查询",
      target: record.name,
      credit: record.credit,
      result: "成功",
      desc: `单次风险查询，查询用途：${record.purpose}。`
    });
    button.disabled = false;
    button.textContent = "查询";
    showToast("查询完成，结果已展示在页面中");
  }, 720);
}

function resetRiskQuery() {
  $("#riskQueryForm").reset();
  $("#riskQueryError").classList.add("hidden");
  $("#riskQueryDetail").classList.add("hidden");
  $("#riskQueryEmpty").classList.remove("hidden");
  latestRiskQuery = null;
}

function addLatestQueryToMonitor() {
  if (!latestRiskQuery) {
    showToast("请先完成一次风险查询");
    return;
  }
  if (subjects.some((item) => item.credit === latestRiskQuery.credit)) {
    showToast("该企业已纳入黑名单监控");
    return;
  }
  const item = createSubject({
    name: latestRiskQuery.name,
    credit: latestRiskQuery.credit,
    role: latestRiskQuery.role || "其他",
    remark: "由单次风险查询纳入监控",
    subjectType: latestRiskQuery.subjectType || "外部企业",
    queryNow: true
  });
  item.blackStatus = latestRiskQuery.blackStatus;
  item.jyyc = latestRiskQuery.jyyc;
  item.yzwf = latestRiskQuery.yzwf;
  item.zdsswf = latestRiskQuery.zdsswf;
  item.baseInfo = latestRiskQuery.baseInfo;
  item.risks = latestRiskQuery.risks;
  subjects.unshift(item);
  renderList();
  addOperationLog({
    actionType: "添加监控",
    target: item.name,
    credit: item.credit,
    result: "成功",
    desc: "由单次查询结果纳入外部企业监控。"
  });
  showToast("已纳入监控对象列表");
}

function renderOperationLogs() {
  if (!$("#operationLogRows")) return;
  const data = Object.fromEntries(new FormData($("#logFilterForm")).entries());
  const rows = operationLogs.filter((log) => {
    return (
      (!data.operator || log.operator.includes(data.operator)) &&
      (!data.target || log.target.includes(data.target)) &&
      (!data.actionType || log.actionType === data.actionType) &&
      (!data.result || log.result === data.result)
    );
  });
  $("#emptyLogs").classList.toggle("hidden", rows.length > 0);
  $("#operationLogRows").innerHTML = rows
    .map(
      (log) => `
        <tr>
          <td class="name-cell">${log.target}</td>
          <td class="code">${log.credit}</td>
          <td>${statusTag(log.actionType)}</td>
          <td>${log.operator}</td>
          <td>${log.time}</td>
          <td>${statusTag(log.result === "成功" ? "非黑名单" : "查询失败").replace("非黑名单", "成功").replace("查询失败", "失败")}</td>
        </tr>
      `
    )
    .join("");
}

function openLogDetail(id) {
  const log = operationLogs.find((item) => item.id === Number(id));
  $("#historyDrawer .drawer-head h2").textContent = "操作日志详情";
  $("#drawerSub").textContent = `${log.time} · ${log.operator} · ${log.actionType}`;
  $("#drawerBody").innerHTML = `
    <section class="drawer-section">
      <h3>操作信息</h3>
      <div class="info-grid">
        <div class="info-item"><span>操作时间</span><strong>${log.time}</strong></div>
        <div class="info-item"><span>操作人</span><strong>${log.operator}</strong></div>
        <div class="info-item"><span>操作类型</span><strong>${log.actionType}</strong></div>
        <div class="info-item"><span>操作结果</span><strong>${log.result}</strong></div>
        <div class="info-item"><span>企业名称</span><strong>${log.target}</strong></div>
        <div class="info-item"><span>纳税人识别号</span><strong>${log.credit}</strong></div>
      </div>
    </section>
    <section class="drawer-section">
      <h3>说明</h3>
      <p>${log.desc}</p>
    </section>
  `;
  $("#historyDrawer").classList.remove("hidden");
}

document.addEventListener("click", (event) => {
  const closeId = event.target.dataset.close;
  if (closeId) closeModal(closeId);

  if (event.target.dataset.closeTab) {
    event.stopPropagation();
    closePageTab(event.target.dataset.closeTab);
    return;
  }

  const tabButton = event.target.closest("[data-tab-page]");
  if (tabButton) {
    openPageTab(tabButton.dataset.tabPage);
    return;
  }

  if (event.target.dataset.subjectCheck) {
    const checkedId = Number(event.target.dataset.subjectCheck);
    if (event.target.checked) {
      selectedSubjectIds.add(checkedId);
    } else {
      selectedSubjectIds.delete(checkedId);
    }
    renderRows();
  }

  const action = event.target.dataset.action;
  const id = event.target.dataset.id;
  if (action === "detail") openDetail(id);
  if (action === "update") requestUpdate(id);
  if (action === "edit") openEditModal(id);
  if (action === "remove") {
    const removed = subjects.find((item) => item.id === Number(id));
    const index = subjects.findIndex((item) => item.id === Number(id));
    if (index >= 0) {
      subjects.splice(index, 1);
      renderList();
      addOperationLog({
        actionType: "移除监控",
        target: removed.name,
        credit: removed.credit,
        result: "成功",
        desc: "从默认监控列表移除，历史查询记录保留。"
      });
      showToast("已移除监控对象，历史记录保留在业务库中。");
    }
  }

  if (event.target.dataset.history) openHistory(event.target.dataset.history);
  if (event.target.dataset.log) openLogDetail(event.target.dataset.log);
});

$$(".nav-item").forEach((button) => {
  button.addEventListener("click", () => activateNav(button));
});

$("#openAddBtn").addEventListener("click", () => openModal("addModal"));
$("#refreshBtn").addEventListener("click", () => {
  renderList();
  showToast("列表已刷新");
});
$("#batchBtn").addEventListener("click", batchUpdateSelected);
$("#selectAllSubjects").addEventListener("change", (event) => {
  const visibleRows = filteredSubjects();
  if (event.target.checked) {
    visibleRows.forEach((item) => selectedSubjectIds.add(item.id));
  } else {
    visibleRows.forEach((item) => selectedSubjectIds.delete(item.id));
  }
  renderRows();
});
$("#resetFilters").addEventListener("click", () => {
  $("#filterForm").reset();
  renderRows();
});
$("#filterForm").addEventListener("input", renderRows);
$("#filterForm").addEventListener("change", renderRows);
$("#backToList").addEventListener("click", () => closeModal("detailPage"));
$("#confirmUpdate").addEventListener("click", performUpdate);
$("#addForm").addEventListener("submit", submitAdd);
$("#editForm").addEventListener("submit", submitEdit);
$("#riskQueryForm").addEventListener("submit", submitRiskQuery);
$("#resetRiskQuery").addEventListener("click", resetRiskQuery);
$("#saveSettings").addEventListener("click", () => {
  addOperationLog({
    actionType: "保存设置",
    target: "监控设置",
    credit: "-",
    result: "成功",
    desc: "保存自动更新策略配置。"
  });
  showToast("监控设置已保存");
});
$("#resetSettings").addEventListener("click", () => {
  $("#monitorSettingsForm").reset();
  syncAutoUpdateConfig();
  addOperationLog({
    actionType: "恢复默认",
    target: "监控设置",
    credit: "-",
    result: "成功",
    desc: "恢复更新策略默认值。"
  });
  showToast("已恢复更新策略默认值");
});
document.querySelector('#monitorSettingsForm input[name="autoUpdate"]').addEventListener("change", syncAutoUpdateConfig);
$("#logFilterForm").addEventListener("input", renderOperationLogs);
$("#logFilterForm").addEventListener("change", renderOperationLogs);
$("#resetLogFilters").addEventListener("click", () => {
  $("#logFilterForm").reset();
  renderOperationLogs();
});

$$(".switch").forEach((button) => {
  button.addEventListener("click", () => {
    currentType = button.dataset.type;
    $$(".switch").forEach((node) => node.classList.toggle("active", node === button));
    $("#internalForm").classList.toggle("hidden", currentType !== "内部组织");
    $("#externalForm").classList.toggle("hidden", currentType !== "外部企业");
    $("#addError").classList.add("hidden");
  });
});

renderList();
renderOperationLogs();
syncAutoUpdateConfig();
renderPageTabs();
