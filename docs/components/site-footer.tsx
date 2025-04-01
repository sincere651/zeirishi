import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-sm text-muted-foreground">
              <span className="font-bold">税務調査専門</span> シンシアタックスコンサルティング
            </p>
            <p className="text-xs text-muted-foreground">〒105-0013 東京都港区浜松町2-7-17　イーグル浜松町559</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              プライバシーポリシー
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              特定商取引法に基づく表記
            </Link>
          </div>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} シンシアタックスコンサルティング
          </p>
        </div>
      </div>
    </footer>
  )
}

