import os
import json
import re

# --- 🎯 設定區：Synology 最終精確路徑 (已確認) 🎯 ---

# 1. 輸入路徑 (文件來源：0-公告共享資料夾)
# 這是您文件資料夾在 Synology 上的絕對路徑。
NAS_SCAN_PATH = "/volume1/0-公告"  

# 2. 輸出路徑 (Web 服務根目錄：'web' 共享資料夾的系統掛載點)
# 這是我們透過 mount | grep web 指令找到的精確路徑。
WEB_ROOT_OUTPUT_PATH = "/volume1/@appdata/ContainerManager/all_shares/web" 

# 3. 輸出檔案名稱 (保持不變)
OUTPUT_FILENAME = "data.json"

# 4. 網頁前端複製 UNC 路徑所需的 NAS IP 和共享名稱
NAS_IP = "10.10.0.238" 
SHARE_NAME = "0-公告"

# 5. 定義需要掃描的子資料夾清單 (相對於 NAS_SCAN_PATH)
# 腳本只會掃描這些目錄下的內容。
TARGET_FOLDERS = [
    "【27001】ISMS公告", 
    "1-年度目標",
    "2-年終檢討",
    "3-經營會議",
    "04-公司規章管理辦法",
    "06-技術公報",
    "07-共享資源",
    "8-各部門",
    "9-跨部門",
    "a-會議記錄",
    # 請根據您 File Station 看到的目錄來完整填寫
]

# --------------------------------------------------------------------------

def generate_unc_path(relative_path_segment):
    """
    生成最終的 UNC 路徑 (例如：\\10.10.0.238\0-公告\相對路徑)
    這是供同事在網頁上複製，並貼到 Windows 檔案總管使用的路徑。
    """
    # 確保路徑中只有反斜線 \
    relative_path_segment = relative_path_segment.replace('/', '\\')
    
    # 組合 UNC 格式
    final_unc = f"\\\\{NAS_IP}\\{SHARE_NAME}\\{relative_path_segment}"
    return final_unc

def extract_metadata(folder_name):
    """使用正則表達式提取文件編號、簡稱和類別，優化網頁顯示。"""
    doc_id = "N/A"
    doc_name = folder_name
    category = "一般文件"
    notes = "請在程式碼或 JSON 檔案中手動添加描述。"
    
    # 1. 提取文件編號 (格式如：M-00