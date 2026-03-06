# $HIKI Coin

> 引きこもりをテーマにしたSolanaミームコインのランディングページ

**本番URL**: https://hiki-coin.vercel.app

---

## サービス概要

「Never leave your room. Always go to the moon.」をコンセプトにした引きこもり系ミームコイン($HIKI)のLP。
pump.funでのローンチを想定したCA（コントラクトアドレス）コピー機能付きワンページサイト。

## ページ構成

- ヒーローセクション（$HIKIロゴ・キャッチコピー）
- Tokenomics（トークン配分）
- How to Buy（購入手順）
- CAアドレスコピー機能

## 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイル**: Tailwind CSS
- **デプロイ**: Vercel

## ディレクトリ構成

```
hiki-coin/
├── app/
│   ├── page.tsx      # メインページ（ワンページ構成）
│   └── layout.tsx    # レイアウト・メタデータ
└── package.json
```

## セットアップ

pump.funでコインをローンチ後、`app/page.tsx` の `CA_ADDRESS` を実際のコントラクトアドレスに変更する。

```typescript
const CA_ADDRESS = "YOUR_CONTRACT_ADDRESS_HERE";
```

## ローカル起動

```bash
npm install
npm run dev
```

## デプロイ

```bash
npx vercel --prod
```
