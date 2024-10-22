# Oogie Boogie Project（開發中，尚未有 prod，純屬娛樂）

這是一個使用 Next.js 構建的專案，當用戶點擊按鈕時，會顯示 小孩 對聖誕老人的 龍彈（有發），並將打擊次數存儲在 Cloudflare R2 中。

## 目錄

- [安裝](#安裝)
- [使用方法](#使用方法)
- [tech_spec](#tech_spec)
- [貢獻](#貢獻)
- [授權](#授權)

## 安裝

1. clone repo(不會有人 clone 吧 XD)：

   ```bash
   git clone https://github.com/your-username/my-oogie-boogie-project.git
   cd my-oogie-boogie-project
   ```

2. 安裝 package：

   ```bash
   npm install
   ```

3. 如果需要，安裝其他依賴（例如 `axios` 用於 HTTP 請求）：

   ```bash
   npm install axios
   ```

## 使用方法

1. 啟動開發伺服器：

   ```bash
   npm run dev
   ```

2. 在瀏覽器中打開 `http://localhost:3000`。

3. 點擊按鈕以顯示 GIF 並更新打擊次數。

## tech_spec

- [Next.js](https://nextjs.org/) - React 框架
- [Cloudflare R2](https://www.cloudflare.com/products/r2/) - 用於存儲打擊次數

## 貢獻

歡迎貢獻！請遵循以下步驟：

1. Fork 此儲存庫
2. 創建您的功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打開一個 Pull Request
6. 萬聖節快樂，一起痛扁聖誕老人吧！

## 授權

此專案使用 [MIT License](https://opensource.org/licenses/MIT) 授權。
