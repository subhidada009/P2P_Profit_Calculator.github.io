// script.js
const translations = {
    ar: {
        labels: ["إجمالي الربح/الخسارة", "إجمالي المشتريات", "إجمالي المبيعات", "إجمالي العمولات", "صافي الربح بعد العمولات", "صفقات شراء", "صفقات بيع", "إجمالي الكمية المتبقية", "تكلفة شراء المتبقي", "قيمته بسعر السوق", "الربح/الخسارة غير المحققة"],
        headers: ["الرقم", "تاريخ", "العملية", "السعر", "الربح", "رقم المعاملة", "اسم الزبون", "حذف"],
        all: "كل الصفقات",
        buys: "الشراء",
        sells: "البيع",
        title: "حاسبة الأرباح P2P",
        marketPrice: "سعر السوق",
        lastSold: "آخر سعر بيع",
        avgBuy: "متوسط سعر الشراء",
        print: "طباعة النتائج",
        addManual: "إضافة يدوية",
        refresh: "تحديث",
        search: "بحث",
        close: "إغلاق",
        searchPlaceholder: "ابحث برقم الطلب...",
        currencies: {
            USD: "دولار أمريكي",
            EUR: "يورو",
            GBP: "باوند إنجليزي",
            AED: "درهم إماراتي",
            SAR: "ريال سعودي",
            QAR: "ريال قطري",
            KWD: "دينار كويتي",
            OMR: "ريال عماني",
            JOD: "دينار أردني",
            EGP: "جنيه مصري",
            MAD: "درهم مغربي",
            TRY: "ليرة تركية (TL)",
            UAH: "هريفنيا أوكرانية",
            RUB: "روبل روسي",
            IDR: "روبية إندونيسية",
            INR: "روبية هندية",
            NGN: "نايرا نيجيري",
            ZAR: "راند جنوب أفريقي",
            PHP: "بيزو فلبيني",
            THB: "บาท تايلندي",
            CNY: "يوان صيني",
            JPY: "ين ياباني",
            KRW: "وون كوري",
            PKR: "روبية باكستانية",
            BRL: "ريال برازيلي",
            AUD: "دولار أسترالي",
            CAD: "دولار كندي"
        }
    },
    en: {
        labels: ["Total Profit/Loss", "Total Buys", "Total Sells", "Total Fees", "Net Profit After Fees", "Buy Trades", "Sell Trades", "Remaining Quantity", "Remaining Cost", "Market Value", "Unrealized Profit/Loss"],
        headers: ["ID", "Time", "Order", "Price", "Profit", "Order No.", "Counterparty", "Delete"],
        all: "All Trades",
        buys: "Buys",
        sells: "Sells",
        title: "P2P Profit Calculator",
        marketPrice: "Market Price",
        lastSold: "Last Sold Price",
        avgBuy: "Avg Buy Price (Remaining)",
        print: "Print Results",
        addManual: "Add Manual",
        refresh: "Refresh",
        search: "Search",
        close: "Close",
        searchPlaceholder: "Search by Order No...",
        currencies: {
            USD: "USD",
            EUR: "EUR",
            GBP: "GBP",
            AED: "AED",
            SAR: "SAR",
            QAR: "QAR",
            KWD: "KWD",
            OMR: "OMR",
            JOD: "JOD",
            EGP: "EGP",
            MAD: "MAD",
            TRY: "TRY (TL)",
            UAH: "UAH",
            RUB: "RUB",
            IDR: "IDR",
            INR: "INR",
            NGN: "NGN",
            ZAR: "ZAR",
            PHP: "PHP",
            THB: "THB",
            CNY: "CNY",
            JPY: "JPY",
            KRW: "KRW",
            PKR: "PKR",
            BRL: "BRL",
            AUD: "AUD",
            CAD: "CAD"
        }
    },
    // يمكنك إضافة fr, de, es, ru, tr كما هي في الملف الأصلي...
};

