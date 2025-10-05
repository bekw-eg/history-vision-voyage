import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { isAuthenticated, getCurrentUser, logoutUser } from "@/utils/auth";
import { places, Place as PlaceType } from "@/data/places";
import { ArrowLeft, Globe2, Glasses, Box, MapPin, LogOut } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Place = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [place, setPlace] = useState<PlaceType | null>(null);
  const currentUser = getCurrentUser();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/");
      return;
    }

    const foundPlace = places.find((p) => p.id === Number(id));
    if (foundPlace) {
      setPlace(foundPlace);
    } else {
      navigate("/main");
    }
  }, [id, navigate]);

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  const handleARClick = () => {
    toast({
      title: "AR режим",
      description: "Функция дополненной реальности будет доступна в следующей версии!",
    });
  };

  const handleVRClick = () => {
    toast({
      title: "VR режим",
      description: "Функция виртуальной реальности будет доступна в следующей версии!",
    });
  };

  const handle3DClick = () => {
    toast({
      title: "3D просмотр",
      description: "3D модель загружается... (будет реализовано в будущем)",
    });
  };

  if (!place) {
    return null;
  }

  const categoryColors: Record<string, string> = {
    monument: "bg-blue-500",
    historical: "bg-amber-500",
    temple: "bg-purple-500",
    castle: "bg-rose-500",
    modern: "bg-cyan-500",
    nature: "bg-green-500",
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-white/20 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              onClick={() => navigate("/main")}
              variant="outline"
              size="icon"
              className="shadow-glow"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-xl shadow-glow">
                <Globe2 className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold gradient-text">HistoryVision</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground hidden sm:block">
              {currentUser?.name}
            </span>
            <Button onClick={handleLogout} variant="outline" size="sm" className="gap-2">
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Выйти</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Hero Image */}
          <Card className="overflow-hidden backdrop-blur-sm bg-white/90 border-0 shadow-glow">
            <div className="relative h-96">
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 space-y-2">
                <Badge className={`${categoryColors[place.category]} text-white`}>
                  {place.category}
                </Badge>
                <h1 className="text-5xl font-bold text-white animate-float">
                  {place.name}
                </h1>
                <div className="flex items-center gap-2 text-white/90 text-lg">
                  <MapPin className="w-5 h-5" />
                  {place.country}
                </div>
              </div>
            </div>
          </Card>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Description */}
            <Card className="lg:col-span-2 backdrop-blur-sm bg-white/90 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl gradient-text">О месте</CardTitle>
                <CardDescription className="text-lg">
                  {place.shortDescription}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg leading-relaxed">{place.description}</p>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="space-y-4">
              <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="gradient-text">AR/VR Режимы</CardTitle>
                  <CardDescription>
                    Выберите способ просмотра
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    onClick={handle3DClick}
                    className="w-full shadow-glow gap-2"
                    size="lg"
                  >
                    <Box className="w-5 h-5" />
                    3D Просмотр
                  </Button>
                  <Button
                    onClick={handleARClick}
                    variant="secondary"
                    className="w-full gap-2"
                    size="lg"
                  >
                    <Glasses className="w-5 h-5" />
                    Включить AR
                  </Button>
                  <Button
                    onClick={handleVRClick}
                    variant="secondary"
                    className="w-full gap-2"
                    size="lg"
                  >
                    <Globe2 className="w-5 h-5" />
                    Включить VR
                  </Button>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 shadow-lg">
                <CardContent className="pt-6">
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center animate-glow">
                      <Globe2 className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      AR и VR функции будут доступны в следующей версии приложения
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* 3D Preview Placeholder */}
          <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg overflow-hidden">
            <CardHeader>
              <CardTitle className="gradient-text">3D / VR Зона</CardTitle>
              <CardDescription>
                Интерактивная 3D модель достопримечательности
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center animate-float">
                    <Box className="w-12 h-12 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold gradient-text mb-2">
                      3D Модель загружается
                    </h3>
                    <p className="text-muted-foreground">
                      Здесь будет отображаться интерактивная 3D модель
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 py-8 border-t border-white/20 backdrop-blur-lg bg-white/10">
        <div className="container mx-auto px-4 text-center text-white/80">
          <p>© 2024 HistoryVision. Путешествия во времени с AR/VR технологиями</p>
        </div>
      </footer>
    </div>
  );
};

export default Place;
