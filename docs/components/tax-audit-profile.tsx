import { Building, Search, Database, Globe } from "lucide-react"

export function TaxAuditProfile() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              プロフィール
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">升本真実</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              26年間国税の職場で勤務し、中小法人から大規模法人まで、様々な業種の税務調査に携わった経験から、法人、個人のお客様の税務調査対応はもちろん、その対策や予防、節税対策まで万全のサポートをさせていただきます。
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl grid grid-cols-1 gap-6 py-8">
          <div className="p-6">
            <div className="flex items-start gap-4">
              <Building className="h-10 w-10 text-primary shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">都内税務署</h3>
                <p className="text-muted-foreground">
                  建設業、IT業、飲食業、卸売、小売業等、様々な業種の中小法人等の税務調査に従事。
                </p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-start gap-4">
              <Search className="h-10 w-10 text-primary shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">東京国税局調査部</h3>
                <p className="text-muted-foreground">
                  医薬、化粧品、化学工業製品の製造等、出版、映像制作等を業とする大規模法人、国際取引に関する税務調査に従事。
                </p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-start gap-4">
              <Database className="h-10 w-10 text-primary shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">東京国税局課税部</h3>
                <p className="text-muted-foreground">金融機関等のCRS（共通報告基準）の監査、法定調書の監査に従事。</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-start gap-4">
              <Globe className="h-10 w-10 text-primary shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">国税庁</h3>
                <p className="text-muted-foreground">
                  非居住者や海外取引に係る源泉所得税及び租税条約適用に関する事務に従事。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