document.addEventListener("DOMContentLoaded", function() {
    let LANG = "en";
    let originalData = [];
    let tradeList = [];
    let summaryValues = Array(11).fill("0.00");
    let viewMode = "all";
    let sortKey = null;
    let sortDirection = 1;

    const assetCurrencySelect = document.getElementById("assetCurrency");
    const fiatCurrencySelect = document.getElementById("fiatCurrency");
    const marketPriceInput = document.getElementById("marketPrice");
    const labelLastSold = document.getElementById("labelLastSold");
    const labelAvgBuy = document.getElementById("labelAvgBuy");
    const themeToggle = document.getElementById("themeToggle");
    const toggleSearchBtn = document.getElementById("toggleSearch");
    const searchInput = document.getElementById("searchOrderNo");

    function toggleTheme() {
        const body = document.body;
        const isLight = body.classList.contains("light-theme");
        if (isLight) {
            body.classList.remove("light-theme");
            body.classList.add("dark-theme");
            themeToggle.textContent = "🌓 Light Mode";
            localStorage.setItem("theme", "dark");
        } else {
            body.classList.remove("dark-theme");
            body.classList.add("light-theme");
            themeToggle.textContent = "🌙 Dark Mode";
            localStorage.setItem("theme", "light");
        }
    }

    function initTheme() {
        const savedTheme = localStorage.getItem("theme");
        const body = document.body;
        if (savedTheme === "dark") {
            body.classList.add("dark-theme");
            themeToggle.textContent = "🌓 Light Mode";
        } else {
            body.classList.add("light-theme");
            themeToggle.textContent = "🌙 Dark Mode";
        }
    }

    function fillFiatOptions() {
        const t = translations[LANG];
        fiatCurrencySelect.innerHTML = "";
        Object.keys(t.currencies).forEach(code => {
            const option = document.createElement("option");
            option.value = code;
            option.textContent = t.currencies[code];
            fiatCurrencySelect.appendChild(option);
        });
    }

    function updateLang() {
        const t = translations[LANG];
        document.getElementById("title").textContent = t.title;
        const headers = document.querySelectorAll(".table-header > div");
        const cols = t.headers;
        headers.forEach((h, i) => {
            if (i < 8) h.textContent = cols[i];
        });
        document.getElementById("showAll").textContent = t.all;
        document.getElementById("showBuys").textContent = t.buys;
        document.getElementById("showSells").textContent = t.sells;
        document.getElementById("printResults").textContent = t.print;
        document.getElementById("addManualTrade").textContent = t.addManual;
        document.getElementById("refresh").textContent = t.refresh;
        marketPriceInput.placeholder = t.marketPrice;
        labelLastSold.textContent = t.lastSold;
        labelAvgBuy.textContent = t.avgBuy;
        fillFiatOptions();
        renderTrades();
        renderResults();
        updateSearchLang();
    }

    function updateSearchLang() {
        const t = translations[LANG];
        toggleSearchBtn.textContent = "🔍 " + t.search;
        searchInput.placeholder = t.searchPlaceholder;
    }

    function filterTrades() {
        const filterValue = searchInput.value.trim().toLowerCase();
        const rows = document.querySelectorAll(".trade-row");
        rows.forEach(row => {
            const orderNoCell = row.querySelector(".col-number");
            const orderNoText = orderNoCell ? orderNoCell.textContent.trim().toLowerCase() : "";
            if (!filterValue || orderNoText.includes(filterValue)) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    }

    toggleSearchBtn.addEventListener("click", () => {
        const isHidden = searchInput.style.display === "none";
        searchInput.style.display = isHidden ? "inline-block" : "none";
        searchInput.value = "";
        filterTrades();
        if (isHidden) searchInput.focus();
        const t = translations[LANG];
        toggleSearchBtn.textContent = isHidden ? "❌ " + t.close : "🔍 " + t.search;
    });

    searchInput.addEventListener("input", filterTrades);

    function setView(mode) {
        viewMode = mode;
        document.getElementById("showAll").classList.toggle("active", mode === "all");
        document.getElementById("showBuys").classList.toggle("active", mode === "buys");
        document.getElementById("showSells").classList.toggle("active", mode === "sells");
        renderTrades();
    }

    document.getElementById("showAll").addEventListener("click", () => setView("all"));
    document.getElementById("showBuys").addEventListener("click", () => setView("buys"));
    document.getElementById("showSells").addEventListener("click", () => setView("sells"));

    document.querySelectorAll(".sortable").forEach(header => {
        header.addEventListener("click", () => {
            const key = header.dataset.sort;
            if (sortKey === key) {
                sortDirection *= -1;
            } else {
                sortKey = key;
                sortDirection = 1;
            }
            tradeList.sort((a, b) => {
                let va = a[key], vb = b[key];
                if (["id", "price", "profit", "orderNo"].includes(key)) {
                    va = parseFloat(va) || 0;
                    vb = parseFloat(vb) || 0;
                } else if (key === "time") {
                    va = new Date(va).getTime();
                    vb = new Date(vb).getTime();
                } else {
                    va = String(va).toLowerCase();
                    vb = String(vb).toLowerCase();
                }
                return (va < vb ? -1 : va > vb ? 1 : 0) * sortDirection;
            });
            renderTrades();
        });
    });

    function parseCSV(text) {
        const lines = text.trim().split('\n');
        const headers = lines[0].split(',').map(h => h.trim());
        const data = [];
        for (let i = 1; i < lines.length; i++) {
            if (!lines[i].trim()) continue;
            const values = lines[i].split(',').map(v => v.trim().replace(/"/g, ''));
            const row = {};
            headers.forEach((h, idx) => {
                row[h] = values[idx] || '';
            });
            data.push(row);
        }
        return data;
    }

    function calculate(data) {
        const asset = assetCurrencySelect.value;
        const fiat = fiatCurrencySelect.value;
        const completed = data.filter(r => (r.Status || '').toLowerCase() === 'completed');
        const filtered = completed.filter(r => (r['Asset Type'] || '') === asset && (r['Fiat Type'] || '') === fiat);
        const sorted = filtered.sort((a, b) => new Date(a['Created Time']) - new Date(b['Created Time']));
        const inventory = [];
        let totalProfit = 0;
        let buyCount = 0, sellCount = 0;
        let totalFees = 0;
        const tradeDetails = [];
        let lastSoldPrice = 0;

        for (const row of sorted) {
            const price = parseFloat(row.Price) || 0;
            const qty = parseFloat(row.Quantity) || 0;
            const orderType = (row['Order Type'] || '').toLowerCase();
            const orderNo = row['Order Number'] || '';
            const counterparty = row['Couterparty'] || row['Counterparty'] || '';
            let fee = 0;
            if (row['Maker Fee']) fee += parseFloat(row['Maker Fee']) || 0;
            if (row['Taker Fee']) fee += parseFloat(row['Taker Fee']) || 0;
            totalFees += fee;

            if (orderType === 'buy') {
                buyCount++;
                inventory.push([price, qty]);
            } else if (orderType === 'sell') {
                sellCount++;
                let qtyToSell = qty;
                let sellProfit = 0;
                lastSoldPrice = price;
                while (qtyToSell > 0 && inventory.length > 0) {
                    const [buyPrice, buyQty] = inventory[0];
                    const bQty = parseFloat(buyQty);
                    if (bQty <= qtyToSell + 1e-12) {
                        sellProfit += (price - buyPrice) * bQty;
                        qtyToSell -= bQty;
                        inventory.shift();
                    } else {
                        sellProfit += (price - buyPrice) * qtyToSell;
                        inventory[0][1] = bQty - qtyToSell;
                        qtyToSell = 0;
                    }
                }
                const netProfit = sellProfit - fee;
                totalProfit += netProfit;
                tradeDetails.push({
                    id: tradeDetails.length + 1,
                    time: row['Created Time'],
                    order: `Sell ${qty.toFixed(4)} ${asset}`,
                    price: price.toFixed(6),
                    profit: netProfit.toFixed(2),
                    orderNo,
                    counterparty,
                    type: 'sell',
                    manual: !!row.manual
                });
            }
        }

        inventory.forEach(([price, qty]) => {
            tradeDetails.push({
                id: tradeDetails.length + 1,
                time: "N/A",
                order: `Buy ${qty.toFixed(4)} ${asset}`,
                price: price.toFixed(6),
                profit: "—",
                orderNo: "N/A",
                counterparty: "N/A",
                type: 'buy',
                manual: false
            });
        });

        const totalBuys = inventory.reduce((sum, [p, q]) => sum + p * q, 0);
        const remainingQty = inventory.reduce((sum, [p, q]) => sum + q, 0);
        const avgBuyPrice = remainingQty > 0 ? (totalBuys / remainingQty).toFixed(6) : "0.000000";
        const marketPrice = marketPriceInput.value && !isNaN(marketPriceInput.value) ?
            parseFloat(marketPriceInput.value) : lastSoldPrice || 0;
        const marketValue = remainingQty * marketPrice;
        const unrealized = marketValue - totalBuys;

        document.getElementById("lastSoldPrice").textContent = lastSoldPrice.toFixed(6);
        document.getElementById("avgBuyPrice").textContent = avgBuyPrice;

        summaryValues = [
            totalProfit.toFixed(2),
            totalBuys.toFixed(2),
            totalBuys.toFixed(2), // total sells
            totalFees.toFixed(2),
            totalProfit.toFixed(2),
            buyCount,
            sellCount,
            remainingQty.toFixed(6),
            totalBuys.toFixed(2),
            marketValue.toFixed(2),
            unrealized.toFixed(2)
        ];

        return tradeDetails;
    }

    function renderTrades() {
        const body = document.getElementById("tableBody");
        body.innerHTML = "";
        let filtered = tradeList;
        if (viewMode === "buys") filtered = tradeList.filter(t => t.type === 'buy');
        else if (viewMode === "sells") filtered = tradeList.filter(t => t.type === 'sell');
        filtered.forEach(trade => {
            const row = document.createElement("div");
            row.className = `trade-row ${trade.manual ? 'manual-trade' : ''}`;
            row.innerHTML = `
                <div class="col-id">${trade.id}</div>
                <div class="col-time">${trade.time}</div>
                <div class="col-order order">${trade.order}</div>
                <div class="col-price price">${trade.price}</div>
                <div class="col-profit profit">${trade.profit}</div>
                <div class="col-number">${trade.orderNo}</div>
                <div class="col-counter">${trade.counterparty}</div>
                <div class="col-delete">
                    <button class="delete-btn" onclick="deleteTrade('${trade.orderNo}', ${!!trade.manual})">🗑️</button>
                </div>
            `;
            body.appendChild(row);
        });
        if (searchInput.style.display !== "none") filterTrades();
    }

    window.deleteTrade = function(orderNo, isManual) {
        originalData = originalData.filter(row => (row['Order Number'] || '') !== orderNo);
        refresh();
    };

    function addManualTrade() {
        const asset = assetCurrencySelect.value;
        const fiat = fiatCurrencySelect.value;
        const orderType = document.getElementById("manualOrderType").value;
        const price = parseFloat(document.getElementById("manualPrice").value) || 0;
        const qty = parseFloat(document.getElementById("manualQty").value) || 0;
        const counterparty = document.getElementById("manualCounterparty").value || "Manual";
        const orderNo = document.getElementById("manualOrderNo").value || `MANUAL-${Date.now()}`;
        const time = document.getElementById("manualTime").value || new Date().toISOString().slice(0, 19).replace('T', ' ');
        const newTrade = {
            "Status": "Completed",
            "Order Type": orderType.charAt(0).toUpperCase() + orderType.slice(1),
            "Price": price,
            "Quantity": qty,
            "Asset Type": asset,
            "Fiat Type": fiat,
            "Order Number": orderNo,
            "Counterparty": counterparty,
            "Created Time": time,
            "Maker Fee": "0",
            "Taker Fee": "0",
            manual: true
        };
        originalData.push(newTrade);
        refresh();
    }

    function renderResults() {
        const grid = document.getElementById("resultsGrid");
        grid.innerHTML = "";
        const t = translations[LANG];
        t.labels.forEach((label, i) => {
            const card = document.createElement("div");
            card.className = "result-card";
            card.innerHTML = `<div class="result-label">${label}</div><div class="result-value">${summaryValues[i]}</div>`;
            grid.appendChild(card);
        });
    }

    document.getElementById("loadFile").addEventListener("click", () => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = ".csv,.txt";
        input.style.display = "none";
        document.body.appendChild(input);
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (!file) return alert("No file selected.");
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const text = e.target.result;
                    const data = parseCSV(text);
                    originalData = data;
                    refresh();
                } catch (err) {
                    alert("Error: " + err.message);
                } finally {
                    document.body.removeChild(input);
                }
            };
            reader.onerror = () => alert("Failed to read file.");
            reader.readAsText(file);
        };
        input.click();
    });

    document.getElementById("refresh").addEventListener("click", refresh);
    function refresh() {
        if (originalData.length === 0) return;
        tradeList = calculate(originalData);
        renderTrades();
        renderResults();
    }

    document.getElementById("printResults").addEventListener("click", () => {
        const printWindow = window.open('', '_blank');
        const results = document.getElementById("resultsGrid").innerHTML;
        const additional = document.querySelector(".results-grid.bottom").outerHTML;
        const title = document.getElementById("title").textContent;
        printWindow.document.write(`
            <html>
            <head><title>Print Results</title>
            <style>
                body { font-family: Arial, sans-serif; background: white; color: black; padding: 20px; }
                .result-card { background: #f0f0f0; padding: 10px; margin: 10px; border-radius: 8px; text-align: center; }
                .result-label { font-weight: bold; color: #333; }
                .result-value { font-size: 18px; color: #000; }
            </style>
            </head>
            <body>
                <h1>${title}</h1>
                <div class="results-grid" style="display:grid;grid-template-columns:repeat(4,1fr);gap:15px;">
                    ${results}
                </div>
                ${additional}
            </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.focus();
        setTimeout(() => printWindow.print(), 500);
    });

    document.getElementById("addManualTrade").addEventListener("click", addManualTrade);
    marketPriceInput.addEventListener("input", () => refresh());
    themeToggle.addEventListener("click", toggleTheme);
    document.getElementById("language").addEventListener("change", (e) => {
        LANG = e.target.value;
        updateLang();
        updateSearchLang();
    });

    initTheme();
    updateLang();
    setView("all");
    updateSearchLang();
});