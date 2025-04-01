import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Shield, FileCheck } from "lucide-react"

export function TaxAuditAnxiety() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              安心のサポート
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              税務調査の不安を解消
              <br />— 定期的な確認と準備で安心を提供
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              税務調査に対する不安や疑問を感じていませんか？私たちのサービスでは、税務調査に備えた定期的な確認とアドバイスを通じて、調査前の不安を解消し、適切な準備をサポートします。税務調査が来るかもしれないと感じる前に、問題を未然に防ぐために定期的なチェックを行うことが大切です。
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl mt-8">
          <h3 className="text-2xl font-bold mb-4 text-center">定期的な税務確認で安心を提供</h3>
          <div className="grid grid-cols-1 gap-4 mb-8">
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-10 w-10 text-primary shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold mb-2">早期発見と適切な対策</h4>
                    <p className="text-muted-foreground">
                      定期的に税務状況を確認することで、調査の対象となる可能性を事前に察知し、早期に改善策を講じることができます。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <FileCheck className="h-10 w-10 text-primary shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold mb-2">透明な記録管理</h4>
                    <p className="text-muted-foreground">
                      確実な帳簿の整理と記録を行うことで、税務調査の際に必要な書類をスムーズに提出でき、調査官とのトラブルを防ぐことができます。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Shield className="h-10 w-10 text-primary shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold mb-2">専門家のアドバイスを活用</h4>
                    <p className="text-muted-foreground">
                      税理士などの専門家によるアドバイスを受けることで、税務調査のリスクを最小限に抑え、確実な対応ができます。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-center">税務調査の不安を解消するためのセカンドオピニオン</h3>
          <p className="text-muted-foreground mb-6 text-center">
            税務調査に関して心配がある場合、ひとつの意見に依存するのではなく、セカンドオピニオンを求めることが効果的です。異なる視点からのアドバイスを受けることで、自分の税務状況をより正確に把握し、不安を解消できます。
          </p>

          <h3 className="text-2xl font-bold mb-4 text-center">セカンドオピニオンで安心の判断を</h3>
          <div className="grid grid-cols-1 gap-4 mb-8">
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-10 w-10 text-primary shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold mb-2">異なる視点からのチェック</h4>
                    <p className="text-muted-foreground">
                      他の税理士による意見を求めることで、自社の税務状況を多角的に確認できます。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-10 w-10 text-primary shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold mb-2">適切な対策と対応策</h4>
                    <p className="text-muted-foreground">
                      セカンドオピニオンを得ることで、税務調査に備えるための最適な対応策がわかります。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-10 w-10 text-primary shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold mb-2">安心した事業運営</h4>
                    <p className="text-muted-foreground">
                      税務調査に対する不安を軽減し、安心して事業を続けるためのサポートを行います。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-bold mb-2 text-center">税務調査への不安を解消し、健全な税務管理を実現</h3>
            <p className="text-muted-foreground text-center">
              税務調査は、準備不足や不正確な記録が原因で不安を引き起こすことがあります。しかし、定期的な確認と専門家のサポートを受けることで、税務調査をスムーズに乗り越え、安心して業務を運営することができます。
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-2 text-center">税務調査に向けた準備をサポート</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button className="w-full" size="lg" asChild>
                <Link href="#">税務調査の事前対策を相談したい</Link>
              </Button>
              <Button className="w-full" size="lg" asChild>
                <Link href="#">定期的な税務確認を依頼したい</Link>
              </Button>
              <Button className="w-full" size="lg" variant="outline" asChild>
                <Link href="#">詳しくはこちら</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

