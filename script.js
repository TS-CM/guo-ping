// 注意：ismsDocumentData 變數已在 data.js 中定義並被引入。

// --- 卡片生成與渲染邏輯 ---

// 函式：將單一資料物件轉換為 HTML 卡片
function createFocusCard(data) {
    const importance = '★'.repeat(data.stars);
    return `
        <div class="focus-card" data-category="${data.category}" data-stars="${data.stars}">
            <div class="focus-header">
                <div class="focus-id">#${data.id}</div>
                <div class="focus-importance">${importance}</div>
            </div>
            <div class="focus-topic-container">
                <div class="focus-topic">
                    ${data.topic}
                </div>
            </div>
            <div class="focus-details-container">
                <div class="details-header">${data.header}</div>
                <div class="details-content">
                    ${data.details}
                </div>
            </div>
        </div>
    `;
}

// 函式：動態生成所有卡片並渲染到網頁
function renderAllFocusPoints() {
    const container = document.getElementById('focusPointsContainer');
    if (container) {
        container.innerHTML = '';
        ismsDocumentData.forEach(item => {
            container.innerHTML += createFocusCard(item);
        });
    }
}

// --- 互動與事件綁定邏輯 ---

// 函式：設定分類按鈕的點擊事件
function setupCategoryButtons() {
    const categoryItems = document.querySelectorAll('.category-item');
    
    categoryItems.forEach(item => {
        const categoryId = item.dataset.categoryId;
        
        if (categoryId) {
            item.addEventListener('click', function() {
                filterByCategory(parseInt(categoryId));
            });
        }
    });
}

// Filter by category
function filterByCategory(categoryNumber) {
    document.getElementById('categoryFilter').value = categoryNumber === 'all' ? 'all' : String(categoryNumber); 
    document.getElementById('searchInput').value = '';
    filterFocusPoints();
}

// Combined filter function
function filterFocusPoints() {
    let category = document.getElementById("categoryFilter").value;
    let stars = document.getElementById("starFilter").value;
    let points = document.querySelectorAll(".focus-card");
    let anyVisible = false;
    const noResultsMessage = document.getElementById('noResultsMessage');

    points.forEach(function(point) {
        const matchesCategory = (category === "all" || point.dataset.category === category);
        const matchesStars = (stars === "all" || point.dataset.stars === stars);

        if (matchesCategory && matchesStars) {
            point.style.display = "block";
            anyVisible = true;
        } else {
            point.style.display = "none";
        }
    });

     if (noResultsMessage) {
         noResultsMessage.style.display = anyVisible ? 'none' : 'block';
         noResultsMessage.textContent = '沒有找到符合篩選條件的重點。';
     }
}

// Search function
function searchFocusPoints() {
    let searchText = document.getElementById("searchInput").value.toLowerCase().trim();
    let points = document.querySelectorAll(".focus-card");
    let anyVisible = false;
    let category = document.getElementById("categoryFilter").value;
    let stars = document.getElementById("starFilter").value;
    const noResultsMessage = document.getElementById('noResultsMessage');

    points.forEach(function(point) {
        const matchesCategory = (category === "all" || point.dataset.category === category);
        const matchesStars = (stars === "all" || point.dataset.stars === stars);
        let visibleBasedOnFilter = matchesCategory && matchesStars;

        let pointText = point.textContent.toLowerCase();
        let matchesSearch = (searchText === "" || pointText.includes(searchText));

        if (visibleBasedOnFilter && matchesSearch) {
            point.style.display = "block";
            anyVisible = true;
        } else {
            point.style.display = "none";
        }
    });

     if (noResultsMessage) {
         if (searchText !== "") {
              noResultsMessage.style.display = anyVisible ? 'none' : 'block';
              noResultsMessage.textContent = '沒有找到符合目前篩選及搜尋條件的重點。';
         } else {
             filterFocusPoints();
         }
     }
}


// --- 輔助功能 (進度條, 返回頂部) ---

const progressBar = document.getElementById("progressBar");
window.onscroll = function() { updateProgressBar(); toggleBackToTopButton(); };
function updateProgressBar() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (height > 0) ? (winScroll / height) * 100 : 0;
    progressBar.style.width = scrolled + "%";
}
const backToTopButton = document.getElementById("backToTop");
function toggleBackToTopButton() {
     backToTopButton.style.display = (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) ? "flex" : "none";
}
backToTopButton.addEventListener("click", () => window.scrollTo({top: 0, behavior: 'smooth'}));


// --- 網頁初始化 ---

// Event listeners for filters and search
document.getElementById("categoryFilter").addEventListener("change", () => {
     document.getElementById('searchInput').value = '';
     filterFocusPoints();
});
document.getElementById("starFilter").addEventListener("change", () => {
     document.getElementById('searchInput').value = '';
     filterFocusPoints();
});
document.getElementById("searchButton").addEventListener("click", searchFocusPoints);
document.getElementById("searchInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        searchFocusPoints();
    }
});

function initialSetup() {
    renderAllFocusPoints(); 
    setupCategoryButtons();
    toggleBackToTopButton();
    updateProgressBar();
    filterFocusPoints();
}

window.onload = initialSetup;