import { Card, CardContent } from "@/components/ui/card"
import { Building, Search, Database, Globe } from "lucide-react"

export function Experience() {
  return (
    <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">略歴</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">26年間の国税勤務経験</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              国税庁での豊富な経験を活かし、お客様の税務をサポートします。
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
          <Card className="border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Building className="h-10 w-10 text-primary shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">都内税務署</h3>
                  <p className="text-muted-foreground">
                    建設業、IT業、飲食業、卸売、小売業等、様々な業種の中小法人等の税務調査に従事。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Search className="h-10 w-10 text-primary shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">東京国税局調査部</h3>
                  <p className="text-muted-foreground">
                    医薬、化粧品、化学工業製品の製造等、出版、映像制作等を業とする大規模法人、国際取引に関する税務調査に従事。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Database className="h-10 w-10 text-primary shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">東京国税局課税部</h3>
                  <p className="text-muted-foreground">金融機関等のCRS（共通報告基準）の監査、法定調書の監査に従事。</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Globe className="h-10 w-10 text-primary shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">国税庁</h3>
                  <p className="text-muted-foreground">
                    非居住者や海外取引に係る源泉所得税及び租税条約適用に関する事務に従事。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20 md:col-span-2">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Building className="h-10 w-10 text-primary shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">シンシアタックスコンサルティング</h3>
                  <p className="text-muted-foreground">
                    26年間の国税勤務経験を活かし、シンシアタックスコンサルティングを開業。税務調査対応から国際税務まで幅広くサポート。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

