const translations = {
    ar: {
        labels: ["إجمالي الربح/الخسارة", "إجمالي المشتريات", "إجمالي المبيعات", "إجمالي العمولات", "صافي الربح بعد العمولات", "صفقات شراء", "صفقات بيع", "إجمالي الكمية المتبقية", "تكلفة شراء المتبقي", "قيمته بسعر السوق", "الربح/الخسارة غير المحققة"],
        headers: ["الرقم", "تاريخ", "العملية", "السعر", "الربح", "رقم المعاملة", "اسم الزبون", "حذف"],
        all: "الكل",
        buys: "شراء",
        sells: "بيع",
        title: "حاسبة الأرباح P2P",
        marketPrice: "سعر السوق",
        lastSold: "آخر سعر بيع",
        avgBuy: "متوسط سعر الشراء",
        print: "طباعة",
        addManual: "إضافة",
        addManualFormToggle: "إضافة يدوية",
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
            THB: "بات تايلندي",
            CNY: "يوان صيني",
            JPY: "ين ياباني",
            KRW: "وون كوري",
            PKR: "روبية باكستانية",
            BRL: "ريال برازيلي",
            AUD: "دولار أسترالي",
            CAD: "دولار كندي"
        },
        pages: {
            home: "الرئيسية",
            trades: "الصفقات",
            analysis: "التحليل",
            settings: "الإعدادات"
        },
        pageTitles: {
            home: "مرحباً بك في حاسبة الأرباح P2P",
            trades: "📋 صفقات التداول",
            analysis: "📊 تحليل شامل",
            settings: "⚙️ الإعدادات"
        },
        settings: {
            selectLang: "اختر اللغة:",
            changeTheme: "تغيير المظهر:",
            dark: "داكن",
            light: "فاتح",
            blue: "أزرق",
            green: "أخضر",
            purple: "بنفسجي",
            contrast: "تباين عالي"
        },
        home: {
            intro: "هذا البرنامج مصمم لمساعدتك على تتبع أرباحك وخسائرك في تداول العملات الرقمية من شخص لشخص (P2P). يمكنك تحميل ملفات سجلات الصفقات لتحليل أدائك بشكل شامل.",
            dashboard: {
                today: "ربح اليوم",
                week: "ربح هذا الأسبوع",
                month: "ربح هذا الشهر",
                remaining: "الكمية المتبقية"
            },
            quickLinks: {
                trades: "عرض الصفقات",
                analysis: "الذهاب للتحليل"
            }
        },
        trades: {
            buttons: {
                load: "تحميل ملف",
                export: "تصدير CSV",
                print: "طباعة",
                clear: "مسح السجل",
                addManual: "إضافة يدوية",
                add: "إضافة"
            },
            manualForm: {
                type: "النوع",
                price: "السعر",
                quantity: "الكمية",
                time: "التاريخ",
                counterparty: "الطرف الآخر",
                orderNo: "رقم الطلب"
            },
            table: {
                id: "الرقم",
                time: "تاريخ",
                order: "العملية",
                price: "السعر",
                profit: "الربح",
                orderNo: "رقم المعاملة",
                counterparty: "اسم الزبون",
                delete: "حذف"
            },
            view: {
                all: "الكل",
                buys: "شراء",
                sells: "بيع"
            },
            pagination: {
                prev: "السابق",
                next: "التالي"
            }
        },
        analysis: {
            title: "📊 تحليل شامل",
            totalProfit: "إجمالي الأرباح:",
            performanceSummary: "📊 ملخص الأداء",
            periods: {
                all: "الكل",
                today: "اليوم",
                week: "الأسبوع",
                month: "الشهر",
                year: "السنة"
            },
            charts: {
                dailyProfit: "📈 الربح اليومي",
                buyVsSell: "🥧 صفقات الشراء مقابل البيع"
            },
            advancedStats: {
                title: "📊 إحصائيات متقدمة",
                maxBuyPrice: "أعلى سعر شراء",
                maxSellPrice: "أعلى سعر بيع",
                topCounterparty: "أكثر طرف تداولًا",
                avgHoldTime: "متوسط وقت الاحتفاظ"
            },
            peakTimes: {
                title: "⏰ أوقات الذروة",
                buyTitle: "أعلى أوقات الشراء",
                sellTitle: "أعلى أوقات البيع"
            }
        }
    },
    en: {
        labels: ["Total Profit/Loss", "Total Buys", "Total Sells", "Total Fees", "Net Profit After Fees", "Buy Trades", "Sell Trades", "Remaining Quantity", "Remaining Cost", "Market Value", "Unrealized Profit/Loss"],
        headers: ["ID", "Time", "Order", "Price", "Profit", "Order No.", "Counterparty", "Delete"],
        all: "All",
        buys: "Buys",
        sells: "Sells",
        title: "P2P Profit Calculator",
        marketPrice: "Market Price",
        lastSold: "Last Sold Price",
        avgBuy: "Avg Buy Price (Remaining)",
        print: "Print",
        addManual: "Add",
        addManualFormToggle: "Add Manual",
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
        },
        pages: {
            home: "Home",
            trades: "Trades",
            analysis: "Analysis",
            settings: "Settings"
        },
        pageTitles: {
            home: "Welcome to P2P Profit Calculator",
            trades: "📋 Trading Trades",
            analysis: "📊 Comprehensive Analysis",
            settings: "⚙️ Settings"
        },
        settings: {
            selectLang: "Select Language:",
            changeTheme: "Change Theme:",
            dark: "Dark",
            light: "Light",
            blue: "Blue",
            green: "Green",
            purple: "Purple",
            contrast: "High Contrast"
        },
        home: {
            intro: "This program is designed to help you track your profits and losses in peer-to-peer (P2P) cryptocurrency trading. You can upload transaction log files to analyze your performance comprehensively.",
            dashboard: {
                today: "Today's Profit",
                week: "This Week's Profit",
                month: "This Month's Profit",
                remaining: "Remaining Quantity"
            },
            quickLinks: {
                trades: "View Trades",
                analysis: "Go to Analysis"
            }
        },
        trades: {
            buttons: {
                load: "Load File",
                export: "Export CSV",
                print: "Print",
                clear: "Clear History",
                addManual: "Add Manual",
                add: "Add"
            },
            manualForm: {
                type: "Type",
                price: "Price",
                quantity: "Quantity",
                time: "Date",
                counterparty: "Counterparty",
                orderNo: "Order No."
            },
            table: {
                id: "ID",
                time: "Time",
                order: "Order",
                price: "Price",
                profit: "Profit",
                orderNo: "Order No.",
                counterparty: "Counterparty",
                delete: "Delete"
            },
            view: {
                all: "All",
                buys: "Buys",
                sells: "Sells"
            },
            pagination: {
                prev: "Previous",
                next: "Next"
            }
        },
        analysis: {
            title: "📊 Comprehensive Analysis",
            totalProfit: "Total Profit:",
            performanceSummary: "📊 Performance Summary",
            periods: {
                all: "All",
                today: "Today",
                week: "Week",
                month: "Month",
                year: "Year"
            },
            charts: {
                dailyProfit: "📈 Daily Profit",
                buyVsSell: "🥧 Buy vs Sell Trades"
            },
            advancedStats: {
                title: "📊 Advanced Statistics",
                maxBuyPrice: "Max Buy Price",
                maxSellPrice: "Max Sell Price",
                topCounterparty: "Top Counterparty",
                avgHoldTime: "Avg Hold Time"
            },
            peakTimes: {
                title: "⏰ Peak Times",
                buyTitle: "Top Buy Times",
                sellTitle: "Top Sell Times"
            }
        }
    },
    fr: {
        labels: ["Profit/Perte totale", "Total des achats", "Total des ventes", "Frais totaux", "Profit net après frais", "Transactions d'achat", "Transactions de vente", "Quantité restante", "Coût restant", "Valeur du marché", "Profit/Perte non réalisé"],
        headers: ["ID", "Heure", "Ordre", "Prix", "Profit", "N° de commande", "Contrepartie", "Supprimer"],
        all: "Tout",
        buys: "Achats",
        sells: "Ventes",
        title: "Calculateur de profit P2P",
        marketPrice: "Prix du marché",
        lastSold: "Dernier prix vendu",
        avgBuy: "Prix d'achat moyen (Restant)",
        print: "Imprimer",
        addManual: "Ajouter",
        addManualFormToggle: "Ajout manuel",
        refresh: "Actualiser",
        search: "Recherche",
        close: "Fermer",
        searchPlaceholder: "Rechercher par N° de commande...",
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
        },
        pages: {
            home: "Accueil",
            trades: "Transactions",
            analysis: "Analyse",
            settings: "Paramètres"
        },
        pageTitles: {
            home: "Bienvenue dans le calculateur de profit P2P",
            trades: "📋 Transactions de trading",
            analysis: "📊 Analyse complète",
            settings: "⚙️ Paramètres"
        },
        settings: {
            selectLang: "Sélectionner la langue:",
            changeTheme: "Changer le thème:",
            dark: "Sombre",
            light: "Clair",
            blue: "Bleu",
            green: "Vert",
            purple: "Violet",
            contrast: "Contraste élevé"
        },
        home: {
            intro: "Ce programme est conçu pour vous aider à suivre vos profits et pertes dans le trading de crypto-monnaies de pair à pair (P2P). Vous pouvez télécharger des fichiers journaux de transactions pour analyser votre performance de manière complète.",
            dashboard: {
                today: "Profit du jour",
                week: "Profit de la semaine",
                month: "Profit du mois",
                remaining: "Quantité restante"
            },
            quickLinks: {
                trades: "Voir les transactions",
                analysis: "Aller à l'analyse"
            }
        },
        trades: {
            buttons: {
                load: "Charger fichier",
                export: "Exporter CSV",
                print: "Imprimer",
                clear: "Effacer l'historique",
                addManual: "Ajout manuel",
                add: "Ajouter"
            },
            manualForm: {
                type: "Type",
                price: "Prix",
                quantity: "Quantité",
                time: "Date",
                counterparty: "Contrepartie",
                orderNo: "N° de commande"
            },
            table: {
                id: "ID",
                time: "Heure",
                order: "Ordre",
                price: "Prix",
                profit: "Profit",
                orderNo: "N° de commande",
                counterparty: "Contrepartie",
                delete: "Supprimer"
            },
            view: {
                all: "Tout",
                buys: "Achats",
                sells: "Ventes"
            },
            pagination: {
                prev: "Précédent",
                next: "Suivant"
            }
        },
        analysis: {
            title: "📊 Analyse complète",
            totalProfit: "Profit total:",
            periods: {
                all: "Tout",
                today: "Aujourd'hui",
                week: "Semaine",
                month: "Mois",
                year: "Année"
            },
            charts: {
                dailyProfit: "📈 Profit quotidien",
                buyVsSell: "🥧 Achats vs Ventes"
            },
            advancedStats: {
                title: "📊 Statistiques avancées",
                maxBuyPrice: "Prix d'achat max",
                maxSellPrice: "Prix de vente max",
                topCounterparty: "Meilleure contrepartie",
                avgHoldTime: "Temps de détention moyen"
            },
            peakTimes: {
                title: "⏰ Heures de pointe",
                buyTitle: "Meilleurs moments d'achat",
                sellTitle: "Meilleurs moments de vente"
            }
        }
    },
    es: {
        labels: ["Beneficio/Pérdida total", "Compras totales", "Ventas totales", "Tarifas totales", "Beneficio neto después de tarifas", "Operaciones de compra", "Operaciones de venta", "Cantidad restante", "Costo restante", "Valor de mercado", "Beneficio/Pérdida no realizado"],
        headers: ["ID", "Hora", "Orden", "Precio", "Beneficio", "N.º de pedido", "Contraparte", "Eliminar"],
        all: "Todo",
        buys: "Compras",
        sells: "Ventas",
        title: "Calculadora de beneficios P2P",
        marketPrice: "Precio de mercado",
        lastSold: "Último precio vendido",
        avgBuy: "Precio promedio de compra (Restante)",
        print: "Imprimir",
        addManual: "Agregar",
        addManualFormToggle: "Agregar manualmente",
        refresh: "Actualizar",
        search: "Buscar",
        close: "Cerrar",
        searchPlaceholder: "Buscar por N.º de pedido...",
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
        },
        pages: {
            home: "Inicio",
            trades: "Operaciones",
            analysis: "Análisis",
            settings: "Configuración"
        },
        pageTitles: {
            home: "Bienvenido a la calculadora de beneficios P2P",
            trades: "📋 Operaciones de trading",
            analysis: "📊 Análisis completo",
            settings: "⚙️ Configuración"
        },
        settings: {
            selectLang: "Seleccionar idioma:",
            changeTheme: "Cambiar tema:",
            dark: "Oscuro",
            light: "Claro",
            blue: "Azul",
            green: "Verde",
            purple: "Púrpura",
            contrast: "Alto contraste"
        },
        home: {
            intro: "Este programa está diseñado para ayudarte a realizar un seguimiento de tus beneficios y pérdidas en el comercio de criptomonedas de persona a persona (P2P). Puedes cargar archivos de registro de transacciones para analizar tu rendimiento de forma completa.",
            dashboard: {
                today: "Beneficio del día",
                week: "Beneficio de la semana",
                month: "Beneficio del mes",
                remaining: "Cantidad restante"
            },
            quickLinks: {
                trades: "Ver operaciones",
                analysis: "Ir al análisis"
            }
        },
        trades: {
            buttons: {
                load: "Cargar archivo",
                export: "Exportar CSV",
                print: "Imprimir",
                clear: "Borrar historial",
                addManual: "Agregar manualmente",
                add: "Agregar"
            },
            manualForm: {
                type: "Tipo",
                price: "Precio",
                quantity: "Cantidad",
                time: "Fecha",
                counterparty: "Contraparte",
                orderNo: "N.º de pedido"
            },
            table: {
                id: "ID",
                time: "Hora",
                order: "Orden",
                price: "Precio",
                profit: "Beneficio",
                orderNo: "N.º de pedido",
                counterparty: "Contraparte",
                delete: "Eliminar"
            },
            view: {
                all: "Todo",
                buys: "Compras",
                sells: "Ventas"
            },
            pagination: {
                prev: "Anterior",
                next: "Siguiente"
            }
        },
        analysis: {
            title: "📊 Análisis completo",
            performanceSummary: "📊 Resumen de rendimiento",
            totalProfit: "Beneficio total:",
            periods: {
                all: "Todo",
                today: "Hoy",
                week: "Semana",
                month: "Mes",
                year: "Año"
            },
            charts: {
                dailyProfit: "📈 Beneficio diario",
                buyVsSell: "🥧 Compras vs Ventas"
            },
            advancedStats: {
                title: "📊 Estadísticas avanzadas",
                maxBuyPrice: "Precio máximo de compra",
                maxSellPrice: "Precio máximo de venta",
                topCounterparty: "Mejor contraparte",
                avgHoldTime: "Tiempo promedio de tenencia"
            },
            peakTimes: {
                title: "⏰ Horas pico",
                buyTitle: "Mejores horarios de compra",
                sellTitle: "Mejores horarios de venta"
            }
        }
    },
    de: {
        labels: ["Gesamtgewinn/-verlust", "Gesamtkäufe", "Gesamtverkäufe", "Gesamtgebühren", "Nettogewinn nach Gebühren", "Kauftransaktionen", "Verkaufstransaktionen", "Verbleibende Menge", "Verbleibende Kosten", "Marktwert", "Nicht realisierte Gewinne/Verluste"],
        headers: ["ID", "Zeit", "Auftrag", "Preis", "Gewinn", "Auftragsnummer", "Gegenpartei", "Löschen"],
        all: "Alle",
        buys: "Käufe",
        sells: "Verkäufe",
        title: "P2P-Gewinnrechner",
        marketPrice: "Marktpreis",
        lastSold: "Letzter Verkaufspreis",
        avgBuy: "Durchschn. Kaufpreis (Verbleibend)",
        print: "Drucken",
        addManual: "Hinzufügen",
        addManualFormToggle: "Manuell hinzufügen",
        refresh: "Aktualisieren",
        search: "Suche",
        close: "Schließen",
        searchPlaceholder: "Nach Auftragsnummer suchen...",
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
        },
        pages: {
            home: "Startseite",
            trades: "Transaktionen",
            analysis: "Analyse",
            settings: "Einstellungen"
        },
        pageTitles: {
            home: "Willkommen beim P2P-Gewinnrechner",
            trades: "📋 Handelstransaktionen",
            analysis: "📊 Umfassende Analyse",
            settings: "⚙️ Einstellungen"
        },
        settings: {
            selectLang: "Sprache auswählen:",
            changeTheme: "Thema ändern:",
            dark: "Dunkel",
            light: "Hell",
            blue: "Blau",
            green: "Grün",
            purple: "Lila",
            contrast: "Hoher Kontrast"
        },
        home: {
            intro: "Dieses Programm ist darauf ausgelegt, Ihnen bei der Verfolgung Ihrer Gewinne und Verluste beim Peer-to-Peer (P2P)-Kryptowährungshandel zu helfen. Sie können Transaktionsprotokolldateien hochladen, um Ihre Leistung umfassend zu analysieren.",
            dashboard: {
                today: "Heutiger Gewinn",
                week: "Wöchentlicher Gewinn",
                month: "Monatlicher Gewinn",
                remaining: "Verbleibende Menge"
            },
            quickLinks: {
                trades: "Transaktionen anzeigen",
                analysis: "Zur Analyse gehen"
            }
        },
        trades: {
            buttons: {
                load: "Datei laden",
                export: "CSV exportieren",
                print: "Drucken",
                clear: "Verlauf löschen",
                addManual: "Manuell hinzufügen",
                add: "Hinzufügen"
            },
            manualForm: {
                type: "Typ",
                price: "Preis",
                quantity: "Menge",
                time: "Datum",
                counterparty: "Gegenpartei",
                orderNo: "Auftragsnummer"
            },
            table: {
                id: "ID",
                time: "Zeit",
                order: "Auftrag",
                price: "Preis",
                profit: "Gewinn",
                orderNo: "Auftragsnummer",
                counterparty: "Gegenpartei",
                delete: "Löschen"
            },
            view: {
                all: "Alle",
                buys: "Käufe",
                sells: "Verkäufe"
            },
            pagination: {
                prev: "Zurück",
                next: "Weiter"
            }
        },
        analysis: {
            title: "📊 Umfassende Analyse",
            performanceSummary: "📊 Leistungszusammenfassung",
            totalProfit: "Gesamtgewinn:",
            periods: {
                all: "Alle",
                today: "Heute",
                week: "Woche",
                month: "Monat",
                year: "Jahr"
            },
            charts: {
                dailyProfit: "📈 Täglicher Gewinn",
                buyVsSell: "🥧 Käufe vs Verkäufe"
            },
            advancedStats: {
                title: "📊 Erweiterte Statistiken",
                maxBuyPrice: "Max. Kaufpreis",
                maxSellPrice: "Max. Verkaufspreis",
                topCounterparty: "Top-Gegenpartei",
                avgHoldTime: "Durchschn. Haltezeit"
            },
            peakTimes: {
                title: "⏰ Hauptzeiten",
                buyTitle: "Top-Kaufzeiten",
                sellTitle: "Top-Verkaufszeiten"
            }
        }
    },
    ru: {
        labels: ["Общий доход/убыток", "Всего покупок", "Всего продаж", "Общие комиссии", "Чистая прибыль после комиссий", "Сделки покупки", "Сделки продажи", "Оставшееся количество", "Оставшаяся стоимость", "Рыночная стоимость", "Нереализованный доход/убыток"],
        headers: ["ID", "Время", "Ордер", "Цена", "Прибыль", "Номер ордера", "Контрагент", "Удалить"],
        all: "Все",
        buys: "Покупки",
        sells: "Продажи",
        title: "Калькулятор прибыли P2P",
        marketPrice: "Рыночная цена",
        lastSold: "Последняя цена продажи",
        avgBuy: "Средняя цена покупки (Оставшиеся)",
        print: "Печать",
        addManual: "Добавить",
        addManualFormToggle: "Добавить вручную",
        refresh: "Обновить",
        search: "Поиск",
        close: "Закрыть",
        searchPlaceholder: "Поиск по номеру ордера...",
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
        },
        pages: {
            home: "Главная",
            trades: "Сделки",
            analysis: "Анализ",
            settings: "Настройки"
        },
        pageTitles: {
            home: "Добро пожаловать в калькулятор прибыли P2P",
            trades: "📋 Торговые сделки",
            analysis: "📊 Комплексный анализ",
            settings: "⚙️ Настройки"
        },
        settings: {
            selectLang: "Выбрать язык:",
            changeTheme: "Изменить тему:",
            dark: "Темная",
            light: "Светлая",
            blue: "Синяя",
            green: "Зеленая",
            purple: "Фиолетовая",
            contrast: "Высокий контраст"
        },
        home: {
            intro: "Эта программа предназначена для того, чтобы помочь вам отслеживать ваши прибыли и убытки при торговле криптовалютами напрямую (P2P). Вы можете загрузить файлы журналов транзакций для комплексного анализа вашей эффективности.",
            dashboard: {
                today: "Прибыль сегодня",
                week: "Прибыль за неделю",
                month: "Прибыль за месяц",
                remaining: "Оставшееся количество"
            },
            quickLinks: {
                trades: "Просмотр сделок",
                analysis: "Перейти к анализу"
            }
        },
        trades: {
            buttons: {
                load: "Загрузить файл",
                export: "Экспорт CSV",
                print: "Печать",
                clear: "Очистить историю",
                addManual: "Добавить вручную",
                add: "Добавить"
            },
            manualForm: {
                type: "Тип",
                price: "Цена",
                quantity: "Количество",
                time: "Дата",
                counterparty: "Контрагент",
                orderNo: "Номер ордера"
            },
            table: {
                id: "ID",
                time: "Время",
                order: "Ордер",
                price: "Цена",
                profit: "Прибыль",
                orderNo: "Номер ордера",
                counterparty: "Контрагент",
                delete: "Удалить"
            },
            view: {
                all: "Все",
                buys: "Покупки",
                sells: "Продажи"
            },
            pagination: {
                prev: "Предыдущая",
                next: "Следующая"
            }
        },
        analysis: {
            title: "📊 Комплексный анализ",
            performanceSummary: "📊 Сводка производительности",
            totalProfit: "Общая прибыль:",
            periods: {
                all: "Все",
                today: "Сегодня",
                week: "Неделя",
                month: "Месяц",
                year: "Год"
            },
            charts: {
                dailyProfit: "📈 Ежедневная прибыль",
                buyVsSell: "🥧 Покупки vs Продажи"
            },
            advancedStats: {
                title: "📊 Расширенная статистика",
                maxBuyPrice: "Макс. цена покупки",
                maxSellPrice: "Макс. цена продажи",
                topCounterparty: "Лучший контрагент",
                avgHoldTime: "Среднее время удержания"
            },
            peakTimes: {
                title: "⏰ Пиковое время",
                buyTitle: "Лучшее время для покупки",
                sellTitle: "Лучшее время для продажи"
            }
        }
    },
    tr: {
        labels: ["Toplam Kar/Zarar", "Toplam Alımlar", "Toplam Satışlar", "Toplam Ücretler", "Ücretlerden Sonra Net Kar", "Alım İşlemleri", "Satış İşlemleri", "Kalan Miktar", "Kalan Maliyet", "Piyasa Değeri", "Gerçekleşmemiş Kar/Zarar"],
        headers: ["ID", "Zaman", "Emir", "Fiyat", "Kar", "Emir No", "Karşı Taraf", "Sil"],
        all: "Tümü",
        buys: "Alımlar",
        sells: "Satışlar",
        title: "P2P Kar Hesaplayıcı",
        marketPrice: "Piyasa Fiyatı",
        lastSold: "Son Satış Fiyatı",
        avgBuy: "Ort. Alım Fiyatı (Kalan)",
        print: "Yazdır",
        addManual: "Ekle",
        addManualFormToggle: "Manuel Ekle",
        refresh: "Yenile",
        search: "Ara",
        close: "Kapat",
        searchPlaceholder: "Emir No ile Ara...",
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
        },
        pages: {
            home: "Ana Sayfa",
            trades: "İşlemler",
            analysis: "Analiz",
            settings: "Ayarlar"
        },
        pageTitles: {
            home: "P2P Kar Hesaplayıcıya Hoş Geldiniz",
            trades: "📋 Ticaret İşlemleri",
            analysis: "📊 Kapsamlı Analiz",
            settings: "⚙️ Ayarlar"
        },
        settings: {
            selectLang: "Dil Seçin:",
            changeTheme: "Temayı Değiştir:",
            dark: "Koyu",
            light: "Açık",
            blue: "Mavi",
            green: "Yeşil",
            purple: "Mor",
            contrast: "Yüksek Kontrast"
        },
        home: {
            intro: "Bu program, eşler arası (P2P) kripto para birimi ticaretinizdeki kar ve zararlarınızı takip etmenize yardımcı olmak için tasarlanmıştır. Performansınızı kapsamlı bir şekilde analiz etmek için işlem günlük dosyalarını yükleyebilirsiniz.",
            dashboard: {
                today: "Bugünün Karı",
                week: "Bu Haftanın Karı",
                month: "Bu Ayın Karı",
                remaining: "Kalan Miktar"
            },
            quickLinks: {
                trades: "İşlemleri Görüntüle",
                analysis: "Analize Git"
            }
        },
        trades: {
            buttons: {
                load: "Dosya Yükle",
                export: "CSV Dışa Aktar",
                print: "Yazdır",
                clear: "Geçmişi Temizle",
                addManual: "Manuel Ekle",
                add: "Ekle"
            },
            manualForm: {
                type: "Tür",
                price: "Fiyat",
                quantity: "Miktar",
                time: "Tarih",
                counterparty: "Karşı Taraf",
                orderNo: "Emir No"
            },
            table: {
                id: "ID",
                time: "Zaman",
                order: "Emir",
                price: "Fiyat",
                profit: "Kar",
                orderNo: "Emir No",
                counterparty: "Karşı Taraf",
                delete: "Sil"
            },
            view: {
                all: "Tümü",
                buys: "Alımlar",
                sells: "Satışlar"
            },
            pagination: {
                prev: "Önceki",
                next: "Sonraki"
            }
        },
        analysis: {
            title: "📊 Kapsamlı Analiz",
            performanceSummary: "📊 Performans Özeti",
            totalProfit: "Toplam Kar:",
            periods: {
                all: "Tümü",
                today: "Bugün",
                week: "Hafta",
                month: "Ay",
                year: "Yıl"
            },
            charts: {
                dailyProfit: "📈 Günlük Kar",
                buyVsSell: "🥧 Alımlar vs Satışlar"
            },
            advancedStats: {
                title: "📊 Gelişmiş İstatistikler",
                maxBuyPrice: "Maks. Alım Fiyatı",
                maxSellPrice: "Maks. Satış Fiyatı",
                topCounterparty: "En İyi Karşı Taraf",
                avgHoldTime: "Ort. Elde Tutma Süresi"
            },
            peakTimes: {
                title: "⏰ Yoğunluk Saatleri",
                buyTitle: "En İyi Alım Saatleri",
                sellTitle: "En İyi Satış Saatleri"
            }
        }
    },
    pt: {
        labels: ["Lucro/Prejuízo Total", "Total de Compras", "Total de Vendas", "Taxas Totais", "Lucro Líquido Após Taxas", "Negociações de Compra", "Negociações de Venda", "Quantidade Restante", "Custo Restante", "Valor de Mercado", "Lucro/Prejuízo Não Realizado"],
        headers: ["ID", "Hora", "Ordem", "Preço", "Lucro", "Nº do Pedido", "Contraparte", "Excluir"],
        all: "Tudo",
        buys: "Compras",
        sells: "Vendas",
        title: "Calculadora de Lucro P2P",
        marketPrice: "Preço de Mercado",
        lastSold: "Último Preço Vendido",
        avgBuy: "Preço Médio de Compra (Restante)",
        print: "Imprimir",
        addManual: "Adicionar",
        addManualFormToggle: "Adicionar Manualmente",
        refresh: "Atualizar",
        search: "Pesquisar",
        close: "Fechar",
        searchPlaceholder: "Pesquisar por Nº do Pedido...",
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
        },
        pages: {
            home: "Início",
            trades: "Negociações",
            analysis: "Análise",
            settings: "Configurações"
        },
        pageTitles: {
            home: "Bem-vindo à Calculadora de Lucro P2P",
            trades: "📋 Negociações de Trading",
            analysis: "📊 Análise Abrangente",
            settings: "⚙️ Configurações"
        },
        settings: {
            selectLang: "Selecionar Idioma:",
            changeTheme: "Alterar Tema:",
            dark: "Escuro",
            light: "Claro",
            blue: "Azul",
            green: "Verde",
            purple: "Roxo",
            contrast: "Alto Contraste"
        },
        home: {
            intro: "Este programa foi projetado para ajudá-lo a acompanhar seus lucros e prejuízos no comércio de criptomoedas peer-to-peer (P2P). Você pode carregar arquivos de log de transações para analisar seu desempenho de forma abrangente.",
            dashboard: {
                today: "Lucro do Dia",
                week: "Lucro da Semana",
                month: "Lucro do Mês",
                remaining: "Quantidade Restante"
            },
            quickLinks: {
                trades: "Ver Negociações",
                analysis: "Ir para Análise"
            }
        },
        trades: {
            buttons: {
                load: "Carregar Arquivo",
                export: "Exportar CSV",
                print: "Imprimir",
                clear: "Limpar Histórico",
                addManual: "Adicionar Manualmente",
                add: "Adicionar"
            },
            manualForm: {
                type: "Tipo",
                price: "Preço",
                quantity: "Quantidade",
                time: "Data",
                counterparty: "Contraparte",
                orderNo: "Nº do Pedido"
            },
            table: {
                id: "ID",
                time: "Hora",
                order: "Ordem",
                price: "Preço",
                profit: "Lucro",
                orderNo: "Nº do Pedido",
                counterparty: "Contraparte",
                delete: "Excluir"
            },
            view: {
                all: "Tudo",
                buys: "Compras",
                sells: "Vendas"
            },
            pagination: {
                prev: "Anterior",
                next: "Próximo"
            }
        },
        analysis: {
            title: "📊 Análise Abrangente",
            performanceSummary: "📊 Resumo de Desempenho",
            totalProfit: "Lucro Total:",
            periods: {
                all: "Tudo",
                today: "Hoje",
                week: "Semana",
                month: "Mês",
                year: "Ano"
            },
            charts: {
                dailyProfit: "📈 Lucro Diário",
                buyVsSell: "🥧 Compras vs Vendas"
            },
            advancedStats: {
                title: "📊 Estatísticas Avançadas",
                maxBuyPrice: "Preço Máximo de Compra",
                maxSellPrice: "Preço Máximo de Venda",
                topCounterparty: "Melhor Contraparte",
                avgHoldTime: "Tempo Médio de Posse"
            },
            peakTimes: {
                title: "⏰ Horários de Pico",
                buyTitle: "Melhores Horários de Compra",
                sellTitle: "Melhores Horários de Venda"
            }
        }
    },
    it: {
        labels: ["Profitto/Perdita Totale", "Acquisti Totali", "Vendite Totali", "Commissioni Totali", "Profitto Netto Dopo Commissioni", "Operazioni di Acquisto", "Operazioni di Vendita", "Quantità Rimanente", "Costo Rimanente", "Valore di Mercato", "Profitto/Perdita Non Realizzato"],
        headers: ["ID", "Ora", "Ordine", "Prezzo", "Profitto", "N. Ordine", "Controparte", "Elimina"],
        all: "Tutto",
        buys: "Acquisti",
        sells: "Vendite",
        title: "Calcolatore di Profitto P2P",
        marketPrice: "Prezzo di Mercato",
        lastSold: "Ultimo Prezzo di Vendita",
        avgBuy: "Prezzo Medio di Acquisto (Rimanente)",
        print: "Stampa",
        addManual: "Aggiungi",
        addManualFormToggle: "Aggiungi Manualmente",
        refresh: "Aggiorna",
        search: "Cerca",
        close: "Chiudi",
        searchPlaceholder: "Cerca per N. Ordine...",
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
        },
        pages: {
            home: "Home",
            trades: "Operazioni",
            analysis: "Analisi",
            settings: "Impostazioni"
        },
        pageTitles: {
            home: "Benvenuto nel Calcolatore di Profitto P2P",
            trades: "📋 Operazioni di Trading",
            analysis: "📊 Analisi Completa",
            settings: "⚙️ Impostazioni"
        },
        settings: {
            selectLang: "Seleziona Lingua:",
            changeTheme: "Cambia Tema:",
            dark: "Scuro",
            light: "Chiaro",
            blue: "Blu",
            green: "Verde",
            purple: "Viola",
            contrast: "Alto Contrasto"
        },
        home: {
            intro: "Questo programma è progettato per aiutarti a monitorare i tuoi profitti e le tue perdite nel trading di criptovalute peer-to-peer (P2P). Puoi caricare file di log delle transazioni per analizzare le tue prestazioni in modo completo.",
            dashboard: {
                today: "Profitto di Oggi",
                week: "Profitto di Questa Settimana",
                month: "Profitto di Questo Mese",
                remaining: "Quantità Rimanente"
            },
            quickLinks: {
                trades: "Visualizza Operazioni",
                analysis: "Vai all'Analisi"
            }
        },
        trades: {
            buttons: {
                load: "Carica File",
                export: "Esporta CSV",
                print: "Stampa",
                clear: "Cancella Cronologia",
                addManual: "Aggiungi Manualmente",
                add: "Aggiungi"
            },
            manualForm: {
                type: "Tipo",
                price: "Prezzo",
                quantity: "Quantità",
                time: "Data",
                counterparty: "Controparte",
                orderNo: "N. Ordine"
            },
            table: {
                id: "ID",
                time: "Ora",
                order: "Ordine",
                price: "Prezzo",
                profit: "Profitto",
                orderNo: "N. Ordine",
                counterparty: "Controparte",
                delete: "Elimina"
            },
            view: {
                all: "Tutto",
                buys: "Acquisti",
                sells: "Vendite"
            },
            pagination: {
                prev: "Precedente",
                next: "Successivo"
            }
        },
        analysis: {
            title: "📊 Analisi Completa",
            performanceSummary: "📊 Riepilogo Prestazioni",
            totalProfit: "Profitto Totale:",
            periods: {
                all: "Tutto",
                today: "Oggi",
                week: "Settimana",
                month: "Mese",
                year: "Anno"
            },
            charts: {
                dailyProfit: "📈 Profitto Giornaliero",
                buyVsSell: "🥧 Acquisti vs Vendite"
            },
            advancedStats: {
                title: "📊 Statistiche Avanzate",
                maxBuyPrice: "Prezzo Massimo di Acquisto",
                maxSellPrice: "Prezzo Massimo di Vendita",
                topCounterparty: "Miglior Controparte",
                avgHoldTime: "Tempo Medio di Possesso"
            },
            peakTimes: {
                title: "⏰ Orari di Punta",
                buyTitle: "Migliori Orari di Acquisto",
                sellTitle: "Migliori Orari di Vendita"
            }
        }
    },
    zh: {
        labels: ["总利润/亏损", "总买入", "总卖出", "总费用", "扣除费用后的净利润", "买入交易", "卖出交易", "剩余数量", "剩余成本", "市场价值", "未实现利润/亏损"],
        headers: ["ID", "时间", "订单", "价格", "利润", "订单号", "交易对手", "删除"],
        all: "全部",
        buys: "买入",
        sells: "卖出",
        title: "P2P 利润计算器",
        marketPrice: "市场价格",
        lastSold: "最后卖出价格",
        avgBuy: "平均买入价格（剩余）",
        print: "打印",
        addManual: "添加",
        addManualFormToggle: "手动添加",
        refresh: "刷新",
        search: "搜索",
        close: "关闭",
        searchPlaceholder: "按订单号搜索...",
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
        },
        pages: {
            home: "首页",
            trades: "交易",
            analysis: "分析",
            settings: "设置"
        },
        pageTitles: {
            home: "欢迎使用 P2P 利润计算器",
            trades: "📋 交易记录",
            analysis: "📊 综合分析",
            settings: "⚙️ 设置"
        },
        settings: {
            selectLang: "选择语言:",
            changeTheme: "更改主题:",
            dark: "深色",
            light: "浅色",
            blue: "蓝色",
            green: "绿色",
            purple: "紫色",
            contrast: "高对比度"
        },
        home: {
            intro: "该程序旨在帮助您跟踪点对点 (P2P) 加密货币交易中的利润和亏损。您可以上传交易日志文件来全面分析您的表现。",
            dashboard: {
                today: "今日利润",
                week: "本周利润",
                month: "本月利润",
                remaining: "剩余数量"
            },
            quickLinks: {
                trades: "查看交易",
                analysis: "前往分析"
            }
        },
        trades: {
            buttons: {
                load: "加载文件",
                export: "导出 CSV",
                print: "打印",
                clear: "清除历史记录",
                addManual: "手动添加",
                add: "添加"
            },
            manualForm: {
                type: "类型",
                price: "价格",
                quantity: "数量",
                time: "日期",
                counterparty: "交易对手",
                orderNo: "订单号"
            },
            table: {
                id: "ID",
                time: "时间",
                order: "订单",
                price: "价格",
                profit: "利润",
                orderNo: "订单号",
                counterparty: "交易对手",
                delete: "删除"
            },
            view: {
                all: "全部",
                buys: "买入",
                sells: "卖出"
            },
            pagination: {
                prev: "上一页",
                next: "下一页"
            }
        },
        analysis: {
            title: "📊 综合分析",
            performanceSummary: "📊 性能摘要",
            totalProfit: "总利润:",
            periods: {
                all: "全部",
                today: "今天",
                week: "本周",
                month: "本月",
                year: "本年"
            },
            charts: {
                dailyProfit: "📈 每日利润",
                buyVsSell: "🥧 买入 vs 卖出"
            },
            advancedStats: {
                title: "📊 高级统计",
                maxBuyPrice: "最高买入价",
                maxSellPrice: "最高卖出价",
                topCounterparty: "最佳交易对手",
                avgHoldTime: "平均持有时间"
            },
            peakTimes: {
                title: "⏰ 高峰时段",
                buyTitle: "最佳买入时段",
                sellTitle: "最佳卖出时段"
            }
        }
    },
    ja: {
        labels: ["総利益/損失", "総購入", "総売却", "総手数料", "手数料後の純利益", "購入取引", "売却取引", "残り数量", "残りコスト", "時価", "未実現利益/損失"],
        headers: ["ID", "時間", "注文", "価格", "利益", "注文番号", "取引相手", "削除"],
        all: "すべて",
        buys: "購入",
        sells: "売却",
        title: "P2P 利益計算機",
        marketPrice: "市場価格",
        lastSold: "最終売却価格",
        avgBuy: "平均購入価格（残り）",
        print: "印刷",
        addManual: "追加",
        addManualFormToggle: "手動追加",
        refresh: "更新",
        search: "検索",
        close: "閉じる",
        searchPlaceholder: "注文番号で検索...",
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
        },
        pages: {
            home: "ホーム",
            trades: "取引",
            analysis: "分析",
            settings: "設定"
        },
        pageTitles: {
            home: "P2P 利益計算機へようこそ",
            trades: "📋 トレード取引",
            analysis: "📊 総合分析",
            settings: "⚙️ 設定"
        },
        settings: {
            selectLang: "言語を選択:",
            changeTheme: "テーマを変更:",
            dark: "ダーク",
            light: "ライト",
            blue: "青",
            green: "緑",
            purple: "紫",
            contrast: "ハイコントラスト"
        },
        home: {
            intro: "このプログラムは、ピアツーピア (P2P) 暗号通貨取引での利益と損失を追跡するのに役立つように設計されています。取引ログファイルをアップロードして、パフォーマンスを包括的に分析できます。",
            dashboard: {
                today: "今日の利益",
                week: "今週の利益",
                month: "今月の利益",
                remaining: "残り数量"
            },
            quickLinks: {
                trades: "取引を表示",
                analysis: "分析へ移動"
            }
        },
        trades: {
            buttons: {
                load: "ファイルを読み込む",
                export: "CSV をエクスポート",
                print: "印刷",
                clear: "履歴をクリア",
                addManual: "手動追加",
                add: "追加"
            },
            manualForm: {
                type: "タイプ",
                price: "価格",
                quantity: "数量",
                time: "日付",
                counterparty: "取引相手",
                orderNo: "注文番号"
            },
            table: {
                id: "ID",
                time: "時間",
                order: "注文",
                price: "価格",
                profit: "利益",
                orderNo: "注文番号",
                counterparty: "取引相手",
                delete: "削除"
            },
            view: {
                all: "すべて",
                buys: "購入",
                sells: "売却"
            },
            pagination: {
                prev: "前へ",
                next: "次へ"
            }
        },
        analysis: {
            title: "📊 総合分析",
            performanceSummary: "📊 パフォーマンスの概要",
            totalProfit: "総利益:",
            periods: {
                all: "すべて",
                today: "今日",
                week: "今週",
                month: "今月",
                year: "今年"
            },
            charts: {
                dailyProfit: "📈 日次利益",
                buyVsSell: "🥧 購入 vs 売却"
            },
            advancedStats: {
                title: "📊 高度な統計",
                maxBuyPrice: "最高購入価格",
                maxSellPrice: "最高売却価格",
                topCounterparty: "最優良取引相手",
                avgHoldTime: "平均保有期間"
            },
            peakTimes: {
                title: "⏰ ピークタイム",
                buyTitle: "最適な購入時間",
                sellTitle: "最適な売却時間"
            }
        }
    }
};
// List of Binance P2P supported cryptocurrencies (as of a recent check)
const BINANCE_P2P_CRYPTOS = [
    "USDT", "BUSD", "BTC", "ETH", "BNB", "USDC", "XRP", "ADA", "DOGE", "MATIC", "SOL", "DOT", "LTC", "AVAX", "SHIB", "TRX", "DAI", "UNI", "ATOM", "LINK", "XLM", "ETC", "BCH", "FIL", "HBAR", "NEAR", "ICP", "VET", "FTM", "EGLD", "GRT", "THETA", "AXS", "SAND", "MANA", "APE", "CHZ", "CRV", "FLOW", "XTZ", "KSM", "WAVES", "ZIL", "GMT", "1INCH", "LDO", "OP", "STG", "RDNT", "T", "JASMY", "HOOK", "PHB", "ACE", "ARKM", "OM", "ID", "WLD", "PEPE", "FLOKI", "ASTR", "GAS", "TWT", "AGIX", "APT", "QNT", "ICX", "ALGO", "SFP", "AR", "ROSE", "INJ", "STX", "HNT", "KAVA", "SUI", "TIA", "BNT", "FXS", "PENDLE", "WOO", "GALA", "RNDR", "NEO", "XEC", "LRC", "ENS", "BEL", "CKB", "DODO", "DUSK", "CVC", "OGN", "NMR", "RLC", "CTSI", "RAD", "BAL", "LIT", "IOST", "SKL", "ALICE", "ONE", "DENT", "IMX", "CELR", "COTI", "CHR", "ANKR", "IOTX", "RSR", "OCEAN", "DGB", "SNT", "BAND", "C98", "KNC", "LPT", "ZRX", "BICO", "GLM", "API3", "TRB", "BADGER", "FET", "NKN", "FUN", "STORJ", "BAT", "ARPA", "DASH", "ZEN", "XVG", "SC", "RVN", "KDA", "SYS", "CFX", "ONT", "WAXP", "KMD", "QTUM", "LSK", "ICN", "VTC", "BCD", "BTS", "XMR", "XEM", "ARDR", "REP", "STEEM", "STRAT", "GAME", "NXS", "EMC2", "VIA", "POT", "BURST", "BLK", "RADS", "XCP", "NMC", "FCT", "BTCD", "DOGE", "DGB", "VRC", "CURE", "XMG", "XWC", "NOTE", "NAUT", "HKG", "UNITY", "SWIFT", "SBD", "BTA", "CLAM", "XVC", "PINK", "MONA", "BCN", "RDD", "GRC", "NXT", "PPC", "BLK", "VTC", "XPM", "YBC", "ZET", "DMD", "GAM", "XDN", "QTL", "BTM", "LBC", "SJCX", "VIA", "POT", "BURST", "BLK", "RADS", "XCP", "NMC", "FCT", "BTCD", "DOGE", "DGB", "VRC", "CURE", "XMG", "XWC", "NOTE", "NAUT", "HKG", "UNITY", "SWIFT", "SBD", "BTA", "CLAM", "XVC", "PINK", "MONA", "BCN", "RDD", "GRC", "NXT", "PPC"
];
document.addEventListener("DOMContentLoaded", function() {
    let LANG = localStorage.getItem("lang") || "en";
    let originalData = [];
    let tradeList = [];
    let summaryValues = Array(11).fill("0.00");
    let viewMode = "all";
    let sortKey = null;
    let sortDirection = 1;
    let currentPage = 1;
    const itemsPerPage = 20;
    // elements
    const assetCurrencySelect = document.getElementById("assetCurrency");
    const fiatCurrencySelect = document.getElementById("fiatCurrency");
    const marketPriceInput = document.getElementById("marketPrice");
    const themeToggle = document.getElementById("themeToggle");
    const languageToggle = document.getElementById("languageToggle");
    const languageSelect = document.getElementById("languageSelect");
    const navButtons = document.querySelectorAll(".nav-btn");
    const tabContents = document.querySelectorAll(".tab-content");
    const dateFromInput = document.getElementById("dateFrom");
    const dateToInput = document.getElementById("dateTo");
    const filterCounterpartySelect = document.getElementById("filterCounterparty");
    const periodBtns = document.querySelectorAll('.period-btn');
    const quickLinks = document.querySelectorAll('.quick-links button');
    const themeSwitchBtns = document.querySelectorAll('.theme-switch-btn');
    const manualTradeForm = document.querySelector('.manual-trade-form');
    const toggleManualFormBtn = document.getElementById('toggleManualForm');
    const addManualTradeBtn = document.getElementById('addManualTrade');
    const prevPageBtn = document.getElementById('prevPage');
    const nextPageBtn = document.getElementById('nextPage');
    const pageInfoSpan = document.getElementById('pageInfo');
    // Page Navigation
    function showTab(tabId) {
        tabContents.forEach(tab => {
            tab.classList.remove("active");
        });
        navButtons.forEach(btn => {
            btn.classList.remove("active");
        });
        document.getElementById(tabId).classList.add("active");
        document.querySelector(`.nav-btn[data-tab="${tabId.replace('-tab', '')}"]`).classList.add("active");
        if (tabId === 'analysis-tab') {
            renderAnalysis();
        }
        if (tabId === 'home-tab') {
            refresh();
        }
    }
    navButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const tab = btn.dataset.tab + '-tab';
            showTab(tab);
        });
    });
    quickLinks.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetTab = btn.dataset.action;
            showTab(targetTab);
        });
    });
    // Theme and Language Toggles
    function toggleTheme(theme = null) {
        const body = document.body;
        const currentThemeClass = Array.from(body.classList).find(cls => cls.endsWith('-theme'));
        const currentTheme = currentThemeClass ? currentThemeClass.replace('-theme', '') : 'dark';
        const newTheme = theme || (currentTheme === "light" ? "dark" : "light"); // <-- هذا السطر سيتغير لاحقًا، لكنه يعمل الآن لأن `theme` لن يكون `null`
        body.classList.remove("light-theme", "dark-theme", "blue-theme", "green-theme", "purple-theme", "contrast-theme");
        body.classList.add(newTheme + "-theme");

        // Update theme toggle icon
        let iconClass = 'fa-moon'; // Default for dark
        if (newTheme === 'light') iconClass = 'fa-sun';
        else if (newTheme === 'blue') iconClass = 'fa-tint';
        else if (newTheme === 'green') iconClass = 'fa-leaf';
        else if (newTheme === 'purple') iconClass = 'fa-palette';
        else if (newTheme === 'contrast') iconClass = 'fa-adjust';
        // ✅ تحديث الأيقونة في الزر العلوي
        document.getElementById('themeIcon').className = `fas ${iconClass}`;
        // ✅ تحديث الأيقونة داخل قائمة الثيمات المنسدلة لكل عنصر
        document.querySelectorAll('#themeDropdownMenu .dropdown-item i').forEach(icon => {
            icon.className = `fas ${iconClass}`;
        });
        // Update settings page buttons (highlight active one)
        themeSwitchBtns.forEach(btn => btn.classList.remove('active'));
        for (let btn of themeSwitchBtns) {
            if (btn.dataset.theme === newTheme) {
                btn.classList.add('active');
                break;
            }
        }

        // Save to local storage
        localStorage.setItem("theme", newTheme);

        // Re-render analysis if active
        if (document.getElementById('analysis-tab').classList.contains('active')) {
            renderAnalysis();
        }
    }

    function updateLang(newLang) {
        LANG = newLang;
        const t = translations[LANG];
        localStorage.setItem("lang", LANG);
        // Update Nav Buttons
        document.getElementById("nav-home").textContent = t.pages.home;
        document.getElementById("nav-trades").textContent = t.pages.trades;
        document.getElementById("nav-analysis").textContent = t.pages.analysis;
        document.getElementById("nav-settings").textContent = t.pages.settings;
        // Update Page Titles
        document.querySelector('#home-tab .section-title').textContent = t.pageTitles.home;
        const element = document.querySelector('#trades-tab .section-title');
        if (element) {
            element.textContent = t.pageTitles.trades;
        }
        document.querySelector('#analysis-tab .section-title').textContent = t.analysis.title;
        document.querySelector('#settings-tab .section-title').textContent = t.pageTitles.settings;
        // Update Home Tab
        document.getElementById("home-intro").textContent = t.home.intro;
        document.getElementById("dashboard-today").textContent = t.home.dashboard.today;
        document.getElementById("dashboard-week").textContent = t.home.dashboard.week;
        document.getElementById("dashboard-month").textContent = t.home.dashboard.month;
        document.getElementById("dashboard-remaining").textContent = t.home.dashboard.remaining;
        document.getElementById("quick-trades").textContent = t.home.quickLinks.trades;
        document.getElementById("quick-analysis").textContent = t.home.quickLinks.analysis;
        // Update Trades Tab
        document.getElementById("btn-load").textContent = t.trades.buttons.load;
        document.getElementById("btn-export").textContent = t.trades.buttons.export;
        document.getElementById("btn-print").textContent = t.trades.buttons.print;
        document.getElementById("btn-clear").textContent = t.trades.buttons.clear;
        document.getElementById("marketPrice").placeholder = t.marketPrice;
        document.getElementById("btn-add-manual").textContent = t.trades.buttons.addManual;
        // Manual Form
        document.getElementById("label-type").textContent = t.trades.manualForm.type;
        document.getElementById("option-buy").textContent = t.trades.manualForm.buys || t.buys; // Fallback
        document.getElementById("option-sell").textContent = t.trades.manualForm.sells || t.sells; // Fallback
        document.getElementById("label-price").textContent = t.trades.manualForm.price;
        document.getElementById("label-quantity").textContent = t.trades.manualForm.quantity;
        document.getElementById("label-time").textContent = t.trades.manualForm.time;
        document.getElementById("label-counterparty").textContent = t.trades.manualForm.counterparty;
        document.getElementById("label-order-no").textContent = t.trades.manualForm.orderNo;
        document.getElementById("btn-add").textContent = t.trades.buttons.add;
        // Table Headers
        document.getElementById("th-id").textContent = t.trades.table.id;
        document.getElementById("th-time").textContent = t.trades.table.time;
        document.getElementById("th-order").textContent = t.trades.table.order;
        document.getElementById("th-price").textContent = t.trades.table.price;
        document.getElementById("th-profit").textContent = t.trades.table.profit;
        document.getElementById("th-order-no").textContent = t.trades.table.orderNo;
        document.getElementById("th-counterparty").textContent = t.trades.table.counterparty;
        document.getElementById("th-delete").textContent = t.trades.table.delete;
        // View Buttons
        document.querySelector('[data-view="all"]').textContent = t.trades.view.all;
        document.querySelector('[data-view="buys"]').textContent = t.trades.view.buys;
        document.querySelector('[data-view="sells"]').textContent = t.trades.view.sells;
        // Pagination
        document.getElementById("pagination-prev").textContent = t.trades.pagination.prev;
        document.getElementById("pagination-next").textContent = t.trades.pagination.next;
        // Analysis Tab
        document.getElementById("analysis-title").textContent = t.analysis.title;
        document.getElementById("analysis-total-profit-label").textContent = t.analysis.totalProfit;
        document.getElementById("period-all").textContent = t.analysis.periods.all;
        document.getElementById("period-today").textContent = t.analysis.periods.today;
        document.getElementById("period-week").textContent = t.analysis.periods.week;
        document.getElementById("period-month").textContent = t.analysis.periods.month;
        document.getElementById("period-year").textContent = t.analysis.periods.year;
        document.getElementById("chart-profit-title").textContent = t.analysis.charts.dailyProfit;
        document.getElementById("chart-trades-title").textContent = t.analysis.charts.buyVsSell;
        document.getElementById("stats-title").textContent = t.analysis.advancedStats.title;
        document.getElementById("stat-max-buy").textContent = t.analysis.advancedStats.maxBuyPrice;
        document.getElementById("stat-max-sell").textContent = t.analysis.advancedStats.maxSellPrice;
        document.getElementById("stat-top-counterparty").textContent = t.analysis.advancedStats.topCounterparty;
        document.getElementById("stat-avg-hold").textContent = t.analysis.advancedStats.avgHoldTime;
        if (document.getElementById("performance-summary")) {
            document.getElementById("performance-summary").textContent = t.analysis.performanceSummary;
        }
        // Peak Times Section (New)
        if (document.getElementById("peak-times-title")) {
            document.getElementById("peak-times-title").textContent = t.analysis.peakTimes.title;
        }
        if (document.getElementById("peak-buy-title")) {
            document.getElementById("peak-buy-title").textContent = t.analysis.peakTimes.buyTitle;
        }
        if (document.getElementById("peak-sell-title")) {
            document.getElementById("peak-sell-title").textContent = t.analysis.peakTimes.sellTitle;
        }
        // Settings Tab
        document.getElementById("label-lang").textContent = t.settings.selectLang;
        document.getElementById("label-theme").textContent = t.settings.changeTheme;
        document.querySelector('.theme-switch-btn[data-theme="dark"] span').textContent = t.settings.dark;
        document.querySelector('.theme-switch-btn[data-theme="light"] span').textContent = t.settings.light;
        document.querySelector('.theme-switch-btn[data-theme="blue"] span').textContent = t.settings.blue;
        document.querySelector('.theme-switch-btn[data-theme="green"] span').textContent = t.settings.green;
        document.querySelector('.theme-switch-btn[data-theme="purple"] span').textContent = t.settings.purple;
        document.querySelector('.theme-switch-btn[data-theme="contrast"] span').textContent = t.settings.contrast;
        // Update Date Inputs Placeholders (Flatpickr handles this)
        // document.getElementById("dateFrom").placeholder = t.dateFromPlaceholder || "From Date";
        // document.getElementById("dateTo").placeholder = t.dateToPlaceholder || "To Date";
        // Update fiat currency options
        fillFiatOptions();
        // Update crypto currency options
        fillCryptoOptions();
        // Re-render content with new language
        renderTrades();
        renderResults();
        renderAnalysisResults();
        updateMiniDashboard();
        updateAdvancedStats();
        calculatePeakTimes(); // <-- Update peak times on language change
        if (document.getElementById('analysis-tab').classList.contains('active')) {
            renderAnalysis();
        }
    }
    languageSelect.addEventListener('change', (e) => {
        updateLang(e.target.value);
        currentLangCode.textContent = e.target.value.toUpperCase(); // <-- تحديث الاختصار
    });
    // معالجة قائمة اللغات المنسدلة
    const languageDropdownToggle = document.getElementById('languageDropdownToggle');
    const languageDropdownMenu = document.getElementById('languageDropdownMenu');
    const currentLangCode = document.getElementById('currentLangCode');
    // إغلاق القائمة عند النقر خارجها
    document.addEventListener('click', function(event) {
        const isClickInside = languageDropdownToggle.contains(event.target) || languageDropdownMenu.contains(event.target);
        if (!isClickInside) {
            languageDropdownMenu.classList.remove('show');
            languageDropdownToggle.setAttribute('aria-expanded', 'false');
        }
    });
    // تبديل ظهور/إخفاء القائمة
    languageDropdownToggle.addEventListener('click', function(event) {
        event.stopPropagation(); // منع إغلاق القائمة عند النقر على الزر نفسه
        const isExpanded = languageDropdownToggle.getAttribute('aria-expanded') === 'true';
        languageDropdownMenu.classList.toggle('show', !isExpanded);
        languageDropdownToggle.setAttribute('aria-expanded', (!isExpanded).toString());
    });
    // تغيير اللغة عند النقر على عنصر في القائمة
    languageDropdownMenu.addEventListener('click', function(event) {
        if (event.target.classList.contains('dropdown-item')) {
            const newLang = event.target.getAttribute('data-lang');
            updateLang(newLang);
            currentLangCode.textContent = newLang.toUpperCase(); // تحديث الاختصار المعروض
            languageDropdownMenu.classList.remove('show');
            languageDropdownToggle.setAttribute('aria-expanded', 'false');
        }
    });
    // تحديث الاختصار عند تحميل الصفحة لأول مرة
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
        languageSelect.value = savedLang;
        updateLang(savedLang);
        currentLangCode.textContent = savedLang.toUpperCase(); // <-- تحديث الاختصار
    } else {
        updateLang('en');
        currentLangCode.textContent = 'EN'; // <-- تحديث الاختصار
    }
    // Existing functions (no changes needed)
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

    function fillCryptoOptions() {
        assetCurrencySelect.innerHTML = "";
        BINANCE_P2P_CRYPTOS.forEach(code => {
            const option = document.createElement("option");
            option.value = code;
            option.textContent = code;
            assetCurrencySelect.appendChild(option);
        });
        // Set default crypto if needed
        if (!assetCurrencySelect.value) {
            assetCurrencySelect.value = "USDT";
        }
    }
    // Event listeners that trigger refresh
    dateFromInput.addEventListener("change", refresh);
    dateToInput.addEventListener("change", refresh);
    filterCounterpartySelect.addEventListener("change", refresh);
    marketPriceInput.addEventListener("input", refresh);
    assetCurrencySelect.addEventListener("change", refresh);
    fiatCurrencySelect.addEventListener("change", refresh);
    document.getElementById("alertThreshold").addEventListener("input", refresh);

    function setView(mode) {
        viewMode = mode;
        document.querySelectorAll('.btn-group .btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector(`.btn-group .btn[data-view="${mode}"]`).classList.add('active');
        refresh();
    }
    document.querySelector('[data-view="all"]').addEventListener("click", () => setView("all"));
    document.querySelector('[data-view="buys"]').addEventListener("click", () => setView("buys"));
    document.querySelector('[data-view="sells"]').addEventListener("click", () => setView("sells"));
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
                let va = a[key],
                    vb = b[key];
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
        const lines = text.trim().split(/\r?\n/);
        const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''));
        const data = [];
        for (let i = 1; i < lines.length; i++) {
            if (!lines[i].trim()) continue;
            const values = lines[i].split(',').map(v => v.trim().replace(/^"|"$/g, ''));
            const row = {};
            headers.forEach((h, idx) => {
                row[h] = values[idx] || '';
            });
            data.push(row);
        }
        return data;
    }

    function calculate(data, dateFrom = null, dateTo = null) {
        const asset = assetCurrencySelect.value;
        const fiat = fiatCurrencySelect.value;
        const fromDate = dateFrom ? new Date(dateFrom) : null;
        const toDate = dateTo ? new Date(dateTo) : null;
        let filteredByDate = data;
        if (fromDate || toDate) {
            filteredByDate = data.filter(row => {
                const tradeTime = new Date(row['Created Time']);
                if (isNaN(tradeTime)) return false;
                if (fromDate && tradeTime < fromDate) return false;
                if (toDate && tradeTime > toDate) return false;
                return true;
            });
        }
        const completed = filteredByDate.filter(r => (r.Status || '').toLowerCase() === 'completed');
        const filtered = completed.filter(r => (r['Asset Type'] || '') === asset && (r['Fiat Type'] || '') === fiat);
        const sorted = filtered.sort((a, b) => new Date(a['Created Time']) - new Date(b['Created Time']));
        const inventory = [];
        let totalProfit = 0;
        let buyCount = 0,
            sellCount = 0;
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
                manual: false,
                deleted: false // <-- أضف هذا السطر
            });
        });
        const totalBuys = inventory.reduce((sum, [p, q]) => sum + p * q, 0);
        const remainingQty = inventory.reduce((sum, [p, q]) => sum + q, 0);
        const avgBuyPrice = remainingQty > 0 ? (totalBuys / remainingQty).toFixed(6) : "0.000000";
        const marketPrice = marketPriceInput.value && !isNaN(marketPriceInput.value) ?
            parseFloat(marketPriceInput.value) : lastSoldPrice || 0;
        const marketValue = remainingQty * marketPrice;
        const unrealized = marketValue - totalBuys;
        summaryValues = [
            totalProfit.toFixed(2),
            totalBuys.toFixed(2),
            totalBuys.toFixed(2),
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
        let filtered = tradeList.filter(t => !t.deleted); // <-- أضف هذا التصفية
        if (viewMode === "buys") filtered = filtered.filter(t => t.type === 'buy');
        else if (viewMode === "sells") filtered = filtered.filter(t => t.type === 'sell');
        const totalPages = Math.ceil(filtered.length / itemsPerPage);
        currentPage = Math.min(currentPage, totalPages);
        if (currentPage < 1) currentPage = 1;
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedTrades = filtered.slice(start, end);
        // Check if the current language is RTL and adjust table direction
        const isRTL = LANG === 'ar' || LANG === 'he'; // Add other RTL languages if needed
        const tableHeader = document.querySelector('.table-header');
        if (isRTL) {
            tableHeader.style.direction = 'rtl';
            document.getElementById("tableBody").style.direction = 'rtl';
        } else {
            tableHeader.style.direction = 'ltr';
            document.getElementById("tableBody").style.direction = 'ltr';
        }
        paginatedTrades.forEach(trade => {
            const profitValue = parseFloat(trade.profit);
            const profitColorClass = profitValue >= 0 ? 'positive' : 'negative';
            const row = document.createElement("div");
            row.className = `trade-row ${trade.manual ? 'manual-trade' : ''}`;
            row.innerHTML = `
                <div class="col-id">${trade.id}</div>
                <div class="col-time">${trade.time}</div>
                <div class="col-order order">${trade.order}</div>
                <div class="col-price price">${trade.price}</div>
                <div class="col-profit profit ${profitColorClass}">${trade.profit}</div>
                <div class="col-number">${trade.orderNo}</div>
                <div class="col-counter">${trade.counterparty}</div>
                <div class="col-delete">
                    <button class="delete-btn" onclick="deleteTrade('${trade.orderNo}', ${!!trade.manual})">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            `;
            body.appendChild(row);
        });
        const counterparties = [...new Set(tradeList.map(t => t.counterparty).filter(c => c && c !== "N/A"))];
        filterCounterpartySelect.innerHTML = '<option value="">جميع الأطراف</option>';
        counterparties.forEach(c => {
            const option = document.createElement("option");
            option.value = c;
            option.textContent = c;
            filterCounterpartySelect.appendChild(option);
        });
        pageInfoSpan.textContent = `${translations[LANG]?.trades?.pagination?.page || 'Page'} ${currentPage} ${translations[LANG]?.trades?.pagination?.of || 'of'} ${totalPages}`;
        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage === totalPages;
    }
    prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderTrades();
        }
    });
    nextPageBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(tradeList.length / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderTrades();
        }
    });
    window.deleteTrade = function(orderNo, isManual) {
        if (orderNo === "N/A") {
            // البحث عن أول صفقة شراء غير مباعة بالكامل في inventory
            // هذا يتطلب إعادة بناء inventory من originalData
            const asset = assetCurrencySelect.value;
            const fiat = fiatCurrencySelect.value;
            const completed = originalData.filter(r => (r.Status || '').toLowerCase() === 'completed');
            const filtered = completed.filter(r => (r['Asset Type'] || '') === asset && (r['Fiat Type'] || '') === fiat);
            const sorted = filtered.sort((a, b) => new Date(a['Created Time']) - new Date(b['Created Time']));
            const inventory = [];
            for (const row of sorted) {
                const price = parseFloat(row.Price) || 0;
                const qty = parseFloat(row.Quantity) || 0;
                const orderType = (row['Order Type'] || '').toLowerCase();
                if (orderType === 'buy') {
                    inventory.push({...row, remainingQty: qty }); // نحتفظ بكل بيانات الصفقة
                } else if (orderType === 'sell') {
                    let qtyToSell = qty;
                    while (qtyToSell > 0 && inventory.length > 0) {
                        const firstBuy = inventory[0];
                        if (firstBuy.remainingQty <= qtyToSell + 1e-12) {
                            qtyToSell -= firstBuy.remainingQty;
                            inventory.shift();
                        } else {
                            firstBuy.remainingQty -= qtyToSell;
                            qtyToSell = 0;
                        }
                    }
                }
            }
            if (inventory.length > 0) {
                const buyToClose = inventory[0];
                const closingQty = buyToClose.remainingQty;
                if (confirm(`سيتم إنشاء عملية بيع وهمية بسعر ${buyToClose.Price} لتصفية ${closingQty} ${asset}. هل أنت متأكد؟`)) {
                    // إنشاء صفقة بيع وهمية
                    const fakeSell = {
                        "Status": "Completed",
                        "Order Type": "Sell",
                        "Price": buyToClose.Price, // بيع بسعر التكلفة لتصفير الربح
                        "Quantity": closingQty,
                        "Asset Type": asset,
                        "Fiat Type": fiat,
                        "Order Number": `FAKE-SELL-${Date.now()}`,
                        "Counterparty": "System (Auto-Close)",
                        "Created Time": new Date().toISOString().slice(0, 19).replace('T', ' '),
                        "Maker Fee": "0",
                        "Taker Fee": "0",
                        manual: true
                    };
                    originalData.push(fakeSell);
                    localStorage.setItem("lastData", JSON.stringify(originalData));
                    refresh();
                }
            }
        } else {
            // حذف صفقة عادية
            originalData = originalData.filter(row => (row['Order Number'] || '') !== orderNo);
            localStorage.setItem("lastData", JSON.stringify(originalData));
            refresh();
        }
    };
    addManualTradeBtn.addEventListener('click', addManualTrade);

    function addManualTrade() {
        const asset = document.getElementById("assetCurrency").value;
        const fiat = document.getElementById("fiatCurrency").value;
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
        manualTradeForm.classList.add('hidden'); // Hide the form after adding
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

    function renderAnalysisResults() {
        const grid = document.getElementById("analysisResultsGrid");
        if (!grid) return; // إذا لم يكن العنصر موجودًا، لا تفعل شيئًا
        grid.innerHTML = "";
        const t = translations[LANG];
        t.labels.forEach((label, i) => {
            const card = document.createElement("div");
            card.className = "stat-card";
            card.innerHTML = `<div>${label}</div><div class="stat-value">${summaryValues[i]}</div>`;
            grid.appendChild(card);
        });
    }
    document.getElementById("loadFile").addEventListener("click", () => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = ".csv,.txt";
        input.multiple = true;
        input.style.display = "none";
        document.body.appendChild(input);
        input.onchange = (e) => {
            const files = e.target.files;
            if (!files.length) {
                alert("No files selected.");
                return;
            }
            let allData = [];
            let processed = 0;
            for (let file of files) {
                const reader = new FileReader();
                reader.onload = function(ev) {
                    try {
                        const text = ev.target.result;
                        const data = parseCSV(text);
                        allData = allData.concat(data);
                    } catch (err) {
                        alert(`Error in file ${file.name}: ${err.message}
Note: For .txt files, they must have the same structure as .csv files (header row followed by comma-separated data). PDF files are not supported.`);
                    } finally {
                        processed++;
                        if (processed === files.length) {
                            originalData = allData;
                            localStorage.setItem("lastData", JSON.stringify(allData));
                            refresh();
                        }
                    }
                };
                reader.readAsText(file);
            }
        };
        input.click();
    });
    document.getElementById("exportCSV").addEventListener("click", () => {
        const headers = ["ID", "Time", "Order", "Price", "Profit", "Order No.", "Counterparty"];
        const rows = tradeList.map(t => [
            t.id, t.time, t.order, t.price, t.profit, t.orderNo, t.counterparty
        ]);
        let csvContent = headers.join(",") + "\n";
        rows.forEach(row => {
            const escaped = row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(",");
            csvContent += escaped + "\n";
        });
        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", "p2p_trades.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    });

    function refresh() {
        if (originalData.length === 0) {
            clearDashboard();
            return;
        }
        const dateFrom = document.getElementById("dateFrom").value;
        const dateTo = document.getElementById("dateTo").value;
        tradeList = calculate(originalData, dateFrom, dateTo);
        renderTrades();
        renderResults();
        renderAnalysisResults();
        updateMiniDashboard();
        updateAdvancedStats();
        calculatePeakTimes(); // <-- Calculate peak times on refresh
        const threshold = parseFloat(document.getElementById("alertThreshold").value);
        if (!isNaN(threshold)) {
            const totalProfit = parseFloat(summaryValues[0]);
            if (totalProfit >= threshold) {
                alert(`🎉 Profit Alert: You reached ${totalProfit} (${threshold}%)`);
            } else if (totalProfit <= -threshold) {
                alert(`⚠️ Loss Alert: You lost ${totalProfit} (${threshold}%)`);
            }
        }
        if (document.getElementById('analysis-tab').classList.contains('active')) {
            renderAnalysis();
        }
    }

    function updateMiniDashboard() {
        const now = new Date();
        const today = now.toISOString().split('T')[0];
        const weekAgo = new Date(now);
        weekAgo.setDate(weekAgo.getDate() - 7);
        const monthAgo = new Date(now);
        monthAgo.setMonth(monthAgo.getMonth() - 1);
        const todayProfit = tradeList
            .filter(t => t.time.includes(today) && t.type === 'sell')
            .reduce((sum, t) => sum + parseFloat(t.profit), 0).toFixed(2);
        const weekProfit = tradeList
            .filter(t => {
                const tradeDate = new Date(t.time);
                return tradeDate >= weekAgo && t.type === 'sell';
            })
            .reduce((sum, t) => sum + parseFloat(t.profit), 0).toFixed(2);
        const monthProfit = tradeList
            .filter(t => {
                const tradeDate = new Date(t.time);
                return tradeDate >= monthAgo && t.type === 'sell';
            })
            .reduce((sum, t) => sum + parseFloat(t.profit), 0).toFixed(2);
        const openTrades = tradeList.filter(t => t.type === 'buy').length;
        document.getElementById("todayProfit").textContent = todayProfit;
        document.getElementById("weekProfit").textContent = weekProfit;
        document.getElementById("monthProfit").textContent = monthProfit;
        document.getElementById("openTrades").textContent = openTrades;
    }
    // Chart.js instance for analysis charts
    let profitChartInstance, tradeTypeChartInstance;

    function renderAnalysis(period = 'all') {
        const t = translations[LANG];
        const ctxProfit = document.getElementById('dailyProfitChart').getContext('2d');
        const ctxTradeType = document.getElementById('tradeTypeChart').getContext('2d');
        if (profitChartInstance) profitChartInstance.destroy();
        if (tradeTypeChartInstance) tradeTypeChartInstance.destroy();
        // Data filtering for charts
        let filteredTrades = tradeList;
        const now = new Date();
        if (period === 'today') {
            filteredTrades = tradeList.filter(t => t.time.includes(now.toISOString().split('T')[0]));
        } else if (period === 'week') {
            const weekAgo = new Date(now);
            weekAgo.setDate(now.getDate() - 7);
            filteredTrades = tradeList.filter(t => new Date(t.time) >= weekAgo);
        } else if (period === 'month') {
            const monthAgo = new Date(now);
            monthAgo.setMonth(now.getMonth() - 1);
            filteredTrades = tradeList.filter(t => new Date(t.time) >= monthAgo);
        } else if (period === 'year') {
            const yearAgo = new Date(now);
            yearAgo.setFullYear(now.getFullYear() - 1);
            filteredTrades = tradeList.filter(t => new Date(t.time) >= yearAgo);
        }
        const dailyProfits = {};
        filteredTrades.filter(t => t.type === 'sell').forEach(trade => {
            const date = trade.time.split(' ')[0];
            const profit = parseFloat(trade.profit);
            if (dailyProfits[date]) {
                dailyProfits[date] += profit;
            } else {
                dailyProfits[date] = profit;
            }
        });
        const profitLabels = Object.keys(dailyProfits).sort();
        const profitData = profitLabels.map(date => dailyProfits[date]);
        // حساب صفقات الشراء والبيع من البيانات الأصلية بعد تطبيق الفلاتر
        const asset = assetCurrencySelect.value;
        const fiat = fiatCurrencySelect.value;
        let completedTrades = originalData.filter(r => (r.Status || '').toLowerCase() === 'completed' && (r['Asset Type'] || '') === asset && (r['Fiat Type'] || '') === fiat);
        // تطبيق فلتر الفترة الزمنية
        if (period !== 'all') {
            const now = new Date();
            let cutoffDate;
            if (period === 'today') {
                cutoffDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            } else if (period === 'week') {
                cutoffDate = new Date(now);
                cutoffDate.setDate(now.getDate() - 7);
            } else if (period === 'month') {
                cutoffDate = new Date(now);
                cutoffDate.setMonth(now.getMonth() - 1);
            } else if (period === 'year') {
                cutoffDate = new Date(now);
                cutoffDate.setFullYear(now.getFullYear() - 1);
            }
            completedTrades = completedTrades.filter(t => new Date(t['Created Time']) >= cutoffDate);
        }
        // تطبيق فلتر التاريخ "من" و "إلى" إذا موجودين
        const dateFrom = document.getElementById("dateFrom").value;
        const dateTo = document.getElementById("dateTo").value;
        if (dateFrom || dateTo) {
            const fromDate = dateFrom ? new Date(dateFrom) : null;
            const toDate = dateTo ? new Date(dateTo) : null;
            completedTrades = completedTrades.filter(row => {
                const tradeTime = new Date(row['Created Time']);
                if (isNaN(tradeTime)) return false;
                if (fromDate && tradeTime < fromDate) return false;
                if (toDate && tradeTime > toDate) return false;
                return true;
            });
        }
        const buyCount = completedTrades.filter(t => (t['Order Type'] || '').toLowerCase() === 'buy').length;
        const sellCount = completedTrades.filter(t => (t['Order Type'] || '').toLowerCase() === 'sell').length;
        const isLight = document.body.classList.contains('light-theme');
        const chartColor = isLight ? '#3b82f6' : '#e0e6f1';
        const chartGridColor = isLight ? '#e2e8f0' : '#3b455c';
        const chartTextColor = isLight ? '#1a202c' : '#e0e6f1';
        profitChartInstance = new Chart(ctxProfit, {
            type: 'line',
            data: {
                labels: profitLabels,
                datasets: [{
                    label: t.labels[0], // Use translated label for total profit
                    data: profitData,
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.2)',
                    fill: true,
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        grid: { color: chartGridColor },
                        ticks: { color: chartTextColor }
                    },
                    y: {
                        grid: { color: chartGridColor },
                        ticks: { color: chartTextColor }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: chartTextColor
                        }
                    }
                }
            }
        });
        tradeTypeChartInstance = new Chart(ctxTradeType, {
            type: 'doughnut',
            data: {
                labels: [t.buys, t.sells], // Use translated labels
                datasets: [{
                    data: [buyCount, sellCount],
                    backgroundColor: [
                        'rgba(59, 130, 246, 0.8)',
                        'rgba(239, 68, 68, 0.8)'
                    ],
                    borderColor: chartColor,
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: chartTextColor
                        }
                    }
                }
            }
        });
        document.getElementById("totalProfitAnalysis").textContent = filteredTrades
            .filter(t => t.type === 'sell')
            .reduce((sum, t) => sum + parseFloat(t.profit), 0).toFixed(2);
        renderAnalysisResults();
    }
    periodBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            periodBtns.forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            renderAnalysis(btn.dataset.period);
        });
    });

    function updateAdvancedStats() {
        const asset = assetCurrencySelect.value;
        const fiat = fiatCurrencySelect.value;
        const completedTrades = originalData.filter(row => (row.Status || '').toLowerCase() === 'completed' && (row['Asset Type'] || '') === asset && (row['Fiat Type'] || '') === fiat);
        const sortedTrades = completedTrades.sort((a, b) => new Date(a['Created Time']) - new Date(b['Created Time']));
        const buys = sortedTrades.filter(t => (t['Order Type'] || '').toLowerCase() === 'buy');
        const sells = sortedTrades.filter(t => (t['Order Type'] || '').toLowerCase() === 'sell');
        const maxBuyPrice = buys.reduce((max, t) => Math.max(max, parseFloat(t.Price) || 0), 0);
        const maxSellPrice = sells.reduce((max, t) => Math.max(max, parseFloat(t.Price) || 0), 0);
        const counterpartyCounts = {};
        completedTrades.forEach(t => {
            const counterparty = t['Couterparty'] || t['Counterparty'];
            if (counterparty) {
                counterpartyCounts[counterparty] = (counterpartyCounts[counterparty] || 0) + 1;
            }
        });
        const topCounterparty = Object.keys(counterpartyCounts).sort((a, b) => counterpartyCounts[b] - counterpartyCounts[a])[0] || '—';
        // حساب متوسط وقت الاحتفاظ
        let totalHoldTime = 0; // بالملي ثانية
        let totalQuantitySold = 0;
        const inventory = []; // [buyTime, buyPrice, buyQuantity]
        for (const trade of sortedTrades) {
            const price = parseFloat(trade.Price) || 0;
            const qty = parseFloat(trade.Quantity) || 0;
            const tradeTime = new Date(trade['Created Time']);
            const orderType = (trade['Order Type'] || '').toLowerCase();
            if (orderType === 'buy') {
                inventory.push({
                    time: tradeTime,
                    price: price,
                    quantity: qty
                });
            } else if (orderType === 'sell') {
                let remainingQtyToSell = qty;
                while (remainingQtyToSell > 0 && inventory.length > 0) {
                    const firstBuy = inventory[0];
                    const availableQty = firstBuy.quantity;
                    if (availableQty <= remainingQtyToSell) {
                        // بيع الكمية كلها من أول عملية شراء
                        const holdTimeMs = tradeTime - firstBuy.time;
                        totalHoldTime += holdTimeMs * availableQty; // الوقت * الكمية
                        totalQuantitySold += availableQty;
                        remainingQtyToSell -= availableQty;
                        inventory.shift(); // إزالة عملية الشراء من المخزون
                    } else {
                        // بيع جزء من أول عملية شراء
                        const holdTimeMs = tradeTime - firstBuy.time;
                        totalHoldTime += holdTimeMs * remainingQtyToSell;
                        totalQuantitySold += remainingQtyToSell;
                        firstBuy.quantity -= remainingQtyToSell;
                        remainingQtyToSell = 0;
                    }
                }
            }
        }
        let avgHoldTimeDays = '—';
        if (totalQuantitySold > 0) {
            const avgHoldTimeMs = totalHoldTime / totalQuantitySold;
            const days = (avgHoldTimeMs / (1000 * 60 * 60 * 24));
            avgHoldTimeDays = `${days.toFixed(2)} ${translations[LANG].analysis.advancedStats.avgHoldTime.split(' ')[0] === 'متوسط' ? 'أيام' : (LANG === 'en' ? 'days' : LANG === 'fr' ? 'jours' : LANG === 'es' ? 'días' : LANG === 'de' ? 'Tage' : LANG === 'ru' ? 'дней' : LANG === 'tr' ? 'gün' : LANG === 'pt' ? 'dias' : LANG === 'it' ? 'giorni' : LANG === 'zh' ? '天' : LANG === 'ja' ? '日' : 'days')}`;
        }
        if (document.getElementById('maxBuyPrice')) document.getElementById('maxBuyPrice').textContent = maxBuyPrice.toFixed(6);
        if (document.getElementById('maxSellPrice')) document.getElementById('maxSellPrice').textContent = maxSellPrice.toFixed(6);
        if (document.getElementById('topCounterparty')) document.getElementById('topCounterparty').textContent = topCounterparty;
        if (document.getElementById('avgHoldTime')) document.getElementById('avgHoldTime').textContent = avgHoldTimeDays;
    }
    // New Function: Calculate Peak Times for Buy and Sell
    function calculatePeakTimes() {
        // تصفية الصفقات المكتملة فقط من originalData
        const completedTrades = originalData.filter(row => (row.Status || '').toLowerCase() === 'completed');
        // فصل صفقات الشراء والبيع
        const buys = completedTrades.filter(row => (row['Order Type'] || '').toLowerCase() === 'buy');
        const sells = completedTrades.filter(row => (row['Order Type'] || '').toLowerCase() === 'sell');
        // دالة لحساب تكرار الساعات
        const getHourlyCounts = (trades) => {
            const hourCounts = {};
            trades.forEach(trade => {
                const tradeTime = new Date(trade['Created Time']);
                if (!isNaN(tradeTime)) {
                    const hour = tradeTime.getHours(); // الحصول على رقم الساعة (0-23)
                    hourCounts[hour] = (hourCounts[hour] || 0) + 1;
                }
            });
            return hourCounts;
        };
        const buyHourCounts = getHourlyCounts(buys);
        const sellHourCounts = getHourlyCounts(sells);
        // دالة لفرز الساعات واختيار أعلى 3 وحساب النسب
        const getTop3WithPercentages = (counts, total) => {
            if (total === 0) return "لا توجد بيانات";
            const sortedHours = Object.entries(counts)
                .sort((a, b) => b[1] - a[1]) // ترتيب تنازلي حسب العدد
                .slice(0, 3); // أخذ أعلى 3
            return sortedHours.map(([hour, count]) => {
                const percentage = ((count / total) * 100).toFixed(1);
                return `${hour}:00 (${count} - ${percentage}%)`;
            }).join(' | ');
        };
        const topBuyTimes = getTop3WithPercentages(buyHourCounts, buys.length);
        const topSellTimes = getTop3WithPercentages(sellHourCounts, sells.length);
        // تحديث عناصر HTML
        if (document.getElementById('peakBuyTimes')) {
            document.getElementById('peakBuyTimes').textContent = topBuyTimes;
        }
        if (document.getElementById('peakSellTimes')) {
            document.getElementById('peakSellTimes').textContent = topSellTimes;
        }
    }
    // إضافة وظيفة الطباعة لقسم التحليل (نسخة محسنة)
    document.getElementById("printResults").addEventListener("click", () => {
        // التحقق من أننا في تبويب التحليل
        if (!document.getElementById('analysis-tab').classList.contains('active')) {
            alert("يرجى الانتقال إلى صفحة 'التحليل' أولاً ثم الضغط على الطباعة.");
            return;
        }
        // إنشاء نافذة طباعة جديدة
        const printWindow = window.open('', '_blank');
        if (!printWindow) {
            alert("فشل فتح نافذة الطباعة. يرجى التأكد من تعطيل منع النوافذ المنبثقة.");
            return;
        }
        // جمع محتوى صفحة التحليل
        const analysisContent = document.getElementById('analysis-tab').innerHTML;
        // بناء صفحة HTML للطباعة
        const printHtml = `
            <!DOCTYPE html>
            <html dir="${LANG === 'ar' ? 'rtl' : 'ltr'}">
            <head>
                <title>طباعة تحليل P2P</title>
                <style>
                    body { 
                        font-family: 'Inter', sans-serif; 
                        padding: 20px; 
                        direction: ${LANG === 'ar' ? 'rtl' : 'ltr'};
                        background: white;
                        color: black;
                    }
                    .chart-card, .advanced-stats, .performance-summary, .peak-times-stats {
                        page-break-inside: avoid;
                        margin-bottom: 30px;
                        padding: 15px;
                        border: 1px solid #ccc;
                        border-radius: 8px;
                        background: white;
                    }
                    canvas {
                        max-width: 100% !important;
                        height: auto !important;
                        display: block;
                        margin: 0 auto;
                    }
                    h2, h3 {
                        color: #333;
                    }
                    /* إخفاء الأزرار غير الضرورية للطباعة */
                    .period-btn, .theme-switch-btn, .nav-btn, .icon-btn {
                        display: none;
                    }
                    @media print {
                        body { -webkit-print-color-adjust: exact; }
                    }
                </style>
            </head>
            <body>
                <div style="text-align: center; margin-bottom: 20px;">
                    <h2>📊 تقرير تحليل P2P</h2>
                    <p>تم إنشاؤه في: ${new Date().toLocaleString()}</p>
                </div>
                ${analysisContent}
            </body>
            </html>
        `;
        // كتابة المحتوى إلى النافذة الجديدة
        printWindow.document.open();
        printWindow.document.write(printHtml);
        printWindow.document.close();
        // انتظار تحميل الصفحة ثم طباعتها
        printWindow.onload = function() {
            printWindow.print();
        };
    });
    // إضافة زر طباعة جديد داخل صفحة التحليل
    function printContent() {
        const printWindow = window.open('', '_blank');
        // إنشاء محتوى جديد للطباعة
        const printContainer = printWindow.document.createElement('div');
        printContainer.className = `theme-${THEME} ${LANG === 'ar' ? 'rtl' : 'ltr'}`;
        printContainer.style.fontFamily = 'Cairo, sans-serif'; // أو أي خط عربي تستخدمه
        printContainer.innerHTML = `
        <style>
            @media print {
                body {
                    direction: ${LANG === 'ar' ? 'rtl' : 'ltr'};
                    font-family: 'Cairo', sans-serif;
                }
                .chart-title {
                    text-align: center;
                    margin-bottom: 20px;
                }
                .chart-image {
                    max-width: 100%;
                    height: auto;
                    margin-bottom: 30px;
                }
            }
        </style>
        <h1>${translations[LANG].pageTitles.analysis}</h1>
        <h2>${translations[LANG].analysis.charts.dailyProfit} (${translations[LANG].analysis.periods[currentSelectedPeriod]})</h2>
        <div id="dailyProfitChartPrint"></div>
        <h2>${translations[LANG].analysis.charts.buyVsSell} (${translations[LANG].analysis.periods[currentSelectedPeriod]})</h2>
        <div id="buyVsSellChartPrint"></div>
    `;
        printWindow.document.body.appendChild(printContainer);
        // استخدام html2canvas لالتقاط الرسوم البيانية
        const dailyProfitChart = document.getElementById('dailyProfitChart'); // تأكد من أن هذا هو ID الخاص بالرسم البياني للربح اليومي
        const buyVsSellChart = document.getElementById('buyVsSellChart'); // تأكد من أن هذا هو ID الخاص بالرسم البياني للبيع مقابل الشراء
        let chartsToRender = [];
        if (dailyProfitChart) {
            chartsToRender.push(html2canvas(dailyProfitChart).then(canvas => {
                const img = new Image();
                img.src = canvas.toDataURL('image/png');
                img.className = 'chart-image';
                printWindow.document.getElementById('dailyProfitChartPrint').appendChild(img);
            }));
        }
        if (buyVsSellChart) {
            chartsToRender.push(html2canvas(buyVsSellChart).then(canvas => {
                const img = new Image();
                img.src = canvas.toDataURL('image/png');
                img.className = 'chart-image';
                printWindow.document.getElementById('buyVsSellChartPrint').appendChild(img);
            }));
        }
        // انتظر حتى يتم تحويل جميع الرسوم البيانية قبل الطباعة
        Promise.all(chartsToRender).then(() => {
            printWindow.print();
            printWindow.close();
        }).catch(err => {
            console.error("Failed to render charts for printing: ", err);
            printWindow.close();
        });
    }
    // إضافة وظيفة للزر
    // إضافة وظيفة للزر (نسخة معدلة لطباعة جميع الفترات)
    function addPrintButtonToAnalysis() {
        // إنشاء الزر
        const printBtn = document.createElement('button');
        printBtn.id = 'printAnalysis';
        printBtn.className = 'btn';
        printBtn.innerHTML = `<i class="fas fa-print"></i> <span id="btn-print-analysis">طباعة التحليل</span>`;
        // إضافته إلى قسم التحكم في التحليل
        const analysisControls = document.querySelector('.analysis-controls');
        if (analysisControls) {
            // إضافته بعد عنصر إجمالي الأرباح
            const totalProfitElem = analysisControls.querySelector('p');
            if (totalProfitElem) {
                totalProfitElem.after(printBtn);
            } else {
                analysisControls.prepend(printBtn);
            }
        }
        // إضافة دالة لالتقاط الرسوم البيانية كصور
        function captureChartsAsImages() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const dailyProfitImg = profitChartInstance.toBase64Image('image/png', 1);
                    const tradeTypeImg = tradeTypeChartInstance.toBase64Image('image/png', 1);
                    resolve({ dailyProfitImg, tradeTypeImg });
                }, 500);
            });
        }
        // تعديل دالة الطباعة
        // تعديل دالة الطباعة لطباعة جميع الفترات
        // تعديل دالة الطباعة لطباعة جميع الفترات مع الثيم الحالي
        // تعديل دالة الطباعة لطباعة جميع الفترات مع تطبيق الثيم الحالي على الرسوم البيانية
        printBtn.addEventListener("click", async() => {
            try {
                // إظهار مؤشر تحميل
                const loadingIndicator = document.createElement('div');
                loadingIndicator.innerHTML = '<div style="position:fixed; top:50%; left:50%; transform:translate(-50%,-50%); background:rgba(0,0,0,0.7); color:white; padding:20px; border-radius:5px; z-index:9999">جاري إعداد التقرير للطباعة...</div>';
                document.body.appendChild(loadingIndicator);
                // قائمة الفترات التي نريد طباعتها
                const periods = ['all', 'today', 'week', 'month', 'year'];
                const periodNames = {
                    'all': translations[LANG].analysis.periods.all,
                    'today': translations[LANG].analysis.periods.today,
                    'week': translations[LANG].analysis.periods.week,
                    'month': translations[LANG].analysis.periods.month,
                    'year': translations[LANG].analysis.periods.year
                };
                // كائن لتخزين صور الرسوم البيانية لكل فترة
                const chartImages = {};
                // **حفظ الثيم الأصلي لاستعادته لاحقًا**
                const currentTheme = document.body.className;
                // تكرار لكل فترة
                for (const period of periods) {
                    // تحديث الرسوم البيانية للفترة الحالية
                    renderAnalysis(period);
                    // انتظار قصير لضمان تحديث الرسم البياني
                    await new Promise(resolve => setTimeout(resolve, 800));
                    // التقاط صور للرسوم البيانية
                    const dailyProfitImg = profitChartInstance.toBase64Image('image/png', 1);
                    const tradeTypeImg = tradeTypeChartInstance.toBase64Image('image/png', 1);
                    // تخزين الصور
                    chartImages[period] = { dailyProfitImg, tradeTypeImg };
                }
                // **استعادة الثيم الأصلي على الصفحة**
                document.body.className = currentTheme;
                // إعادة تعيين الرسوم البيانية للفترة النشطة الأصلية
                renderAnalysis('all');
                // استخراج أنماط الثيم الحالي (بعد استعادته)
                const body = document.body;
                const computedStyle = getComputedStyle(body);
                const bgColor = computedStyle.backgroundColor;
                const textColor = computedStyle.color;
                const fontFamily = computedStyle.fontFamily;
                // بناء محتوى الطباعة
                let printContent = `
            <div style="text-align: center; margin-bottom: 20px;">
                <h2>📊 تقرير تحليل P2P - جميع الفترات</h2>
                <p>تم إنشاؤه في: ${new Date().toLocaleString()}</p>
            </div>
        `;
                // إضافة قسم لكل فترة
                for (const period of periods) {
                    printContent += `
                <div style="page-break-before: always; margin-top: 30px;">
                    <h3 style="text-align: center; text-decoration: underline;">${periodNames[period]}</h3>
                    <div style="display: flex; flex-wrap: wrap; justify-content: space-around; gap: 20px; margin-top: 20px;">
                        <div style="flex: 1; min-width: 300px; text-align: center;">
                            <h4>📈 ${translations[LANG].analysis.charts.dailyProfit}</h4>
                            <img src="${chartImages[period].dailyProfitImg}" alt="رسم بياني للربح اليومي - ${periodNames[period]}" style="max-width: 100%; height: auto;" />
                        </div>
                        <div style="flex: 1; min-width: 300px; text-align: center;">
                            <h4>🥧 ${translations[LANG].analysis.charts.buyVsSell}</h4>
                            <img src="${chartImages[period].tradeTypeImg}" alt="رسم بياني للمقارنة بين الشراء والبيع - ${periodNames[period]}" style="max-width: 100%; height: auto;" />
                        </div>
                    </div>
                </div>
            `;
                }
                // فتح نافذة الطباعة
                const printWindow = window.open('', '_blank');
                if (!printWindow) {
                    alert("فشل فتح نافذة الطباعة. يرجى التأكد من تعطيل منع النوافذ المنبثقة.");
                    document.body.removeChild(loadingIndicator);
                    return;
                }
                // كتابة محتوى الطباعة مع تطبيق أنماط الثيم
                printWindow.document.write(`
            <!DOCTYPE html>
            <html dir="${LANG === 'ar' ? 'rtl' : 'ltr'}">
            <head>
                <title>طباعة تحليل P2P - جميع الفترات</title>
                <style>
                    body { 
                        font-family: ${fontFamily}; 
                        padding: 20px; 
                        direction: ${LANG === 'ar' ? 'rtl' : 'ltr'};
                        background: ${bgColor};
                        color: ${textColor};
                    }
                    @media print {
                        body { -webkit-print-color-adjust: exact; }
                        .page-break { page-break-before: always; }
                    }
                    h2, h3, h4 {
                        color: ${textColor};
                    }
                </style>
            </head>
            <body>
                ${printContent}
            </body>
            </html>
        `);
                printWindow.document.close();
                // إزالة مؤشر التحميل
                document.body.removeChild(loadingIndicator);
                // الطباعة بعد تحميل الصور
                printWindow.onload = function() {
                    printWindow.print();
                };
            } catch (error) {
                console.error("Error in printing all periods:", error);
                alert("حدث خطأ أثناء التحضير للطباعة: " + error.message);
                if (document.body.contains(loadingIndicator)) {
                    document.body.removeChild(loadingIndicator);
                }
            }
        });
    }

    function clearDashboard() {
        document.getElementById("tableBody").innerHTML = "";
        document.getElementById("resultsGrid").innerHTML = "";
        document.getElementById("todayProfit").textContent = "0.00";
        document.getElementById("weekProfit").textContent = "0.00";
        document.getElementById("monthProfit").textContent = "0.00";
        document.getElementById("openTrades").textContent = "0";
        // Check for null before setting textContent
        const lastSoldPriceElem = document.getElementById("lastSoldPrice");
        if (lastSoldPriceElem) lastSoldPriceElem.textContent = "—";
        const avgBuyPriceElem = document.getElementById("avgBuyPrice");
        if (avgBuyPriceElem) avgBuyPriceElem.textContent = "—";
        document.getElementById("maxBuyPrice").textContent = "—";
        document.getElementById("maxSellPrice").textContent = "—";
        document.getElementById("topCounterparty").textContent = "—";
        document.getElementById("avgHoldTime").textContent = "—";
        // Clear Peak Times
        if (document.getElementById('peakBuyTimes')) {
            document.getElementById('peakBuyTimes').textContent = "جارٍ التحميل...";
        }
        if (document.getElementById('peakSellTimes')) {
            document.getElementById('peakSellTimes').textContent = "جارٍ التحميل...";
        }
        if (window.profitChartInstance) window.profitChartInstance.destroy();
        if (window.tradeTypeChartInstance) window.tradeTypeChartInstance.destroy();
    }
    document.getElementById("clearHistory").addEventListener("click", () => {
        if (confirm("هل أنت متأكد من مسح جميع السجلات؟")) {
            localStorage.removeItem("lastData");
            originalData = [];
            tradeList = [];
            summaryValues = Array(11).fill("0.00");
            clearDashboard();
        }
    });
    const savedData = localStorage.getItem("lastData");
    if (savedData) {
        try {
            originalData = JSON.parse(savedData);
            refresh();
        } catch (e) {
            console.error("Failed to parse saved data");
        }
    }
    // Initialize fiat and crypto options
    fillFiatOptions();
    fillCryptoOptions();
    // Initialize flatpickr for date range
    flatpickr("#dateFrom", {
        dateFormat: "Y-m-d H:i:s",
        enableTime: true,
        altInput: true,
        altFormat: LANG === 'ar' ? "d-m-Y H:i" : "m/d/Y H:i", // Adjust format based on language
        locale: LANG === 'ar' ? 'ar' : 'default', // You might need to include flatpickr locales
        onClose: function(selectedDates, dateStr, instance) {
            refresh();
        }
    });
    flatpickr("#dateTo", {
        dateFormat: "Y-m-d H:i:s",
        enableTime: true,
        altInput: true,
        altFormat: LANG === 'ar' ? "d-m-Y H:i" : "m/d/Y H:i",
        locale: LANG === 'ar' ? 'ar' : 'default',
        onClose: function(selectedDates, dateStr, instance) {
            refresh();
        }
    });
    // معالجة قائمة الثيمات المنسدلة
    const themeDropdownToggle = document.getElementById('themeDropdownToggle');
    const themeDropdownMenu = document.getElementById('themeDropdownMenu');

    // إغلاق القائمة عند النقر خارجها
    document.addEventListener('click', function(event) {
        const isClickInside = themeDropdownToggle.contains(event.target) || themeDropdownMenu.contains(event.target);
        if (!isClickInside) {
            themeDropdownMenu.classList.remove('show');
            themeDropdownToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // تبديل ظهور/إخفاء القائمة
    themeDropdownToggle.addEventListener('click', function(event) {
        event.stopPropagation();
        const isExpanded = themeDropdownToggle.getAttribute('aria-expanded') === 'true';
        themeDropdownMenu.classList.toggle('show', !isExpanded);
        themeDropdownToggle.setAttribute('aria-expanded', (!isExpanded).toString());
    });

    // تغيير الثيم عند النقر على عنصر في القائمة
    themeDropdownMenu.addEventListener('click', function(event) {
        if (event.target.classList.contains('dropdown-item') || event.target.closest('.dropdown-item')) {
            const button = event.target.closest('.dropdown-item');
            const newTheme = button.dataset.theme;
            toggleTheme(newTheme); // <-- استدعاء وظيفة تغيير الثيم
            themeDropdownMenu.classList.remove('show');
            themeDropdownToggle.setAttribute('aria-expanded', 'false');
        }
    });
    showTab('home-tab');
    // إضافة زر الطباعة الجديد بعد تحميل الصفحة
    addPrintButtonToAnalysis();
})
