import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  Map,
  Download,
  Info,
  Eye,
  HardDrive,
  Maximize,
  FileImage,
  User,
  Calendar,
  Tag,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { getMapById } from '@/data/maps';

interface Props {
  params: Promise<{ id: string }>;
}

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const mapData = getMapById(id);
  if (!mapData) return { title: '未找到' };
  return {
    title: mapData.title,
    description: mapData.description,
  };
}

export default async function MapDetailPage({ params }: Props) {
  const { id } = await params;
  const mapData = getMapById(id);

  if (!mapData) {
    notFound();
  }

  return (
    <div className="xian-bg-pattern">
      {/* 页头 */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
        <Link
          href="/maps"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-xian-cyan transition-colors mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          返回地图列表
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <Badge variant="secondary" className="text-xs bg-xian-cyan/10 text-xian-cyan border-xian-cyan/20">
            {mapData.type}
          </Badge>
          <Badge variant="outline" className="text-xs border-border text-muted-foreground">
            {mapData.novelTitle}
          </Badge>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold font-serif text-xian-gold xian-text-glow mb-2">
          {mapData.title}
        </h1>
        <p className="text-muted-foreground">{mapData.description}</p>
      </section>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="xian-divider" />
      </div>

      {/* 预览图 */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
        <Card className="xian-card bg-card/80 overflow-hidden">
          <CardContent className="p-4">
            <div className="aspect-[16/10] rounded-md bg-gradient-to-br from-xian-deep via-xian-purple/10 to-xian-cyan/10 flex items-center justify-center relative overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={mapData.previewUrl}
                alt={mapData.title}
                className="absolute inset-0 w-full h-full object-contain rounded-md"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <Map className="h-20 w-20 text-xian-cyan/15 map-placeholder-icon" />
              <div className="absolute bottom-4 right-4">
                <Badge className="bg-black/60 text-white border-none text-xs">
                  <Eye className="h-3 w-3 mr-1" />
                  地图预览
                </Badge>
              </div>
              <div className="absolute top-4 left-4">
                <Badge className="bg-black/60 text-white border-none text-xs">
                  {mapData.resolution}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 信息与下载 */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 基础信息 */}
          <Card className="xian-card bg-card/80 md:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg font-serif text-xian-gold flex items-center gap-2">
                <Info className="h-5 w-5" />
                基础信息
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm">
                  <FileImage className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">格式：</span>
                  <span className="text-foreground">{mapData.format}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Maximize className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">分辨率：</span>
                  <span className="text-foreground">{mapData.resolution}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <HardDrive className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">文件大小：</span>
                  <span className="text-foreground">{mapData.fileSize}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">绘制：</span>
                  <span className="text-foreground">{mapData.author}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">更新：</span>
                  <span className="text-foreground">{mapData.uploadDate}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Download className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">下载：</span>
                  <span className="text-foreground">{mapData.downloads.toLocaleString()} 次</span>
                </div>
              </div>

              <Separator className="bg-border/50" />

              {/* 标签 */}
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="h-4 w-4 text-muted-foreground" />
                {mapData.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-xs border-border text-muted-foreground"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <Separator className="bg-border/50" />

              {/* 来源 */}
              <div className="text-xs text-muted-foreground">
                <span className="font-semibold text-xian-amber">来源：</span>
                {mapData.source}
              </div>
            </CardContent>
          </Card>

          {/* 下载面板 */}
          <Card className="xian-card bg-card/80 xian-glow">
            <CardContent className="p-5 flex flex-col items-center text-center gap-4">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-xian-cyan/20 to-xian-gold/20 flex items-center justify-center">
                <Download className="h-8 w-8 text-xian-cyan" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  下载地图
                </h3>
                <p className="text-xs text-muted-foreground">
                  {mapData.format} · {mapData.fileSize} · {mapData.resolution}
                </p>
              </div>
              <Button className="w-full bg-gradient-to-r from-xian-cyan to-xian-gold text-xian-deep hover:opacity-90 font-semibold">
                <Download className="mr-2 h-4 w-4" />
                免费下载
              </Button>
              <div className="text-[10px] text-muted-foreground space-y-1 text-left w-full">
                <p>· 本资源为免费共享，仅供个人学习</p>
                <p>· 请勿用于商业用途</p>
                <p>· 转载请注明来源</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 补充解析 */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-8">
        <Card className="xian-card bg-card/80">
          <CardHeader>
            <CardTitle className="text-lg font-serif text-xian-gold flex items-center gap-2">
              <Map className="h-5 w-5" />
              补充解析
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {mapData.detail}
            </p>
          </CardContent>
        </Card>
      </section>

      {/* 免责 */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-12">
        <Card className="bg-xian-deep/50 border-xian-amber/10">
          <CardContent className="p-4">
            <div className="flex items-start gap-2">
              <Info className="h-4 w-4 text-xian-amber mt-0.5 flex-shrink-0" />
              <p className="text-xs text-muted-foreground">
                本地图为原创整理或合规同人素材，仅供学习交流之用。小说原著版权归各作者及出版社所有。
                地图内容基于原著描述整理，可能存在与原著不完全一致之处，欢迎指正。下载后请勿用于商业用途。
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
