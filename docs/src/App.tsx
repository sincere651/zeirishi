import React, { useState } from 'react';
import {
  Phone,
  Mail,
  Shield,
  Scale,
  FileCheck,
  Building2,
  Clock,
  ArrowRight,
  ChevronDown,
  BookOpen,
  FileText,
  AlertCircle,
  CheckCircle2,
  Users,
  Globe,
  Building,
  MessageCircle,
  Calendar
} from 'lucide-react';

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー */}
      <header className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute top-0 right-0 bg-blue-800 text-white py-2 px-4 rounded-bl-lg">
          <a href="tel:0300000000" className="flex items-center text-sm">
            <Phone size={16} className="mr-2" />
            03-0000-0000
          </a>
        </div>
        
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            26年の国税経験を活かした<br />
            <span className="text-blue-400">シンシアタックスコンサルティング</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            国際税務から税務調査対応まで。<br />
            経験豊富な女性税理士が、あなたの企業の税務を徹底サポートします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-blue-700 px-8 py-4 rounded-lg hover:bg-blue-800 transition flex items-center justify-center text-lg font-bold"
            >
              無料相談を予約する
              <ArrowRight className="ml-2" />
            </a>
            <a
              href="#services"
              className="bg-gray-700 text-white px-8 py-4 rounded-lg hover:bg-gray-600 transition flex items-center justify-center text-lg font-bold"
            >
              サービス内容を見る
            </a>
          </div>
        </div>
      </header>

      {/* 特徴 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">26年</div>
              <p className="text-gray-600">国税経験</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
              <p className="text-gray-600">税務調査対応実績</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">24H</div>
              <p className="text-gray-600">迅速対応</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">100%</div>
              <p className="text-gray-600">オーダーメイド対応</p>
            </div>
          </div>
        </div>
      </section>

      {/* 税理士紹介 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="border-b-4 border-gray-900">代表税理士</span>
          </h2>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-48 bg-gray-200 rounded-full flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-4">升本 真実</h3>
                <p className="text-gray-700 mb-6">
                  26年間の国税経験を持つ女性税理士。中小法人から大規模法人まで、様々な業種の税務調査に携わってきました。
                  国際取引や非居住者の税務に関する豊富な経験を活かし、グローバルな税務課題にも対応いたします。
                </p>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center">
                    <CheckCircle2 className="mr-2 text-blue-600" size={20} />
                    東京国税局調査部での大規模法人調査経験
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="mr-2 text-blue-600" size={20} />
                    国際税務・租税条約のスペシャリスト
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="mr-2 text-blue-600" size={20} />
                    CRS（共通報告基準）監査の経験者
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 経歴 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="border-b-4 border-gray-900">豊富な経験</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Building className="mr-2" />
                都内税務署での経験
              </h3>
              <p className="text-gray-600">
                建設業、IT業、飲食業、卸売、小売業等、様々な業種の中小法人の税務調査に従事
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Building2 className="mr-2" />
                東京国税局調査部での経験
              </h3>
              <p className="text-gray-600">
                医薬、化粧品、化学工業製品の製造等、出版、映像制作等を業とする大規模法人、国際取引に関する税務調査に従事
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Globe className="mr-2" />
                国際税務での経験
              </h3>
              <p className="text-gray-600">
                金融機関等のCRS（共通報告基準）の監査、法定調書の監査、非居住者や海外取引に係る源泉所得税及び租税条約適用に関する業務に従事
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* サービス */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="border-b-4 border-gray-900">サービス内容</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Shield />}
              title="税務調査対応"
              description="事前準備から立会、事後対応まで、経験豊富な税理士が全面的にサポートします。セカンドオピニオンも承ります。"
            />
            <ServiceCard
              icon={<Globe />}
              title="国際税務"
              description="非居住者税務、租税条約の適用、海外取引に関する税務など、国際的な税務案件を幅広く対応します。"
            />
            <ServiceCard
              icon={<FileCheck />}
              title="税務顧問"
              description="記帳代行、決算書作成、申告書作成、節税対策など、日常的な税務顧問業務を提供します。"
            />
          </div>
        </div>
      </section>

      {/* 対応方法 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="border-b-4 border-gray-900">柔軟な対応方法</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Phone className="mx-auto mb-4 text-gray-900" size={32} />
              <h3 className="font-bold mb-2">電話相談</h3>
              <p className="text-gray-600">気軽に相談可能</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <MessageCircle className="mx-auto mb-4 text-gray-900" size={32} />
              <h3 className="font-bold mb-2">LINE相談</h3>
              <p className="text-gray-600">手軽に質問可能</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Users className="mx-auto mb-4 text-gray-900" size={32} />
              <h3 className="font-bold mb-2">ZOOM相談</h3>
              <p className="text-gray-600">オンライン面談</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Calendar className="mx-auto mb-4 text-gray-900" size={32} />
              <h3 className="font-bold mb-2">対面相談</h3>
              <p className="text-gray-600">土日祝日も対応</p>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="border-b-4 border-gray-900">無料相談予約</span>
          </h2>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">
                  会社名
                  <span className="text-red-600 ml-2 text-sm">必須</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  お名前
                  <span className="text-red-600 ml-2 text-sm">必須</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  メールアドレス
                  <span className="text-red-600 ml-2 text-sm">必須</span>
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  電話番号
                  <span className="text-red-600 ml-2 text-sm">必須</span>
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  ご相談内容
                </label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg h-32 focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  placeholder="現在の状況や懸念事項などをご記入ください"
                ></textarea>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  希望連絡方法
                </label>
                <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent">
                  <option value="phone">電話</option>
                  <option value="line">LINE</option>
                  <option value="zoom">ZOOM</option>
                  <option value="meeting">対面相談</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-4 rounded-lg hover:bg-gray-800 transition font-bold text-lg"
              >
                無料相談を予約する
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">シンシアタックスコンサルティング</h3>
              <div className="space-y-2">
                <p className="flex items-center">
                  <Building className="mr-2" /> 東京都港区浜松町2-7-17 イーグル浜松町559
                </p>
                <a href="tel:0300000000" className="flex items-center">
                  <Phone className="mr-2" /> 03-0000-0000
                </a>
                <a href="mailto:info@example.com" className="flex items-center">
                  <Mail className="mr-2" /> info@example.com
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">営業時間</h3>
              <p>平日 9:00 - 18:00</p>
              <p>土日祝日も対応可能</p>
              <p className="mt-2 text-blue-400">※事前予約制</p>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-gray-800">
            <p>&copy; 2024 シンシアタックスコンサルティング All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition">
      <div className="text-gray-900 flex justify-center mb-4 text-4xl">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;