const ismsDocumentData = [
    // 總則與定義 (Category 1)
    {
        id: 1,
        category: 1,
        stars: 4,
        topic: "目的與適用範圍",
        header: "確保文件適用性、有效性及最新版文件",
        details: `
            <div class="details-header">目的</div>
            <div class="details-content">
                為使本公司執行管理制度所用之文件，於制訂、修訂、廢止過程中有一明確的規範，且能確切管理各項外來標準及法令法規等資料，以期所使用的文件與紀錄能隨時保持其適用性與有效性，確保能適時獲得有效之最新版文件。
            </div>
            
            <hr style="margin: 15px 0; border-style: dashed;">
            
            <div class="details-header" style="color: #e74c3c;">完整文件下載 (已簡化檔名)</div>
            <div class="details-content">
                <p>點擊下載完整版：
                    <a href="./IOS27001PDF/isms_p001_v1.0.pdf" download="ISMS-P-001文件與紀錄管理程序V1.0.pdf" 
                       style="display: inline-block; padding: 5px 10px; background-color: #5dade2; color: white; border-radius: 5px; text-decoration: none;">
                       💾 ISMS-P-001 文件與紀錄管理程序 (PDF)
                    </a>
                </p>
            </div>
            
            <div class="details-header">適用範圍</div>
            <div class="details-content">
                本公司所訂定且經核准頒布的各項標準作業文件，以及外來標準及法令等資料之管理。
            </div>
        `
    },
    {
        id: 2,
        category: 1,
        stars: 5,
        topic: "核心文件類型定義",
        header: "區分政策、程序書、標準書與紀錄",
        details: `
            <div class="details-header">名詞定義</div>
            <div class="details-content">
                <ul>
                    <li><strong>管制文件：</strong>指訂定之各項制度如管理政策、程序書、標準書、表單以及各項外部之標準及法令等資料，其分發回收使用須受到管制。</li>
                    <li><strong>政策 (Manual, 一階文件)：</strong>針對主管機關及全體同仁所做的資訊安全管理制度整體性的概要說明。</li>
                    <li><strong>程序書 (Procedure, 二階文件)：</strong>對於各項管理作業的流程、權責及相關內容加以規範的文件。</li>
                    <li><strong>標準書 (Work Instruction, 三階文件)：：</strong>詳述各項工作的細節及標準工作方法。</li>
                    <li><strong>表單 (Form, 四階文件)：</strong>所訂定之程序書、標準書及其他用來填寫各項紀錄之標準格式。</li>
                    <li><strong>紀錄 (Records)：</strong>將所規定之表單依實際需要書寫數據、符號或文字後，即成為紀錄。</li>
                    <li><strong>外來文件：</strong>非由本公司自行制訂且有必要列管的文件（例如：廠商提供之系統文件、使用手冊及操作手冊等，以及法令法規及目的事業主管機關所頒布之各項行政命令與要點均屬外來文件）。</li>
                </ul>
            </div>
        `
    },
    // 文件訂修廢作業 (Category 2)
    {
        id: 3,
        category: 2,
        stars: 4,
        topic: "文件訂修廢作業與審核權限",
        header: "制訂、修訂、廢止與審核的標準流程",
        details: `
            <div class="details-header">作業流程與表單</div>
            <div class="details-content">
                <ul>
                    <li><strong>文件的制訂/修訂/廢止：</strong>由該項業務主要業務承辦人員發起，填寫「ISMS-P-001-01文件訂修廢建議表」併同文件送審。</li>
                    <li><strong>相關單位審議：</strong>制訂單位可視需要將文件送相關單位審查，或由制訂單位召開會議研議。</li>
                </ul>
            </div>
            <div class="details-header">文件審核與核准權限</div>
            <div class="details-content">
                <table class="authority-table">
                    <thead>
                        <tr><th>權責類別</th><th>審查</th><th>核准</th><th>文件發行</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>政策 (一階)</td><td>資訊安全代表</td><td>資訊安全長</td><td>文件管理小組</td></tr>
                        <tr><td>程序書 (二階)</td><td>資訊安全代表</td><td>資訊安全長</td><td>文件管理小組</td></tr>
                        <tr><td>標準書 (三階)</td><td>資訊安全代表</td><td>資訊安全長</td><td>文件管理小組</td></tr>
                        <tr><td>表單 (四階)</td><td>相關單位主管</td><td>資訊安全代表</td><td>相關單位主管、資訊安全代表</td></tr>
                        <tr><td>外來文件</td><td>N/A</td><td>N/A</td><td>文件管理小組</td></tr>
                    </tbody>
                </table>
                <p>文件經核准後以適當方式進行通知或公告。</p>
            </div>
        `
    },
    // 文件實施與管制 (Category 3)
    {
        id: 4,
        category: 3,
        stars: 5,
        topic: "文件登錄、發行與版本管制",
        header: "確保文件版本正確且不可修改",
        details: `
            <div class="details-header">文件登錄處理</div>
            <div class="details-content">
                文件經核准後，制訂單位應將原稿及電子檔送交文件管理小組，由小組人員登錄於「ISMS-P-001-02管制文件一覽表」中並彙整成冊予以保管、維護及建檔，以識別文件之最新版本。
            </div>
            <div class="details-header">文件發行與廢止</div>
            <div class="details-content">
                <ul>
                    <li>文件管理小組將完成審核之文件，轉換成**唯讀格式**（表單除外）之檔案類型（如PDF格式）並且標註「管制文件」字樣後，上傳至本公司內網之公告-ISO平台，並以適當方式公告週知。</li>
                    <li><strong>舊版銷毀：</strong>管制文件若有新版發行時，使用人員應將已印出之舊版紙本文件銷毀，再重新下載及列印新版文件，確保文件為最新版本，以避免遭到誤用。</li>
                </ul>
            </div>
        `
    },
    {
        id: 5,
        category: 3,
        stars: 4,
        topic: "機敏性文件安全管制與銷毀",
        header: "機密等級、存取權限與調閱/列印/銷毀規定",
        details: `
            <div class="details-header">機敏性資訊文件管制</div>
            <div class="details-content">
                <ul>
                    <li>機密等級須依據「ISMS-P-003資訊資產管理程序」規定辦理。</li>
                    <li>機敏性資訊文件除公務用途外，不可任意列印流通。</li>
                    <li>文件管制：機敏性文件或資料之調閱，由調閱者依本公司申請流程提出申請，經單位主管核准後，向業務承辦人員辦理調閱，業務承辦人員應留下調閱紀錄以供查驗。</li>
                </ul>
            </div>
            <div class="details-header">列印與銷毀規定</div>
            <div class="details-content">
                 <ul>
                    <li><strong>列印監控：</strong>機密等級屬「機敏」之文件若使用傳真機傳送、影印機影印或印表機列印，其過程應全程監看並使用監管軟件控管列印，結束作業後應立即將文件取走，避免資料外洩。</li>
                    <li><strong>文件銷毀：</strong>機敏性文件應以碎紙機銷毀或焚毀之方式銷毀，文件銷毀前應取得「文件管理小組」業務承辦人同意，並將銷毀結果記錄於「ISMS-P-001-03機敏文件銷毀紀錄表」。</li>
                </ul>
            </div>
        `
    },
    // 外來文件與法規 (Category 4)
    {
        id: 6,
        category: 4,
        stars: 5,
        topic: "外來文件與法令法規管制",
        header: "確保外部資訊的適用性、完整性與更新",
        details: `
            <div class="details-header">外來文件管制</div>
            <div class="details-content">
                <ul>
                    <li><strong>檢查：</strong>文件權責單位在取得外來文件後，應檢查其適切性、完整性、可用性及機密性。</li>
                    <li><strong>登錄：</strong>由文件權責單位提供資訊，交由「文件管理小組」登錄於「ISMS-P-001-04外來文件管制表」，以防止版本之誤用。</li>
                    <li><strong>管理：</strong>外來文件列為資訊資產，須依「ISMS-P-003資訊資產管理程序書」之相關規定進行管理。</li>
                </ul>
            </div>
            <div class="details-header">法令法規識別與更新</div>
            <div class="details-content">
                <ul>
                    <li>文件管理小組應隨時辨識與本公司業務相關之法令法規（如：**個人資料保護法、著作權法、資通安全管理法**），並登錄於「ISMS-P-001-04外來文件管制表」中列管。</li>
                    <li>應透過電子郵件、公告或教育訓練等方式向內部人員進行宣導，必要時，對象應包含重要委外廠商。</li>
                    <li>「文件管理小組」應**每年定期檢查**與資訊安全相關法令法規之變更情況，若有變更，應同步更新管制表內容。</li>
                </ul>
            </div>
        `
    },
    // 紀錄與保存 (Category 5)
    {
        id: 7,
        category: 5,
        stars: 5,
        topic: "資訊安全紀錄保存期限與原則",
        header: "確保紀錄可信度與法定最低年限",
        details: `
            <div class="details-header">紀錄保存期限原則</div>
            <div class="details-content">
                <ul>
                    <li>紀錄應登錄於「ISMS-P-001-02管制文件一覽表」中，並依法律、單位需求與紀錄性質要求訂定**最低保存期限**。</li>
                    <li>保存期限應**大於業務需要使用年限**，避免紀錄已銷毀，而無參考依據可進行資訊系統之評判與矯正。</li>
                    <li>表單紀錄保存範例：文件訂修廢建議表、管制文件一覽表、機敏文件銷毀紀錄表、外來文件管制表，保存期限均為**至少3年**。</li>
                </ul>
            </div>
            <div class="details-header">表單紀錄之維護管理</div>
            <div class="details-content">
                 <ul>
                    <li><strong>填寫審核：</strong>應要求承辦人員確實填寫，並依規定由權責主管進行審核。力求簡單、確實，審核人員應查對其記載資料之可信度。</li>
                    <li><strong>儲存：</strong>資訊安全紀錄應存放於適當場所，慎防浸水、發霉等毀損情形之發生。</li>
                    <li><strong>備份：</strong>若儲存於電子媒體，則應依「ISMS-P-015資訊備份管理程序」之規定**定期進行備份儲存管理**。</li>
                </ul>
            </div>
        `
    },
    // 文件撰寫與編號 (Category 6)
    {
        id: 9,
        category: 6,
        stars: 3,
        topic: "程序書撰寫架構",
        header: "確保文件內容完整與遵循性",
        details: `
            <div class="details-header">撰寫架構規定</div>
            <div class="details-content">
                管理系統程序書撰寫時應維持架構之完整。如某些段落無實際內容時，應以「無」或「略」表示之。架構包含：
                <ol>
                    <li>目的 (闡述期望達成之目的)</li>
                    <li>適用範圍 (規範適用於何人、何事、何時、何地、何物)</li>
                    <li>參考文件 (列舉所依據的外部標準或法令)</li>
                    <li>名詞定義 (解釋易誤解之名詞)</li>
                    <li>作業內容 (說明作業流程、權責單位、相關表單及實際規定事項)</li>
                    <li>附件 (條列衍生之各項表單附件)</li>
                </ol>
                <p>政策及標準書撰寫架構不做硬性規定，以能清楚完整表達內容，且易於閱讀了解遵循為原則。</p>
            </div>
        `
    },
    {
        id: 10,
        category: 6,
        stars: 4,
        topic: "文件編號原則與書寫規定",
        header: "確保文件識別與統一格式",
        details: `
            <div class="details-header">文件編號原則</div>
            <div class="details-content">
                <ul>
                    <li><strong>ISMS：</strong>資訊安全管理制度代號。</li>
                    <li><strong>政策 (M)：</strong>ISMS-M-□□□ (例：ISMS-M-001)</li>
                    <li><strong>程序書 (P)：</strong>ISMS-P-□□□ (例：ISMS-P-001)</li>
                    <li><strong>標準書 (W)：</strong>ISMS-W-□□□ (例：ISMS-W-001)</li>
                    <li><strong>表單 (△△)：</strong>ISMS-＊-□□□-△△ (例：ISMS-P-001-01)</li>
                </ul>
            </div>
            <div class="details-header">書寫的其他規定</div>
            <div class="details-content">
                 <ul>
                    <li><strong>文件版次：</strong>以英文字母 **V1.0~V1.9**、V2.0~V2.9...之順序編訂。</li>
                    <li><strong>文件頁次：</strong>以阿拉伯數字 1、2、3…之順序排訂，每頁應標示其總頁數，如「1/5」。</li>
                    <li><strong>字型與大小：：</strong>中文字體為「標楷體」、英文及數字字體為「Times New Roman」，中英文字型大小皆為「14」。</li>
                    <li><strong>段落編號：：</strong>使用 1、1.1、1.1.1、1.1.1.1... 等順序編號方式。</li>
                </ul>
            </div>
        `
    }
];