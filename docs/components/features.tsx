import { Check, Zap, Shield, BarChart } from "lucide-react"

export function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">特徴</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">私たちのサービスの特徴</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              最新のテクノロジーを活用した、使いやすく効率的なソリューションを提供します。
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary p-2 text-primary-foreground">
              <Check className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">簡単操作</h3>
            <p className="text-center text-muted-foreground">
              直感的なインターフェースで、誰でも簡単に使いこなせます。
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary p-2 text-primary-foreground">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">高速処理</h3>
            <p className="text-center text-muted-foreground">最適化されたシステムで、処理速度が格段に向上します。</p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary p-2 text-primary-foreground">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">安全性</h3>
            <p className="text-center text-muted-foreground">最新のセキュリティ対策で、データを安全に保護します。</p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary p-2 text-primary-foreground">
              <BarChart className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">分析機能</h3>
            <p className="text-center text-muted-foreground">詳細な分析機能で、ビジネスの成長をサポートします。</p>
          </div>
        </div>
      </div>
    </section>
  )
}

