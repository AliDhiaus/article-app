import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Code, Users, Zap, Search, Star, TrendingUp } from 'lucide-react';

const page = () => {
  const categories = [
    { name: "React", count: 25, icon: Code, color: "bg-blue-500" },
    { name: "Next.js", count: 18, icon: Zap, color: "bg-black" },
    { name: "TypeScript", count: 15, icon: BookOpen, color: "bg-blue-600" },
    { name: "Tools", count: 12, icon: Users, color: "bg-green-500" }
  ];

  const stats = [
    { label: "Total Artikel", value: "150+", icon: BookOpen },
    { label: "Developer", value: "2.5K+", icon: Users },
    { label: "Kategori", value: "12", icon: Code },
    { label: "Views", value: "50K+", icon: TrendingUp }
  ];

  return (
    <div>
      <section className="relative overflow-hidden px-4">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        <div className="max-w-6xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Platform Learning Developer Terbaik
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-6">
            Artikel 
            <br />
            <span className="text-blue-600">Developer Modern</span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Jelajahi artikel terbaru berdasarkan kategori & pencarian. 
            Tingkatkan skill development Anda dengan konten berkualitas dari expert.
          </p>
        </div>
      </section>

      <section className="px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-sm bg-white/50 backdrop-blur">
                <CardContent className="pt-6">
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                  <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Kategori Populer</h2>
            <p className="text-slate-600">Jelajahi konten berdasarkan teknologi dan topik favorit Anda</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-0 bg-white">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex w-12 h-12 items-center justify-center rounded-lg ${category.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1">{category.name}</h3>
                  <p className="text-sm text-slate-600">{category.count} artikel</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;